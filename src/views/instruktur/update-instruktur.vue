<script>
import { HomeNavbar,  useRouter, reactive, $toast , defineComponent, BackButton, customSwal, customSwalSuccess } from '@/plugins/global.js'

  export default defineComponent({

    components:{
      HomeNavbar,
      BackButton
    },

    data (){
      return{
        router : useRouter(), 
        instruktur : reactive({}),
        backButtonPressed : false
        }
    },

    methods : {

      formatDate(date) {
      const [dd, mm, yyyy] = date.split('/');
      return `${yyyy}-${mm}-${dd}`;
      },

      goBack() {
        if (this.toast) {
          this.toast.close(); // Menutup toast sebelum perpindahan halaman
        }
          this.backButtonPressed = true; // Set flag tombol "Back"
          // Kode lainnya untuk perpindahan halaman
        },

      submitForm(event) {
        event.preventDefault(); // hindari default form submission
        if (!this.backButtonPressed) {
          customSwal('Yakin ingin mengubah data instruktur ? ', 'question','blue','Yakin',this.updateInstruktur)
          this.updateMember();
        } else {
          this.backButtonPressed = false; // Reset flag tombol "Back"
        }
      },

      async updateInstruktur(){
        let {nama_instruktur,tanggal_lahir_instruktur,alamat_instruktur,no_telp_instruktur} = this.instruktur;
        let data = {
            'nama_instruktur' : nama_instruktur,
            'tanggal_lahir_instruktur' : tanggal_lahir_instruktur,
            'alamat_instruktur' : alamat_instruktur,
            'no_telp_instruktur' : no_telp_instruktur
        }

        const statusValidate = this.isValid(this.instruktur)
        if(statusValidate){
          try{
            const url = `/instruktur/${this.instruktur.id_instruktur}`; 
            console.log(url);
            const request = await this.$http.put(url,data); 
            customSwalSuccess(request.data.message)
            this.router.push({name:'instruktur'})
          }catch(e){
          console.log(e)
            $toast.warning('Gagal Mengubah Data')
          }
        }
      },

      isValid({nama_instruktur,tanggal_lahir_instruktur, alamat_instruktur , no_telp_instruktur }){
        let status = true;  
        if (!nama_instruktur) {
          $toast.warning('Nama instruktur harus diisi');
          status = false;
        }
        if (!tanggal_lahir_instruktur) {
          $toast.warning('Tanggal lahir instruktur harus diisi');
          status = false;
        }
        if (!alamat_instruktur) {
          $toast.warning('Alamat instruktur harus diisi');
          status = false;
        }
        if (!no_telp_instruktur) {
          $toast.warning('No telp instruktur harus diisi');
          status = false;
        }
        return status;
      }
    },



    mounted(){
      this.instruktur = this.$route.query
      this.instruktur.tanggal_lahir_instruktur = this.formatDate(this.instruktur.tanggal_lahir_instruktur)
      console.log(this.instruktur.tanggal_lahir_instruktur)
      window.onpopstate = () => {
        this.goBack();
      };
    },
})
</script>

<template >
  <header>
    <home-navbar :message="'Gofit -  Perbarui Data Instruktur'"></home-navbar>
  </header>
  <main>
    <div class='content text-white p-5'>
      <h2>Perbarui Data Instruktur</h2>
      <div  class= 'container-fluid form-custom p-4 text-dark'>
        <h3 class="title">Update Data Instruktur <span class="mdi mdi-account-plus"></span></h3>
        <hr>
        <form @submit.prevent="submitForm($event)">
          <div class="mb-3">
            <label for="nama_instruktur" class="form-label">Nama Instruktur</label>
            <input type="teal" v-model="instruktur.nama_instruktur" class="form-control" id="nama_instruktur" aria-describedby="emailHelp">
            <div id="namaHelp" class="form-text">ex : Ucup Surucup</div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="birthday">Tanggal Lahir instruktur</label>
            <input class="form-text" v-model="instruktur.tanggal_lahir_instruktur" type="date" id="birthday" >
            <div id="tglLahirHelp" class="form-text">Format yang digunakan : mm/dd/yyyy</div>
          </div>
          <div class="mb-3">
            <label for="alamat" class="form-label">Alamat Instruktur</label>
            <input type="text" v-model="instruktur.alamat_instruktur" class="form-control" id="alamat">
            <div id="alamat" class="form-text">ex : Babarsari No 43 Yogyakarta</div>
          </div>
          <div class="mb-3">
            <label for="notelp" class="form-label">No Telp instruktur</label>
            <input type="text" v-model="instruktur.no_telp_instruktur" class="form-control" id="notelp">
            <div id="notelp" class="form-text">ex : 08123456789</div>
          </div>
          <hr>
          <h5>Akun</h5>
          <div class="bg-danger text-white  my-2 rounded-3">
            <p class="p-2 text-center">Fitur Update Akun tidak tersedia, Ubah password tersedia di aplikasi Mobile !!</p>
          </div>
          <hr>
          <div>
          </div>
          <div class="d-flex justify-content-between">
            <back-button :className="'btn btn-dark'" @click="goBack"></back-button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
        <hr>
      </div>
    </div>
  </main>
</template>

<style scoped>

/* set width to match other form inputs */
input[type="date"] {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* hide default arrow */
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

/* use Bootstrap icon for date picker */
input[type="date"]::before {
  content: "\f0ed";
  font-family: "Material Design Icons";
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #6c757d;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* change border color on focus */
input[type="date"]:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}


.content{
  height: 100vh;
  background-color: rgba(0,0,0,0.7  );
}


.form-custom{
  background-color: rgba(255,255,255,0.9);
  border-radius: 10px;
}

</style>
