import React from 'react';
import "./Experience.scss";
import {motion} from "framer-motion";
import people from "../../assets/people.webp";
import { useInView } from 'react-intersection-observer';


const variants={
    initial:{
        x:-500,
        y:50,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};


function Experience() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1, 
      });
    

  return (
    <motion.div className='exp ' ref={ref}>
    <motion.div className='textContainer'  variants={variants} initial="initial" animate={inView ? "animate" : "initial"} >
        <p>
            i focus on helping your <br/> brand grow
        </p>
        <hr/>
    </motion.div>
    <motion.div className='titleContainer'  variants={variants} initial="initial" animate={inView ? "animate" : "initial"} >
        <motion.div className='title'>
            <img src={people} alt="" />
            <h1> <motion.b  whileHover={{color:"orange"}}>unique</motion.b> ideas</h1>
        </motion.div>
        <motion.div className='title'>
            <h1> <motion.b whileHover={{color:"orange"}}>for your</motion.b> business</h1>
            <button>what we do</button>
        </motion.div>
    </motion.div>
    <motion.div className='listContainer'  variants={variants} initial="initial" animate={inView ? "animate" : "initial"} >
        <motion.div className="box"  whileHover={{background:"lightgray",color:"black"}}>
            <h2>branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam distinctio, omnis explicabo dolor, porro, a dicta illo fugiat accusantium est sequi quasi iusto. Minus nisi labore nemo aperiam quam.
            Natus nobis numquam quaerat laboriosam accusantium, delectus vel voluptatem at. Veniam voluptas eligendi dolore animi doloribus in aliquam neque, eveniet deserunt, omnis, temporibus consectetur quas itaque illo. Aspernatur, quidem? </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam distinctio, omnis explicabo dolor, porro, a dicta illo fugiat accusantium est sequi quasi iusto. Minus nisi labore nemo aperiam quam.
            Natus nobis numquam quaerat laboriosam accusantium, delectus vel voluptatem at. Veniam voluptas eligendi dolore animi doloribus in aliquam neque, eveniet deserunt, omnis, temporibus consectetur quas itaque illo. Aspernatur, quidem? </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam distinctio, omnis explicabo dolor, porro, a dicta illo fugiat accusantium est sequi quasi iusto. Minus nisi labore nemo aperiam quam.
            Natus nobis numquam quaerat laboriosam accusantium, delectus vel voluptatem at. Veniam voluptas eligendi dolore animi doloribus in aliquam neque, eveniet deserunt, omnis, temporibus consectetur quas itaque illo. Aspernatur, quidem? </p>
            <button>Go</button>
        </motion.div>
    </motion.div>
      
    </motion.div>
  )
}

export default Experience
