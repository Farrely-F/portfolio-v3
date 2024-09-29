import { icons } from "lucide-react";

export const profileJson = `{
  "name": "Farrel",
  "role": "Front End Engineer",
  "age": 23,
  "country": "Indonesia",
  "interests": [
      "Web Development",
      "UX design",
      "Cyber Security"
  ]
}`;

/**
 *  Child Menu for the Header
 * @type {{label: string; href: string}[]}
 * */
export const childNavMenus = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "STACKS",
    href: "#tech-stacks",
  },
  {
    label: "PROJECTS",
    href: "#projects",
  },
  {
    label: "EXPERIENCE",
    href: "#experience",
  },
];

/**
 *  Socmed Menu for the Hero Section
 * @type {import("lucide-react").LucideIcon[]}
 *
 * */

export const socmedMenus = [
  {
    label: "GITHUB",
    href: "https://github.com/Farrely-F",
    icon: icons.Github,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/farrelyf/",
    icon: icons.Linkedin,
  },
  {
    label: "MEDIUM",
    href: "https://medium.com/@farrely.firenza",
    icon: icons.Book,
  },
];

type TechStack = {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
};

/**
 * Tech Stacks for the Portfolio
 * @type {TechStack[]}
 **/
export const techStacks: TechStack[] = [
  {
    category: "Text Editor",
    items: [
      {
        name: "VS Code",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png",
      },
      {
        name: "PostgreSQL",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png",
      },
    ],
  },
  {
    category: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png",
      },
      {
        name: "TypeScript",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png",
      },
      {
        name: "Go",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/go-programming-language-icon.png",
      },
    ],
  },
  {
    category: "Tools and Frameworks",
    items: [
      {
        name: "HTML",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png",
      },
      {
        name: "CSS",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png",
      },
      {
        name: "Tailwind",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png",
      },
      {
        name: "React",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png",
      },
      {
        name: "Vue",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vue-js-icon.png",
      },
      {
        name: "Vite",
        icon: "https://vitejs.dev/logo.svg",
      },
      {
        name: "Next.js",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
      },
      {
        name: "Gatsby",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gatsby-js-icon.png",
      },
      {
        name: "Node.js",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png",
      },
      {
        name: "Bun",
        icon: "https://bun.sh/logo.svg",
      },
      {
        name: "Express.js",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png",
      },
      {
        name: "Hono",
        icon: "https://seeklogo.com/images/H/hono-logo-85A5D1206D-seeklogo.com.png",
      },
      {
        name: "Vercel",
        icon: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "Netlify",
        icon: "https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png",
      },
      {
        name: "Git",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/git-icon.png",
      },
      {
        name: "GitHub",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png",
      },
      {
        name: "Docker",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
      },
    ],
  },
];

export const projects = [
  {
    title: "Hacktiv Go Final Assignment",
    description: "Golang REST API",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/BinaryBG.jpg?updatedAt=1715003319550",
    href: {
      github: "https://github.com/Farrely-F/hacktivgo-final-assignment",
      preview: null,
    },
    author: ["Farrely-F"],
  },
  {
    title: "OBRA Company Profile",
    description: "Branch Company of SLTR",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/obra-website.png?updatedAt=1727609275957",
    href: {
      github: null,
      preview: "https://obra.co.id",
    },
    author: ["Farrely-F"],
  },
  {
    title: "Horus Company Profile",
    description: "Payment Gateway of SLTR.ID",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/horus-company-profile?updatedAt=1727609120264",
    href: {
      github: null,
      preview: "https://horus.id",
    },
    author: ["Farrely-F"],
  },
  {
    title: "Gamefinity Website Revamp",
    description: "Gaming media, entertainment, and community platform",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/Gamefinity.png?updatedAt=1715003348897",
    href: {
      github: null,
      preview: "https://gamefinity.id",
    },
    author: ["SLTR"],
  },
  {
    title: "Paoplay Website Revamp",
    description: "Paoplay Website Revamp",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/Paoplay.png?updatedAt=1715003338875",
    href: {
      github: null,
      preview: "https://paoplay.com",
    },
    author: ["SLTR"],
  },
  {
    title: "Instn Revamp",
    description: "Instn Revamp",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/instn.png?updatedAt=1715003343550",
    href: {
      github: null,
      preview: "https://gamefinity.instn.id",
    },
    author: ["SLTR"],
  },
  {
    title: "Tokopedia Play Clone",
    description: "Tokopedia Play Clone",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/TokpedPlayClone.png?updatedAt=1715003325304",
    href: {
      github: null,
      preview: "https://tokopedia-play-clone.netlify.app",
    },
    author: ["Farrely-F"],
  },
  {
    title: "GCA Comprof Website",
    description: "GCA Comprof Website",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/GCA.png?updatedAt=1715003499376",
    href: {
      github: null,
      preview: "https://griyaciptaabadi.netlify.app/",
    },
    author: ["Farrely-F"],
  },
];
