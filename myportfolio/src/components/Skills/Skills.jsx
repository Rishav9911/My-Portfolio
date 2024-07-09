// // import React from 'react';
// // import "./Skills.scss";
// // import html from "../../assets/html.png";
// // import cpp from "../../assets/cpp.png";
// // import java from "../../assets/java.png";
// // import python from "../../assets/python.png";
// // import mern from "../../assets/mern.png";
// // import sass from "../../assets/sass.png";
// // import pandas from "../../assets/pandas.png";
// // import numpy from "../../assets/numpy.png";
// // import spring from "../../assets/spring.png";
// // import sql from "../../assets/sql.png";
// // import mysql from "../../assets/mysql.png";
// // import flask from "../../assets/flask.png";
// // import github from "../../assets/github-logo.png";
// // import postman from "../../assets/postman.png";
// // import jupyter from "../../assets/jupyter.png";
// // import {motion } from "framer-motion";
// // import { useInView } from 'framer-motion';


// // const textVariants = {
// //   initial: {
// //       x: 500,
// //       opacity: 0,
// //   },
// //   animate: {
// //       x: 0,
// //       opacity: 1,
// //       transition: {
// //           duration: 1,
// //           staggerChildren: 0.1,
// //       },
// //   },
// // };

// // function Skills() {

// //   const { ref, inView } = useInView({
// //     triggerOnce: false,
// //     threshold: 0.1, 
// //   });


// //   return (
// //     <motion.div className='skills'  ref={ref}>

// //       <motion.div className='solar-logo html' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={html} alt='HTML' className='solar-img' variants={textVariants}/>
// //       </motion.div>

// //       <motion.div className='solar-logo cpp' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={cpp} alt='C++' className='solar-img' variants={textVariants}/>
// //       </motion.div>

// //       <motion.div className='solar-logo java' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={java} alt='Java' className='solar-img' variants={textVariants}/>
// //       </motion.div>

// //       <motion.div className='solar-logo python' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={python} alt='Python' className='solar-img' variants={textVariants}/>
// //       </motion.div>

// //       <motion.div className='solar-logo mern' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={mern} alt='MERN' className='solar-img' variants={textVariants}/>
// //       </motion.div>

// //       <motion.div className='solar-logo sass' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={sass} alt='Sass' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo pandas' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={pandas} alt='Pandas' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo numpy' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={numpy} alt='Numpy' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo spring' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={spring} alt='Spring' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo sql' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={sql} alt='SQL' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo mysql' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={mysql} alt='MySQL' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo flask' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={flask} alt='Flask' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo github' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={github} alt='GitHub' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo postman' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={postman} alt='Postman' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //       <motion.div className='solar-logo jupyter' variants={textVariants}  initial="initial" animate={inView ? "animate" : "initial"}>
// //         <motion.img src={jupyter} alt='Jupyter' className='solar-img' variants={textVariants}/>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // export default Skills;

// import React from 'react';
// import "./Skills.scss";
// import html from "../../assets/html.png";
// import cpp from "../../assets/cpp.png";
// import java from "../../assets/java.png";
// import python from "../../assets/python.png";
// import mern from "../../assets/mern.png";
// import sass from "../../assets/sass.png";
// import pandas from "../../assets/pandas.png";
// import numpy from "../../assets/numpy.png";
// import spring from "../../assets/spring.png";
// import sql from "../../assets/sql.png";
// import mysql from "../../assets/mysql.png";
// import flask from "../../assets/flask.png";
// import github from "../../assets/github-logo.png";
// import postman from "../../assets/postman.png";
// import jupyter from "../../assets/jupyter.png";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from 'react-intersection-observer';

