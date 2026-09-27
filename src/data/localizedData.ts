import { Project, Certification, WorkExperience, SkillCategoryGroup } from '@/types';
import { projectsData } from './projects';
import { certificationsData, experienceData, skillCategoriesData } from './skills';

interface ProjectTranslation {
  title?: string;
  period?: string;
  summary?: string;
  description?: string;
  background?: string;
  role?: string;
  highlights?: string[];
  gallery?: { label: string }[];
}

const enProjects: Record<string, ProjectTranslation> = {
  'my-hiking': {
    title: 'My Hiking — Mountain Climbing Ticket Booking',
    period: 'Aug 2024 – Jan 2025',
    summary:
      'Integrated mobile & web online mountain hiking ticket booking with automatic barcode scanner for rapid check-in/out and hiker quota monitoring.',
    description:
      'An integrated mobile & web solution for online mountain hiking ticket reservations. Replaces manual paper registration with instant barcode ticketing to facilitate faster check-in/check-out at basecamps, real-time quota tracking, and efficient waste and group monitoring.',
    background:
      'Mountain climbing has grown rapidly in popularity, but conventional administrative processes such as paper forms, manual validation, long queues during peak seasons, and departure confirmations remain major bottlenecks. My Hiking was designed to streamline this entire journey. Through online booking, hikers instantly receive a personal identity barcode to scan at basecamp checkpoints. In addition to speeding up registration, it helps rangers track climber counts and ensures mandatory equipment and waste verification procedures run smoothly.',
    role: 'Mobile, Full-Stack & UI/UX Designer',
    highlights: [
      'Online booking system with instant personal identity barcode issuance',
      'Real-time barcode scanning for check-in and check-out at basecamp checkpoints',
      'Real-time climber quota tracking, group roster recording, and waste monitoring',
      'Backend RESTful API integration using Laravel with MySQL relational database',
      'Comprehensive UI/UX design in Figma covering booking flow and ticket verification',
    ],
    gallery: [
      { label: 'MyHiking Overview' },
      { label: 'MyHiking Mobile App (Flutter)' },
      { label: 'MyHiking Web Admin Portal (Laravel)' },
      { label: 'Figma Design System & Mockups' },
    ],
  },
  'propaktani': {
    title: 'Propaktani — Agriculture Marketplace App & Web Admin',
    period: 'Aug 2025 – Jan 2026',
    summary:
      'Agricultural marketplace & farmer education ecosystem featuring an Android mobile app (Flutter) and Web Admin portal (Laravel) with TriPay payment gateway.',
    description:
      'An integrated agricultural marketplace platform comprising a Flutter-based Android mobile application for buying and selling farming produce and supplies, alongside a Laravel Web Admin portal for product cataloging, automated TriPay payment validation, user access management, and agricultural webinar administration.',
    background:
      'Farmers and agribusiness owners frequently encounter supply chain friction, elongated intermediary distribution, and limited access to modern cultivation guidance. Propaktani was developed as an all-in-one digital ecosystem combining an intuitive mobile app for direct transactions with a centralized web dashboard for administrators to monitor sales analytics, automate payment verification via TriPay webhooks, and coordinate educational webinars.',
    role: 'Full-Stack Developer Intern & UI/UX Designer',
    highlights: [
      'Android mobile app (Flutter) for multi-vendor catalog, ordering, and agronomy education',
      'Web Admin portal (Laravel) for inventory tracking, order monitoring, and master data',
      'TriPay payment gateway integration with instant webhook verification for automated billing',
      'Webinar management module with automated digital certificate issuance',
      'UI/UX interface design in Figma for both Android mobile app and web admin portal',
    ],
    gallery: [
      { label: 'Propaktani Brand Identity' },
      { label: 'Propaktani Mobile App (Flutter)' },
      { label: 'Propaktani Web Admin Dashboard (Laravel)' },
      { label: 'Propaktani UI/UX Design in Figma' },
    ],
  },
  'diara-timeschool': {
    title: 'Diara TimeSchool — Smart School Attendance',
    period: 'Apr 2025 – Jul 2025',
    summary:
      'Real-time online school attendance web system integrating teachers, students, and parents.',
    description:
      'An integrated online attendance web platform to monitor student presence, disciplinary points, student achievements, class scheduling, student records, and teacher administrative duties.',
    background:
      'Many primary and secondary schools still rely on paper roll books or spreadsheets, leading to slow attendance reporting, human errors, and delays in communicating with parents. Diara TimeSchool provides automated, real-time attendance tracking with immediate parent transparency and centralized school administration.',
    role: 'Backend & Web Developer',
    highlights: [
      'Real-time online attendance tracking integrating teachers, students, and parents',
      'Disciplinary point monitoring and transparent student achievement logging',
      'Structured lesson scheduling, centralized student database, and automated summaries',
      'Role-based access control (RBAC) for school administrators, teachers, and parents',
    ],
    gallery: [
      { label: 'Diara TimeSchool — Smart Attendance' },
      { label: 'Diara TimeSchool Web Attendance Interface' },
    ],
  },
  'aura-fitness': {
    title: 'AURA FITNESS — AI Workout Pose Detection',
    period: 'Feb 2026 – Jul 2026',
    summary:
      'Smart fitness application powered by Google ML Kit Pose Detection for real-time exercise posture evaluation and rep counting.',
    description:
      'An intelligent mobile fitness app that harnesses Google ML Kit Pose Detection to detect, evaluate, and count exercise repetitions in real time through automated body pose estimation.',
    background:
      'Solo home workouts often suffer from a lack of immediate posture feedback and inconsistent repetition tracking. Aura Fitness serves as an intelligent personal trainer in your pocket, utilizing on-device Computer Vision via Google ML Kit to track skeletal landmarks from smartphone cameras in real time, analyze joint angles, calculate reps automatically, and sync workout analytics to Supabase.',
    role: 'AI & Mobile Engineer',
    highlights: [
      'Real-time workout detection and posture evaluation using Google ML Kit Pose Detection',
      'Automated rep-counting algorithm based on joint angle calculations and pose tracking',
      'Cloud workout stats, exercise history, and user synchronization using Supabase',
      'Optimized mobile inference pipeline providing energy-efficient real-time performance',
    ],
    gallery: [
      { label: 'Aura Fitness — Logo & Branding' },
      { label: 'Mobile App Interface & AI Pose Detection' },
    ],
  },
  'uiux-myhiking': {
    title: 'UI/UX Design — MyHiking Booking App',
    period: 'Aug 2024 – Jan 2025',
    summary:
      'Mobile user interface design for online mountain hiking ticket booking in Figma, including wireframes, ticket flows, and barcode check-in.',
    description:
      'Contributed as UI/UX Designer in shaping the user interface and journey for the MyHiking mountain ticket booking app. Designed the complete user experience from trail browsing, quota date selection, checkout, through to digital barcode ticket issuance for seamless basecamp verification.',
    background:
      'Conventional hiking registration suffers from friction-heavy paperwork and lengthy queue times at trail checkpoints. MyHiking’s UI/UX was crafted in Figma using human-centered design principles, ensuring one-handed ergonomic navigation and rapid barcode ticket access.',
    role: 'UI/UX Designer',
    highlights: [
      'Streamlined and friction-free mountain hiking ticket reservation flow',
      'Barcode-integrated digital ticket design for rapid basecamp check-in verification',
      'Complete Figma design system with modular components, button variants, and color palette',
      'Interactive clickable prototype validated for seamless Flutter frontend handoff',
    ],
    gallery: [
      { label: 'Figma UI/UX Flow & Wireframes' },
      { label: 'Mobile App Visual Screens' },
      { label: 'Web Admin Portal Screens' },
    ],
  },
  'uiux-propaktani': {
    title: 'UI/UX Design — Propaktani Mobile & Web Admin',
    period: 'Aug 2025 – Jan 2026',
    summary:
      'Agricultural marketplace mobile UI and Web Admin portal design in Figma for streamlined farmer-to-consumer trading.',
    description:
      'Led the UI/UX design process for the Propaktani agricultural digital ecosystem. Crafted an accessible Android mobile interface for farmers and buyers, alongside an in-depth Web Admin dashboard for inventory tracking, TriPay payment management, and webinar logistics.',
    background:
      'Agricultural technology applications demand simplicity, legible typography, high outdoor contrast, and clean layout hierarchies for diverse user literacy levels. Propaktani’s UI/UX prioritizes effortless adoption and ergonomic navigation.',
    role: 'UI/UX Designer',
    highlights: [
      'Intuitive produce catalog and farmer-friendly checkout transaction flow',
      'Web Admin dashboard design for order tracking, transaction verification, and webinar events',
      'Responsive layout structure and modern agricultural-inspired color palette',
      'Comprehensive style guide and reusable UI component library in Figma',
    ],
    gallery: [
      { label: 'Figma UI/UX Design System' },
      { label: 'Farmer Mobile App Design' },
      { label: 'Web Admin Dashboard Design' },
    ],
  },
  'poster-aura-fitness': {
    title: 'Aura Fitness Promotional Poster — AI Workout Tracker',
    period: '2026',
    summary:
      'High-resolution commercial promotional poster design for the branding of an AI Computer Vision fitness app.',
    description:
      'Commercial promotional graphic design for the official rollout of the Aura Fitness app. Employs a bold, sporty, and futuristic visual aesthetic to communicate core features of AI posture detection and automated rep tracking.',
    background:
      'High-impact visual promotional assets are essential to inspire app downloads and convey technical advantages. This poster translates the power of Google ML Kit AI fitness technology into a dynamic, compelling poster design.',
    role: 'Graphic & Visual Designer',
    highlights: [
      'Bold typography with high-energy composition conveying fitness and technology',
      'Visual feature highlight showcasing real-time pose tracking and movement feedback',
      'Color contrast optimized for both high-resolution print and digital media campaigns',
      'Crafted using a creative workflow combining Canva, PixelLab, and Figma',
    ],
  },
  'time-quest': {
    title: 'TIME QUEST — Multimedia Capstone Short Movie',
    period: '2024',
    summary:
      'Multimedia short film showcasing visual storytelling, motion pacing, and cinematic compositing as a major multimedia course project.',
    description:
      'A cinematic multimedia short film titled "TIME QUEST" created as a major course project. Integrates a time-travel narrative, cinematic pacing, visual effects, dynamic scene transitions, and immersive sound design.',
    background:
      'The Multimedia Capstone Project challenged students across end-to-end production: scriptwriting and storyboarding, camera shooting, narrative editing, rhythmic cutting, visual effects compositing, and comprehensive audio design.',
    role: 'Video Editor & Multimedia Producer',
    highlights: [
      'Multimedia capstone production centered on a cinematic time-travel storyline',
      'Rhythmic visual editing and pacing using Adobe Premiere Pro and CapCut',
      'Audio mixing featuring synchronized dialogue, foley FX, and a dramatic score',
      'Available and streaming publicly on YouTube',
    ],
  },
  'video-promosi-myhiking': {
    title: 'MyHiking App Promotional Video',
    period: '2024 – 2025',
    summary:
      'Creative vertical video (Shorts) communicating the speed and ease of online mountain hiking ticket reservations.',
    description:
      'A vertical promotional video (Shorts/Reels) tailored for outdoor enthusiasts and hikers. Highlights conventional registration friction, the online ticket booking solution, instant barcode scanning, and scenic mountain trail visuals.',
    background:
      'MyHiking needed concise, high-retention visual content on social platforms such as YouTube Shorts and Instagram Reels to demonstrate the convenience of barcode check-ins.',
    role: 'Video Creator & Motion Editor',
    highlights: [
      '9:16 vertical video format optimized for YouTube Shorts and Instagram Reels',
      'Integrated MyHiking UI motion graphics with fast-paced dynamic transitions',
      'Upbeat audio mixing reinforcing key messages of effortless ticket booking',
      'Clear demonstration of the quick basecamp barcode scanning workflow',
    ],
  },
  'roblox-violence-district': {
    title: 'Roblox Gameplay Edit — Map Violence District',
    period: '2024',
    summary:
      'Fast-paced gameplay editing on the Roblox Violence District map with precision beat-syncing, visual effects, and camera work.',
    description:
      'Creative gameplay edit from the Violence District map on Roblox published on TikTok. Showcases advanced velocity editing, audio beat synchronization, rapid camera whip pans, and punchy visual effects.',
    background:
      'Gaming video editing on TikTok requires specialized timing to capture viewer attention through frame-accurate audio beat syncing, fluid transitions, and high-energy motion aesthetics.',
    role: 'Video Editor & Motion Designer',
    highlights: [
      'Frame-by-frame velocity editing synchronized with audio gameplay beats',
      'Dynamic camera motion, speed ramps, motion blur, screen shake, and sound FX',
      'High-retention 9:16 vertical format tailored for TikTok social algorithms',
      'Produced and edited using CapCut and Alight Motion',
    ],
  },
  'minecraft-server': {
    title: 'Minecraft Game Server Optimization',
    period: 'Sept 2026',
    summary:
      'Linux resource management, mod/plugin compatibility testing, and performance optimization for a multiplayer game server.',
    description:
      'Managed setup, configuration, and compatibility auditing for mods and plugins on a production Minecraft server, while monitoring system resources to guarantee high availability and low latency.',
    background:
      'Operating a community game server requires solid Linux systems administration skills, JVM performance tuning, heap memory allocation, CPU bottleneck avoidance, and plugin audit procedures to ensure 24/7 uptime without lag or crash spikes.',
    role: 'Systems & Server Administrator',
    highlights: [
      'Setup, configuration, and compatibility testing for server mods and plugins',
      'RAM/CPU monitoring and game server runtime stability optimization',
      'Firewall network rules, port forwarding, and automated recurring backups',
    ],
  },
};

