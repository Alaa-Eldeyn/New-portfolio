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
import { z } from "zod";

export const cvUrl =
  "https://drive.google.com/uc?export=download&id=1-SL9dbtKKDGWcSZIuN0sq1YyACmw9dcR";

export const reviews = [
  {
    id: 1,
    name: "د. على",
    body: "بصراحة شغلكم أكتر من ممتاز، سعدت بالتعامل معكم جداً والله ياشباب فعلاً شغل متقن جدًا، شكراً مرة ثانية وأكيد ماراح يكون آخر تعامل إن شاء الله.",
  },
  {
    id: 2,
    name: "عبدالرحمن",
    body: "التعامل معاك فعلا راقي جدًا وفعلا فاهم انت بتعمل اي كويس، تسلم إيدك والله يابشمهندس.",
  },
  {
    id: 3,
    name: "عبدالعزيز",
    body: "شكرا لك اخ علاء",
  },
  {
    id: 4,
    name: "د. هند",
    body: "أنا مبسوطة جدًا بالشغل مع حضرتك، الحمد لله فوق توقعاتي بكتير.",
  },
  {
    id: 5,
    name: "محمود",
    body: "إنت من أكتر الناس المحترمة اللي اتعاملت معاها، ربنا يوفقك.",
  },
  {
    id: 6,
    name: "د.ماهر عيسى",
    body: "عنوان للدقة والسرعة والاتقان",
  },
];

export const projects = [
  {
    id: 3,
    title: "Progo Company Website",
    des: "Redesigned and optimized the company landing page to improve speed, performance, and overall user experience.",
    img: "/progo.png",
    iconsList: ["/react.svg", "/js.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://progo2.netlify.app/",
    sourceCode: "https://github.com/Alaa-Eldeyn/progo-website",
  },
  {
    id: 1,
    title: "Aquarium Fish E-commerce & Dashboard",
    des: "A modern e-commerce specialized for selling aquarium fish, customizable for other business domains, with a built-in admin dashboard for tracking sales and managing products. Admins can add, edit, or delete products directly within the website.",
    img: "/nemoApp.jpeg",
    iconsList: ["/next.svg", "/ts.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://nemo-livid.vercel.app/",
    sourceCode: "https://github.com/Alaa-Eldeyn/Nemo-E-commerce",
  },
  {
    id: 4,
    title: "Learning Management Platform & Dashboard",
    des: "A specialized medical educational platform designed to seamlessly connect students and instructors. The platform offers a variety of courses, exams, Books, Blogs, including free and paid options, with integrated grading and progress tracking systems.",
    img: "/medlearn.jpeg",
    iconsList: ["/react.svg", "/js.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://practice2pass.net/",
    sourceCode: "https://github.com/Alaa-Eldeyn/MedLearn-Platform",
  },
  {
    id: 2,
    title: "MoveMate - Services Ordering website",
    des: "A Swiss company's online platform offers home services like moving, cleaning, painting, furniture/lamp installation, and disposal. Users can easily request services, and the company ensures seamless follow-up and reliable assistance.",
    img: "/movemate.jpeg",
    iconsList: ["/next.svg", "/ts.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://2movemate.netlify.app/",
    sourceCode: "https://github.com/Alaa-Eldeyn/Movemate",
  },
];

const date = new Date();
const yearsOfExperience = date.getFullYear() - 2023;
const projectsCompleted = 15;
const clients = 5;

export const aboutData = [
  {
    number: yearsOfExperience,
    text: "Years of Experience",
  },
  {
    number: projectsCompleted,
    text: "Project Completed",
  },
  {
    number: clients,
    text: "Clients",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
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
    link: "https://www.instagram.com/3lwa88/",
    icon: <FaInstagram />,
  },
];

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(255, { message: "First name is too long" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(4, { message: "Phone number is too short" })
    .regex(
      /^\+\d{1,3}\d{4,14}$/,
      "Phone Number Format: +[country code][number] (e.g., +1234567890)"
    ),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
});
