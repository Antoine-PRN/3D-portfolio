import { SSSsecurite, cesi, iut, matane } from "../assets/images";
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
  nuxt,
  typescript,
  rootme,
  kali,
  neurons,
  threejs,
  logo3s
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
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
    imageUrl: vuejs,
    name: "VueJS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "Typescript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt js",
    type: "Backend",
  },
  {
    imageUrl: rootme,
    name: "Rootme",
    type: "Pentest",
  },
  {
    imageUrl: kali,
    name: "Kali Linux",
    type: "Environment",
  },
  {
    imageUrl: threejs,
    name: "ThreeJS",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mariadb,
    name: "Mariadb",
    type: "Database",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "Postgresql",
    type: "Database",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Contrat en alternance",
    company_name: "3S Sécurité",
    icon: SSSsecurite,
    iconBg: "#192457",
    date: "Septembre 2024 - Présent",
    points: [
      "Développement du site web de l'entreprise en VueJS",
      "Développement d'une solution de supervision.",
      "Superviser différents équipements (pare-feux, switch, etc).",
      "Participation à des tests de penetration chez des clients ou sur leurs plateformes web.",
    ],
  },
  {
    id: 2,
    title: "Mastère MAALSI au CESI de Dijon",
    company_name: "CESI",
    icon: cesi,
    iconBg: "#fbe216",
    date: "Septembre 2024 - Présent",
    points: [
      "Réalisation de projets en équipe",
      "Superviser et assurer le développement des applications logicielles",
      "Concevoir l’architecture logicielle du SI",
      "Superviser le portefeuille projets de la DSI et sa mise en œuvre",
    ],
  },
  {
    id: 3,
    title: "Stage Développeur Full Stack",
    company_name: "3S Sécurité",
    icon: SSSsecurite,
    iconBg: "#192457",
    date: "Janvier 2024 - Mai 2024",
    points: [
      "Développement d'une solution de supervision.",
      "Entrainement au pentest/hacking éthique via la platerforme Rootme",
      "Collaboration avec l'équipe de développement",
    ],
  },
  {
    id: 4,
    title: "Stage Développeur Full Stack",
    company_name: "3S Sécurité",
    icon: SSSsecurite,
    iconBg: "#192457",
    date: "Avril 2023 - Juin 2023",
    points: [
      "Apprentissage de nouvelle technologies telles que React et Mariadb.",
      "Collaboration avec l'équipe de développement et de sécurité pour mener à bien le projet.",
      "Implementation de la partie design et de la partie fonctionnelle de l'application.",
      "Présentations de l'avancée de l'application aux reste de l'entreprise.",
    ],
  },
  {
    id: 5,
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
  {
    id: 6,
    company_name: "Cégep de Matane",
    icon: matane,
    title: "DEC (Diplôme d'études collégiales) Informatique au Cégep de Matane, Québec",
    iconBg: "#96BEF4",
    date: "Septembre 2021 - Juin 2022",
    points: [
      "Découvertes des bases du développement web et du développement d'algorithmes",
      "Suivi de la formation Cisco CCNA 1 Routing and Switching",
      "Initialisation à la programmation orientée objet en C#",
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
    iconUrl: logo3s,
    theme: 'btn-back-blue',
    name: 'Site vitrine de l\'entreprise',
    type: 'Professionnel',
    description: "Développement du site vitrine de l\'entreprise à partir de maquette fournies par un designer. Les technologies utilisées sont VueJS, TypeScript ainsi que la bibliothèque Vuetify.",
    link: 'https://www.3s-securite.eu',
  },
  {
    iconUrl: neurons,
    theme: 'btn-back-orange',
    name: 'Solution de supervision',
    type: 'Professionnel',
    description: "Développement d'une application de supervision permettant de superviser les équipements du SI (système d'informations) d'une entreprise. Les technologies utilisées sont ReactJS, Python Flask ainsi que MariaDB",
  },
  {
    iconUrl: plane,
    theme: 'btn-back-green',
    name: 'Portfolio en ligne',
    type: 'Personnel',
    description: "Développement d'un portfolio utilisant le moteur 3D de javascript permettant de mettre en avant mes compétences et connaissances à travers un exemple concret.",
    link: 'https://github.com/Antoine-PRN/3D-portfolio',
  },
  {
    iconUrl: audit,
    theme: 'btn-back-blue',
    name: "Outil de réalisation d'audits de sécurité",
    type: 'Professionnel',
    description: "J'ai développé une application ayant pour but d'aider des experts comptables à réaliser des audits dans des entreprises sur la sécurité de leurs données et sur leur SI. Les technologies utilisées sont ReactJS, Python Flask ainsi que MariaDB",
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