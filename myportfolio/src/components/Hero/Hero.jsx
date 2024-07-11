import React from 'react';
import Me from "../../assets/mefirst.png"
import meback from "../../assets/meback.png";
import "./Hero.scss";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const textVariants = {
    initial: {
        x: -500,
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

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-100%",
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
        },

    },
};


const hoverVariants1 = {
    initial: {
        y: 0,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
};

const hoverVariants2 = {
    initial: {
        y: 0,
        opacity: 1,
    },
    animate: {
        y: 0,
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
};



function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1, 
      });
    


    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial"  animate={inView ? "animate" : "initial"}  ref={ref}>
                    <motion.h1 variants={textVariants}>"But what if I fall ?</motion.h1>
                    <motion.h1 variants={textVariants}>Oh, but what if you fly?"</motion.h1>
                </motion.div>

            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
             Developer 
            </motion.div>


            <motion.div className="imageContainer">


                <motion.img
                    src={meback}
                    alt=""
                    className='meback'
                    variants={hoverVariants1}
                    initial="initial"
                    animate={isHovered ? "animate" : "initial"}
                    style={{ scale: 1.1 }} />


                <motion.img
                    src={Me}
                    alt=""
                    className='mee'
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    variants={hoverVariants2}
                    initial="initial"
                    animate={isHovered ? "animate" : "initial"}
                />
            </motion.div>

        </div>
    )
}

export default Hero
