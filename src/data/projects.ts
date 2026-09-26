import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'my-hiking',
    title: 'My Hiking — Booking Tiket Pendakian Gunung',
    period: '2025',
    summary:
      'Aplikasi mobile & web tiket pendakian online terintegrasi barcode scanner otomatis untuk check-in/out cepat dan monitoring kuota pendaki.',
    description:
      'Solusi aplikasi mobile & web terintegrasi untuk pemesanan tiket pendakian gunung online. Menggantikan proses manual dengan tiket barcode otomatis untuk mempermudah check-in/check-out di pos pendakian, monitoring kuota pendaki, serta efisiensi pengecekan sampah dan rombongan.',
    background:
      'Aktivitas mendaki gunung semakin diminati, namun proses administratif seperti pengisian formulir, pengecekan data, antrean panjang saat ramai, hingga konfirmasi keberangkatan dan kepulangan sering kali menjadi kendala. Untuk itu, aplikasi My Hiking dirancang untuk menyederhanakan proses ini. Dengan fitur booking tiket online, pendaki dapat langsung memperoleh barcode yang berisi data pribadi lengkap, sehingga hanya perlu memindai barcode tersebut saat check-in dan check-out di pos pendakian. Selain mempercepat proses registrasi, aplikasi ini juga membantu petugas dalam memantau jumlah pendaki dan memastikan semua prosedur, termasuk pengecekan sampah dan anggota pendakian, berjalan lebih efisien. Dengan My Hiking, pengalaman mendaki menjadi lebih mudah, cepat, dan nyaman.',
    role: 'Mobile & Full-Stack Developer',
    category: 'Mobile',
    techStack: ['Flutter', 'Dart', 'Laravel', 'PHP', 'REST API', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/ulhaqjackyhaw/myhiking-backend-api.git',
    featured: true,
    highlights: [
      'Sistem booking tiket online dengan penerbitan barcode identitas data pribadi instan',
      'Pemindaian barcode real-time saat check-in dan check-out di setiap pos pendakian',
      'Pemantauan kuota pendaki real-time, pencatatan rombongan, dan monitoring sampah',
      'Integrasi backend RESTful API berbasis Laravel dengan database relasional MySQL',
    ],
  },
  {
    id: 'aura-fitness',
    title: 'AURA FITNESS — Deteksi Gerakan Olahraga',
    period: 'Feb 2026 – Jul 2026',
    summary:
      'Aplikasi fitness cerdas berbasis Google ML Kit Pose Detection untuk evaluasi repetisi gerakan dan postur tubuh secara real-time.',
    description:
      'Aplikasi fitness mobile cerdas yang memanfaatkan Google ML Kit Pose Detection untuk mendeteksi, mengevaluasi, dan menghitung gerakan olahraga secara real-time dengan estimasi pose tubuh otomatis.',
    background:
      'Melakukan latihan kebugaran (workout) mandiri di rumah sering kali mengalami kendala tidak adanya pelatih untuk mengevaluasi postur gerak dan menghitung repetisi latihan secara konsisten. Aura Fitness dikembangkan sebagai solusi trainer cerdas di genggaman, memanfaatkan Computer Vision melalui Google ML Kit Pose Detection untuk mendeteksi postur tubuh dari kamera smartphone secara real-time, memvalidasi rentang gerak (ROM), menghitung repetisi otomatis, serta menyimpan progres latihan secara terpusat di cloud database Supabase.',
    role: 'AI & Mobile Engineer',
    category: 'AI & Computer Vision',
    techStack: ['Flutter', 'Supabase', 'Google ML Kit', 'Dart'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/pamungkascuy/aura-fitness-release',
    featured: true,
    highlights: [
      'Deteksi dan evaluasi gerakan olahraga menggunakan Google ML Kit Pose Detection secara real-time',
      'Sistem penghitung repetisi otomatis berdasarkan estimasi pose tubuh dan sudut persendian',
      'Sinkronisasi progres latihan, statistik workout, dan data pengguna menggunakan Supabase',
      'Arsitektur mobile responsif dengan performa komputasi inferensi ML yang hemat daya',
    ],
  },
  {
    id: 'propaktani',
    title: 'Propaktani — Marketplace Pertanian App & Web Admin',
    period: 'Agus 2025 – Jan 2026',
    summary:
      'Ekosistem marketplace pertanian & edukasi tani mencakup aplikasi Android (Flutter) serta portal Web Admin (Laravel) dengan gateway TriPay.',
    description:
      'Platform marketplace pertanian terintegrasi yang mencakup aplikasi mobile Android berbasis Flutter untuk jual-beli hasil bumi dan sarana produksi tani, serta portal Web Admin berbasis Laravel untuk manajemen produk, verifikasi transaksi TriPay, kontrol pengguna, dan administrasi webinar.',
    background:
      'Para petani dan pelaku usaha agrikultur kerap kali menghadapi kendala distribusi hasil panen, rantai pasok perantara yang panjang, serta minimnya akses ke edukasi budidaya modern. Propaktani dibangun sebagai solusi digital terintegrasi yang menggabungkan aplikasi mobile untuk kemudahan transaksi petani/konsumen di genggaman, serta portal web admin yang memudahkan pengelola dalam memantau rekapitulasi penjualan, memvalidasi pembayaran secara otomatis melalui payment gateway TriPay, dan mengelola agenda webinar edukasi pertanian.',
    role: 'Full-Stack Developer Intern',
    category: 'Mobile',
    techStack: ['Flutter', 'Dart', 'Laravel', 'PHP', 'REST API', 'TriPay', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/pamungkascuy/Propaktani_apk',
    featured: true,
    highlights: [
      'Aplikasi mobile Android (Flutter) untuk katalog multi-vendor, pemesanan, dan edukasi tani',
      'Portal Web Admin (Laravel) untuk manajemen inventaris produk, monitoring order, dan data master',
      'Integrasi payment gateway TriPay dengan instant webhook verification untuk otomatisasi transaksi',
      'Modul manajemen webinar edukasi pertanian beserta otomasi penerbitan sertifikat digital',
    ],
  },
  {
    id: 'diara-timeschool',
    title: 'Diara TimeSchool — Presensi Sekolah',
    period: 'April 2025 – Jul 2025',
    summary:
      'Sistem web presensi online real-time untuk sekolah terintegrasi untuk guru, siswa, dan orang tua.',
    description:
      'Aplikasi website presensi online terintegrasi untuk mengelola kehadiran siswa, pemantauan poin pelanggaran, prestasi, manajemen jadwal, data siswa, dan administrasi guru.',
    background:
      'Saat ini, sistem presensi di sekolah dasar dan menengah masih banyak dilakukan secara manual atau menggunakan excel, sehingga proses rekapitulasi oleh wali kelas menjadi lambat, rawan kesalahan, dan menyulitkan pemantauan kehadiran siswa secara akurat. Untuk menjawab tantangan ini, pengembangan aplikasi website Presensi Online Diara TimeSchool menjadi solusi yang tepat, karena mampu mencatat kehadiran siswa secara real-time, otomatis, dan terintegrasi, sehingga mempermudah guru, siswa, dan orang tua dalam mengakses informasi kehadiran dengan lebih cepat, efisien, dan transparan.',
    role: 'Backend & Web Developer',
    category: 'Web & Backend',
    techStack: ['Laravel', 'PHP', 'MySQL', 'REST API', 'CSS'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/iammburg/presensi-pbl.git',
    featured: true,
    highlights: [
      'Sistem presensi online real-time terintegrasi untuk guru, siswa, dan orang tua',
      'Modul pemantauan poin pelanggaran dan pencatatan prestasi siswa transparan',
      'Manajemen jadwal pelajaran terstruktur, database siswa terpusat, dan rekapitulasi otomatis',
      'Role-based access control (RBAC) untuk admin sekolah, staf pengajar, dan wali murid',
    ],
  },
  {
    id: 'minecraft-server',
    title: 'Minecraft Game Server Optimization',
    period: 'Sept 2026',
    summary:
      'Manajemen resource Linux, pengujian kompatibilitas mod/plugin, dan optimasi performa server game multiplayer.',
    description:
      'Pengelolaan instalasi, konfigurasi, dan pengujian kompatibilitas mod serta plugin pada server Minecraft, sekaligus memantau penggunaan resource untuk menjaga stabilitas sistem.',
    background:
      'Mengelola server game multiplayer berskala komunitas memerlukan pemahaman mendalam tentang manajemen sistem Linux, tuning kernel dan Java Virtual Machine (JVM), alokasi memori heap, mitigasi bottleneck CPU, serta audit dependensi plugin pihak ketiga agar dapat beroperasi 24/7 tanpa penurunan frame rate atau crash.',
    role: 'Systems & Server Administrator',
    category: 'Infrastructure',
    techStack: ['Linux', 'Server Management', 'Plugin Config'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop',
    liveDemoUrl: 'https://nexa-3.tsrv.biz.id:19203/',
    featured: false,
    highlights: [
      'Instalasi, konfigurasi, dan pengujian kompatibilitas mod serta plugin server',
      'Monitoring utilisasi RAM/CPU dan optimasi stabilitas kinerja server game',
      'Manajemen jaringan firewall, port forwarding, dan backup berkala',
    ],
  },
];
