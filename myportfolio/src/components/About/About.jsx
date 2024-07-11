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
     <motion.div className="aboutMe" variants={textVariants}>   Hello there, <i> I'm Rishav Sachdeva </i> . I always have been fascinated by maths and computers since an early age and I'm currently a Third-year B.Tech student majoring in <i>Computer Science</i> at <i>Jaypee Institute of Information & Technology </i>, Noida.<span className='hide'> My journey in the world of technology has just begun.</span></motion.div>
     </motion.div>

     <motion.div className='aboutBox'  initial="initial" animate={inView ? "animate" : "initial"} variants={textVariants}>
     <motion.div className="aboutMe" variants={textVariants}> One of the things I love most about engineering is the constant learning that comes with it. <span className='hide'>My journey began in <i> Web Development</i> and I enjoy overlooking the backend development of a project. I am currently exploring the world of <i>Data Science, AI and ML </i> and I'm interested in pursuing a profession in this domain.</span></motion.div>
     </motion.div>

     <motion.div className='aboutBox'  initial="initial" animate={inView ? "animate" : "initial"} variants={textVariants}>
     <motion.div className="aboutMe" variants={textVariants}> But as life is not all about just working, I try to enjoy life to the fullest,living one day at a time . My favourite leisure activity includes sketching  and binge-watching anime. </motion.div>
     </motion.div>

     <motion.div className='aboutBox'  initial="initial" animate={inView ? "animate" : "initial"} variants={textVariants}>
     <motion.div className="aboutMe" variants={textVariants}> I'm always open to connecting  with fellow tech enthusiasts, industry professionals, and mentors.<span className='hide'> Feel free to connect with me through my Social Media handles. Let's explore opportunities to learn and grow together.</span></motion.div>
     </motion.div>

    
    </motion.div>
  )
}

export default About
