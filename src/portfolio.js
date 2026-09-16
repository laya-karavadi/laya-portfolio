/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Laya Karavadi",
  title: "Hi, I'm Laya ",
  subTitle: emoji(
    "A senior Artificial Intelligence student passionate about scalable data engineering, applied AI, and enterprise analytics. Experienced in building production ETL pipelines, predictive models, and BI decision tools across logistics and heavy manufacturing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DipfPdDB8qJV9SDTyXXkp3egI0NWgyDB/view?usp=drive_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/laya-karavadi",
  linkedin: "https://www.linkedin.com/in/laya-karavadi5797/",
  gmail: "layakaravadi084@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "Data & AI Engineer | BI & Analytics Specialist | Technical Leader",
  skills: [
    emoji(
      "⚡ Architect automated, robust ETL/ELT pipelines and SQL-driven data models for large-scale industrial operations"
    ),
    emoji(
      "⚡ Build interactive Power BI & Tableau dashboards and digital performance dialog systems for executive decision-support"
    ),
    emoji(
      "⚡ Lead Agile/Scrum ceremonies, user story mapping, and sprint setups to digitize operational site workflows"
    ),
    emoji(
      "⚡ Develop Agentic AI, NLP pipelines, and LLM-driven applications using Gemini API and FastAPI"
    ),
    emoji(
      "⚡ Apply Explainable AI (XAI) and Docker containerization to deliver transparent, auditable, and secure models"
    ),
    emoji(
      "⚡ Present predictive analytics and operational capstones to executive leadership audiences of over 300 stakeholders"
    )
  ],
  softwareSkills: [
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "sql-database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "tableau", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "power-bi", fontAwesomeClassname: "fas fa-chart-pie"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "pytorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "tensorflow", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "cpp", fontAwesomeClassname: "fab fa-cuttlefish"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Mississippi State University",
      logo: require("./assets/images/msstateLogo.png"),
      subHeader: "B.S. in Artificial Intelligence, Minor in Cognitive Science",
      duration: "August 2023 – May 2027",
      desc: "President's List (4 Semesters), Dean’s List (2 Semesters). GPA: 3.92",
      descBullets: [
        "New Member Academic Specialist, Alpha Delta Pi (highest new member GPA in chapter history)",
        "Communications Chair, Honors Council",
        "Bagley College of Engineering Ambassador",
        "Member: Society of Women Engineers, AI Club"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Engineering & Pipelines (SQL, ETL)",
      progressPercentage: "92%"
    },
    {
      Stack: "Business Intelligence (Power BI, Tableau)",
      progressPercentage: "90%"
    },
    {Stack: "AI, Machine Learning & NLP", progressPercentage: "88%"},
    {Stack: "Python, C++ & Cloud/DevOps", progressPercentage: "85%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Scientist & Engineering Co-op",
      company: "SSAB",
      companylogo: require("./assets/images/ssabLogo.png"),
      date: "Aug 2026 – Dec 2026",
      desc: "Build automated ETL/ELT pipelines to ingest, cleanse, and structure mill-wide manufacturing datasets. Design enterprise Tableau dashboards and SQL models to optimize industrial throughput and operational governance."
    },
    {
      role: "Business Data Analyst Intern",
      company: "DHL Supply Chain (Nike Operations)",
      companylogo: require("./assets/images/dhlLogo.png"),
      date: "May 2026 – Aug 2026",
      desc: "Served as Agile/Scrum lead building story cards and digitizing site workflows. Deployed Power BI performance boards and presented predictive logistics capstone models to an executive audience of 300+ stakeholders."
    },
    {
      role: "Machine Learning Research Intern",
      company: "U.S. Army ERDC",
      companylogo: require("./assets/images/erdcLogo.png"),
      date: "May 2025 – Aug 2025",
      desc: "Engineered automated ETL pipelines for sensitive datasets with 100% PII compliance. Applied Explainable AI (XAI) and Grad-CAM for model auditability, containerizing environments via Docker."
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Mississippi State University",
      companylogo: require("./assets/images/msstateLogo.png"),
      date: "Jan 2025 – May 2025",
      desc: "Integrated machine learning architectures in C++ and Python for real-time inference and autonomous robotic frameworks."
    },
    {
      role: "Teaching Assistant – Data Structures (CSE 2383)",
      company: "Mississippi State University",
      companylogo: require("./assets/images/CSLogo.png"),
      date: "Aug 2024 – Dec 2024",
      desc: "Mentored 50+ students in algorithmic problem solving, computational complexity, memory management, and structured debugging."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "Research & Academic Projects",
  projects: [
    {
      image: require("./assets/images/fedex.png"),
      projectName: "Logistics Dashboard",
      projectDesc:
        "Designed enterprise visualization tools with FedEx to identify operational trends and bottlenecks via data storytelling.",
      footerLink: []
    },
    {
      image: require("./assets/images/sentiment.png"),
      projectName: "Retail Insight Engine",
      projectDesc:
        "Built full-stack NLP pipelines with Gemini API & FastAPI to transform unstructured customer reviews into actionable retail insights.",
      footerLink: []
    },
    {
      image: require("./assets/images/WRFLogo.png"),
      projectName: "Urban Wind Modeling with WRF",
      projectDesc:
        "Built computational wind simulations and enhanced predictive accuracy by 70%.",
      footerLink: []
    },
    {
      image: require("./assets/images/battlesnakeLogo.png"),
      projectName: "Autonomous Decision Snake AI",
      projectDesc:
        "Implemented A* and Minimax with Alpha-Beta pruning for an autonomous agent with 100% test survival; won 1st place among 50+ competitors.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Recognized academic and leadership accomplishments",
  achievementsCards: [
    {
      title: "DoD Certification Series",
      subtitle:
        "Completed multiple Department of Defense trainings and certifications",
      image: require("./assets/images/dodLogo.png"),
      imageAlt: "DoD Logo",
      footerLink: [
        {
          name: "View Certificates",
          url: "https://drive.google.com/drive/folders/1Xu7KPlnkYDv1-EN2aUEH1VnqdcAwIqiZ?usp=sharing"
        }
      ]
    },
    {
      title: "President’s & Dean’s List",
      subtitle:
        "Maintained 3.93 GPA across multiple terms while leading campus engineering organizations",
      image: require("./assets/images/awardLogo.png"),
      imageAlt: "GPA Honor",
      footerLink: [
        {
          name: "View Merit Page",
          url: "https://meritpages.com/laya-karavadi"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I enjoy documenting what I learn about AI and research workflows.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Excited to share my journey and insights in AI!"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Looking forward to speaking on AI & research soon!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1bbu__suuygKEQeOpgnBMEY45hAyrDNOH/view?usp=drive_link",
  display: true
};

const extracurricularsSection = {
  title: "Extracurriculars & Leadership",
  subtitle:
    "Active participant and leader in student organizations and initiatives",
  activities: [
    {
      role: "New Member Academic Specialist",
      organization: "Alpha Delta Pi",
      details: "Achieved highest new member GPA (3.7+) in chapter history."
    },
    {
      role: "Communications Chair",
      organization: "Honors Council",
      details:
        "Created engaging content and media campaigns to boost student involvement."
    },
    {
      role: "Bagley Engineering Ambassador",
      organization: "Bagley College of Engineering",
      details:
        "Represented the College of Engineering at university recruitment events and alumni panels."
    },
    {
      role: "Member",
      organization: "AI Club",
      details:
        "Organized machine learning workshops and collaborative technical sessions."
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to colab or just say hi?? Please feel free to connect!!",
  number: "601-910-8290",
  email_address: "layakaravadi084@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

export const extracurriculars = {
  display: true,
  clubs: [
    {
      name: "Alpha Delta Pi, Epsilon Eta",
      role: "New Member Academic Specialist",
      date: "Fall 2024 – Present",
      desc: "Facilitated academic success initiatives and study programs for new members.",
      logo_path: "adpiLogo.png",
      link: "https://www.instagram.com/msuadpi/"
    },
    {
      name: "Bagley Ambassadors",
      role: "Ambassador",
      date: "Jan 2024 – Present",
      desc: "Represent the College of Engineering at university and outreach events.",
      logo_path: "bagleyLogo.png",
      link: "https://www.bagley.msstate.edu/bagleyambassadors/"
    },
    {
      name: "Honors Council",
      role: "Communications Chair",
      logo_path: "hocoLogo.png",
      date: "Aug 2023 – Present",
      desc: "Lead student communications and event promotions for the Shackouls Honors College.",
      link: "https://www.instagram.com/honorscouncil_msu/"
    },
    {
      name: "Society of Women Engineers",
      role: "Member",
      logo_path: "sweLogo.png",
      date: "Aug 2023 – Present",
      desc: "Engage with engineering outreach, networking, and leadership development.",
      link: "https://www.instagram.com/swemsu/"
    },
    {
      name: "AI Club",
      role: "Member",
      logo_path: "aiLogo.png",
      date: "Jan 2024 – Present",
      desc: "Explore machine learning topics through workshops and speaker series.",
      link: "https://www.instagram.com/msuaiclub/"
    }
  ]
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  extracurricularsSection,
  twitterDetails,
  isHireable,
  resumeSection
};