const enCertifications: Record<string, { title?: string; description?: string }> = {
  'internship-techmedia': {
    title: 'Internship / Field Work Practice Certificate',
    description:
      'Official recognition of completing the Full-Stack Developer internship program developing web and mobile systems (Propaktani).',
  },
  'solusi247-big-data': {
    title: 'Certified Associate Big Data Analyst',
    description:
      'Professional competency certification in large-scale data analysis, analytic pipeline processing, and Big Data visualization workflows.',
  },
  'mikrotik-mtcna': {
    title: 'MikroTik Certified Network Associate (MTCNA)',
    description:
      'Official certification in MikroTik RouterBoard configuration, bandwidth management, firewall filtering, routing, and hotspot administration.',
  },
  'oracle-database-design': {
    title: 'Database Design',
    description:
      'Competency in complex relational database modeling, entity relationship diagrams (ERD), and advanced schema normalization.',
  },
  'oracle-programming-sql': {
    title: 'Database Programming with SQL',
    description:
      'In-depth relational SQL query programming, table index optimization, aggregate functions, and enterprise-grade transaction handling.',
  },
};

const enExperience: Record<string, { description?: string; responsibilities?: string[] }> = {
  'techmedia-intern': {
    description:
      'Responsible for designing and implementing full-stack features for an agricultural marketplace ecosystem spanning mobile frontend and web backend.',
    responsibilities: [
      'Developed the Propaktani agricultural marketplace application using Flutter for frontend and Laravel/PHP for backend.',
      'Designed and implemented the mobile UI/UX and integrated RESTful APIs to power marketplace transactions and user workflows.',
      'Integrated the TriPay payment gateway to support secure, automated digital payment transactions.',
      'Collaborated closely with cross-functional team members on feature integration, performance testing, and production release milestones.',
    ],
  },
};

