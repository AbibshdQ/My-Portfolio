import {
  NavItem,
  PersonalInfo,
  Project,
  // SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Habib Maulana Shidiq",
  title: "Software Engineer",
  eyebrow: "FULL-STACK DEVELOPER",
  headline: "Turning ideas into digital experiences.",
  supportingText:
    "Seorang pengembang Software Developer yang membangun aplikasi web modern, berfokus pada pengguna dan tertarik dengan machine learning ",
  bioParagraphs: [
    "Saya adalah pengembang web pemula yang termotivasi oleh keahlian mengubah konsep menjadi antarmuka digital yang intuitif. Dengan komitmen yang kuat terhadap kode yang bersih, struktur semantik, dan pengalaman pengguna yang mudah diakses, saya fokus pada membangun aplikasi web responsif yang terasa alami untuk digunakan. Fokus saya saat ini adalah memperdalam kemampuan frontend modern dan full-stack saya dengan TypeScript, Next.js (App Router), dan Tailwind CSS. Saya memprioritaskan pemecahan masalah yang cermat, pembelajaran berkelanjutan, dan pembuatan detail yang menjembatani desain visual dengan kode yang kuat..",
  ],
  email: "Habib.maushid69@gmail.com",
  location: "Indonesia",
  isAvailableForWork: true,
  // resumeUrl: "/resume/Borshon_Roy_Web_Developer_Intern_Resume.pdf",
  // phone: "+62 822 8657 0894",
  whatsapp: "+62 822 8647 0894",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/AbibshdQ",
    iconName: "github",
    isPlaceholder: false,
  },
  {
    platform: "LinkedIn",
    url: "https://",
    iconName: "linkedin",
    isPlaceholder: false,
  },
  {
    platform: "Email",
    url: "mailto:habib.maushid69@gmail.com",
    iconName: "mail",
    isPlaceholder: false,
  },
];

// export const skillCategories: SkillCategory[] = [
//   {
//     category: "Frontend Development",
//     description:
//       "Creating responsive, modern, and user-focused web experiences.",
//     skills: [
//       { name: "React", level: "Active" },
//       { name: "Next.js", level: "Active" },
//       { name: "JavaScript (ES6+)", level: "Active" },
//       { name: "TypeScript", level: "Active" },
//       { name: "Tailwind CSS", level: "Active" },
//       { name: "Responsive Web Development", level: "Active" },
//     ],
//   },
//   {
//     category: "Backend Development",
//     description:
//       "Building server-side applications, backend logic, and secure authentication systems.",
//     skills: [
//       { name: "Node.js", level: "Active" },
//       { name: "Express.js", level: "Active" },
//       { name: "Better Auth", level: "Active" },
//       { name: "REST API Integration", level: "Active" },
//     ],
//   },
//   {
//     category: "Database & API Engineering",
//     description:
//       "Designing structured data models and reliable communication between application layers.",
//     skills: [
//       { name: "MongoDB", level: "Active" },
//       { name: "Mongoose", level: "Active" },
//       { name: "API Design", level: "Active" },
//       { name: "Database Design", level: "Active" },
//       { name: "Client-Server Architecture", level: "Active" },
//     ],
//   },
//   {
//     category: "Software Engineering",
//     description:
//       "Applying problem-solving skills and modern development practices to build practical applications.",
//     skills: [
//       { name: "Full-Stack Application Development", level: "Active" },
//       { name: "AI Mindset & Engineering", level: "Active" },
//       { name: "Product Development", level: "Active" },
//       { name: "Problem Solving", level: "Active" },
//     ],
//   },
//   {
//     category: "Tools & Workflow",
//     description:
//       "Using development tools to manage code and maintain efficient workflows.",
//     skills: [
//       { name: "Git", level: "Active" },
//       { name: "GitHub", level: "Active" },
//     ],
//   },
// ];

export const projects: Project[] = [
  {
    id: "Sumbar Camp",
    title: "Sumbar Camp",
    eyebrow: "Full-Stack Laravel",
    tagline:
      "Web memudahkan para pegiat untuk merental alat kemah.",
    description:
      "Web memudahkan para pegiat untuk merental alat kemah",
    technologies: [
      "Php",
      "Boostrap",
      "Tailwind CSS",
      "Javascript",
      "Mysql",
    ],
    githubUrl: "https://github.com/Abibshd",
    liveUrl: " ",
    image: "/projects/Sumbar camp.jpg", // screenshot rakhar por uncomment koro
    challenges: [
          ],
    improvements: [
      
    ],
    featured: true,
    year: "2023",
    aspect: "wide",
  },
  {
    id: "Academy Management System",
    title: "Inovindo Academy Management System",
    eyebrow: "Inovindo Academy Management System",
    tagline:
      "Sebuah ekosistem membantu mengelola peserta magang di perusahaan tersebut.",
    description:
      "Sebuah ekosistem membantu mengelola peserta magang di perusahaan tersebut.",
    technologies: [
      "Jwt",
      "Javascript",
      "Tailwind CSS",
      "next-themes",
      "Laravel",
    ],
    githubUrl: "https://github.com/Abibshd",
    liveUrl: " ",
    image: "/projects/Dashboardino.jpeg",
    challenges: [
         ],
    improvements: [
      
    ],
    featured: true,
    year: "2024",
    aspect: "square",
  },
  {
    id: "Machine Learning",
    title: "Potato Lead Detector",
    eyebrow: "Deteksi penyakit daun kentang menggunakan machine learning",
    tagline:
      "Membantu para petani dalam mendeteksi penyakit pada tanaman kentang di daerah sumataera barat bebacis machine learning.",
    description:
      ".",
    technologies: [
      "Flutter",
      "Python",
      "Tensoflow",
      "Sql",
    ],
    githubUrl: "https://github.com/Abibshd",
    liveUrl: "",
    image: "/projects/Leaf.png",
    challenges: [
        ],
    improvements: [
       
    ],
    featured: false,
    year: "2025",
    aspect: "tall",
  },
   {
    id: "Design",
    title: "Running App",
    eyebrow: "Desain UI/UX",
    tagline:
      "Mendesign UI/UX untuk aplikasi mobile yang membantu para pelari dalam melacak dan meningkatkan performa lari mereka.",
    description:
      ".",
    technologies: [
      "Figma",
       
    ],
    githubUrl: "https://github.com/Abibshd",
    liveUrl: "",
    image: "/projects/Design App Run.jpg",
    challenges: [
        ],
    improvements: [
       
    ],
    featured: false,
    year: "2024",
    aspect: "tall",
  },
];
