import React from 'react';
import { FaGlobe, FaGithub, FaLinkedin,  } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="glassMorphism flex flex-col-reverse items-center justify-between gap-3 mt-8 text-white md:flex-row md:gap-0">
  <span className="text-sm">Copyright © {new Date().getFullYear()} - All right reserved</span>
  <div className="flex gap-4 mt-2 md:mt-0 text-xl">
          <a href="https://abdurrobr34l.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6]">
            <FaGlobe />
          </a>
          <a href="https://github.com/Abdurrobr34l" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6]">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abdurrobr34l/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6]">
            <FaLinkedin />
          </a>
        </div>
</footer>


  );
};

export default Footer;