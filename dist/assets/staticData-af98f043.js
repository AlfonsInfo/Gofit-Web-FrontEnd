const g="data:text/css;base64,LyogY29sb3IgcGFsZXR0ZSBmcm9tIDxodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdGhlbWU+ICovCjpyb290IHsKICAtLXZ0LWMtd2hpdGU6ICNmZmZmZmY7CiAgLS12dC1jLXdoaXRlLXNvZnQ6ICNmOGY4Zjg7CiAgLS12dC1jLXdoaXRlLW11dGU6ICNmMmYyZjI7CgogIC0tdnQtYy1ibGFjazogIzE4MTgxODsKICAtLXZ0LWMtYmxhY2stc29mdDogIzIyMjIyMjsKICAtLXZ0LWMtYmxhY2stbXV0ZTogIzI4MjgyODsKCiAgLS12dC1jLWluZGlnbzogIzJjM2U1MDsKCiAgLS12dC1jLWRpdmlkZXItbGlnaHQtMTogcmdiYSg2MCwgNjAsIDYwLCAwLjI5KTsKICAtLXZ0LWMtZGl2aWRlci1saWdodC0yOiByZ2JhKDYwLCA2MCwgNjAsIDAuMTIpOwogIC0tdnQtYy1kaXZpZGVyLWRhcmstMTogcmdiYSg4NCwgODQsIDg0LCAwLjY1KTsKICAtLXZ0LWMtZGl2aWRlci1kYXJrLTI6IHJnYmEoODQsIDg0LCA4NCwgMC40OCk7CgogIC0tdnQtYy10ZXh0LWxpZ2h0LTE6IHZhcigtLXZ0LWMtaW5kaWdvKTsKICAtLXZ0LWMtdGV4dC1saWdodC0yOiByZ2JhKDYwLCA2MCwgNjAsIDAuNjYpOwogIC0tdnQtYy10ZXh0LWRhcmstMTogdmFyKC0tdnQtYy13aGl0ZSk7CiAgLS12dC1jLXRleHQtZGFyay0yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuNjQpOwp9CgovKiBzZW1hbnRpYyBjb2xvciB2YXJpYWJsZXMgZm9yIHRoaXMgcHJvamVjdCAqLwo6cm9vdCB7CiAgLS1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS12dC1jLXdoaXRlKTsKICAtLWNvbG9yLWJhY2tncm91bmQtc29mdDogdmFyKC0tdnQtYy13aGl0ZS1zb2Z0KTsKICAtLWNvbG9yLWJhY2tncm91bmQtbXV0ZTogdmFyKC0tdnQtYy13aGl0ZS1tdXRlKTsKCiAgLS1jb2xvci1ib3JkZXI6IHZhcigtLXZ0LWMtZGl2aWRlci1saWdodC0yKTsKICAtLWNvbG9yLWJvcmRlci1ob3ZlcjogdmFyKC0tdnQtYy1kaXZpZGVyLWxpZ2h0LTEpOwoKICAtLWNvbG9yLWhlYWRpbmc6IHZhcigtLXZ0LWMtdGV4dC1saWdodC0xKTsKICAtLWNvbG9yLXRleHQ6IHZhcigtLXZ0LWMtdGV4dC1saWdodC0xKTsKCiAgLS1zZWN0aW9uLWdhcDogMTYwcHg7Cn0KCkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICA6cm9vdCB7CiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLXZ0LWMtYmxhY2spOwogICAgLS1jb2xvci1iYWNrZ3JvdW5kLXNvZnQ6IHZhcigtLXZ0LWMtYmxhY2stc29mdCk7CiAgICAtLWNvbG9yLWJhY2tncm91bmQtbXV0ZTogdmFyKC0tdnQtYy1ibGFjay1tdXRlKTsKCiAgICAtLWNvbG9yLWJvcmRlcjogdmFyKC0tdnQtYy1kaXZpZGVyLWRhcmstMik7CiAgICAtLWNvbG9yLWJvcmRlci1ob3ZlcjogdmFyKC0tdnQtYy1kaXZpZGVyLWRhcmstMSk7CgogICAgLS1jb2xvci1oZWFkaW5nOiB2YXIoLS12dC1jLXRleHQtZGFyay0xKTsKICAgIC0tY29sb3ItdGV4dDogdmFyKC0tdnQtYy10ZXh0LWRhcmstMik7CiAgfQp9CgoqLAoqOjpiZWZvcmUsCio6OmFmdGVyIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94OwogIG1hcmdpbjogMDsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsKfQoKYm9keSB7CiAgbWluLWhlaWdodDogMTAwdmg7CiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpOwogIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpOwogIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZS9iYWNrZ3JvdW5kLTEuanBnKTsKICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOwogIHRyYW5zaXRpb246IGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41czsKICBsaW5lLWhlaWdodDogMS42OwogIGZvbnQtZmFtaWx5OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LAogICAgQ2FudGFyZWxsLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOwogIGZvbnQtc2l6ZTogMTVweDsKICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OwogIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOwogIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7Cn0K",m="/assets/activate-98b4682e.png",o="/assets/background-1-a080f3fa.jpg",c="/assets/classfit-4e90ca04.jpeg",r="/assets/classgym-1797de09.jpeg",b="/assets/daily-schedule-05721eb6.jpg",l="/assets/fit-5bb7467e.jpg",p="/assets/gym-membership-app-c9c6336e.jpeg",d="/assets/instruktor-312beaa0.jpg",u="/assets/paket-class-509538ea.png",C="/assets/perijinan-3d8e413d.jpeg",I="/assets/presensi-e46a1aa1.jpg",k="/assets/report-b3e8deec.jpg",L="/assets/reset-password-0e41778b.jpg",W="/assets/save-on-fitness-a279d15c.jpeg",y="/assets/schedule-130e01a6.jpg",Z="/assets/subscription-class-ec179711.jpeg",j="/assets/transaction-gym-2-b778cf67.png",h="/assets/transaction-gym-10474599.jpg",_="/assets/transaction-ba213441.jpg",G="/assets/logo-277e0e97.svg",A="data:text/css;base64,QGltcG9ydCAnLi9iYXNlLmNzcyc7CgoKYSwgLmdyZWVuIHsKICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgY29sb3I6IGhzbGEoMTYwLCAxMDAlLCAzNyUsIDEpOwogIHRyYW5zaXRpb246IDAuNHM7Cn0KCgojYXBwIHsKICBtYXgtd2lkdGg6IDE2MDBweDsKICBtYXJnaW46IDAgYXV0bzsKICAvKiBwYWRkaW5nOiAycmVtOyAqLwoKICBmb250LXdlaWdodDogbm9ybWFsOwp9CgoKQG1lZGlhIChob3ZlcjogaG92ZXIpIHsKICBhOmhvdmVyIHsKICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTYwLCAxMDAlLCAzNyUsIDAuMik7CiAgfQp9CgpAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7CiAgYm9keS5ib2R5LWNlbnRlciB7CiAgICBkaXNwbGF5OiBmbGV4OwogICAgcGxhY2UtaXRlbXM6IGNlbnRlcjsKICB9CgogIGJvZHkuYm9keS1ub3JtYWxmbG93ewogICAgLyogcGFkZGluZzogMCAycmVtOyAqLwogICAgZGlzcGxheTogZmxleCwKICB9CgogIC5ib2R5LWNlbnRlciAjYXBwICB7CiAgICBkaXNwbGF5OiBncmlkOwogICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOwogICAgLyogcGFkZGluZzogM3JlbSAycmVtOyAqLwp9CgogIC5ib2R5LW5vcm1hbGZsb3cgI2FwcCAgewogICAgZGlzcGxheTogZ3JpZDsKICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgKi8KICAgIC8qIHBhZGRpbmc6IDNyZW0gMnJlbTsgKi8KICB9Cn0=";class s{constructor(e,t,n,i){this.title=e,this.description=t,this.imageLink=n,this.route=i}}const w=a=>new URL(Object.assign({"../assets/base.css":g,"../assets/image/activate.png":m,"../assets/image/background-1.jpg":o,"../assets/image/classfit.jpeg":c,"../assets/image/classgym.jpeg":r,"../assets/image/daily-schedule.jpg":b,"../assets/image/fit.jpg":l,"../assets/image/gym-membership-app.jpeg":p,"../assets/image/instruktor.jpg":d,"../assets/image/paket-class.png":u,"../assets/image/perijinan.jpeg":C,"../assets/image/presensi.jpg":I,"../assets/image/report.jpg":k,"../assets/image/reset-password.jpg":L,"../assets/image/save-on-fitness.jpeg":W,"../assets/image/schedule.jpg":y,"../assets/image/subscription-class.jpeg":Z,"../assets/image/transaction-gym-2.png":j,"../assets/image/transaction-gym.jpg":h,"../assets/image/transaction.jpg":_,"../assets/logo.svg":G,"../assets/main.css":A})[`../../src/assets/${a}`],self.location).href,Y=[new s("Olah Member","Fitur ini memungkinkan pegawai untuk menambahkan, mengubah, mengupdate, dan menghapus data member.",w("image/gym-membership-app.jpeg"),"member"),new s("Reset Password Member","Fitur ini mendukung pegawai melayani member yang ingin melakukan reset password karena lupa","../../src/assets/image/reset-password.jpg","member-reset-password"),new s("Transaksi","Fitur ini mendukung layanan transaksi seperti aktivasi membership, deposit uang, deposit kelas dan cetak struk","../../src/assets/image/transaction-gym.jpg","transaksi-member"),new s("Presensi Member","Fitur ini digunakan untuk konfirmasi kehadiran member gym dan member kelas","../../src/assets/image/presensi.jpg","presensi-member","presensi-member"),new s("Sistem","Fitur ini digunakan untuk mendukung kinerja sistem website dan apps","../../src/assets/image/presensi.jpg","presensi-member","presensi-member")],v=[new s("Olah Data Instruktur","Fitur Olah Data Instruktur (Menambahkan, Menampilkan, Mengubah, Menghapus) data instruktur","../../src/assets/image/instruktor.jpg","instruktur")],K=[new s("Olah Jadwal Umum","Fitur pengolah data Jadwal Secara Umum, Manajer Operasional bisa menambahkankan jadwal , mengupdate jadwal, menampilkan dan menghapus jadwal","../../src/assets/image/schedule.jpg","jadwal-umum"),new s("Olah Jadwal Harian","Fitur Generate Jadwal untuk setiap 1 minggu, Fitur ini dibutuhkan untuk mendukung operasional gym setiap minggu","../../src/assets/image/daily-schedule.jpg","jadwal-harian"),new s("Perijinan Instruktur","Fitur pengolah data perijinan instruktur, MO bisa memantau perijinan instruktur, melakukan konfirmasi perijinan.","../../src/assets/image/perijinan.jpeg","ijin-instruktur","ijin-instruktur"),new s("Laporan","Fitur Laporan digunakan untuk memantau operasional Gym secara keseluruhan.","../../src/assets/image/report.jpg","laporan")],X=[new s("Presensi Member Gym","Fitur ini digunakan untuk mengecek dan mengkonfirmasi kehadiran peserta gym","../../src/assets/image/presensi.jpg","presensi-member-gym"),new s("Presensi Peserta Kelas","Fitur ini digunakan untuk mengecek kehadiran member disetiap kelas yang diikutinnya","../../src/assets/image/presensi.jpg","presensi-member-kelas")],M=[new s("Pendapatan Bulanan Per Tahun","Fitur ini digunakan untuk menghasilkan laporan pendapatan bulanan dalam suatu tahun","../../src/assets/image/report.jpg","laporan-tahunan"),new s("Laporan Aktivitas Kelas Bulanan","Fitur ini digunakan untuk menghasilkan aktivitas kelas dalam satu bulan","../../src/assets/image/classgym.jpeg","laporan-kelas-bulanan"),new s("Laporan Aktivitas Gym Bulanan","Fitur ini digunakan untuk menghasilkan aktivitas gym dalam satu bulan","../../src/assets/image/background-1.jpg","laporan-gym-bulanan"),new s("Kinerja Instruktur Bulanan","Fitur ini digunakan untuk menampilkan kinerja instruktur","../../src/assets/image/instruktor.jpg","laporan-instruktur-bulanan")];export{v as a,K as b,X as c,Y as f,M as m};