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
    "A sophomore AI student passionate about intelligent systems and their impact. I’m actively seeking internships in machine learning and related fields, blending technical skills with curiosity, thoughtful design, and a drive to make a meaningful difference. Open to work and excited to learn."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bbu__suuygKEQeOpgnBMEY45hAyrDNOH/view?usp=drive_link",
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
  subTitle: "AI & ML Developer | Robotics Researcher | Technical Leader",
  skills: [
    emoji("⚡ Build ML models (YOLO, PyTorch) for computer vision & autonomous systems"),
    emoji("⚡ Develop and explain AI models with Grad-CAM, Eigen-CAM, and statistical methods"),
    emoji("⚡ Automate data pipelines for secure and efficient research workflows"),
    emoji("⚡ Build educational tools and teach ML/CS as a Teaching Assistant")
  ],
  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "pytorch", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "tensorflow", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "cpp", fontAwesomeClassname: "fab fa-cuttlefish" },
    { skillName: "openCV", fontAwesomeClassname: "fas fa-camera" },
    { skillName: "shell", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "github", fontAwesomeClassname: "fab fa-github" }
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
      desc: "Dean’s & President’s List every semester. GPA: 3.9",
      descBullets: [
        "New Member Academic Specialist, Alpha Delta Pi (highest new member GPA in chapter history)",
        "Communications Chair, Honors Council",
        "Member: Society of Women Engineers, AI Club"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Machine Learning", progressPercentage: "90%" },
    { Stack: "Python/C++ Programming", progressPercentage: "85%" },
    { Stack: "Data Pipelines & Vision", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Machine Learning Intern",
      company: "U.S. Army ERDC",
      companylogo: require("./assets/images/erdcLogo.png"),
      date: "May 2025 – Present",
      desc: "Improved object detection accuracy using Grad-CAM on unclassified traffic sign frames. Automated preprocessing of PII-compliant datasets in secure DoD environments."
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Mississippi State University",
      companylogo: require("./assets/images/msstateLogo.png"),
      date: "Jan 2025 – Present",
      desc: "Trained AI models for TurtleBot navigation, contributing to an NSF-funded ML camp reaching 200+ high school students."
    },
    {
      role: "Teaching Assistant – Data Structures (CSE 2383)",
      company: "Mississippi State University",
      companylogo: require("./assets/images/CSLogo.png"),
      date: "Aug 2024 – Present",
      desc: "Assist with grading, tutoring, and guiding students through foundational CS topics."
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
      image: require("./assets/images/WRFLogo.png"),
      projectName: "Urban Wind Modeling with WRF",
      projectDesc: "Built computational wind simulations and enhanced predictive accuracy by 70%.",
      footerLink: []
    },
    {
      image: require("./assets/images/battlesnakeLogo.png"),
      projectName: "Snake Game AI",
      projectDesc: "Implemented Minimax + Alpha-Beta pruning for intelligent game strategy.",
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
      subtitle: "Completed multiple Department of Defense trainings and certifications",
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
      title: "Dean’s & President’s List",
      subtitle: "Maintained 4.0 GPA for multiple terms while leading student organizations",
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
  resumeLink: "https://drive.google.com/file/d/1bbu__suuygKEQeOpgnBMEY45hAyrDNOH/view?usp=drive_link",
  display: true
};

// <-- NEW EXTRACURRICULARS SECTION ADDED HERE
const extracurricularsSection = {
  title: "Extracurriculars & Leadership",
  subtitle: "Active participant and leader in student organizations and initiatives",
  activities: [
    {
      role: "New Member Academic Specialist",
      organization: "Alpha Delta Pi",
      details:
        "Achieved highest new member GPA (3.7+) in chapter history."
    },
    {
      role: "Communications Chair",
      organization: "Honors Council",
      details:
        "Created engaging TikToks and Instagram posts to boost student involvement."
    },
    {
      role: "Member",
      organization: "Society of Women Engineers",
      details:
        "Participated in community events and professional development."
    },
    {
      role: "Member",
      organization: "AI Club",
      details:
        "Attended lectures on emerging AI topics and organized meetups."
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
      role: "Secretary",
      date: "Jan 2024 - Present",
      desc: "Represent the College of Engineering at university and outreach events.",
      logo_path: "bagleyLogo.png",
      link: "https://www.bagley.msstate.edu/bagleyambassadors/"
    },
    {
      name: "Honors Council",
      role: "Member",
      logo_path: "hocoLogo.png",
      date: "Aug 2023 - Present",
      desc: "Help organize events and policy discussions for the Shackouls Honors College.",
      link: "https://www.instagram.com/honorscouncil_msu/"
    },
    {
      name: "Society of Women Engineers",
      role: "Member",
      logo_path: "sweLogo.png",
      date: "Aug 2023 - Present",
      desc: "Engage with engineering outreach, networking, and leadership development.",
      link: "https://www.instagram.com/swemsu/"
    },
    {
      name: "Association of Computing Machinery",
      role: "Member",
      logo_path: "acmLogo.png",
      date: "Jan 2024 - Present",
      desc: "Participate in hackathons, technical talks, and collaborative projects.",
      link: "https://www.instagram.com/msstate_acm/"
    },
    {
      name: "AI Club",
      role: "Member",
      logo_path: "aiLogo.png",
      date: "Jan 2024 - Present",
      desc: "Explore machine learning topics through workshops and speaker series.",
      link: "https://www.instagram.com/msuaiclub/"
    }
  ],

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
