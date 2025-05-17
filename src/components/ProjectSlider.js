import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FaAngleRight } from 'react-icons/fa6';

function ProjectSlider() {
    const projectsData = [
        {
            title: 'Tuscany Restaurant',
            image: '/slider/tuscany.jpg',
        },
        {
            title: 'Expiration Reminder',
            image: '/slider/expiration-reminder.jpg',
        },
        {
            title: 'MUSTHAVE Store',
            image: '/slider/musthave2.jpg',
        },
        {
            title: 'Food Master',
            image: '/slider/food-master.jpg',
        },
        // {
        //    title: 'Prototype Vehicle',
        //    image: '/slider/car.jpg',
        // },
        {
            title: 'Subscriptions Tracker',
            image: '/slider/subscriptions-tracker.jpg',
        },
    ];

    return (
        {
            /*
        <div className='projects-slider' ref={containerRef}>
            <motion.div className='slider-track' style={{ x }}>
                {projects.map((project, index) => (
                    <motion.div
                        className='project-card'
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15,
                            type: 'easeIn',
                        }}
                        whileHover={{
                            y: -7,
                            borderColor: 'rgba(255, 255, 255, 0.225)',
                            transition: {
                                duration: 0.25,
                                type: 'ease',
                                //ease: [0.33, 1, 0.68, 1], // Custom easing
                            },
                        }}
                        animate={{
                            y: 0,
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            transition: {
                                duration: 0.25,
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

                            //blurDataURL={project.image}
                        />

                        <div className='text-wrapper'>
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

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: 0.275 + index * 0.1,
                                    type: 'ease',
                                }}
                                className='arrow-wrapper'
                            >
                                <FaAngleRight className='icon' />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div> */
        },
        (
            <section className='projects-slider-container'>
                <div className='projects-slider'>
                    {[...projectsData, ...projectsData].map(
                        ({ image, title }, index) => (
                            <motion.div
                                className='project-card'
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.15,
                                    type: 'easeIn',
                                }}
                            >
                                <div className='image-wrapper'>
                                    <Image
                                        src={image}
                                        width={900}
                                        height={900}
                                        className='project-image'
                                        loading='lazy'
                                        placeholder='blur'
                                        blurDataURL={image}
                                        alt={title}
                                    />
                                </div>

                                <div className='text-wrapper'>
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
                                        {title}
                                    </motion.h3>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.275 + index * 0.1,
                                            type: 'ease',
                                        }}
                                        className='arrow-wrapper'
                                    >
                                        <FaAngleRight className='icon' />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>
            </section>
        )
    );
}

export default ProjectSlider;
