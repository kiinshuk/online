import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kinshuk Sharma",
  initials: "KS",
  url: "https://github.com/kiinshuk",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Building modern web applications while expanding into machine learning. Active open-source contributor passionate about intelligent systems.",
  summary:
    "Full-Stack Developer transitioning into AI/ML. Currently building Django applications and learning machine learning foundations. I specialize in Python web development with a growing focus on intelligent system design and open-source contributions.",
  avatarUrl: "/me.jpg",
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
    email: "kinshuksharma2024@gmail.com",
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
        url: "mailto:kinshuksharma2024@gmail.com",
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
      title: "Kinshow",
      href: "https://kinshow.vercel.app",
      active: true,
      description: "Open-source movie and TV discovery app with ratings, cast info, episode guides, watchlist, and a built-in multi-server video player. Built with React, Vite, and TMDB API.",
      technologies: [
        "React 18",
        "Vite 5",
        "React Router 6",
        "JavaScript",
        "TailwindCSS",
        "TMDB API",
        "TVmaze API",
        "OMDb API",
        "SEO",
        "Open Source",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://kinshow.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kiinshuk/kinshow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Connect",
      href: "https://github.com/kiinshuk/sg",
      active: true,
      description: "Instagram-style social app with photo posts, follows, likes, comments, DMs, and group chats. Django, PostgreSQL, and Cloudinary, deployed on Railway.",
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
      title: "HRMS Lite",
      href: "https://hrms-lite-sooty-six.vercel.app",
      active: true,
      description: "HR management system with employee records, daily attendance tracking, and a dashboard. React and Django REST Framework, deployed on Vercel and Railway.",
      technologies: [
        "React 19",
        "Django 4.2",
        "Django REST Framework",
        "Vite",
        "Axios",
        "SQLite",
        "PostgreSQL",
        "REST API",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://hrms-lite-sooty-six.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kiinshuk/hrms-lite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TheBlog",
      href: "https://github.com/kiinshuk/theblog",
      active: true,
      description: "Django blog with authentication, article CRUD, and a full admin panel. Responsive Bootstrap UI with SQLite storage.",
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
          type: "Source",
          href: "https://github.com/kiinshuk/theblog",
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
      description: "Discord bot for Truth and Dare games with command handling and game state management. Built with Java and JDA.",
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
      title: "SoundScope",
      href: "https://soundscope-one.vercel.app",
      active: true,
      description: "Serverless Spotify music personality analyzer with visual charts, genre spectrum, and persona insights. React, TypeScript, and OAuth 2.0 PKCE.",
      technologies: [
        "React 18",
        "TypeScript",
        "Vite",
        "Spotify Web API",
        "CSS Modules",
        "OAuth 2.0",
        "Serverless",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://soundscope-one.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kiinshuk/Spotifly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Maison",
      href: "https://maison-seven-pi.vercel.app",
      active: true,
      description: "Home decor e-commerce site with product browsing, cart management, and a clean, responsive storefront UI.",
      technologies: [
        "JavaScript",
        "Frontend",
        "Backend",
        "E-commerce",
        "Responsive Design",
        "REST API",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://maison-seven-pi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kiinshuk/Maison",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
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
