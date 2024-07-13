import React from 'react';
import github from "../../../assets/github.png";
import mail from "../../../assets/gmail-logo.png";
import linkedin from "../../../assets/linkedin.png";
import {motion} from "framer-motion";


function Links() {

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity:1,
    },
    closed: {
      y: 50,
      opacity:0,
    },
  };

  const items = ["Home", "About","Experience", "Skills", "Projects", "Contact" ];

  return (
    <motion.div className='links'>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
      <motion.a href="https://drive.google.com/drive/folders/15SD9ot7qUPdzl0jkmCxysshs3n4Ol0hs?usp=sharing" target="_blank" variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Resume</motion.a>

      
        <motion.div className='social'>

            <motion.a href="mailto:sachdevarishav449@gmail.com"><motion.img src={mail} alt="mail"
             whileHover={{scale:1.1}} whileTap={{scale:0.95}}/></motion.a>

            <motion.a href="https://github.com/Rishav9911" target="_blank"><motion.img src={github} alt="github"
            whileHover={{scale:1.1}} whileTap={{scale:0.95}} /></motion.a>

            <motion.a href="https://www.linkedin.com/in/rishavsachdeva9911" target="_blank"><motion.img src={linkedin} alt="linkedin"
            whileHover={{scale:1.1}} whileTap={{scale:0.95}} /></motion.a>

        </motion.div>
    </motion.div>
  )
}

export default Links