// const textVariants = {
//   initial: {
//     opacity: 0,
//     x: 500,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// function Skills() {
//   const controls = useAnimation();
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("animate");
//     } else {
//       controls.start("initial");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div className='skills' ref={ref} initial="initial" animate={controls}>
//       <motion.div  className="stars"></motion.div>
//       <motion.div className='solar-logo html' variants={textVariants}>
//         <motion.img src={html} alt='HTML' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo cpp' variants={textVariants}>
//         <motion.img src={cpp} alt='C++' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo java' variants={textVariants}>
//         <motion.img src={java} alt='Java' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo python' variants={textVariants}>
//         <motion.img src={python} alt='Python' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo mern' variants={textVariants}>
//         <motion.img src={mern} alt='MERN' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo sass' variants={textVariants}>
//         <motion.img src={sass} alt='Sass' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo pandas' variants={textVariants}>
//         <motion.img src={pandas} alt='Pandas' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo numpy' variants={textVariants}>
//         <motion.img src={numpy} alt='Numpy' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo spring' variants={textVariants}>
//         <motion.img src={spring} alt='Spring' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo sql' variants={textVariants}>
//         <motion.img src={sql} alt='SQL' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo mysql' variants={textVariants}>
//         <motion.img src={mysql} alt='MySQL' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo flask' variants={textVariants}>
//         <motion.img src={flask} alt='Flask' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo github' variants={textVariants}>
//         <motion.img src={github} alt='GitHub' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo postman' variants={textVariants}>
//         <motion.img src={postman} alt='Postman' className='solar-img' />
//       </motion.div>
//       <motion.div className='solar-logo jupyter' variants={textVariants}>
//         <motion.img src={jupyter} alt='Jupyter' className='solar-img' />
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Skills;

import React from 'react';
import "./Skills.scss";
import html from "../../assets/html.png";
import cpp from "../../assets/cpp.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import mern from "../../assets/mern.png";
import sass from "../../assets/sass.png";
import pandas from "../../assets/pandas.png";
import numpy from "../../assets/numpy.png";
import spring from "../../assets/spring.png";
import sql from "../../assets/sql.png";
import mysql from "../../assets/mysql.png";
import flask from "../../assets/flask.png";
import github from "../../assets/github-logo.png";
import postman from "../../assets/postman.png";
import jupyter from "../../assets/jupyter.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const centerPosition = { x: 0, y: 0 };

const textVariants = {
    initial:(custom) =>( {
        opacity: 0,
        x: custom.x,
        y: custom.y,
    }),
    animate: {
        opacity: 1,
        x: centerPosition.x,
        y: centerPosition.y,
        transition: {
            duration: 4,
            staggerChildren: 0.1,
        },
    },
};

function Skills() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
    }, [controls, inView]);

    return (
        <motion.div className='skills' ref={ref} initial="initial" animate={controls}>
            <motion.div className="stars"></motion.div>
            <motion.div
                className='solar-logo html'
                variants={textVariants}
                custom={{ x: '-130px', y: '70px' }}
            >
                <motion.img src={html} alt='HTML' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo cpp'
                variants={textVariants}
                custom={{ x: '-400px', y: '70px' }}
            >
                <motion.img src={cpp} alt='C++' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo java'
                variants={textVariants}
                custom={{ x: '45%', y: '30%' }}
            >
                <motion.img src={java} alt='Java' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo python'
                variants={textVariants}
                custom={{ x: '330px', y: '-150px' }}
            >
                <motion.img src={python} alt='Python' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo mern'
                variants={textVariants}
                custom={{ x: '100px', y: '-100px' }}
            >
                <motion.img src={mern} alt='MERN' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo sass'
                variants={textVariants}
                custom={{ x: '700px', y: '20px' }}
            >
                <motion.img src={sass} alt='Sass' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo pandas'
                variants={textVariants}
                custom={{ x: '-550px', y: '400px' }}
            >
                <motion.img src={pandas} alt='Pandas' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo numpy'
                variants={textVariants}
                custom={{ x: '85px', y: '400px' }}
            >
                <motion.img src={numpy} alt='Numpy' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo spring'
                variants={textVariants}
                custom={{x: '-200px', y: '-100px'}}
            >
                <motion.img src={spring} alt='Spring' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo sql'
                variants={textVariants}
                custom={{ x: '430px', y: '70px' }}
            >
                <motion.img src={sql} alt='SQL' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo mysql'
                variants={textVariants}
                custom={{ x: '-90px', y: '200px' }}
            >
                <motion.img src={mysql} alt='MySQL' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo flask'
                variants={textVariants}
                custom={{ x: '-500px', y: '-300px' }}
            >
                <motion.img src={flask} alt='Flask' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo github'
                variants={textVariants}
                custom={{ x: '600px', y: '-350px' }}
            >
                <motion.img src={github} alt='GitHub' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo postman'
                variants={textVariants}
                custom={{ x: '1000px', y: '200px' }}
            >
                <motion.img src={postman} alt='Postman' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo jupyter'
                variants={textVariants}
                custom={{ x: '-90px', y: '-350px' }}
            >
                <motion.img src={jupyter} alt='Jupyter' className='solar-img' />
            </motion.div>
        </motion.div>
    );
}

export default Skills;


