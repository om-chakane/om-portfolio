import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope} from "react-icons/fa";

const socials = [
    { icon:  <FaGithub />, path: "https://github.com/om-chakane" },
    { icon:  <FaLinkedinIn />, path: "https://www.linkedin.com/in/omchakane" },
    { icon:  <FaYoutube />, path: "https://www.youtube.com/@zandubam22" },
    { icon: <FaEnvelope />, path: "mailto:omchakane222@gmail.com", label: "Email" },
];

const Socials = ({containerStyles, iconStyles}) => {
  const handleClick = (url) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
    window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
              <div key={index}
              className={iconStyles}
              role="button"
              aria-label={item.label}
              onClick={() => handleClick(item.path)}
              style={{ cursor: 'pointer' }}>
                {item.icon}
                </div>
            );
        })}
    </div>
  );
};

export default Socials;