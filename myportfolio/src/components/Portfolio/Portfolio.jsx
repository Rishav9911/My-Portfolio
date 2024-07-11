import React, { useRef } from 'react';
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Musique from "../../assets/musique.png";
import jobmeup from "../../assets/jobmeup.png";
import netflixclone from "../../assets/netflixclone.png";

const items = [
    {
        id: 1,
        title: "JobMeUp",
        img: `${jobmeup}`,
        desc: "Integrated Career Development Platform for the Digital Age. I contributed in crafting a robust supervised Machine Learning model tailored for effectively classifying multi-class datasets. Worked mainly on the Back-end Development using Flask and Python",
        link: "https://github.com/Rishav9911/JobMeUp",
    },
    {
        id: 2,
        title: "Musique",
        img: `${Musique}`,
        desc: " It’s a language-learning platform that lets you discover new songs and cultures from around the world. Whether you want to learn Spanish, French, Hindi, or any other language, Musique has a song for you. And not only that, but you can also learn how to play the chords of your favorite songs on guitar. ",
        link:"https://github.com/Rishav9911/musique",
    },
    {
        id: 3,
        title: "Netflix Clone",
        img: `${netflixclone}`,
        desc: "It is a Netflix front-end Clone website designed by me. Using the TmDB movie API to fetch the movie posters and required details for the interface made with tech stack of React and Sass/Scss.",
        link:"https://github.com/Rishav9911/netflixclone",
    },
    {
        id: 4,
        title: "Party Penguin",
        img: "https://images.pexels.com/photos/26051261/pexels-photo-26051261/free-photo-of-a-small-echidna-is-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Developing a comprehensive event discovery and ticketing platform. Implemented user authentication, event management, ticketing operations and integrated MongoDB for efficient data handling. Built an admin interface to manage and add new events",
        link:"https://github.com/Rishav9911/PartyPenguin",
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
                    <a href={item.link} target="_blank"><button> Source Code </button></a>
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
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}

        </div>
    )
}

export default Portfolio
