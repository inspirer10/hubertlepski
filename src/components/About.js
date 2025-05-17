import React from 'react';
import { motion } from 'framer-motion';
import SplitedText from './SplitedText';

function AboutMe() {
    const technologies = [
        { name: 'html', backgroundColor: '#DC5029', color: '#FFF' },
        { name: 'css', backgroundColor: '#264DE4', color: '#FFF' },
        { name: 'sass', backgroundColor: '#CC6699', color: '#FFF' },
        { name: 'git', backgroundColor: '#8ED25E', color: '#000' },
        { name: 'js', backgroundColor: '#F0DC4E', color: '#000' },
        { name: 'react', backgroundColor: '#0DD8FF', color: '#000' },
        { name: 'next', backgroundColor: '#60CFCA', color: '#000' },
        { name: 'ts', backgroundColor: 'royalblue', color: '#FFF' },
        { name: 'react router', backgroundColor: '#272425', color: '#FFF' },
        {
            name: 'redux toolkit',
            backgroundColor: '#764ABE',
            color: '#FFF',
        },
        { name: 'node', backgroundColor: '#8AC600', color: '#000' },
        { name: 'express', backgroundColor: '#363636', color: '#FFF' },
        { name: 'mongoDB', backgroundColor: '#4EAA3F', color: '#FFF' },
        { name: 'mui', backgroundColor: '#007DFE', color: '#FFF' },
        { name: 'bootstrap', backgroundColor: '#7B09F7', color: '#FFF' },
        { name: 'rwd', backgroundColor: '#000', color: '#FFF' },
        { name: 'ux/ui', backgroundColor: '#000', color: '#FFF' },
        { name: 'vsc', backgroundColor: '#1F9CEF', color: '#FFF' },
    ];
    const phrase1 = `I am open to various opportunities and eager to learn new technologies, frameworks, and tools. I am flexible in working both remotely and in-office, and willing to relocate as needed`;
    const phrase2 = `I enjoy meeting new people and have no issues communicating in English, allowing me to adapt easily to different work environments and contribute effectively to diverse teams`;
    const phrase3 = `I am a creative developer with a strong can-do attitude who loves solving problems and finding new solutions. I learn quickly, work well in a team, and manage my time effectively`;
    const phrase4 = `I pay attention to details, communicate clearly, and adapt easily to new challenges. I'm always eager to learn about new technologies and enjoy suggesting ideas to others`;

    return (
        <section className='aboutMe_section' id='About'>
            <div className='content-wrapper'>
                <motion.h5
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.1,
                        delay: 0.3,
                        type: 'ease',
                    }}
                >
                    About Me
                </motion.h5>

                <div className='text-container'>
                    <article
                        className='description_text'
                        //initial={{ opacity: 0, x: -55 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        //viewport={{ once: true }}
                        //transition={{
                        //  duration: 1.1,
                        //    delay: 0.375,
                        //    type: 'ease',
                        //  }}
                    >
                        {/*
                        <p className='splitted'>
                            <span>{phrase1}</span>
                        </p>
                        <p className='splitted'>
                            <span>{phrase2}</span>
                        </p>

                        <p className='splitted'>
                            <span>{phrase3}</span>
                        </p>

                        <p className='splitted'>
                            <span>{phrase4}</span>
                        </p>  */}

                        <SplitedText phrase={phrase1} />
                        <SplitedText phrase={phrase2} />
                        <SplitedText phrase={phrase3} />
                        <SplitedText phrase={phrase4} />
                    </article>
                </div>

                <div className='skills-showcase-wrapper'>
                    <h5>My main skills</h5>
                    <aside>
                        {technologies.map(
                            ({ name, backgroundColor, color }) => (
                                <div className='button' key={name}>
                                    <p className='primary'>{name}</p>
                                    <div className='secondary'>
                                        <p style={{ color }}>{name}</p>
                                        <div style={{ backgroundColor }} />
                                    </div>
                                </div>
                            )
                        )}
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
