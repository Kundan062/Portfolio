import { 
  Education, 
  Skill, 
  Course, 
  Project, 
  Experience,
  Achievement,
  Position,
  SocialLink,
  NavLink
} from '../types';

export const navigationLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Positions', href: '#positions' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '#resume' },
];

export const mobileNavLinks = [
  { 
    section: 'About Me',
    links: [
      { name: 'Home', href: '#home', icon: 'Home' },
      { name: 'About', href: '#about', icon: 'User' },
      { name: 'Resume', href: '#resume', icon: 'FileText' },
    ]
  },
  { 
    section: 'Background',
    links: [
      { name: 'Education', href: '#education', icon: 'GraduationCap' },
      { name: 'Skills', href: '#skills', icon: 'Code2' },
    ]
  },
  { 
    section: 'Portfolio',
    links: [
      { name: 'Projects', href: '#projects', icon: 'FolderKanban' },
      { name: 'Experience', href: '#experience', icon: 'Briefcase' },
      { name: 'Achievements', href: '#achievements', icon: 'Trophy' },
      { name: 'Positions', href: '#positions', icon: 'Users' },
    ]
  },
  { 
    section: 'Connect',
    links: [
      { name: 'Contact', href: '#contact', icon: 'MessageSquare' },
    ]
  },
];

export const educationData: Education[] = [
  {
    degree: 'B.S in Data Science',
    institution: 'IIT Madras',
    year: '2023 - 2028 (Expected)',
    description: 'Pursuing advanced studies in Data Science with focus on AI/ML techniques and applications.'
  },
  {
    degree: 'B.Tech in AI & DS',
    institution: 'LNCT',
    year: '2023 - 2027 (Expected)',
    description: 'Specializing in Artificial Intelligence and Data Science with strong fundamentals in programming, machine learning, and deep learning.'
  },
  {
    degree: 'Class XII',
    institution: 'High School Karpi, Arwal (BSEB)',
    year: '2023',
    description: 'Completed higher secondary education with excellent academic standing.'
  },
  {
    degree: 'Class X',
    institution: "St. Michael's School, Patna (CBSE)",
    year: '2021',
    description: 'Completed secondary education with strong foundations in mathematics and sciences.'
  }
];

export const skillsData: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS']
  },
  {
    category: 'Frameworks/Libraries',
    items: ['React', 'Node.js', 'MongoDB', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Flask', 'Streamlit']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Visual Studio', 'Adobe Cr','google colab','Canva']
  },
  {
    category: 'Machine Learning',
    items: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'Data Analysis', 'Data Visualization','Data Preprocessing', 'Model Training', 'Model Evaluation']
  }
];

export const coursesData: Course[] = [
  {
    title: 'Full Stack Web Development',
    provider: 'Online Course Platform',
    year: '2023',
    certificate: '#'
  },
  {
    title: 'AI & ML',
    provider: 'Online Course Platform',
    year: '2023',
    certificate: '#'
  },
  {
    title: 'DSA in C++',
    provider: 'Online Course Platform',
    year: '2022',
    certificate: '#'
  },
  {
    title: 'Introduction to Data Science',
    provider: 'IIT Madras',
    year: '2023',
    certificate: '#'
  }
];

export const projectsData: Project[] = [
  {
    title: 'Brain Tumor Detection System',
    description: 'Developed a deep learning based system to detect brain tumors from MRI scans using Convolutional Neural Networks with a Streamlit UI for image upload and real-time results.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Streamlit', 'OpenCV'],
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'ML'
  },
  {
    title: 'Breast Cancer Prediction',
    description: 'Created a machine learning model to predict breast cancer from clinical inputs using Logistic Regression with comprehensive performance metrics and visualization.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Streamlit'],
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'ML'
  },
  {
    title: 'Rental Platform Web App',
    description: 'Built a full-stack rental platform with features including authentication, property search, roommate finder, and real-time chat functionality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'Full Stack'
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a responsive portfolio website with cyberpunk aesthetics, featuring animations, transitions, and an AI-powered resume chatbot.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'Full Stack'
  },{
  title: 'Dowry Predictor Web App',
  description: 'A culturally-themed web application that predicts dowry based on groom profile, land ownership, family background, and location. Features live gold/silver/land price simulation, animated charts, theme/language toggle, and vibrant celebratory UI.',
  technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'Recharts'],
  image: '/images/dowry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  type: 'Full Stack'
}
];

