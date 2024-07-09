import React from 'react';
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";


function Parallax(props) {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])


    return (

        <div className='parallax' style={{ background:'linear-gradient(180deg,#0c0c1d,#111132)'}} ref={ref}>
            <motion.h1 style={{ y: yText }}  > {props.content}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: ybg }}  className="planets"></motion.div>
            <motion.div style={{ x: ybg }}  className="stars"></motion.div>
        </div>

    );
}


export default Parallax

