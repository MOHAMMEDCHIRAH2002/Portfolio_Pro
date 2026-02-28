// ============================================
// Single Source of Truth — All content from PROFILE_DATA.md
// ============================================

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  summary: string;
  photoUrl: string;
  resumeUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: "fulltime" | "freelance" | "internship";
  startDate: string;
  endDate: string;
  description: string[];
  stack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  field: string;
  startYear: string;
  endYear: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  stack: string[];
  tags: string[];
  featured: boolean;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}

// ============================================
// Data
// ============================================

export const profile: Profile = {
  name: "Mohammed Chirah",
  title: "Full-Stack Developer",
  email: "mohammed.chirah@gmail.com",
  phone: "+212 603 359272",
  github: "@MOHAMMEDCHIRAH2002",
  githubUrl: "https://github.com/MOHAMMEDCHIRAH2002",
  linkedin: "@mohammed-chirah",
  linkedinUrl: "https://linkedin.com/in/mohammed-chirah",
  location: "Casablanca, Morocco",
  summary:
    "Passionate full-stack developer with a strong interest in new technologies and their impact on businesses. Motivated to contribute to the digital transformation of organizations while continuously developing technical and professional expertise through real-world projects and innovative solutions.",
  photoUrl: "/profile.png",
  resumeUrl: "/resume.pdf",
};

