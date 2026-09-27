# 📋 Master Roadmap & Planning: Web Portofolio

---

## 📌 Phase 1: Persiapan Konten & Aset
> *Sebelum menulis kode, kumpulkan semua informasi dan aset agar proses coding lebih fokus.*

### 1. Profil & Ringkasan Diri
- [ ] **Nama Lengkap & Title:** Arif Pamungkas — *Fullstack Developer & Mobile Engineer*.
- [ ] **Professional Summary:** Ringkasan singkat mengenai keahlian dalam rekayasa aplikasi *mobile* (Flutter/Dart), pengembangan *backend* (Laravel/Node.js), *machine learning / computer vision* (Python, Google ML Kit, YOLOv8), serta pengelolaan basis data & jaringan.
- [ ] **Resume/CV PDF:** Siapkan file PDF CV terbaru di folder `public/resume.pdf`.

### 2. Kurasi Proyek Utama (*Featured Projects*)
Siapkan informasi untuk setiap proyek (Gambar, Deskripsi, Tech Stack, & Tautan):
- [x] **Proyek 1: Propaktani**
  - *Deskripsi:* Ekosistem marketplace pertanian & edukasi mencakup aplikasi mobile Android (Flutter) dan portal Web Admin (Laravel), gateway pembayaran TriPay, serta sistem penerbitan sertifikat otomatis Zoom.
  - *Tech Stack:* Flutter, Dart, Laravel, PHP, REST API, TriPay, MySQL.
  - *GitHub:* https://github.com/pamungkascuy/Propaktani_apk
- [x] **Proyek 2: Aura Fitness**
  - *Deskripsi:* Aplikasi *fitness mobile* cerdas dengan *computer vision* (*Google ML Kit Pose Detection*) untuk penghitungan repetisi otomatis dan umpan balik postur *real-time*.
  - *Tech Stack:* Flutter, Supabase, Google ML Kit, Dart.
  - *GitHub:* https://github.com/pamungkascuy/aura-fitness-release
- [x] **Proyek 3: Diara TimeSchool**
  - *Deskripsi:* Aplikasi website Presensi Online terintegrasi untuk mengatasi rekapitulasi manual di sekolah. Mencakup sistem presensi real-time, pemantauan poin pelanggaran, prestasi, manajemen jadwal, manajemen data siswa, dan manajemen guru.
  - *Tech Stack:* Laravel, PHP, MySQL, REST API, CSS.
  - *GitHub:* https://github.com/iammburg/presensi-pbl.git
- [x] **Proyek 4: My Hiking App & Web**
  - *Deskripsi:* Aplikasi booking tiket pendakian online terintegrasi barcode scanner untuk mempercepat check-in/check-out di pos pendakian, monitoring kuota pendaki, dan verifikasi rombongan/sampah.
  - *Tech Stack:* Flutter, Laravel, PHP, REST API, MySQL.
  - *GitHub:* https://github.com/ulhaqjackyhaw/myhiking-backend-api.git

### 3. Keahlian & Sertifikasi (*Skills & Certifications*)
- [ ] **Keahlian Teknis:**
  - *Mobile & Frontend:* Flutter, Dart, React, Next.js, TypeScript, Tailwind CSS.
  - *Backend & Database:* Laravel, Node.js, Express, PostgreSQL, Supabase, MySQL, MongoDB.
  - *AI / Machine Learning & Tools:* Python, OpenCV, Google ML Kit, YOLOv8, Docker, Git.
  - *Networking:* MikroTik (MTCNA), Subnetting, Firewall.
- [ ] **Sertifikasi Profesional:**
  - SOLUSI247 Certified Associate Big Data Analyst.
  - MikroTik Certified Network Associate (MTCNA).
  - Oracle Academy: Database Design & Programming with SQL.
  - TEPPS English Proficiency Score (505).

---

## 🏗️ Phase 2: Arsitektur & Struktur Proyek (Next.js)

