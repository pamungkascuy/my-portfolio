import { SkillCategoryGroup, Certification, WorkExperience } from '@/types';

export const certificationsData: Certification[] = [
  {
    id: 'internship-techmedia',
    title: 'Sertifikat Magang / Praktik Kerja Lapangan',
    issuer: 'PT. Inovasi Tekno Media Bangsa',
    year: '2025',
    badgeText: 'Full-Stack Developer Intern',
    description:
      'Pengakuan resmi penyelesaian program magang/praktik kerja lapangan sebagai Full-Stack Developer dalam pengembangan aplikasi web dan mobile (Propaktani).',
    image: '/certificates/cert-magang.webp',
    pdfUrl: '/certificates/cert-magang.webp',
  },
  {
    id: 'solusi247-big-data',
    title: 'Certified Associate Big Data Analyst',
    issuer: 'SOLUSI247',
    year: '2026',
    badgeText: 'Big Data & Analytics',
    description:
      'Sertifikasi kompetensi dalam analisis data skala besar, pengolahan pipeline data analitik, dan visualisasi pemrosesan Big Data.',
    image: '/certificates/cert-big-data.png',
    pdfUrl: '/SCA511-2508-260810241-Arif Pamungkas.pdf',
  },
  {
    id: 'mikrotik-mtcna',
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik',
    year: '2026',
    badgeText: 'Enterprise Networking',
    description:
      'Sertifikasi kompetensi resmi dalam konfigurasi routerboard MikroTik, manajemen bandwidth, firewall filter, routing, dan hotspot management.',
    image: '/certificates/cert-mtcna.png',
    pdfUrl: '/SERTIFIKAT MIKROTIK_2.pdf',
  },
  {
    id: 'oracle-database-design',
    title: 'Database Design',
    issuer: 'Oracle Academy',
    year: '2024',
    badgeText: 'Database Engineering',
    description:
      'Kompetensi pemodelan basis data relasional kompleks, entity relationship diagram (ERD), serta normalisasi skema tingkat lanjut.',
    image: '/certificates/cert-database-design.png',
    pdfUrl: '/Certificate DD Database Design Learner_3.pdf',
  },
  {
    id: 'oracle-programming-sql',
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy',
    year: '2024',
    badgeText: 'SQL Engineering',
    description:
      'Pemrograman query SQL relasional mendalam, optimasi indeks tabel, fungsi agregat, dan transaksi basis data standar enterprise.',
    image: '/certificates/cert-database-sql.png',
    pdfUrl: '/Certificate Database Programming wIth SQL_3.pdf',
  },
];

export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    id: 'mobile-frontend',
    title: 'Frontend & Mobile',
    description: 'Aplikasi multiplatform responsif dan antarmuka web modern.',
    skills: [
      { name: 'Flutter', category: 'Frontend & Mobile', level: 'Expert' },
      { name: 'JavaScript', category: 'Frontend & Mobile', level: 'Advanced' },
      { name: 'React.js', category: 'Frontend & Mobile', level: 'Advanced' },
      { name: 'Next.js', category: 'Frontend & Mobile', level: 'Advanced' },
      { name: 'Tailwind CSS', category: 'Frontend & Mobile', level: 'Expert' },
      { name: 'HTML5 / CSS3', category: 'Frontend & Mobile', level: 'Expert' },
    ],
  },
  {
    id: 'backend-database',
    title: 'Backend & Database',
    description: 'Arsitektur RESTful API yang scalable, efisien, dan aman.',
    skills: [
      { name: 'Laravel', category: 'Backend & Database', level: 'Expert' },
      { name: 'PHP', category: 'Backend & Database', level: 'Expert' },
      { name: 'MySQL', category: 'Backend & Database', level: 'Expert' },
      { name: 'PostgreSQL', category: 'Backend & Database', level: 'Advanced' },
      { name: 'Node.js', category: 'Backend & Database', level: 'Advanced' },
      { name: 'Firebase', category: 'Backend & Database', level: 'Intermediate' },
      { name: 'RESTful API', category: 'Backend & Database', level: 'Expert' },
    ],
  },
  {
    id: 'ai-computer-vision',
    title: 'AI & Computer Vision',
    description: 'Implementasi machine learning, deteksi objek, dan pose tracking.',
    skills: [
      { name: 'Python', category: 'AI & Vision', level: 'Advanced' },
      { name: 'YOLOv8', category: 'AI & Vision', level: 'Advanced' },
      { name: 'OpenCV', category: 'AI & Vision', level: 'Advanced' },
      { name: 'CNN', category: 'AI & Vision', level: 'Intermediate' },
      { name: 'Google ML Kit', category: 'AI & Vision', level: 'Advanced' },
    ],
  },
  {
    id: 'design-graphics',
    title: 'UI/UX & Desain Grafis',
    description: 'Perancangan UI/UX antarmuka aplikasi, wireframing, prototyping, dan desain visual.',
    skills: [
      { name: 'Figma', category: 'UI/UX Design', level: 'Expert' },
      { name: 'Canva', category: 'Graphic Design', level: 'Expert' },
      { name: 'Corel Draw', category: 'Vector Design', level: 'Advanced' },
      { name: 'PixelLab', category: 'Typography & Layout', level: 'Advanced' },
    ],
  },
  {
    id: 'video-editing',
    title: 'Video & Motion Editing',
    description: 'Produksi video multimedia, motion graphics, velocity edit, dan color grading.',
    skills: [
      { name: 'Adobe Premiere Pro', category: 'Video Editing', level: 'Advanced' },
      { name: 'CapCut', category: 'Vertical & Social Video', level: 'Expert' },
      { name: 'Alight Motion', category: 'Motion & Keyframe', level: 'Advanced' },
    ],
  },
  {
    id: 'tools-networking',
    title: 'Tools & Networking',
    description: 'Peralatan rekayasa perangkat lunak modern dan konfigurasi server.',
    skills: [
      { name: 'Git & GitLab', category: 'Tools', level: 'Expert' },
      { name: 'MikroTik (MTCNA)', category: 'Networking', level: 'Advanced' },
      { name: 'Server Optimization', category: 'Networking', level: 'Advanced' },
      { name: 'Cursor & Claude Code', category: 'Tools', level: 'Expert' },
      { name: 'Antigravity', category: 'Tools', level: 'Expert' },
    ],
  },
];

export const experienceData: WorkExperience[] = [
  {
    id: 'techmedia-intern',
    role: 'Full-Stack Developer Intern',
    company: 'Techmedia Indonesia',
    period: 'Jul 2025 - Jan 2026',
    location: 'Indonesia',
    description:
      'Bertanggung jawab dalam perancangan dan implementasi fitur sistem marketplace pertanian berskala penuh mulai dari frontend hingga backend.',
    responsibilities: [
      'Mengembangkan aplikasi marketplace pertanian bernama Propaktani menggunakan Flutter sebagai frontend dan Laravel/PHP sebagai backend.',
      'Merancang dan mengimplementasikan UI/UX aplikasi serta mengintegrasikan RESTful API untuk mendukung fitur marketplace dan kebutuhan pengguna.',
      'Mengintegrasikan payment gateway untuk mendukung proses transaksi pembayaran digital yang aman dan otomatis pada aplikasi.',
      'Berkolaborasi secara intensif dengan tim dalam proses pengembangan, integrasi fitur, pengujian performa, dan penyelesaian kebutuhan rilis aplikasi.',
    ],
  },
];