export const experiences: Experience[] = [
  {
    id: "bizops-2025",
    role: "Full-Stack Developer",
    company: "BIZOPS",
    location: "Casablanca",
    type: "fulltime",
    startDate: "Apr 2025",
    endDate: "Present",
    description: [
      "PI System Engineer: integration of business and industrial solutions using AVEVA PI technologies (PI AF, PI Data Archive, Event Frames).",
    ],
    stack: ["AVEVA PI", "PI AF", "PI Data Archive", ".NET"],
  },
  {
    id: "kamastrade",
    role: "Full-Stack Developer",
    company: "KamasTrade",
    location: "Remote",
    type: "freelance",
    startDate: "Nov 2024",
    endDate: "Feb 2025",
    description: [
      "Designed and developed a web app for buying/selling/exchanging Kamas (MERN stack solution).",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: "arkx",
    role: "Full-Stack Developer",
    company: "ARK-X TALENT FACTORY",
    location: "Casablanca",
    type: "fulltime",
    startDate: "Feb 2024",
    endDate: "Jun 2024",
    description: [
      "Built REST APIs with Node.js/Express, dynamic UI with React/Redux, data management with MongoDB.",
    ],
    stack: ["Node.js", "Express.js", "React", "Redux", "MongoDB"],
  },
  {
    id: "cih-bank",
    role: "CIH Online Application Administrator",
    company: "CIH BANK",
    location: "Casablanca",
    type: "fulltime",
    startDate: "Oct 2023",
    endDate: "Feb 2024",
    description: [
      "Managed subscriber accounts and provided customer support for CIH Online banking app.",
    ],
    stack: [],
  },
  {
    id: "bizops-2023",
    role: "Full-Stack Developer",
    company: "BIZOPS",
    location: "Casablanca",
    type: "internship",
    startDate: "Apr 2023",
    endDate: "Jun 2023",
    description: [
      "Web-based attendance system integrated with ZKTeco K14 biometric device.",
    ],
    stack: ["Laravel", "TailwindCSS", "MySQL"],
  },
];

export const education: Education[] = [
  {
    id: "enset",
    degree: "Specialized Master's Degree",
    institution: "ENSET Mohammedia",
    field: "Software Development & Cloud Computing",
    startYear: "2024",
    endYear: "Present",
  },
  {
    id: "arkx-edu",
    degree: "Jobintech Academy",
    institution: "ARK-X TALENT FACTORY",
    field: "Full-Stack MERN Program",
    startYear: "2024",
    endYear: "2024",
  },
  {
    id: "fst",
    degree: "Bachelor's Degree in Science & Technology",
    institution: "FST Settat",
    field: "Information Systems & Digital Transformation",
    startYear: "2019",
    endYear: "2023",
  },
  {
    id: "bac",
    degree: "Baccalaureate",
    institution: "El Kindy High School, Casablanca",
    field: "Physical Sciences",
    startYear: "2018",
    endYear: "2019",
  },
];

export const projects: Project[] = [
  {
    id: "delivery-tracking",
    slug: "delivery-tracking",
    title: "DeliveryTracking",
    client: "Managem",
    description:
      "Logistics tracking for trucks: gross/tare/net, discrepancies, unloading duration.",
    longDescription:
      "A comprehensive logistics tracking system for Managem, monitoring truck deliveries including gross, tare, and net weight measurements, detecting discrepancies, and tracking unloading duration using PI AF technology.",
    problem:
      "Manual tracking of truck deliveries was error-prone and lacked real-time visibility into discrepancies and unloading performance.",
    solution:
      "Built an automated tracking system using AVEVA PI AF to monitor all aspects of the delivery lifecycle in real-time.",
    stack: ["AVEVA PI", "PI AF", ".NET"],
    tags: ["Industrial", "IoT", "Real-time"],
    featured: true,
    imageUrl: "[ADD SCREENSHOTS]",
    liveUrl: "[ADD LINK]",
    githubUrl: "[ADD GITHUB]",
  },
  {
    id: "biz-data-router",
    slug: "biz-data-router",
    title: "BizDataRouter",
    client: "CIMAT",
    description:
      ".NET backend service automating transfer from PI Data Archive to SQL Server.",
    longDescription:
      "A .NET backend service designed for CIMAT that automates the transfer of data from PI Data Archive to SQL Server, ensuring reliable and efficient data synchronization between industrial and business systems.",
    problem:
      "Manual data transfer from PI Data Archive to SQL Server was slow, unreliable, and required constant manual intervention.",
    solution:
      "Developed an automated .NET service that handles data routing between PI Data Archive and SQL Server with fault tolerance and scheduling.",
    stack: [".NET", "PI Data Archive", "SQL Server"],
    tags: ["Backend", "Data", "Automation"],
    featured: true,
    imageUrl: "[ADD SCREENSHOTS]",
    liveUrl: "[ADD LINK]",
    githubUrl: "[ADD GITHUB]",
  },
  {
    id: "event-monitoring",
    slug: "event-monitoring",
    title: "EventMonitoring",
    client: "CIMAT",
    description:
      "Monitoring CIMAT shutdown events + manual inputs using PI System / PI AF.",
    longDescription:
      "A monitoring system for CIMAT that tracks shutdown events and manual inputs within the PI System and PI AF framework, providing real-time visibility into plant operations.",
    problem:
      "Shutdown events and manual inputs were difficult to track and correlate, leading to gaps in operational visibility.",
    solution:
      "Created a comprehensive monitoring solution using PI System and PI AF that captures and correlates all shutdown events with manual inputs.",
    stack: ["PI System", "PI AF", ".NET"],
    tags: ["Industrial", "Monitoring", "Real-time"],
    featured: true,
    imageUrl: "[ADD SCREENSHOTS]",
    liveUrl: "[ADD LINK]",
    githubUrl: "[ADD GITHUB]",
  },
  {
    id: "sms-gateway",
    slug: "sms-gateway",
    title: "SmsGateway",
    client: "Managem",
    description:
      "Real-time SMS alerts during critical events using PI AF Event Frames.",
    longDescription:
      "A real-time alert system for Managem that sends SMS notifications during critical events, leveraging PI AF Event Frames to detect and respond to operational anomalies instantly.",
    problem:
      "Critical industrial events went unnoticed until manual checks, causing delayed responses and potential safety issues.",
    solution:
      "Implemented a real-time SMS gateway using PI AF Event Frames that automatically detects critical events and sends instant SMS alerts to relevant personnel.",
    stack: ["PI AF", "Event Frames", ".NET"],
    tags: ["Industrial", "Alerts", "Real-time"],
    featured: false,
    imageUrl: "[ADD SCREENSHOTS]",
    liveUrl: "[ADD LINK]",
    githubUrl: "[ADD GITHUB]",
  },
  {
    id: "kamastrade",
    slug: "kamastrade",
    title: "KamasTrade",
    client: "KamasTrade",
    description:
      "MERN web app for Kamas trading (MongoDB, Express, React, Node.js).",
    longDescription:
      "A full-featured web application for buying, selling, and exchanging Kamas, built with the MERN stack. Features include user authentication, real-time trading, and transaction management.",
    problem:
      "Users needed a reliable and user-friendly platform for trading Kamas with secure transactions.",
    solution:
      "Designed and developed a complete MERN stack web application with real-time features, secure authentication, and an intuitive trading interface.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    tags: ["Web App", "MERN", "Full-Stack"],
    featured: true,
    imageUrl: "[ADD SCREENSHOTS]",
    liveUrl: "[ADD LINK]",
    githubUrl: "[ADD GITHUB]",
  },
  {
    id: "bizops-attendance",
    slug: "bizops-attendance",
    title: "BIZOPS Attendance Dashboard",
    client: "BIZOPS",
    description:
      "Attendance management dashboard integrated with biometric device.",
    longDescription:
      "An attendance management dashboard built for BIZOPS that integrates with the ZKTeco K14 biometric device, providing real-time attendance tracking, reporting, and employee management features.",
    problem:
      "Attendance tracking relied on manual processes and disconnected systems, making it difficult to generate accurate reports.",
    solution:
      "Built a web-based dashboard using Laravel and TailwindCSS that connects directly to the ZKTeco K14 biometric device for automated attendance management.",
    stack: ["Laravel", "TailwindCSS", "MySQL"],
    tags: ["Web App", "Dashboard", "Full-Stack"],
    featured: false,
    imageUrl: "[ADD SCREENSHOTS]",
    liveUrl: "[ADD LINK]",
    githubUrl: "[ADD GITHUB]",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & UI",
    skills: ["Java", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Express.js", ".NET"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Redux"],
  },
  {
    category: "Databases",
    skills: ["SQL", "NoSQL", "MongoDB"],
  },
  {
    category: "Real-time",
    skills: ["WebSocket", "Socket.io"],
  },
  {
    category: "Tools & Process",
    skills: ["Git/GitHub", "Postman", "Agile", "AVEVA PI"],
  },
];

export const certifications: Certification[] = [
  {
    id: "pi-installation",
    name: "AVEVA PI Installation Specialist",
    issuer: "AVEVA",
  },
  {
    id: "pi-infrastructure",
    name: "AVEVA PI Infrastructure Specialist",
    issuer: "AVEVA",
  },
];

export const languages: Language[] = [
  { name: "French", level: "Advanced" },
  { name: "English", level: "Intermediate" },
];

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Application Development",
    description:
      "Full-stack web applications built with modern technologies. From concept to deployment.",
    features: [
      "Custom web application",
      "Responsive design",
      "API development",
      "Database design",
      "Deployment & hosting",
    ],
    price: "[STARTING AT]",
    icon: "code",
  },
  {
    id: "pi-system",
    title: "AVEVA PI System Integration",
    description:
      "Industrial data integration and monitoring solutions using AVEVA PI technologies.",
    features: [
      "PI AF configuration",
      "Event Frames setup",
      "Data Archive integration",
      "Real-time monitoring",
      "Custom notifications",
    ],
    price: "[STARTING AT]",
    icon: "cpu",
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description:
      "Strategic technical guidance for your digital transformation projects.",
    features: [
      "Architecture review",
      "Technology selection",
      "Code audit",
      "Performance optimization",
      "Team mentoring",
    ],
    price: "[STARTING AT]",
    icon: "lightbulb",
  },
];

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "at-a-glance", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
