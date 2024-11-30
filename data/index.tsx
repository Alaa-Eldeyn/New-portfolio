import { AiOutlineApi, AiOutlineGlobal } from "react-icons/ai";
import { FaJsSquare, FaMobileAlt, FaSearch } from "react-icons/fa";
import {
  FaCss3,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineSpeed } from "react-icons/md";
import {
  SiAxios,
  SiBootstrap,
  SiFramer,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
  { id: 1, icon: <SiNextdotjs />, text: "Next.js" },
  { id: 2, icon: <SiTypescript />, text: "TypeScript" },
  { id: 3, icon: <FaReact />, text: "React.js" },
  { id: 4, icon: <FaJsSquare />, text: "JavaScript" },
  { id: 5, icon: <FaHtml5 />, text: "HTML" },
  { id: 6, icon: <FaCss3 />, text: "CSS" },
  { id: 7, icon: <SiSass />, text: "Sass" },
  { id: 8, icon: <SiTailwindcss />, text: "Tailwind CSS" },
  { id: 9, icon: <SiBootstrap />, text: "Bootstrap" },
  { id: 10, icon: <SiStyledcomponents />, text: "Styled Components" },
  { id: 11, icon: <SiFramer />, text: "Framer Motion" },
  { id: 12, icon: <SiRedux />, text: "Redux Toolkit" },
  { id: 13, icon: <SiAxios />, text: "Axios" },
  { id: 14, icon: <FaGitAlt />, text: "Git & Github" },
  { id: 15, icon: <AiOutlineApi />, text: "REST APIs" },
  { id: 16, icon: <SiGraphql />, text: "GraphQL" },
  { id: 17, icon: <FaSearch />, text: "SEO Best Practices" },
  { id: 18, icon: <MdOutlineSpeed />, text: "Web Performance Optimization" },
  { id: 19, icon: <FaMobileAlt />, text: "Responsive Design" },
  { id: 20, icon: <AiOutlineGlobal />, text: "Cross-Browser Compatibility" },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Alaa-Eldeyn",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/alaa-eldeyn/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    link: "https://www.facebook.com/3lwa88",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    link: "https://wa.me/+201010385495",
    icon: <FaWhatsapp />,
  },
  {
    id: 5,
    link:"https://www.instagram.com/3lwa88/",
    icon: <FaInstagram />,
  },
];
