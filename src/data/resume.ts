export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string[];
  stack: string[];
  techStack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  details?: {
    context: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
    results: string[];
  };
  featured: boolean;
}

export const resumeData = {
  name: "Mohammed CHIRAH",
  title: "Full-Stack Developer",
  email: "mohammed.chirah@gmail.com",
  phone: "+212 603 359272",
  linkedin: "https://www.linkedin.com/in/mohammed-chirah/",
  github: "[ADD LINK]",
  location: "Morocco — Remote & Casablanca hybrid availability",
  profileImage: "/Portfolio.png",
  resumePdf: "/resume.pdf",

  summary: "Full stack developer passionate about new technologies and their impact on businesses, motivated to contribute to the digital transformation of organizations and acquire new professional experiences.",

  focus: [
    "business apps",
    "APIs",
    "PI System integration"
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "BIZOPS",
      location: "Casablanca",
      period: "04-2025",
      responsibilities: ["PI System Engineer: Integration of business applications and solutions with AVEVA PI System (PI AF, PI Data Archive, Event Frames)."],
      metrics: "[ADD METRICS]"
    },
    {
      title: "Full Stack Developer (Freelance)",
      company: "KamasTrade",
      location: "Remote",
      period: "11-2024 to 02-2025",
      responsibilities: ["Web app for selling, buying, and exchanging 'Kamas' (Dofus/Dofus Touch)."],
      metrics: "[ADD METRICS]"
    },
    {
      title: "Full Stack Developer",
      company: "ARK-X TALENT FACTORY",
      location: "Casablanca",
      period: "02-2024 to 06-2024",
      responsibilities: ["APIs (Node.js/Express), dynamic interfaces (React/Redux), MongoDB management."],
      metrics: "[ADD METRICS]"
    },
    {
      title: "CIH Online Application Administrator",
      company: "CIH BANK",
      location: "Casablanca",
      period: "10-2023 to 02-2024",
      responsibilities: ["Subscriber account management, customer support."],
      metrics: "[ADD METRICS]"
    },
    {
      title: "Full Stack Developer",
      company: "BIZOPS",
      location: "Casablanca",
      period: "04-2023 to 06-2023",
      responsibilities: ["Web attendance management app interacting with a ZKTeco K14 device."],
      metrics: "[ADD METRICS]"
    }
  ],

  education: [
    {
      degree: "Specialized Master",
      institution: "ENSET Mohammedia",
      period: "10-2024",
      description: "Software Development & Cloud Computing"
    },
    {
      degree: "Jobintech Academy",
      institution: "ARK-X TALENT FACTORY, Casablanca",
      period: "02-2024 to 06-2024",
      description: "Full Stack MERN"
    },
    {
      degree: "Bachelor (Licence Sciences et Techniques)",
      institution: "FST Settat",
      period: "2022-2023",
      description: "Information systems & digital transformation"
    },
    {
      degree: "DEUST",
      institution: "FST Settat",
      period: "2019-2022",
      description: "Mathematics, Computer Science, Physics"
    },
    {
      degree: "Baccalaureate",
      institution: "Lycée Elkindy Casablanca",
      period: "2018-2019",
      description: "Physics Sciences"
    }
  ],

  projects: [
    {
      slug: "delivery-tracking",
      title: "DeliveryTracking",
      client: "Managem",
      category: ["PI System", "Industrial Data"],
      stack: ["PI AF", "[ADD DETAILS]"],
      techStack: ["PI AF", ".NET", "SQL"], // added for ProjectCard
      description: "Truck logistics tracking (BRUT, TARE, NET, discrepancies, unloading duration) based on PI AF.",
      liveUrl: "[ADD LINK]",
      githubUrl: "[ADD LINK]",
      details: {
        context: "[ADD DETAILS]",
        problem: "[ADD DETAILS]",
        solution: "Implemented truck logistics tracking based on PI AF.",
        keyFeatures: [
          "Track BRUT, TARE, NET",
          "Monitor discrepancies",
          "Monitor unloading duration"
        ],
        results: ["[ADD METRICS]"]
      },
      featured: true
    },
    {
      slug: "bizdata-router",
      title: "BizDataRouter",
      client: "CIMAT",
      category: [".NET", "Backend"],
      stack: [".NET", "SQL Server", "PI Data Archive"],
      techStack: [".NET", "SQL Server", "PI Data Archive"], // added
      description: ".NET backend service automating transfer of data from PI Data Archive to SQL Server.",
      liveUrl: "[ADD LINK]",
      githubUrl: "[ADD LINK]",
      details: {
        context: "[ADD DETAILS]",
        problem: "[ADD DETAILS]",
        solution: "Automated data transfer service between PI Data Archive and SQL Server.",
        keyFeatures: [
          "Automated data transfer",
          "Integration with PI Data Archive",
          "SQL Server management"
        ],
        results: ["[ADD METRICS]"]
      },
      featured: true
    },
    {
      slug: "event-monitoring",
      title: "EventMonitoring",
      client: "CIMAT",
      category: ["PI System", "Industrial Data", "React"],
      stack: ["PI System", "PI AF", "[ADD DETAILS]"],
      techStack: ["PI System", "PI AF", "React"], // added
      description: "App for monitoring CIMAT shutdowns and manual entries integrated with PI System / PI AF.",
      liveUrl: "[ADD LINK]",
      githubUrl: "[ADD LINK]",
      details: {
        context: "[ADD DETAILS]",
        problem: "[ADD DETAILS]",
        solution: "Monitoring app integrated with PI System & PI AF.",
        keyFeatures: [
          "Monitor CIMAT shutdowns",
          "Manage manual entries",
          "PI System integration"
        ],
        results: ["[ADD METRICS]"]
      },
      featured: true
    },
    {
      slug: "sms-gateway",
      title: "SmsGateway",
      client: "Managem",
      category: ["PI System", "Industrial Data"],
      stack: ["PI AF Event Frames", "[ADD DETAILS]"],
      techStack: ["PI AF Event Frames", "Node.js"], // added
      description: "Real-time alert solution sending SMS on critical events via PI AF Event Frames.",
      liveUrl: "[ADD LINK]",
      githubUrl: "[ADD LINK]",
      details: {
        context: "[ADD DETAILS]",
        problem: "[ADD DETAILS]",
        solution: "Real-time SMS alert solution based on critical events.",
        keyFeatures: [
          "Real-time alerts",
          "SMS integration",
          "Event Frames monitoring"
        ],
        results: ["[ADD METRICS]"]
      },
      featured: false
    },
    {
      slug: "kamas-trade",
      title: "KamasTrade",
      client: "Freelance",
      category: ["MERN", "Full Stack"],
      stack: ["MongoDB", "Express", "React", "Node.js"],
      techStack: ["MongoDB", "Express", "React", "Node.js"], // added
      description: "Web app for selling/buying/exchanging Kamas using MERN.",
      liveUrl: "[ADD LINK]",
      githubUrl: "[ADD LINK]",
      details: {
        context: "[ADD DETAILS]",
        problem: "[ADD DETAILS]",
        solution: "Developed a secure web platform for game currency exchange.",
        keyFeatures: [
          "Sell, buy, and exchange Kamas",
          "User authentication",
          "Transaction management"
        ],
        results: ["[ADD METRICS]"]
      },
      featured: false
    },
    {
      slug: "bizops-attendance",
      title: "BIZOPS Attendance Dashboard",
      client: "BIZOPS",
      category: ["Web App", "Laravel"],
      stack: ["Laravel", "TailwindCSS", "MySQL", "ZKTeco K14"],
      techStack: ["Laravel", "TailwindCSS", "MySQL", "ZKTeco K14"], // added
      description: "Employee attendance management dashboard using Laravel, TailwindCSS, MySQL.",
      liveUrl: "[ADD LINK]",
      githubUrl: "[ADD LINK]",
      details: {
        context: "[ADD DETAILS]",
        problem: "[ADD DETAILS]",
        solution: "Dashboard interacting with ZKTeco K14 device for attendance tracking.",
        keyFeatures: [
          "Employee attendance management",
          "ZKTeco K14 device integration",
          "Data visualization dashboard"
        ],
        results: ["[ADD METRICS]"]
      },
      featured: false
    }
  ],

  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "TailwindCSS"],
    backend: ["Node.js", "Express.js", "Java", "Spring Boot", ".NET"],
    database: ["SQL", "MySQL", "SQL Server", "NoSQL", "MongoDB"],
    realtime: ["WebSocket (Socket.io)"],
    tools: ["Git", "GitHub", "Postman", "Agile"],
    industrial: ["AVEVA PI System", "PI AF", "PI Data Archive", "Event Frames"]
  },

  certifications: [
    {
      title: "AVEVA PI Installation Specialist",
      issuer: "AVEVA",
      date: "[ADD DETAILS]"
    },
    {
      title: "AVEVA PI Infrastructure Specialist",
      issuer: "AVEVA",
      date: "[ADD DETAILS]"
    }
  ],

  languages: [
    { name: "French", level: "Advanced" },
    { name: "English", level: "Intermediate" }
  ],

  services: [
    {
      title: "Web App Development",
      description: "Custom web applications built with modern frameworks to solve business challenges.",
      price: "[STARTING AT]",
      features: ["Responsive Design", "Custom Functionality", "Performance Optimized"]
    },
    {
      title: "API Development & Integration",
      description: "Robust REST and real-time APIs connecting your services effectively.",
      price: "[STARTING AT]",
      features: ["RESTful APIs", "WebSocket/Real-time", "Database Architecture"]
    },
    {
      title: "Industrial Data Integration (AVEVA PI System)",
      description: "Bridging the gap between operational technology and IT systems.",
      price: "[STARTING AT]",
      features: ["PI AF Modeling", "Event Frames", "Data Extractions"]
    },
    {
      title: "Maintenance & Enhancements",
      description: "Ongoing support and feature implementation for existing platforms.",
      price: "[STARTING AT]",
      features: ["Bug Fixes", "Feature Additions", "Code Refactoring"]
    }
  ],

  blogPosts: [
    { title: "Hire a Top Full Stack Developer in Morocco Remote: A Guide", slug: "hire-top-full-stack-developer-morocco-remote" },
    { title: "The Ultimate Guide to AVEVA PI System Integration for Factories", slug: "aveva-pi-system-integration-guide" },
    { title: "Building Scalable Enterprise Solutions as a .NET Developer", slug: "scalable-enterprise-solutions-dotnet-developer" },
    { title: "React Developer Tips: Mastering Redux and Next.js App Router", slug: "react-developer-tips-redux-nextjs-app-router" },
    { title: "Unlocking Insights with PI AF Event Frames and Real-time Sockets", slug: "insights-pi-af-event-frames-real-time-sockets" },
    { title: "Why Spring Boot is the Preferred Choice for Enterprise Backend APIs", slug: "spring-boot-preferred-choice-enterprise-backend-apis" },
    { title: "Connecting OT and IT: AVEVA PI Data Archive to SQL Server", slug: "connecting-ot-it-aveva-pi-data-archive-sql-server" },
    { title: "Securing Modern Web Apps: A Full Stack Developer's Perspective", slug: "securing-modern-web-apps-full-stack" },
    { title: "MERN Stack vs .NET Core: Choosing the Right Backend Architecture", slug: "mern-stack-vs-dotnet-core-backend-architecture" },
    { title: "Bridging Industrial Data: Advanced PI System Engineer Best Practices", slug: "bridging-industrial-data-advanced-pi-system-engineer" }
  ]
};
