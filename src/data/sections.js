import {
  FaDev,
  FaInfoCircle,
  FaSignLanguage,
  IoIosDocument,
  IoIosPaperPlane,
  MdPerson,
  MdSchool,
  MdWork
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson, color: '#5e0991' },
  { id: "projects", title: "Projects", icon: FaDev, color: '#300263' },
  { id: "education", title: "Education", icon: MdSchool, color: '#004cf7' },
  { id: "work", title: "Work", icon: MdWork, color: '#2db8a6' },
  { id: "resume", title: "Resume", icon: IoIosDocument, color: '#04a53a' },
  { id: "languages", title: "Languages", icon: FaSignLanguage, color: '#f5d802' },
  { id: "contact", title: "Contact", icon: IoIosPaperPlane, color: '#f66304' },
  { id: "footer", title: "About", icon: FaInfoCircle, color: '#f60000' },
];

export default sections;
