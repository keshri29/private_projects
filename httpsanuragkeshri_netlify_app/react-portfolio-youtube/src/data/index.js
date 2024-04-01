import {
  SiSimpleanalytics,
  SiMicrostrategy,
  SiGooglemarketingplatform,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";


export const navigation = [
  { name: "Home", href: "#", id: "home" },
  { name: "About", href: "#", id: "about" },
  { name: "Services", href: "#", id: "services" },
  { name: "Portfolio", href: "#", id: "portfolio" },
  { name: "Team", href: "#", id: "team" },
];

export const aboutMeData = [
  {
    id: 1,
    bio: "I am Anurag kumar full stack developer with a passion for building innovative and user-friendly web applications. I have a strong understanding of both the front-end and  good understanding of back-end development processes, and I am good in a variety of programming languages and frameworks. I am also a quick learner and I am always eager to take on new challenges.",
  },
  {
    id: 2,
    bio: "I am a highly motivated and results-oriented individual with a strong work ethic. I am confident that I have the skills and experience necessary to be successful as a full stack developer. I am eager to learn and grow in this field, and I am confident that I can make a significant contribution to your team.",
  },
];

export const counterData = [
  {
    id: "experienceCounter",
    title: "Years of experience",
    measurement: "",
  },
  {
    id: "githubStarsCounter",
    title: "Stars on GitHub",
    measurement: "k+",
  },
  {
    id: "feedbackCounter",
    title: "Positive feedback",
    measurement: "%",
  },
  {
    id: "projectsCounter",
    title: "Projects Completed",
    measurement: "%",
  },
];

export const servicesData = [
  {
    title: "FrontEnd",
    subtitle:
      "Front-end developer with 1+ years of experience in building user-friendly and responsive websites.",
  },
  {
    title: "BackEnd",
    subtitle:
      "Back-end engineer with a passion for creating innovative and user-friendly web applications.",
  },
  {
    title: "Skills",
    subtitle:
      "JavaScript, C/C++, PHP, React.js, SQL/MySQL, Git, HTML5/HTML, CSS/CSS3, MongoDB, Git/GitHub, Bootstrap.",
  },

];

export const getIcons = (getCurrentColor) => {
  return [
    <SiMicrostrategy size={60} color={getCurrentColor} />,
    <SiSimpleanalytics size={60} color={getCurrentColor} />,
    <SiGooglemarketingplatform color={getCurrentColor} size={60} />,
    <MdOutlineDeveloperMode color={getCurrentColor} size={60} />,
    <CgWebsite color={getCurrentColor} size={60} />,
    <GoReport size={60} color={getCurrentColor} />,
  ];
};

export const projects = [
  {
    image: image1,
    title: "Guess MyNumber",
    subtitle: "A Simple Guessing Game",
  },
  {
    image: image3,
    title: "Netflix Clone",
    subtitle: "Simple Frontend Clone Using React",
  },
  {
    image: image2,
    title: "Leavy-Restrautent",
    subtitle: "Food Ordering website",
  },
  {
    image: image4,
    title: "Personal Portfolio",
    subtitle: "Simple Portfolio",
  },
];

export const teamSocialIcons = [
  <FaLinkedin size={"25px"} />,
  <FaTwitter size={"25px"} />,
  <FaInstagram size={"25px"} />,
];
export const teamData = [
  {
    name: "Anupam Anand",
    role: `A Full Stack Developer.`,
    image: image5,
    position: "Intern at Persistent",
  },

  {
    name: "Anchal Jain",
    role: `FrontEnd Developer.`,
    image: image6,
    position: "Intern at Celebal Technologies",
  },
  {
    name: "Vivek Kumar",
    role: `A Full Stack Developer.`,
    image: image7,
    position: "Intern at Persistent",
  },
  {
    name: "Uttakarsh",
    role: `Proficient In Problem Solving.`,
    image: image8,
    position: "Intern at Datansh",
  },
];

export const contactControls = [
  {
    id: "name",
    placeholder: "Your Name",
    name: "from_name",
    type: "text",
    inputType: "input",
    className:
      "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    divClassName: "",
  },
  {
    id: "email",
    placeholder: "Your Email Address",
    type: "text",
    inputType: "input",
    name: "from_email",
    className:
      "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    divClassName: "mt-8",
  },
  {
    id: "message",
    placeholder: "Your Message",
    type: "text",
    inputType: "textArea",
    name: "message",
    divClassName: "mt-8",
    className:
      "w-full sm:h-[6.5rem] bg-black lg:h-[14.5rem] md:h-[7.5rem]  text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
  },
];

export const footerIcons = [
  <FaGithub size={"30px"} />,
  <FaLinkedin size={"30px"} />,
  <FaTwitter size={"30px"} />,
  <FaInstagram size={"30px"} />,
];
