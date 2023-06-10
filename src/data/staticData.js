class functionalMenu{
  
  constructor(title,description,imageLink,route){
    this.title =  title,
    this.description = description,    
    this.imageLink =  imageLink,
    this.route = route
  }

}

export const getImageUrl = (path) => {
  return new URL(`../../src/assets/${path}`, import.meta.url).href;
};
 

export const functionalKasir = [
  new functionalMenu('Olah Member',
  'Fitur ini memungkinkan pegawai untuk menambahkan, mengubah, mengupdate, dan menghapus data member.','./assets/gym-membership-app-c9c6336e.jpeg','member'),
  new functionalMenu('Reset Password Member','Fitur ini mendukung pegawai melayani member yang ingin melakukan reset password karena lupa','./assets/reset-password-0e41778b.jpg','member-reset-password'),
  new functionalMenu('Transaksi','Fitur ini mendukung layanan transaksi seperti aktivasi membership, deposit uang, deposit kelas dan cetak struk','./assets/transaction-gym-10474599.jpg','transaksi-member',),
  new functionalMenu('Presensi Member','Fitur ini digunakan untuk konfirmasi kehadiran member gym dan member kelas','./assets/presensi-e46a1aa1.jpg','presensi-member','presensi-member'),
  // new functionalMenu('Sistem','Fitur ini digunakan untuk mendukung kinerja sistem website dan apps','./assets/image/presensi-e46a1aa1.jpg','presensi-member','presensi-member'),
];


export const functionalAdmin = [
  new functionalMenu('Olah Data Instruktur','Fitur Olah Data Instruktur (Menambahkan, Menampilkan, Mengubah, Menghapus) data instruktur','./assets/instruktor-312beaa0.jpg','instruktur')
]
export const functionalMO = [
  new functionalMenu('Olah Jadwal Umum','Fitur pengolah data Jadwal Secara Umum, Manajer Operasional bisa menambahkankan jadwal , mengupdate jadwal, menampilkan dan menghapus jadwal','./assets/schedule-130e01a6.jpg','jadwal-umum'),
  new functionalMenu('Olah Jadwal Harian','Fitur Generate Jadwal untuk setiap 1 minggu, Fitur ini dibutuhkan untuk mendukung operasional gym setiap minggu','./assets/daily-schedule-05721eb6.jpg','jadwal-harian'),
  new functionalMenu('Perijinan Instruktur','Fitur pengolah data perijinan instruktur, MO bisa memantau perijinan instruktur, melakukan konfirmasi perijinan.','./assets/perijinan-3d8e413d.jpeg','ijin-instruktur','ijin-instruktur'),
  new functionalMenu('Laporan','Fitur Laporan digunakan untuk memantau operasional Gym secara keseluruhan.','./assets/report-b3e8deec.jpg','laporan')
]

export const menuPresensi = [
  new functionalMenu('Presensi Member Gym', 'Fitur ini digunakan untuk mengecek dan mengkonfirmasi kehadiran peserta gym' , './assets/presensi-e46a1aa1.jpg','presensi-member-gym'),
  new functionalMenu('Presensi Peserta Kelas', 'Fitur ini digunakan untuk mengecek kehadiran member disetiap kelas yang diikutinnya' , './assets/presensi-e46a1aa1.jpg','presensi-member-kelas')
]
export const menuTransaksi = [
  new functionalMenu('Transaksi Aktivasi', 'Fitur ini digunakan untuk melakukan aktivasi akun member' , '../../src/assets/image/activate.png','transaksi-aktivasi'),
  new functionalMenu('Transaksi Deposit Uang', 'Fitur ini digunakan untuk mengecek kehadiran member disetiap kelas yang diikutinnya' , '../../src/assets/image/save-on-fitness.jpeg','transaksi-deposit-uang'),
  new functionalMenu('Transaksi Deposit Paket', 'Fitur ini digunakan untuk mengecek kehadiran member disetiap kelas yang diikutinnya' , '../../src/assets/image/classgym.jpeg','transaksi-deposit-kelas')
]


export const menuLaporan = [
  new functionalMenu('Pendapatan Bulanan Per Tahun', 'Fitur ini digunakan untuk menghasilkan laporan pendapatan bulanan dalam suatu tahun' , './assets/report-b3e8deec.jpg','laporan-tahunan'),
  new functionalMenu('Laporan Aktivitas Kelas Bulanan', 'Fitur ini digunakan untuk menghasilkan aktivitas kelas dalam satu bulan' , './assets/background-1-a080f3fa.jpg','laporan-kelas-bulanan'),
  new functionalMenu('Laporan Aktivitas Gym Bulanan', 'Fitur ini digunakan untuk menghasilkan aktivitas gym dalam satu bulan' , './assets/background-1-a080f3fa.jpg','laporan-gym-bulanan'),
  new functionalMenu('Kinerja Instruktur Bulanan', 'Fitur ini digunakan untuk menampilkan kinerja instruktur' , './assets/instruktor-312beaa0.jpg','laporan-instruktur-bulanan')
  // new functionalMenu('Laporan Aktivitas Kelas Bulanan', 'Fitur ini digunakan untuk menghasilkan aktivitas kelas dalam satu bulan' , '../../src/assets/image/classgym.jpeg','transaksi-deposit-kelas'),
]
