import React, { useRef } from 'react';
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Musique from "../../assets/musique.png";
import jobmeup from "../../assets/jobmeup.png";
import PartyPenguin from "../../assets/PartyPenguin.png";
import medminion from "../../assets/medminion.png";
import iotmalware from "../../assets/iotmalware.png";

const items = [
    {
            id: 1,
            title: "IoT Malware Detection Models",
            img: `${iotmalware}`, 
            desc: "Built a multiclass classification model using Python to distinguish between benign activity and 11 malware classes. Leveraged data preprocessing and model training on XGBoost achieving upto 89% accuracy.",
            link: "https://github.com/Rishav9911/IoT-Malware-Detection-Models",
        
    },
    {
        id: 2,
        title: "MedMinion",
        img: `${medminion}`,
        desc: "Led back-end development, ensuring robust user and admin authorization and authentication, and successfully integrated appointment scheduling and medicine recommendation models to enhance user experience.",
        link: "https://github.com/Rishav9911/MedMinion",
    },
    {
        id: 3,
        title: "JobMeUp",
        img: `${jobmeup}`,
        desc: "I contributed in crafting a robust supervised Machine Learning model tailored for effectively classifying multi-class datasets for this integrated career guidance platform working on Python & Flask.",
        link: "https://github.com/Rishav9911/JobMeUp",
    },
    {
        id: 4,
        title: "Party Penguin",
        img: `${PartyPenguin}`,
        desc: "I implemented organiser authentication, event management, ticketing operations and integrated MongoDB for efficient data handling for this comprehensive event discovery and ticketing platform.",
        link:"https://github.com/Rishav9911/PartyPenguin",
       
    },
    {
        id: 5,
        title: "Musique",
        img: `${Musique}`,
        desc: `I implemented LrcLib API to fetch music lyrics and audio for this language-learning platform that lets you learn a language through the power of music. `,
        link:"https://github.com/Rishav9911/musique",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer " ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer " style={{ y }} >
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank"><motion.button  whileHover={{scale:1.1}} whileTap={{scale:0.95}}> Source Code </motion.button></a>
                </motion.div>
            </div>
        </div>
    </section>
};

function Portfolio() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}

        </div>
    )
}

export default Portfolio
