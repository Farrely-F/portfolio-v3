import { icons } from "lucide-react";

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
    description: "Portfolio V1",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/BinaryBG.jpg?updatedAt=1715003319550",
    href: {
      github: "https://github.com/Farrely-F/hacktivgo-final-assignment",
      preview: null,
    },
    author: ["sltr9"],
  },
  {
    title: "Runnerz",
    description: "React Redux Fake Store",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/Runnerz.png?updatedAt=1715003505780",
    href: {
      github: "https://github.com/sltr9/portfolio-v2",
      preview: "https://runnerz.vercel.app/",
    },
    author: ["sltr9"],
  },
  {
    title: "Farrel.Dev",
    description: "Portfolio V3",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/PortfolioV3.png?updatedAt=1715003332398",
    href: {
      github: "https://github.com/sltr9/portfolio-v3",
      preview: "https://github.com/sltr9/portfolio-v3",
    },
    author: ["sltr9"],
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
    author: ["sltr9"],
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
    author: ["sltr9"],
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
    author: ["sltr9"],
  },
  {
    title: "Tokopedia Play Clone",
    description: "Tokopedia Play Clone",
    thumbnail:
      "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/TokpedPlayClone.png?updatedAt=1715003325304",
    href: {
      github: null,
      preview: "https://play.tokopedia.com",
    },
    author: ["sltr9"],
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
    author: ["sltr9"],
  },
];
