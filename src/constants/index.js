import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tata Consultancy Services (TCS)",
    company_name: "Project Intern",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "June 2025 -- August 2025",
    points: [
      "Built and optimized responsive, scalable frontend components using React.js and Tailwind CSS.",
      "Worked in an agile team to deliver high-performance UI with a focus on software design and user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Advizy.in",
    company_name:  "Full Stack Developer",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "October 2024 -- June 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed modular, maintainable code with React.js and Node.js.",
      "Enhanced data visualization and user workflows, increasing engagement by 20%.",
      "Collaborated across teams for product releases and continuous integration.",
    ],
  },
  {
    title: "PowerPlantFoods Pvt. Ltd",
    company_name: "Full Stack Developer",
    icon: shopify,
    iconBg: "#FFFFFF",
    date: "June 2023 -- August 2023",
    points: [
      "Improved backend performance by 30% via efficient algorithmic logic and database optimization",
      "Delivered 2 production-grade web applications supporting concurrent users and real-time updates.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Healt AI - Rural Symptom Guidance & Follow-Up Platform",
    description:
      "Designed an AI-driven healthcare platform with multilingual support, reminders (SMS/WhatsApp), and NGO dashboards",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Abhishekpat/HealthAI/tree/main/Healt-AI-Most-final",
    demo_link: "https://bright-babka-520bb4.netlify.app",
  },
  {
    name: "Blood Donation & Emergency Finder Platform",
    description:
      " Built full-stack platform for donor-hospital-patient matching with real-time availability and Google Maps API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Google-Maps-API",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Abhishekpat/Blood_donation",
    demo_link: "https://example.com/job-it-demo",
  },
  {
    name: "Secure Group Chat Application for Hertzsoft Technologies",
    description:
      "Developed a real-time encrypted chat system . Focused on scalability, concurrency, and security. ",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Abhishekpat/SCF_Chat_App",
    demo_link: "https://talk-a-tive-7fgq.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
