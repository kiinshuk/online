import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kinshuk Sharma",
  initials: "KS",
  url: "https://github.com/samiksha0shukla",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Building web applications with Django & React while expanding into machine learning. Active open-source contributor passionate about intelligent systems.",
  summary:
    "Full-Stack Developer transitioning into AI/ML. Currently building Django applications and learning machine learning foundations. I specialize in Python web development with a growing focus on intelligent system design and open-source contributions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Linux",
    "Python",
    "MySQL",
    "Django",
    "Postman",
    "Express.js",
    "Node.js",
    "Axios",
    "Firebase",
    "Bootstrap",
    "TailwindCSS",
    "Git",
    "FastAPI",
    "GitHub",
    "Java",
    "Numpy",
    "Pandas",
    "MongoDB",
    "JavaScript",
    "Pygame",
    "SQLite",
    "PostgreSQL",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kinshuksharma2024@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kiinshuk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kiinshuk/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kiinshuk",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Yugox Pvt Ltd",
      href: "https://yugox.com/",
      badges: [],
      location: "Agra, Uttar Pradesh",
      title: "Software Engineer",
      logoUrl: "/yugox_private_limited_logo.jpeg",
      start: "August 2024",
      end: "December 2025",
      description:
        "Worked with Python and Django for backend development, including API creation and basic data visualization to support application functionality.",
    },
    {
      company: "Katha Infocom Pvt Ltd",
      badges: [],
      href: "https://munshot.com",
      location: "Kochi, Kerala",
      title: "Software Engineer Intern",
      logoUrl: "/kathaads_logo.jpeg",
      start: "January 2024",
      end: "June 2024",
      description:
        "Designed responsive web apps with React.js & Tailwind CSS.Improved user experience and interface performance.",
    },
  ],
  education: [
    {
      school: "Jaipur National University",
      href: "https://www.jnujaipur.ac.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/jnulogo.jpeg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
  {
    title: "TheBlog",
    href: "https://github.com/kiinshuk/theblog",
    active: true,
    description: "A full-featured Django blog application with authentication, CRUD operations, and responsive Bootstrap UI. Implements user management, article publishing, and SQLite database integration with complete admin panel functionality.",
    technologies: [
      "Django",
      "Python",
      "Bootstrap",
      "SQLite",
      "Authentication",
      "CRUD Operations",
      "Admin Panel",
      "Web Development",
    ],
    links: [
      {
        type: "",
        href: "",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/kiinshuk/theblog",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Snapgram",
    href: "https://github.com/kiinshuk/sg",
    active: true,
    description: "Snapgram is a full-stack social media web application built with Django and Python, inspired by early Instagram where users can share photos and videos, follow each other, like and comment on posts, and chat via direct messages and group chats. It features a responsive mobile-first UI with dark mode, deployed live on Railway with PostgreSQL for the database and Cloudinary for persistent media storage.",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "PostgreSQL",
      "Responsive Design",
      "Mobile-first",
      "Web Development",
      "CSS",
      "SQLite",
      "Cloudinary",
      "AJAX polling",
    ],
    links: [
      {
        type: "Live Demo",
        href: "https://kiinshuk.pythonanywhere.com",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/kiinshuk/sg",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Chatapp",
    href: "https://github.com/kiinshuk/Chatapp",
    active: true,
    description: "Real-time chat application built with React.js and Firebase. Features instant messaging, user authentication, and responsive UI with Chakra UI components. Deployed on Netlify with seamless real-time updates.",
    technologies: [
      "React.js",
      "Firebase",
      "Chakra UI",
      "Real-time",
      "Authentication",
      "Netlify",
      "JavaScript",
      "WebSockets",
    ],
    links: [
      {
        type: "Live Demo",
        href: "https://chatapp-example.netlify.app",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/kiinshuk/Chatapp",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  
  {
    title: "Discord Truth & Dare Bot",
    href: "https://github.com/kiinshuk/Truth-and-Dare-bot",
    active: true,
    description: "Interactive Discord bot built with Java and JDA (Java Discord API) for Truth and Dare games. Features command handling, game state management, and real-time interaction with Discord's API.",
    technologies: [
      "Java",
      "JDA",
      "Discord API",
      "Bot Development",
      "Game Logic",
      "Command Handling",
      "OOP",
      "API Integration",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/kiinshuk/Truth-and-Dare-bot",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
 {
  title: "Flappy Bird",
  href: "https://github.com/kiinshuk/flappybird",
  active: true,
  description: "A faithful recreation of the classic Flappy Bird game built with Python and Pygame. Features smooth physics-based bird animation, procedural pipe generation, collision detection, score tracking, and a polished user interface with restart functionality.",
  technologies: [
    "Python",
    "Pygame",
    "Game Development",
    "Object-Oriented Programming",
    "Sprite Animation",
    "Collision Detection",
    "Game Physics",
    "UI/UX Design",
    "Event Handling",
    "Game State Management",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/kiinshuk/flappybird",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "",
  video: "",
},
{
  title: "Pokédex",
  href: "https://kiinshuk.github.io/Pokemonsite/",
  active: true,
  description: "Interactive Pokémon encyclopedia featuring all original 151 Pokémon from the Indigo League. Browse, search, and filter Pokémon with detailed stats, types, abilities, and evolutionary information. Clean, responsive design with Pokémon API integration.",
  technologies: [
    "JavaScript",
    "React",
    "Pokémon API",
    "Responsive Design",
    "Frontend Development",
    "DOM Manipulation",
    "API Integration",
    "UI/UX Design",
    "Web Development",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/kiinshuk/Pokemonsite",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "Live Demo",
      href: "https://kiinshuk.github.io/Pokemonsite/",
      icon: <Icons.globe className="size-3" />,
    },
  ],
  image: "",
  video: "",
}

 
],
 hackathons: [
  {
    title: "HackerRank Achievements",
    dates: "Ongoing",
    location: "Online Platform",
    description: "Earned 4-star rating in Python and 3-star in SQL. Certified in Problem Solving (Basic) demonstrating strong fundamentals in algorithms and data structures.",
    image: "/hackerrank.png", // Add hackerrank logo to public folder
    links: [
      {
        icon: <Icons.globe className="size-3" />,
        title: "Problem Solving Certificate",
        href: "https://www.hackerrank.com/certificates/f0a2202bce20"
      }
    ],
  },
  {
    title: "LeetCode Problem Solving",
    dates: "Ongoing | 50-Day Streak",
    location: "Online Platform",
    description: "Solved 76+ algorithmic problems in Java and Python. Maintaining consistent daily practice streak with focus on data structures, algorithms, and optimization techniques.",
    image: "/leetcode.png", // Add leetcode logo to public folder
    links: [
      {
        icon: <Icons.globe className="size-3" />,
        title: "LeetCode Profile",
        href: "https://leetcode.com/u/kiinshuk/"
      }
    ],
  },
],
} as const;
