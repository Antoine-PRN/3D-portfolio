import { SSSsecurite, iut } from "../assets/images";
import {
  audit,
  contact,
  css,
  express,
  gaspump,
  git,
  github,
  html,
  java,
  javascript,
  mariadb,
  mongodb,
  mui,
  music,
  nodejs,
  postgresql,
  python,
  plane,
  react,
  tailwindcss,
  vuejs,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: mariadb,
    name: "Mariadb",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: postgresql,
    name: "Postgresql",
    type: "Database",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: vuejs,
    name: "VueJS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Stage Développeur Full Stack",
    company_name: "3S Sécurité",
    icon: SSSsecurite,
    iconBg: "#1F7DC7",
    date: "Janvier 2024 - Présent",
    points: [
      "Développement d'outils de pentest (détection de failles XSS).",
      "Collaboration avec un deuxième stagiaire et répartition des tâches.",
      "Suivi et amélioration d'une application de supervision.",
    ],
  },
  {
    id: 2,
    title: "Stage Développeur Full Stack",
    company_name: "3S Sécurité",
    icon: SSSsecurite,
    iconBg: "#323232",
    date: "Avril 2023 - Juin 2023",
    points: [
      "Apprentissage de nouvelle technologies telles que React et Mariadb.",
      "Collaboration avec un autre stagiaire et le maître de stage pour mener à bien le projet.",
      "Implementation de la partie design et de la partie fonctionnelle de l'application.",
      "Présentations de l'avancée de l'application aux reste de l'entreprise.",
    ],
  },
  {
    id: 3,
    company_name: "IUT de Belfort",
    icon: iut,
    title: "BUT Informatique à l'IUT de Belfort",
    iconBg: "#C9E768",
    date: "Septembre 2022 - Présent",
    points: [
      "Apprentissage de diverses technologies et de méthodes de travail.",
      "Mise en oeuvre des technologies apprises en cours à travers différents projets de groupe.",
      "Collaboration avec diverses personnes à travers des projets de groupe.",
      "Présentations des différents projets face à des professeurs de l'IUT.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Antoine-PRN',
  }
];

export const projects = [
  {
    iconUrl: plane,
    theme: 'btn-back-green',
    name: 'Portfolio en ligne',
    type: 'Personnel',
    description: "J'ai conçu ce portfolio pour mettre en avant mes compétences et connaissances à travers un exemple concret.",
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: audit,
    theme: 'btn-back-blue',
    name: "Outil d'audits simplifié",
    type: 'Professionnel',
    description: "J'ai aidé à développer une application ayant pour but d'aider des experts comptables à réaliser des audits dans des entreprises sur la sécurité de leurs données.",
  },
  {
    iconUrl: gaspump,
    theme: 'btn-back-yellow',
    name: 'FuelFinder',
    type: 'Personnel',
    description: "J'ai créé une application permettant de comparer les prix des stations essences de toute la France pour trouver la moins chère proche de chez soi ",
    link: 'https://github.com/Antoine-PRN/FuelFinder.git',
  },
  {
    iconUrl: music,
    theme: 'btn-back-pink',
    name: 'Festival fictif',
    type: 'Études',
    description: "Lors d'un projet dans le cadre de l'IUT, mon groupe et moi avons conçu de A à Z un site présentant un festival fictif permettant à des prestataires, des artistes, des clients et des administrateurs d'intervenir.",
    link: 'https://github.com/MaxencePaulin/sae_s3s4',
  }
];