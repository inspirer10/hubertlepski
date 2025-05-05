import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

function AboutMe() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

    const projects = [
        {
            title: 'Tuscany Restaurant',
            image: '/bgc.png',
        },
        {
            title: 'Expiration Reminder',
            image: '/bgc3.png',
        },
        {
            title: 'MUSTHAVE Store',
            image: '/bgc1.png',
        },
        {
            title: 'Food Master',
            image: '/bgc2.png',
        },
        {
            title: 'Prototype Vehicle',
            image: '/bgc2.png',
        },
    ];

    return (
        <section className='aboutMe_section'>
            {/* Projects Slider */}
            <div className='projects-slider'>
                <motion.div className='slider-track' style={{ x }}>
                    {projects.map((project, index) => (
                        <motion.div
                            className='project-card'
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.75,
                                delay: 0.25 + index * 0.1,
                                type: 'ease',
                            }}
                            whileHover={{
                                y: -7,
                                borderColor: 'rgba(255, 255, 255, 0.225)',
                                transition: {
                                    duration: 0.275,
                                    //ease: [0.33, 1, 0.68, 1], // Custom easing
                                    type: 'ease',
                                },
                            }}
                            animate={{
                                y: 0,
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                transition: {
                                    duration: 0.275,
                                    //ease: [0.33, 1, 0.68, 1],
                                    type: 'ease',
                                },
                            }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className='project-image'
                            />

                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: 0.275 + index * 0.1,
                                    type: 'ease',
                                }}
                            >
                                {project.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className='content-wrapper' id='About'>
                <motion.h5
                    initial={{ opacity: 0, x: -50 }}
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

                <motion.p
                    className='aboutMe-content'
                    initial={{ opacity: 0, x: -55 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.1,
                        delay: 0.375,
                        type: 'ease',
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem commodi ducimus atque dolore explicabo ad
                    blanditiis nostrum, aut vitae a cum officiis quis optio quod
                    facilis animi doloremque est corporis.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita corrupti similique odio nemo ipsam soluta
                    architecto ducimus quisquam perspiciatis beatae suscipit
                    mollitia praesentium incidunt, aperiam, in necessitatibus
                    aliquam, totam eveniet.
                </motion.p>
            </div>
        </section>
    );
}

export default AboutMe;
