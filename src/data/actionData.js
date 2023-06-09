// import { useRouter } from 'vue-router';

class Actions{
    constructor(aksi,kelas,link,functionAction){
        this.aksi = aksi,
        this.kelas = kelas, //stand for class css
        this.link = link
        this.functionAction = functionAction
    }
}


export const ActionRouteToCreate = (router,route) =>{
    router.push({name:route})
}

const viewDetail = (detail) =>{
    detail()
}



const deleteFunction = (deleteDataFunc) => {
    deleteDataFunc() 
}
const resetPwFunction = (resetPw) => {
    resetPw()
}

export const ActionCreate = new Actions('Tambah','');
export const ActionViewDetail = new Actions('Detail','mdi mdi-eye btn btn-primary', undefined ,viewDetail )
export const ActionUpdate = new Actions('Ubah','mdi mdi-update btn btn-warning','ubah')
export const ActionDelete = new Actions('Hapus','mdi mdi-delete btn btn-danger' , undefined ,  deleteFunction)
export const ActionResetPassword = new Actions('Reset Password','mdi mdi-lock btn btn-danger','reset-password', resetPwFunction)
export const ActionConfirm = new Actions('Konfirmasi','','')
export const ActionReject = new Actions('Tolak','','')



