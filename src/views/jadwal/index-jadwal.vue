<script>
import { HomeNavbar, useRouter, ref ,onMounted, $toast, defineComponent, BackButton , inject} from '@/plugins/global.js'
import { customSwal } from '../../plugins/function';

  export default defineComponent({
    // Component
    components:{
      HomeNavbar,
      BackButton,
    },
    // Akhir dari Comment


    // data
    data() {
      return {
        toggle:true,
        toggleModeTabel : false,
    } 
    // Akhir dari data
},

    //Setup
    setup(){
      //Variable
      const router = useRouter('router'); 
      const http = inject('$http')
      let jadwalPagi = ref([])
      let jadwalSore = ref([])
      let maxPagi = ref([]);
      let maxSore = ref([]);


      const getAllJadwal= async (message) => {
        const dataRoute = "/jadwalumum";
        const request = await http.get(dataRoute)
        jadwalPagi.value = request.data.data.pagi
        maxPagi.value = Math.max(...Object.values(jadwalPagi.value).map(x => x.length)) 
        jadwalSore.value = request.data.data.sore
        maxSore.value = Math.max(...Object.values(jadwalSore.value).map(x => x.length)) 
        $toast.success(message)
      }
      onMounted(async () =>  {
        getAllJadwal('Mendapatkan data jadwal')
      })

      //Create

      //Update
      const updateDataCell = (data) => {
          console.log(data)
          router.push({name:'jadwal-umum-ubah',query:data})
      }

      //Delete
      const confirmDelete = (data) => {
        customSwal('Apakah Anda yakin ingin menghapus data ini?','warning','#dc3545','yakin',deleteDataCell,data)
      }

      const deleteDataCell = async ({id_jadwal_umum}) =>{

          const deleteRoute = `/jadwalumum/${id_jadwal_umum}`
          try{
            const deleteRequest = await http.delete(deleteRoute)
            $toast.success(deleteRequest.data.message)
            getAllJadwal('Tabel Data Jadwal di update')
          }catch{
            $toast.warning('Gagal Menghapus Data')
          }
      }

      return{
        jadwalPagi,
        jadwalSore,
        maxPagi,
        maxSore,
        updateDataCell,
        confirmDelete
      }
    },

    // Computed
    computed:{
      // display jadwal juga berdasarkan toggle pagi atau malam
      displayedJadwal(){
        if(this.toggle){
          return this.jadwalPagi;
        }
        return this.jadwalSore
      },

      // Set Max based tampil data pagi atau malam
      max(){
        if(this.toggle){ 
          return this.maxPagi;
        }
        return this.maxSore
    }
  }
})
</script>
<template >
  <header>
    <home-navbar :message="'Olah Jadwal Umum'"></home-navbar>
  </header>
  <main>
    <div class='content text-white p-5'>
      <h2 class="">Jadwal</h2>
      <div class="class='container-fluid table-custom p-4 text-dark'">
        <!-- Button -->
        <div class="d-flex justify-content-between ">
          <router-link type="button"  class="btn btn-outline-dark" :to="{name:'jadwal-umum-tambah'}">Tambah Jadwal</router-link>
          <div>
            <button type="button"  class="btn btn-outline-dark" v-if="toggle" @click="toggle = !toggle">Jadwal Malam</button>              
            <button type="button"  class="btn btn-outline-dark" v-else @click="toggle = !toggle">Jadwal Pagi</button>              
          </div>              
        </div>
        <table class="table table-dark table-striped table-bordered table-hover mt-4 scrollme">
          <thead>
            <tr class="text-white bg-dark text-center">
              <th>#</th>
              <th v-for="i in max" :key="i" >Jadwal {{i}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(jd,index) in displayedJadwal" :key="index">
              <th scope="row" class="text-white bg-dark text-center">{{index}}</th>
              <td v-for="(column,idx) in jd" :key="idx" class="text-center"> 
                <p>
                  Jadwal : {{column.jam_mulai}} - {{ column.jam_selesai }}
                </p>
                <p>
                  Nama Kelas : {{column.kelas.jenis_kelas }}  
                </p>
                <p>
                  Instruktur : {{ column.instruktur.nama_instruktur }}
                </p>
                <div v-show="toggleModeTabel">
                  <button class="btn btn-warning m-2" @click.prevent="updateDataCell(column)">Update</button>
                  <button class="btn btn-danger" @click.prevent="confirmDelete(column)">Delete</button>
                </div>
              </td>
              <td v-for="i in (max - jd.length)" :key="i" class="text-center">*</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between">
          <div>
            <button class="btn btn-primary" v-if="!toggleModeTabel" @click="toggleModeTabel = !toggleModeTabel">Mode Edit</button>
            <button class="btn btn-success" v-else @click=" toggleModeTabel =!toggleModeTabel">Mode Tampil</button>
          </div>
          <back-button className="btn btn-dark"></back-button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.table-custom{
  background-color: rgba(255,255,255,0.9);
  border-radius: 10px;
}

/* .scrollme {
  overflow-x:scroll;
} */

.content{
  height: 100vh;
  background-color: rgba(0,0,0,0.7  );
}

</style>
