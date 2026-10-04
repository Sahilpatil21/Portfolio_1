const PORTFOLIO_DATA = {
  profile: {
    name: "Sahil Sagar Patil",
    firstName: "Sahil",
    tagline: "I Build, Innovate & Solve Real World Problems",
    subtitle:
      "Computer Science & AI student passionate about backend development, data engineering, and intelligent systems.",
    email: "sahil09patil@gmail.com",
    phone: "+91-7218097304",
    location: "Kolhapur, Maharashtra, India",
    linkedin: "https://linkedin.com/in/sahil-patil-51697731",
    github: "https://github.com/Sahilpatil21",
    resumePdf: "./Sahil_Patil_Backend_main.pdf",
    profileImage: "./assets/profile.png",
  },

  stats: [
    { label: "Projects", value: 10, suffix: "+" },
    { label: "Certifications", value: 11, suffix: "+" },
    { label: "Experience", value: 6, suffix: "+" },
    { label: "Technologies", value: 15, suffix: "+" },
  ],

  about: {
    paragraphs: [
      "I'm a motivated B.Tech Computer Science & Engineering (AI) student at D Y Patil College of Engineering and Technology, Kolhapur, with a strong foundation in backend development, machine learning, and data-driven problem solving.",
      "I enjoy architecting secure full-stack applications with Node.js and MongoDB, building ML pipelines with Python, and turning complex datasets into actionable insights. From JWT-secured APIs to GenAI-powered tools, I focus on clean code and real-world impact.",
      "My professional journey includes a 10-week AI-ML Virtual Internship with Google and EduSkills, where I explored neural networks, ethical AI, and worked with real-world datasets. I've also completed multiple job simulations from leading companies including JP Morgan (Software Engineering), TCS (GenAI Data Analytics), Deloitte (Data Analytics & Cybersecurity), and various other industry leaders.",
      "I specialize in building scalable backend systems with clean MVC architecture, implementing secure authentication with JWT tokens, and designing REST APIs that power modern applications. My experience spans full-stack MERN development, data engineering with pandas and scikit-learn, and AI integration using Gemini and other cutting-edge APIs.",
      "Beyond coding, I'm deeply involved in the tech community as a Google Developer Student Club (GDSC) volunteer at my college, where I organize workshops, hackathons, and coding initiatives. I've also competed in the Smart India Hackathon, collaborating in fast-paced environments to build innovative solutions.",
      "I'm passionate about continuous learning and staying updated with emerging technologies. My approach combines strong technical fundamentals with systems thinking, focusing on building intelligent solutions that solve real-world problems with clean, maintainable code.",
      "My goal is to contribute to innovative projects in data engineering, backend development, and AI/ML systems while mentoring the next generation of developers and pushing the boundaries of what's possible with technology.",
    ],
    highlights: [
      "Backend & API Design",
      "Machine Learning & Data Analytics",
      "GenAI Integration",
      "Clean MVC Architecture",
      "Full-Stack Development",
      "Data Engineering",
      "System Design",
      "Leadership & Mentorship",
    ],
  },

  experience: [
    {
      type: "internship",
      title: "AI-ML Virtual Internship",
      company: "EduSkills × AICTE × Google for Developers",
      period: "Jul 2024 – Sep 2024",
      duration: "10 weeks",
      description:
        "Completed a national virtual internship exploring core AI/ML concepts, neural networks, ethical AI, and hands-on work with real-world datasets.",
      tags: ["AI/ML", "Neural Networks", "Python"],
    },
    {
      type: "simulation",
      title: "Software Engineering Job Simulation",
      company: "JP Morgan (Forage)",
      period: "Jul 2026",
      description:
        "Built practical tasks covering project setup, Kafka integration, H2 database, and REST API development.",
      tags: ["Kafka", "REST API", "Java"],
    },
    {
      type: "simulation",
      title: "GenAI Powered Data Analytics Simulation",
      company: "TCS (Forage)",
      period: "Jun 2026",
      description:
        "Performed EDA, AI-driven delinquency prediction, data storytelling, and collections strategy implementation.",
      tags: ["GenAI", "EDA", "Data Analytics"],
    },
    {
      type: "simulation",
      title: "Data Analytics Job Simulation",
      company: "Deloitte (Forage)",
      period: "Jun 2026",
      description:
        "Completed tasks in data analysis and forensic technology for enterprise analytics workflows.",
      tags: ["Data Analysis", "Forensic Tech"],
    },
    {
      type: "simulation",
      title: "Cybersecurity Job Simulations",
      company: "Deloitte & Forage",
      period: "Aug 2026",
      description:
        "Multiple simulations covering phishing email design, incident response, penetration testing, and security awareness.",
      tags: ["Cybersecurity", "Incident Response", "Pen Testing"],
    },
    {
      type: "hackathon",
      title: "Smart India Hackathon Finalist",
      company: "SIH",
      period: "2024",
      description:
        "Collaborated in a fast-paced sprint to build a native Android application using Java.",
      tags: ["Android", "Java", "Teamwork"],
    },
    {
      type: "volunteer",
      title: "Google Developer Student Club Volunteer",
      company: "GDSC, DY Patil COET",
      period: "2024 – Present",
      description:
        "Organized workshops, hackathons, and coding initiatives for the campus developer community.",
      tags: ["Community", "Leadership"],
    },
  ],

  certifications: [
    {
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills · AICTE · Google",
      year: "2024",
      image: "./assets/certificates/eduskills-ai-ml.jpg",
      pdf: null,
    },
    {
      title: "Python Fundamentals",
      issuer: "Infosys Springboard",
      year: "2024",
      image: "./assets/certificates/infosys-python.jpg",
      pdf: null,
    },
    {
      title: "Accelerated Computing with CUDA Python",
      issuer: "NVIDIA DLI",
      year: "2024",
      image: "./assets/certificates/nvidia-cuda-python.jpg",
      pdf: null,
    },
    {
      title: "Accelerated Computing with CUDA C/C++",
      issuer: "NVIDIA DLI",
      year: "2024",
      image: "./assets/certificates/nvidia-cuda-cpp.jpg",
      pdf: null,
    },
    {
      title: "Microsoft Azure Certification",
      issuer: "Microsoft",
      year: "2024",
      image: null,
      pdf: "./Sahil AzureCertificate.pdf",
    },
    {
      title: "Software Engineering Simulation",
      issuer: "JP Morgan · Forage",
      year: "2026",
      image: null,
      pdf: "./JP_Morgan_Certificate.pdf",
    },
    {
      title: "GenAI Data Analytics Simulation",
      issuer: "TCS · Forage",
      year: "2026",
      image: null,
      pdf: "./TCS_Certificate.pdf",
    },
    {
      title: "Data Analytics Simulation",
      issuer: "Deloitte · Forage",
      year: "2026",
      image: null,
      pdf: "./Deloite_Certificate.pdf",
    },
    {
      title: "Cybersecurity Simulations",
      issuer: "Deloitte & Forage",
      year: "2026",
      image: null,
      pdf: "./Cyber_Security1.pdf",
    },
  ],

  projects: [
    {
  title: "ResearchMate",
  description:
    "AI-powered research paper intelligence and grounded RAG platform featuring hybrid dense + sparse retrieval (ChromaDB + BM25), Cross-Encoder reranking, multi-paper comparative analysis, and multi-tenant authentication.",
  stack: [
    "Python",
    "FastAPI",
    "Google Gemini API",
    "ChromaDB",
    "MongoDB Atlas",
    "Sentence-Transformers",
    "BM25",
    "Cloudinary",
    "Docker"
  ],
  github: "https://github.com/Sahilpatil21/ResearchMate",
  live: "https://researchmate-aqiv.onrender.com/",
  featured: true,
} ,
    {
      title: "Plant Analysis Tool",
      description:
        "Full-stack plant diagnostics platform with Gemini AI, JWT auth, and MVC architecture for image and text-based analysis.",
      stack: ["Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
      github: "https://github.com/Sahilpatil21/Plant_Analysis",
      live: "https://plant-analysis-97q7.onrender.com", // Add Render URL later
      featured: true,
    },
    {
      title: "Blog Web Application",
      description:
        "Authenticated CRUD blog platform with Mongoose schemas, Cloudinary uploads, and global error handling middleware.",
      stack: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
      github: "https://github.com/Sahilpatil21/Blogify--",
      live: "https://blogify-zpnu.onrender.com",
      featured: true,
    },
    {
      title: "Company Website & Contact Engine",
      description:
        "Responsive company website with a custom backend lead-capture pipeline connecting contact forms to MongoDB.",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/Sahilpatil21/S-D-TOOLS",
      live: "https://s-d-tools.onrender.com",
      featured: true,
    },
    {
      title: "Daily Work Tracker",
      description:
        "MERN app for tracking daily work entries, generating branded PDF reports, and managing client billing.",
      stack: ["React", "Node.js", "MongoDB", "PDFKit", "Tailwind"],
      github: "https://github.com/Sahilpatil21/Daily-Work-Tracker",
      live: "https://daily-work-tracker-bifu.onrender.com/",
      featured: true,
    },
    {
      title: "Doctor WebApp",
      description:
        "Healthcare web application with real-time features, appointment management, and full-stack architecture.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/Sahilpatil21/Doctor_WebApp",
      live: "https://doctor-webapp.onrender.com",
      featured: false,
    },
    {
      title: "Shopez E-Commerce",
      description:
        "Full e-commerce platform with separate frontend and backend services for product and order management.",
      stack: ["React", "Node.js", "MongoDB", "REST API"],
      github: "https://github.com/Sahilpatil21/Shopez",
      live: "",
      featured: false,
    },
    {
      title: "Stock Market Prediction — Nifty 50",
      description:
        "ML model forecasting Nifty 50 trends using feature engineering, time-series analysis, and scikit-learn.",
      stack: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
      github: "https://github.com/Sahilpatil21/Gen_AI",
      live: "",
      featured: true,
    },
    {
      title: "Car Mileage Prediction",
      description:
        "Linear regression model predicting vehicle mileage with EDA, feature selection, and high accuracy results.",
      stack: ["Python", "Pandas", "scikit-learn", "NumPy"],
      github: "",
      live: "",
      featured: false,
    },
    {
      title: "College Recommendation System",
      description:
        "ML-based college recommender using preprocessing pipelines and similarity-based filtering algorithms.",
      stack: ["Python", "Pandas", "scikit-learn", "NumPy"],
      github: "",
      live: "",
      featured: false,
    },
    {
      title: "Startup Mentoring Platform",
      description:
        "Full-stack web app for startup founders with an AI chatbot powered by Gemini for personalized mentoring.",
      stack: ["HTML", "CSS", "JavaScript", "Gemini API"],
      github: "",
      live: "",
      featured: true,
    },
  ],

  skills: {
    technical: [
      { name: "Node.js / Express", level: 85 },
      { name: "MongoDB / Mongoose", level: 80 },
      { name: "Python / ML", level: 82 },
      { name: "React / JavaScript", level: 78 },
      { name: "REST APIs / JWT Auth", level: 88 },
      { name: "Data Analysis (Pandas)", level: 80 },
      { name: "Git / GitHub", level: 85 },
      { name: "HTML / CSS / Tailwind", level: 82 },
    ],
    soft: [
      "Strong Communication",
      "Leadership",
      "Quick Learner",
      "Systems Thinking",
      "Collaborative Problem Solving",
      "Clean Code Architecture",
    ],
    languages: ["English", "Marathi", "Hindi"],
  },

  education: [
    {
      degree: "B.Tech — Computer Science & Engineering (AI)",
      school: "D Y Patil College of Engineering and Technology, Kolhapur",
      period: "Expected 2027 · 2nd Year",
    },
    {
      degree: "CBSE — Class 10th",
      school: "Chhatrapati Shahu Vidyalaya, Kolhapur",
      period: "2020",
    },
    {
      degree: "Class 12th — Science (PCM)",
      school: "Chhatrapati Shahu Vidyalaya Junior College, Kolhapur",
      period: "2022",
    }
  ],
};
