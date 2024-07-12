

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience2.scss';
import expLogo from "../../assets/expImg.jpg";
import hacktoberfest from "../../assets/hacktoberfest.jpg";
import swoc from "../../assets/swoc.jpeg";
import sih from "../../assets/sih.webp";
import jwoc from "../../assets/jwoc.svg";
import osdc from "../../assets/osdc.png";
import { FaBriefcase } from 'react-icons/fa';
import { FaLaptopCode } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import { BiCodeCurly } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";
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

const textVariants2 = {
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

function Experience() {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    return (
        <>
            <motion.div className="experience-section firstpage" ref={ref1}>
                <VerticalTimeline >
                    <VerticalTimelineElement
                     style={{marginTop:"10px"}}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: ' #7dc4f2', color: 'black', boxShadow: "white 20px 20px" }}
                        contentArrowStyle={{ borderRight: '7px solid #7dc4f2' }}
                        date={<span style={{ fontSize: '2.5rem', color: 'white',fontFamily: "Amatic SC"}}>September 2023-October 2023</span>}
                        iconStyle={{ background: '#fcf468', color: 'black', border: "solid black"}}
                        icon={<FaBriefcase />}
                    >
                        <motion.div variants={textVariants} initial="initial" animate={inView1 ? "animate" : "initial"}>
                            <motion.div className='expBox'>
                                <motion.div className='expTagline'>
                                    <h3 className="vertical-timeline-element-title">Smart India Hackathon</h3>
                                    <h4 className="vertical-timeline-element-subtitle">ROLE: Front-end Development</h4>
                                    <p>Selected for </p>
                                    <p>Internal Hackathon</p>
                                </motion.div>
                                <motion.div className='expLogo'>
                                    <img src={sih} alt="smart india hackathon"  className='sih opImg' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        style={{marginTop:"-10px"}}
                        contentStyle={{ background: ' #7dc4f2', color: 'black', boxShadow: "white 20px 20px" }}
                        contentArrowStyle={{ borderRight: '7px solid   #7dc4f2' }}
                        date={<span style={{ fontSize: '2.5rem', color: 'white',fontFamily: "Amatic SC"}}>October 2023</span>}
                        iconStyle={{ background: '#fcf468', color: 'black', border: "solid black" }}
                        icon={<FaLaptopCode />}
                    >
                        <motion.div variants={textVariants2} initial="initial" animate={inView1 ? "animate" : "initial"}>
                            <motion.div className='expBox'>
                                <motion.div className='expTagline'>
                                    <h3 className="vertical-timeline-element-title">Open Source</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Hacktoberfest Hall of fame</h4>
                                    <p>4 PRs Accepted</p>
                                </motion.div>
                                <motion.div className='expLogo'>
                                    <img src={hacktoberfest} alt="hacktoberfest" className='opImg' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        style={{marginTop:"-10px"}}
                        contentStyle={{ background: ' #7dc4f2', color: 'black', boxShadow: "white 20px 20px" }}
                        contentArrowStyle={{ borderRight: '7px solid   #7dc4f2' }}
                        date={<span style={{ fontSize: '2.5rem', color: 'white',fontFamily: "Amatic SC"}}>January 2024</span>}
                        iconStyle={{ background: '#fcf468', color: 'black', border: "solid black" }}
                        icon={<RiCodeSSlashFill />}
                    >
                        <motion.div variants={textVariants} initial="initial" animate={inView1 ? "animate" : "initial"}>
                            <motion.div className='expBox'>
                                <motion.div className='expTagline'>
                                    <h3 className="vertical-timeline-element-title">Codejam V4</h3>
                                    <h4 className="vertical-timeline-element-subtitle">ROLE: Front-end & <br />Back-end Development</h4>
                                    <p>Secured 3rd position</p>
                                </motion.div>
                                <motion.div className='expLogo'>
                                    <img src={osdc} alt="codejam v4" className='opImg' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </motion.div>

            <motion.div className="experience-section second-page" ref={ref2}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        style={{marginTop:"10px"}}
                        contentStyle={{ background: ' #7dc4f2', color: 'black', boxShadow: "white 20px 20px" }}
                        contentArrowStyle={{ borderRight: '7px solid   #7dc4f2' }}
                        date={<span style={{ fontSize: '2.5rem', color: 'white',fontFamily: "Amatic SC"}}>January 2024 - Februrary 2024</span>}
                        iconStyle={{ background: '#fcf468', color: 'black', border: "solid black" }}
                        icon={<BiCodeCurly />}
                        position='right'
                    >
                        <motion.div variants={textVariants2} initial="initial" animate={inView2 ? "animate" : "initial"}>
                            <motion.div className='expBox'>
                                <motion.div className='expTagline'>
                                    <h3 className="vertical-timeline-element-title">Open Source</h3>
                                    <h4 className="vertical-timeline-element-subtitle">SWOC</h4>
                                    <p>2 PRs Accepted</p>
                                </motion.div>
                                <motion.div className='expLogo'>
                                    <img src={swoc} alt="swoc" className='opImg' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: ' #7dc4f2', color: 'black', boxShadow: "white 20px 20px" }}
                        contentArrowStyle={{ borderRight: '7px solid   #7dc4f2' }}
                        date={<span style={{ fontSize: '2.5rem', color: 'white',fontFamily: "Amatic SC"}}>January 2024 - Februrary 2024</span>}
                        iconStyle={{ background: '#fcf468', color: 'black', border: "solid black" }}
                        icon={<SiBuymeacoffee />}
                        position='left'
                    >
                        <motion.div variants={textVariants} initial="initial" animate={inView2 ? "animate" : "initial"}>
                            <motion.div className='expBox'>
                                <motion.div className='expTagline'>
                                    <h3 className="vertical-timeline-element-title">Open Source</h3>
                                    <h4 className="vertical-timeline-element-subtitle">JWOC</h4>
                                    <p>7 PRs Accepted</p>
                                </motion.div>
                                <motion.div className='expLogo'>
                                    <img src={jwoc} alt="jwoc" className='opImg' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: ' #7dc4f2', color: 'black', boxShadow: "white 20px 20px" }}
                        contentArrowStyle={{ borderRight: '7px solid   #7dc4f2' }}
                        date={<span style={{ fontSize: '2.5rem', color: 'white',fontFamily: "Amatic SC"}}>April 2024</span>}
                        iconStyle={{ background: '#fcf468', color: 'black', border: "solid black" }}
                        icon={<RiTeamFill />}
                        position='right'
                    >
                        <motion.div variants={textVariants2} initial="initial" animate={inView2 ? "animate" : "initial"}>
                            <motion.div className='expBox'>
                                <motion.div className='expTagline'>
                                    <h3 className="vertical-timeline-element-title">RIDEHack'24</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Role: Back-end & ML model Development </h4>
                                    <p>Career Guidance System</p>
                                </motion.div>
                                <motion.div className='expLogo'>
                                    <img src={osdc} alt="rideHack'24" className='opImg' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </motion.div>

            <motion.div className="experience-section third-page" ref={ref3}>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        style={{marginTop:"100px"}}
                        contentStyle={{ background: ' #7dc4f2', color: 'black', boxShadow: "white 20px 20px" }}
                        contentArrowStyle={{ borderRight: '7px solid   #7dc4f2' }}
                        date={<span style={{ fontSize: '2.5rem', color: 'white',fontFamily: "Amatic SC"}}>June, 2024 - August, 2024</span>}
                        iconStyle={{ background: '#fcf468', color: 'black', border: "solid black" }}
                        icon={<FaPlane />}
                    >
                        <motion.div variants={textVariants} initial="initial" animate={inView3 ? "animate" : "initial"}>
                            <motion.div className='expBox'>
                                <motion.div className='expTagline'>
                                    <h3 className="vertical-timeline-element-title">SpiceJet Ltd, Gurugram</h3>
                                    <h4 className="vertical-timeline-element-subtitle">ROLE: Technical Intern</h4>
                                    <ul>
                                        <li>Java , SpringBoot , SQL , Postman</li>
                                        <li> Developed RESTful API endpoints to handle the ingestion of flight delay data
                                            from Excel sheets and store it in a database</li>
                                        <li className='hide'>Designed a database schema to ensure fast and reliable storage
                                            and retrieval of flight delay data.</li>
                                    </ul>
                                </motion.div>
                                <motion.div className='expLogo'>
                                    <img src={expLogo} alt="spicejet logo" className='opImg' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </motion.div>
        </>
    );
}

export default Experience;

