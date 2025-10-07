export const siteConfig = {
  name: "Sachin Gill",
  title: "Mechatronics Engineering Student",
  description: "Portfolio website of Sachin Gill",
  accentColor: "#d81d1dff",
  social: {
    email: "sachin.gill@gmail.com",
    linkedin: "https://www.linkedin.com/in/sachin-gill88/",
    github: "https://github.com/SachinGill88",
  },
  resume: "/Sachin_Resume.pdf", 
  profilePicture: "/images/profile-picture.jpg", 

  aboutMe:
    "I’m a 4th-year Mechatronics Engineering student at the University of Waterloo, passionate about robotics and intelligent systems at the intersection of hardware and software. I’m also completing a minor in Artificial Intelligence, and I aim to apply my skills toward impactful robotics and AI projects.\n\n" +
    "Outside of academics, I’m a big sports fan. I grew up playing hockey and more recently have been getting into golf. I enjoy challenging myself, learning new skills, and building systems that make a difference.",

  skills: [
    "Python", "C",
    "Computer Vision", "Deep Learning", "Reinforcement Learning",
    "ROS2", "TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", 
    "Docker", "Linux", "CUDA", ".NET"
  ],

  projects: [
    {
      name: "RL Robot Stand Up Policy",
      description:
        "Designed and implemented a reinforcement learning algorithm to train a 30 DOF humanoid robot for autonomous fall recovery, with a fallen pose generation system and GPU-accelerated training.",
      link: "https://github.com/SachinGill88/Fall_Recovery",
      skills: ["Python", "MuJoCo", "StableBaseline", "CUDA", "PyTorch"],
      image: "/images/rl-robot.jpg",
    },
    {
      name: "Segway Simulation and Control",
      description:
        "Developed a Simulink model of a two-wheeled self-balancing robot (Segway) and designed a PID controller to maintain balance and follow a specified trajectory.",
      link: "/SYDE351_Report.pdf",
      skills: ["Matlab", "Simulink", "SimulationX", "Autonomous systems", "Control systems"],
      image: "/images/segway.png",
      imageFit: "contain",
    },
    {
      name: "AI Golf Caddie",
      description:
        "Built an end-to-end ML golf caddie that recommends optimal clubs based on distance and conditions, with regression models for swing prediction and a computer vision pipeline.",
      link: "https://github.com/SachinGill88/AI-Golf-Caddie",
      skills: ["Python", "Pandas", "NumPy", "OpenCV", "MediaPipe", "JavaScript"],
      image: "/images/golf-caddie.jpg",
    },
    {
      name: "University of Waterloo Mars Rover Team",
      description:
        "Developed firmware training for new members (servo PWM on STM32) and optimized drivetrain performance using ROS2/C++ with CAN and I2C protocols.",
      skills: ["C++", "ROS2", "STM32", "PWM", "CAN", "I2C"],
      image: "/images/mars-rover.jpg",
    },
    {
      name: "Robot Card Dealer",
      description:
        "Led a team of 4 in designing and building an autonomous robot using LEGO EV3 to deal playing cards. This robot used custom 3D printed parts to accurately deal 1 card at a time to up to 12 players.",
      link: "https://github.com/SachinGill88/Robot-Card-Dealer-Code",
      skills: ["C", "C++", "EV3", "Solidworks"],
      image: "/images/robot-card-dealer.jpg",
    },
    {
      name: "Music Recommendation Engine",
      description:
        "Built an intelligent music recommendation system using natural language processing to recommend similar songs to the user's interests using a cosine similarity approach that analyzes the lyrics of the user's preferred songs.",
      link: "https://github.com/SachinGill88/Music-Recommendation-Application",
      skills: ["Python", "NLP", "NLTK", "APIs", "Sci-kit Learn", "Pandas"],
      image: "/images/music-recommendation.jpg",
    },
  ],

  experience: [
    {
      company: "Toyota Motor Corporation",
      title: "Systems Engineer - Computer Vision",
      dateRange: "May 2025 – Aug 2025",
      logo: "/images/toyota-logo.png",
      bullets: [
        "Built image augmentation pipeline eliminating data prep bottlenecks, saving 40+ hours per deployment.",
        "Designed .NET annotation tool reducing labeling time by 40 minutes per batch.",
        "Led migration from YOLO to DETR, reducing false positives by 60%.",
        "Maintained OAK-D cameras ensuring zero downtime.",
      ],
    },
    {
      company: "SIRRL – University of Waterloo",
      title: "Undergraduate Research Assistant",
      dateRange: "Jan 2025 – Apr 2025",
      logo: "/images/waterloo-logo.png",
      bullets: [
        "Researched conversational turn-taking algorithms for social robots in healthcare contexts.",
        "Integrated TurnGPT and VAP models on Furhat robots, reducing interruption rate by 10%.",
      ],
    },
    {
      company: "Toyota Motor Corporation",
      title: "Systems Engineer - Robotics",
      dateRange: "Sep 2024 – Dec 2024",
      logo: "/images/toyota-logo.png",
      bullets: [
        "Redesigned predictive maintenance with LSTM, cutting false alerts by 500/day.",
        "Deployed AGV notification system with C++ reducing downtime by 30 mins/shift.",
        "Built full-stack .NET + SQLite app for 200+ showcase votes.",
      ],
    },
    {
      company: "MCAN Financial",
      title: "Software/Applications Developer",
      dateRange: "Jan 2024 – Apr 2024",
      logo: "/images/mcan-logo.png",
      bullets: [
        "Modernized 4 legacy ASP.NET mortgage pages reducing broker time by 30 mins.",
        "Optimized lending location algorithm improving efficiency by 1 hour.",
      ],
    },
    {
      company: "Day5 Analytics",
      title: "RPA Analyst",
      dateRange: "May 2023 – Sep 2023",
      logo: "/images/day5-logo.png",
      bullets: [
        "Developed end-to-end energy data analytics solution automating consumption analysis.",
        "Delivered average $150 annual savings per client through optimized recommendations.",
      ],
    },
  ],

  education: [
    {
      school: "University of Waterloo",
      degree: "BASc in Mechatronics Engineering (AI Option)",
      dateRange: "Sep 2022 – Apr 2027",
      achievements: [
        "Relevant Courses: Data Structures (C++), Real-Time OS (C, STM32), Numerical Methods",
        "Hands-on experience in robotics, AI, and intelligent systems"
      ],
    },
  ],
};