Atur struktur folder di dalam `src/` agar rapi dan mudah dirawat:

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Styling Tailwind global
│   ├── layout.tsx           # Layout utama (Metadata SEO, Inter font, Navbar, Footer)
│   └── page.tsx             # Halaman utama tempat menyusun komponen
├── components/
│   ├── Navbar.tsx           # Navigasi melayang / sticky
│   ├── HeroSection.tsx      # Perkenalan & Call to Action (CTA)
│   ├── AboutSection.tsx     # Ringkasan profil & riwayat pendidikan/karir
│   ├── SkillsSection.tsx    # Grid/Badge keahlian & sertifikasi
│   ├── ProjectsSection.tsx  # Showcase proyek dengan filter kategori
│   ├── ContactSection.tsx   # Formulir / Tautan kontak langsung & sosial media
│   └── Footer.tsx           # Hak cipta & link ringkas
├── data/
│   ├── projects.ts          # File data array proyek (Type-safe)
│   └── skills.ts            # File data array skills & certs
└── types/
    └── index.ts             # Definisi TypeScript interface
```

---

## 💻 Phase 3: Pengembangan Kode (Step-by-Step)

### Step 1: Konfigurasi Dasar & Data Types
1. Buat file `src/types/index.ts` untuk menentukan tipe data proyek dan keahlian.
2. Buat file `src/data/projects.ts` dan `src/data/skills.ts` agar isi konten terpisah dari komponen visual.

### Step 2: Pengembangan Komponen UI
1. **Navbar:**
   - Navigasi responsif dengan link halus (*smooth scroll*) ke section `#about`, `#skills`, `#projects`, dan `#contact`.
2. **Hero Section:**
   - Judul menarik, *badge status* (misal: "Available for Hire"), tombol "Lihat Proyek" dan "Unduh CV".
3. **About & Certifications Section:**
   - Ringkasan latar belakang, pendidikan D3 Teknik Informatika, dan sertifikasi (SOLUSI247, MTCNA, Oracle).
4. **Skills Section:**
   - Kategori keahlian (Mobile, Backend, AI/Data, Network & Cloud, UI/Media).
5. **Projects Section:**
   - Card komponen untuk tiap proyek lengkap dengan gambar, deskripsi singkat, tag *tech stack*, serta tombol ke GitHub / Demo.
6. **Contact Section & Footer:**
   - Tautan Email, LinkedIn, GitHub, serta lokasi.

### Step 3: Polish, Animasi, & Responsivitas
- [ ] Pasang library `lucide-react` untuk ikon-ikon tech stack dan sosial media.
- [ ] Pasang `framer-motion` untuk efek *fade-in* saat pengguna melakukan *scroll*.
- [ ] Uji tampilan di layar ponsel (*mobile screen*), tablet, dan *desktop*.

---

## 🚀 Phase 4: Pengujian & Optimasi SEO

1. **Atur SEO Metadata (`src/app/layout.tsx`):**
   - Title: `Arif Pamungkas | Fullstack Developer & Mobile Engineer`
   - Description: Portofolio profesional yang menampilkan proyek Flutter, Laravel, Computer Vision, dan Cloud.
   - OpenGraph image untuk *preview* saat tautan dibagikan ke WhatsApp / LinkedIn.
2. **Performa:**
   - Gunakan komponen `<Image/>` dari `next/image` untuk gambar proyek agar cepat memuat (*optimized webp*).

---

## 🌐 Phase 5: Deployment (Peluncuran Publik)

1. **Simpan ke GitHub:**
   - Buat repository baru di GitHub (`my-portfolio`).
   - Push kode lokal Anda ke branch `main`.
2. **Deploy di Vercel:**
   - Hubungkan akun GitHub ke [Vercel](https://vercel.com).
   - Import repository `my-portfolio` dan klik **Deploy**.
3. **Pemeriksaan Akhir:**
   - Uji semua tombol unduh CV, link GitHub proyek, dan responsivitas di Vercel URL live.