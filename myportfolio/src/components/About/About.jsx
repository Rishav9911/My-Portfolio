import React from 'react';
import "./About.scss";
import {motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



const textVariants = {
  initial: {
      x: 500,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.1,
      },
  },
};

function About() {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });


  return (
    <motion.div className='aboutSection'  ref={ref}>
    
    <motion.div variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"} className='aboutBox'>
     <motion.div className="aboutMe" variants={textVariants}>   Hello there, I'm Rishav Sachdeva . I always have been fascinated by maths and computers since an early age and currently a <span className='white'>Third-year B.Tech student</span> majoring in Computer Science at <span className='white'>Jaypee Institute of Information Technology, Noida</span> .<span className='hide'> My journey in the world of technology has just begun.🌎/</span></motion.div>
     </motion.div>

     <motion.div className='aboutBox'  initial="initial" animate={inView ? "animate" : "initial"} variants={textVariants}>
     <motion.div className="aboutMe" variants={textVariants}> One of the things I love most about software engineering is the constant learning that comes with it.<span className='hide'> New technologies are constantly emerging, and I'm always eager to learn and stay up-to-date on the latest trends.</span></motion.div>
   
     <motion.div className="aboutMe" variants={textVariants}> But as life is not all about just working, I try to enjoy life to the fullest,living one day at a time . My favourite leisure activity includes <span className='white'>Sketching</span> ✍🏻 and binge-watching <span className='white'>Anime</span>. </motion.div>
     </motion.div>

     <motion.div className='aboutBox'  initial="initial" animate={inView ? "animate" : "initial"} variants={textVariants}>
     <motion.div className="aboutMe" variants={textVariants}> I'm always open to connecting  with fellow tech enthusiasts, industry professionals, and mentors.<span className='hide'> Feel free to connect with me through my Social Media handles. Let's explore opportunities to learn and grow together.</span>🚀</motion.div>
     </motion.div>

    
    </motion.div>
  )
}

export default About