export const experienceData: Experience[] = [
  {
    title: 'Branding Executive',
    company: 'LNCT TNP',
    duration: 'Jun 2023 - Present',
    description: [
      'Created social media designs and posters for campus events and campaigns',
      'Developed comprehensive branding strategies for training and placement initiatives',
      'Collaborated with cross-functional teams to ensure cohesive visual identity',
      'Increased social media engagement by 40% through creative design solutions'
    ]
  },
  {
    title: 'Graphic Designer',
    company: 'Nallamala House, IIT Madras',
    duration: 'Aug 2023 - Present',
    description: [
      'Created full video content for events and promotions',
      'Designed posters, banners, and social media graphics for various campus events',
      'Collaborated with event management teams to create cohesive visual identities',
      'Utilized Adobe Creative Suite to produce high-quality visual assets'
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    title: 'YIDS Hackathon – Top 6 Finalist',
    issuer: 'YIDS',
    date: '2023',
    description: 'Led team to develop an innovative AI solution that ranked in the top 6 among hundreds of participants.'
  },
  {
    title: 'Smart India Hackathon – Cleared Internal Rounds',
    issuer: 'SIH',
    date: '2023',
    description: 'Successfully cleared the internal selection rounds with an innovative project focused on social impact.'
  }
];

export const positionsData: Position[] = [
  {
    title: 'Team Lead',
    organization: 'Hackathon Projects',
    duration: '2023',
    description: [
      'Led teams for YIDS and SIH hackathons from concept to execution',
      'Managed project timelines and delegated tasks to team members',
      'Coordinated cross-functional collaboration in high-pressure scenarios',
      'Presented project demos and pitched solutions to judges'
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Kundan062',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kundan-kumar-9543052a3/',
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:kundankumargupta800@gmail.com',
    icon: 'Mail'
  }
];

export const predefinedChatResponses = {
  greeting: "Hi there! I'm Kundan's Resume Assistant. You can ask me about his education, skills, projects, or anything else on his resume.",
  education: "Kundan is pursuing a B.S. in Data Science at IIT Madras (2023-2028) and a B.Tech in AI & DS at LNCT (2023-2027). He completed his Class XII from High School Karpi (BSEB) in 2023 and Class X from St. Michael's School, Patna (CBSE) in 2021.",
  skills: "Kundan is skilled in multiple programming languages including Python, C, C++, JavaScript, and SQL. He's familiar with frameworks and libraries like React, Node.js, MongoDB, Scikit-learn, TensorFlow, and more. He also has experience with tools like Git, GitHub, VS Code, and Jupyter.",
  projects: "Kundan has worked on several impressive projects including a Brain Tumor Detection System using CNN, a Breast Cancer Prediction model, a Rental Platform Web App, and this Portfolio Website you're currently viewing!",
  experience: "Kundan is currently working as a Branding Executive at LNCT TNP and as a Graphic Designer at Nallamala House, IIT Madras. In these roles, he creates designs, videos, and visual assets for various events and campaigns.",
  achievements: "Kundan was a Top 6 Finalist in the YIDS Hackathon and cleared the internal rounds of the Smart India Hackathon (SIH). He has demonstrated leadership in technical projects and hackathons.",
  contact: "You can reach Kundan via email at kundan@example.com or connect with him on LinkedIn or GitHub. Check the Contact section for links!",
  default: "I don't have specific information about that. You can ask about Kundan's education, skills, projects, experience, achievements, or contact information."
};