const enSkillCategories: Record<string, { title?: string; description?: string }> = {
  'mobile-frontend': {
    title: 'Frontend & Mobile',
    description: 'Responsive multiplatform mobile applications and modern web interfaces.',
  },
  'backend-database': {
    title: 'Backend & Database',
    description: 'Scalable, high-performance, and secure RESTful API architectures.',
  },
  'ai-computer-vision': {
    title: 'AI & Computer Vision',
    description: 'Machine learning implementation, object detection, and pose estimation.',
  },
  'design-graphics': {
    title: 'UI/UX & Graphic Design',
    description: 'UI/UX interface design, wireframing, interactive prototyping, and visual graphics.',
  },
  'video-editing': {
    title: 'Video & Motion Editing',
    description: 'Multimedia video production, motion graphics, velocity edits, and color grading.',
  },
  'tools-networking': {
    title: 'Tools & Networking',
    description: 'Modern software engineering toolchains, version control, and server management.',
  },
};

export function getLocalizedProjects(locale: 'id' | 'en'): Project[] {
  if (locale === 'id') return projectsData;

  return projectsData.map((project) => {
    const override = enProjects[project.id];
    if (!override) return project;

    const localizedGallery = project.gallery
      ? project.gallery.map((item, idx) => ({
          ...item,
          label: override.gallery?.[idx]?.label || item.label,
        }))
      : undefined;

    return {
      ...project,
      title: override.title || project.title,
      period: override.period || project.period,
      summary: override.summary || project.summary,
      description: override.description || project.description,
      background: override.background || project.background,
      role: override.role || project.role,
      highlights: override.highlights || project.highlights,
      gallery: localizedGallery,
    };
  });
}

export function getLocalizedCertifications(locale: 'id' | 'en'): Certification[] {
  if (locale === 'id') return certificationsData;

  return certificationsData.map((cert) => {
    const override = enCertifications[cert.id];
    if (!override) return cert;

    return {
      ...cert,
      title: override.title || cert.title,
      description: override.description || cert.description,
    };
  });
}

export function getLocalizedExperience(locale: 'id' | 'en'): WorkExperience[] {
  if (locale === 'id') return experienceData;

  return experienceData.map((exp) => {
    const override = enExperience[exp.id];
    if (!override) return exp;

    return {
      ...exp,
      description: override.description || exp.description,
      responsibilities: override.responsibilities || exp.responsibilities,
    };
  });
}

export function getLocalizedSkillCategories(locale: 'id' | 'en'): SkillCategoryGroup[] {
  if (locale === 'id') return skillCategoriesData;

  return skillCategoriesData.map((cat) => {
    const override = enSkillCategories[cat.id];
    if (!override) return cat;

    return {
      ...cat,
      title: override.title || cat.title,
      description: override.description || cat.description,
    };
  });
}
