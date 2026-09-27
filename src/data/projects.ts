import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'my-hiking',
    title: 'My Hiking — Booking Tiket Pendakian Gunung',
    period: 'Agus 2024 – Jan 2025',
    summary:
      'Aplikasi mobile & web tiket pendakian online terintegrasi barcode scanner otomatis untuk check-in/out cepat dan monitoring kuota pendaki.',
    description:
      'Solusi aplikasi mobile & web terintegrasi untuk pemesanan tiket pendakian gunung online. Menggantikan proses manual dengan tiket barcode otomatis untuk mempermudah check-in/check-out di pos pendakian, monitoring kuota pendaki, serta efisiensi pengecekan sampah dan rombongan.',
    background:
      'Aktivitas mendaki gunung semakin diminati, namun proses administratif seperti pengisian formulir, pengecekan data, antrean panjang saat ramai, hingga konfirmasi keberangkatan dan kepulangan sering kali menjadi kendala. Untuk itu, aplikasi My Hiking dirancang untuk menyederhanakan proses ini. Dengan fitur booking tiket online, pendaki dapat langsung memperoleh barcode yang berisi data pribadi lengkap, sehingga hanya perlu memindai barcode tersebut saat check-in dan check-out di pos pendakian. Selain mempercepat proses registrasi, aplikasi ini juga membantu petugas dalam memantau jumlah pendaki dan memastikan semua prosedur, termasuk pengecekan sampah dan anggota pendakian, berjalan lebih efisien. Dengan My Hiking, pengalaman mendaki menjadi lebih mudah, cepat, dan nyaman.',
    role: 'Mobile, Full-Stack & UI/UX Designer',
    category: 'Mobile & Web Admin',
    techStack: ['Flutter', 'Dart', 'Laravel', 'PHP', 'REST API', 'Figma', 'MySQL'],
    image: '/design/myhiking-slide1.jpg',
    githubUrl: 'https://github.com/ulhaqjackyhaw/myhiking-backend-api.git',
    figmaUrl: 'https://www.figma.com/design/x6CNcaTMPxiHwRCYmqENor/PBL-BOOKING?node-id=1-2&t=DAIujgx12KlEh4An-1',
    featured: true,
    highlights: [
      'Sistem booking tiket online dengan penerbitan barcode identitas data pribadi instan',
      'Pemindaian barcode real-time saat check-in dan check-out di setiap pos pendakian',
      'Pemantauan kuota pendaki real-time, pencatatan rombongan, dan monitoring sampah',
      'Integrasi backend RESTful API berbasis Laravel dengan database relasional MySQL',
      'Perancangan UI/UX lengkap di Figma mencakup flow booking dan verifikasi tiket',
    ],
    gallery: [
      { label: 'Overview MyHiking', image: '/design/myhiking-slide1.jpg' },
      { label: 'Aplikasi Mobile MyHiking (Flutter)', image: '/design/myhiking-mobile.jpg' },
      { label: 'Portal Web Admin MyHiking (Laravel)', image: '/design/myhiking-web.jpg' },
      { label: 'Desain Sistem & Mockup Figma', image: '/design/myhiking-uiux.jpg' },
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
    role: 'Full-Stack Developer Intern & UI/UX Designer',
    category: 'Mobile & Web Admin',
    techStack: ['Flutter', 'Dart', 'Laravel', 'PHP', 'REST API', 'TriPay', 'Figma', 'MySQL'],
    image: '/design/propaktani-slide1.jpg',
    githubUrl: 'https://github.com/pamungkascuy/Propaktani_apk',
    featured: true,
    highlights: [
      'Aplikasi mobile Android (Flutter) untuk katalog multi-vendor, pemesanan, dan edukasi tani',
      'Portal Web Admin (Laravel) untuk manajemen inventaris produk, monitoring order, dan data master',
      'Integrasi payment gateway TriPay dengan instant webhook verification untuk otomatisasi transaksi',
      'Modul manajemen webinar edukasi pertanian beserta otomasi penerbitan sertifikat digital',
      'Perancangan UI/UX antarmuka aplikasi Android dan sistem admin web di Figma',
    ],
    gallery: [
      { label: 'Identitas Propaktani', image: '/design/propaktani-slide1.jpg' },
      { label: 'Aplikasi Mobile Propaktani (Flutter)', image: '/design/propaaktaani mobile.jpg' },
      { label: 'Dashboard Web Admin Propaktani (Laravel)', image: '/design/propaktani-web.jpg' },
      { label: 'Perancangan UI/UX Propaktani Figma', image: '/design/propaktani-uiux.jpg' },
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
    image: '/design/diara-slide1.jpg',
    githubUrl: 'https://github.com/iammburg/presensi-pbl.git',
    featured: true,
    highlights: [
      'Sistem presensi online real-time terintegrasi untuk guru, siswa, dan orang tua',
      'Modul pemantauan poin pelanggaran dan pencatatan prestasi siswa transparan',
      'Manajemen jadwal pelajaran terstruktur, database siswa terpusat, dan rekapitulasi otomatis',
      'Role-based access control (RBAC) untuk admin sekolah, staf pengajar, dan wali murid',
    ],
    gallery: [
      { label: 'Diara TimeSchool — Smart Attendance', image: '/design/diara-slide1.jpg' },
      { label: 'Antarmuka Sistem Presensi Web Diara TimeSchool', image: '/design/diaratimeschool.jpg' },
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
    category: 'Mobile',
    techStack: ['Flutter', 'Supabase', 'Google ML Kit', 'Dart'],
    image: '/design/aura-slide1.jpg',
    githubUrl: 'https://github.com/pamungkascuy/aura-fitness-release',
    featured: true,
    highlights: [
      'Deteksi dan evaluasi gerakan olahraga menggunakan Google ML Kit Pose Detection secara real-time',
      'Sistem penghitung repetisi otomatis berdasarkan estimasi pose tubuh dan sudut persendian',
      'Sinkronisasi progres latihan, statistik workout, dan data pengguna menggunakan Supabase',
      'Arsitektur mobile responsif dengan performa komputasi inferensi ML yang hemat daya',
    ],
    gallery: [
      { label: 'Aura Fitness — Logo & Branding', image: '/design/aura-slide1.jpg' },
      { label: 'Tampilan Aplikasi Mobile & Deteksi Pose AI', image: '/design/aura-slide2.jpg' },
    ],
  },
  {
    id: 'uiux-myhiking',
    title: 'UI/UX Design — MyHiking Booking App',
    period: 'Agus 2024 – Jan 2025',
    summary:
      'Perancangan antarmuka pengguna mobile booking tiket pendakian online di Figma, mencakup wireframing, flow tiket, dan barcode scan check-in.',
    description:
      'Berkontribusi aktif sebagai UI/UX Designer dalam perancangan antarmuka aplikasi pemesanan tiket pendakian gunung online (MyHiking). Merancang keseluruhan user experience dari pencarian jalur gunung, pemilihan tanggal kuota, pembayaran tiket, hingga penerbitan tiket barcode untuk kemudahan verifikasi pos pendakian.',
    background:
      'Pengalaman booking pendakian konvensional kerap menghadapi kendala formulir rumit dan antrean panjang verifikasi pos. Desain UI/UX MyHiking dirancang secara seksama di Figma dengan pendekatan human-centered design, memastikan elemen navigasi mudah dijangkau dengan satu tangan dan barcode check-in langsung dapat diakses dengan cepat.',
    role: 'UI/UX Designer',
    category: 'UI/UX & Desain',
    techStack: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design System'],
    image: '/design/myhiking-uiux.jpg',
    figmaUrl: 'https://www.figma.com/design/x6CNcaTMPxiHwRCYmqENor/PBL-BOOKING?node-id=1-2&t=DAIujgx12KlEh4An-1',
    liveDemoUrl: 'https://www.figma.com/design/x6CNcaTMPxiHwRCYmqENor/PBL-BOOKING?node-id=1-2&t=DAIujgx12KlEh4An-1',
    featured: true,
    highlights: [
      'Perancangan alur pemesanan tiket pendakian yang ringkas dan bebas friksi',
      'Desain tiket digital terintegrasi barcode untuk verifikasi check-in kilat',
      'Design system lengkap di Figma dengan komponen modular, varian tombol, dan palet warna konsisten',
      'Prototype interaktif yang divalidasi langsung untuk implementasi frontend Flutter',
    ],
    gallery: [
      { label: 'UI/UX Flow & Wireframe Figma', image: '/design/myhiking-uiux.jpg' },
      { label: 'Tampilan Mobile App', image: '/design/myhiking-mobile.jpg' },
      { label: 'Tampilan Web Admin', image: '/design/myhiking-web.jpg' },
    ],
  },
  {
    id: 'uiux-propaktani',
    title: 'UI/UX Design — Propaktani Mobile & Web Admin',
    period: 'Agus 2025 – Jan 2026',
    summary:
      'Perancangan antarmuka marketplace pertanian (Android) dan portal Web Admin di Figma untuk efisiensi jual-beli tani dan manajemen produk.',
    description:
      'Berkontribusi sebagai UI/UX Designer dalam perancangan antarmuka digital ekosistem pertanian Propaktani. Merancang aplikasi mobile Android yang mudah digunakan oleh petani dan pembeli hasil bumi, serta dashboard Web Admin yang komprehensif untuk inventaris produk, verifikasi transaksi pembayaran TriPay, dan tata kelola webinar tani.',
    background:
      'Antarmuka aplikasi untuk sektor pertanian memerlukan desain yang simpel, ukuran teks jelas, kontras warna yang nyaman di luar ruangan, serta hierarki visual yang tidak membingungkan pengguna awam. Perancangan UI/UX Propaktani berfokus pada kemudahan adopsi pengguna dan efisiensi navigasi.',
    role: 'UI/UX Designer',
    category: 'UI/UX & Desain',
    techStack: ['Figma', 'UI/UX Design', 'Design System', 'User Flow', 'Canva'],
    image: '/design/propaktani-uiux.jpg',
    featured: true,
    highlights: [
      'Perancangan katalog komoditas pertanian dan alur transaksi yang ramah petani',
      'Desain dashboard Web Admin untuk monitoring penjualan, verifikasi pesanan, dan manajemen webinar',
      'Struktur tata letak responsif dan palet warna bernuansa agrikultur modern',
      'Penyusunan panduan gaya (style guide) dan library komponen UI di Figma',
    ],
    gallery: [
      { label: 'Perancangan UI/UX di Figma', image: '/design/propaktani-uiux.jpg' },
      { label: 'Desain Aplikasi Mobile Petani', image: '/design/propaaktaani mobile.jpg' },
      { label: 'Desain Dashboard Web Admin', image: '/design/propaktani-web.jpg' },
    ],
  },
  {
    id: 'poster-aura-fitness',
    title: 'Poster Promosi Aura Fitness — AI Workout Tracker',
    period: '2026',
    summary:
      'Desain poster promosi komersial modern beresolusi tinggi untuk branding aplikasi fitness berbasis deteksi pose AI Computer Vision.',
    description:
      'Desain grafis poster promosi komersial untuk peluncuran aplikasi Aura Fitness. Mengusung konsep visual modern, sporty, dan futuristik untuk mengomunikasikan fitur unggulan deteksi postur tubuh dan perhitungan repetisi otomatis berbasis kecerdasan buatan.',
    background:
      'Materi promosi visual yang kuat sangat penting untuk menarik minat pengguna dalam mengunduh dan memanfaatkan aplikasi fitness di rumah. Poster ini dirancang untuk menampilkan daya tarik estetika dan fungsionalitas teknologi AI Google ML Kit secara visual.',
    role: 'Graphic & Visual Designer',
    category: 'UI/UX & Desain',
    techStack: ['Canva', 'PixelLab', 'Figma', 'Graphic Design'],
    image: '/design/Poster Aura Fitness.webp',
    featured: true,
    highlights: [
      'Tipografi bold dengan tata letak visual dinamis bernuansa kebugaran dan teknologi',
      'Highlight visual fitur pose detection dan evaluasi gerakan workout real-time',
      'Optimalisasi tata warna kontras untuk kebutuhan media promosi digital dan cetak',
      'Dibuat menggunakan perpaduan Canva, PixelLab, dan Figma',
    ],
  },
  {
    id: 'time-quest',
    title: 'TIME QUEST — Short Movie Tugas Besar Multimedia',
    period: '2024',
    summary:
      'Karya film pendek multimedia dengan visual storytelling, motion pacing, dan compositing sinematik sebagai tugas besar matakuliah multimedia.',
    description:
      'Karya video multimedia berupa film pendek sinematik berjudul "TIME QUEST" yang dikerjakan sebagai pemenuhan Tugas Besar Matakuliah Multimedia. Menggabungkan konsep perjalanan waktu, alur naratif sinematik, visual effects, transisi dinamis, serta sound design yang mendalam.',
    background:
      'Tugas Besar Matakuliah Multimedia berfokus pada penguasaan teknik produksi video lengkap: dari penyusunan naskah/storyboard, proses perekaman, editing alur cerita, pemotongan beritme sinematik, efek visual, hingga pencampuran audio latar dan efek suara.',
    role: 'Video Editor & Multimedia Producer',
    category: 'Video & Multimedia',
    techStack: ['Adobe Premiere Pro', 'CapCut', 'Alight Motion', 'Audio Design'],
    image: 'https://img.youtube.com/vi/hENSrlgFwO8/hqdefault.jpg',
    youtubeId: 'hENSrlgFwO8',
    videoUrl: 'https://youtu.be/hENSrlgFwO8',
    liveDemoUrl: 'https://youtu.be/hENSrlgFwO8',
    featured: true,
    highlights: [
      'Produksi karya video tugas besar matakuliah multimedia dengan konsep narasi waktu',
      'Editing ritme visual sinematik menggunakan Adobe Premiere Pro dan CapCut',
      'Sinkronisasi dialog, foley sound FX, dan background score yang dramatis',
      'Tersedia dan dapat disaksikan langsung di YouTube',
    ],
  },
  {
    id: 'video-promosi-myhiking',
    title: 'Video Promosi Aplikasi MyHiking',
    period: '2024 – 2025',
    summary:
      'Video promosi kreatif berformat vertikal (Shorts) untuk mengomunikasikan kepraktisan sistem booking tiket pendakian gunung online.',
    description:
      'Video promosi aplikasi mobile MyHiking berformat vertical video (Shorts) yang dirancang untuk menarik minat audiens pecinta alam dan pendaki gunung. Menampilkan pain points registrasi manual, solusi booking tiket online, pemindaian tiket barcode, serta keindahan visual jalur pendakian.',
    background:
      'Aplikasi MyHiking memerlukan materi promosi visual yang ringkas, menghibur, dan informatif di platform media sosial seperti YouTube Shorts dan Reels untuk memperkenalkan kemudahan check-in pos pendakian dengan barcode.',
    role: 'Video Creator & Motion Editor',
    category: 'Video & Multimedia',
    techStack: ['CapCut', 'Alight Motion', 'Figma', 'Video Editing'],
    image: 'https://img.youtube.com/vi/KpfbJrwa5v8/hqdefault.jpg',
    youtubeId: 'KpfbJrwa5v8',
    videoUrl: 'https://youtube.com/shorts/KpfbJrwa5v8?feature=share',
    liveDemoUrl: 'https://youtube.com/shorts/KpfbJrwa5v8?feature=share',
    featured: true,
    highlights: [
      'Format vertikal 9:16 dioptimalkan khusus untuk YouTube Shorts & Reels',
      'Integrasi motion graphics antarmuka aplikasi MyHiking dan transisi dinamis',
      'Audio mixing upbeat yang memperkuat pesan promosi kemudahan booking tiket',
      'Visualisasi praktis alur scan barcode di pos registrasi pendakian',
    ],
  },
  {
    id: 'roblox-violence-district',
    title: 'Roblox Gameplay Edit — Map Violence District',
    period: '2024',
    summary:
      'Karya editing gameplay cepat dan dinamis pada map Violence District Roblox dengan beat-sync presisi, visual effects, dan transisi kamera.',
    description:
      'Video editing gameplay kreatif dari map Violence District di platform Roblox yang diunggah ke TikTok. Menonjolkan teknik sinkronisasi tempo aksi gameplay dengan ritme musik (beat syncing), pergerakan kamera cepat, efek visual dramatis, dan transisi velocity.',
    background:
      'Editing video gaming di platform TikTok menuntut keahlian khusus dalam menangkap perhatian penonton lewat sinkronisasi aksi dengan ketukan musik, transisi halus, dan visual timing yang energik.',
    role: 'Video Editor & Motion Designer',
    category: 'Video & Multimedia',
    techStack: ['CapCut', 'Alight Motion', 'Sound Design', 'Velocity Edit'],
    image: '/design/roblox-violence-district.png',
    videoUrl: 'https://vt.tiktok.com/ZSbNEu2mT/',
    liveDemoUrl: 'https://vt.tiktok.com/ZSbNEu2mT/',
    featured: false,
    highlights: [
      'Velocity editing dan sync beat audio gameplay dengan presisi frame-by-frame',
      'Efek kamera dinamis, motion blur, screen shake, dan sound effects',
      'Format 9:16 vertikal dengan retensi tinggi untuk media sosial TikTok',
      'Diproduksi dan diselesaikan menggunakan CapCut dan Alight Motion',
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
