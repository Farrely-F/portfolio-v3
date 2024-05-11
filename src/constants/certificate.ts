type certificate = {
  title: string;
  issuer: string;
  url: string;
  skills: string[];
  date: string;
};

const certificates: certificate[] = [
  {
    title: "Scalable Web Service with Golang",
    issuer: "DTS FGA x Hacktiv8",
    url: "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/Certificates/golang-certificate.png?updatedAt=1715003611106",
    skills: ["GO Language", "Backend Web Development", "REST API"],
    date: "15-04-2024",
  },
  {
    title: "Generasi GIGIH 3.0 | Fullstack Engineer Path",
    issuer: "GoTo Impact Foundation",
    url: "https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/Certificates/Screenshot%202024-05-06%20214557.png?updatedAt=1715006784634",
    skills: ["Javascript", "MERN Stack", "Full Stack Web Development"],
    date: "24-02-2023",
  },
];

export default certificates;
