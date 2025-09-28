import Image from 'next/image';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { FaAngleRight } from 'react-icons/fa6';
import Link from 'next/link';

const projectsData = [
    {
        title: 'Tuscany Restaurant',
        image: '/slider/tuscany.jpg',
        link: '',
    },
    {
        title: 'Expiration Reminder',
        image: '/slider/expiration-reminder.jpg',
        link: '',
    },
    {
        title: 'MUSTHAVE Store',
        image: '/slider/musthave2.jpg',
        link: '',
    },
    {
        title: 'Food Master',
        image: '/slider/food-master.jpg',
        link: '',
    },
    {
        title: 'English Tutor',
        image: '/slider/englishTutor.png',
        link: '',
    },
    {
        title: 'Subscriptions Tracker',
        image: '/slider/subscriptions-tracker.jpg',
        link: '',
    },
];

function ProjectSlider() {
    const doubledProjectsData = useMemo(() => {
        return [...projectsData, ...projectsData];
    }, []);

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
            <>
                <div className='carousel'>
                    <div className='group'>
                        <div className='card'>1</div>
                        <div className='card'>2</div>
                        <div className='card'>3</div>
                        <div className='card'>4</div>
                        <div className='card'>5</div>
                        <div className='card'>6</div>
                    </div>

                    <div className='group' aria-hidden>
                        <div className='card'>1</div>
                        <div className='card'>2</div>
                        <div className='card'>3</div>
                        <div className='card'>4</div>
                        <div className='card'>5</div>
                        <div className='card'>6</div>
                    </div>
                </div>

                <section className='projects-slider-container'>
                    <div className='projects-slider'>
                        {doubledProjectsData.map(
                            ({ image, title, link }, index) => (
                                <motion.div
                                    className='project-card'
                                    key={index}
                                    //initial={{ opacity: 0 }}
                                    //whileInView={{ opacity: 1 }}
                                    //viewport={{ once: true }}
                                    whileHover={{
                                        y: -10,
                                        borderColor:
                                            'rgba(255, 255, 255, 0.225)',
                                        transition: {
                                            duration: 0.4,
                                            type: 'ease',
                                            //ease: [0.33, 1, 0.68, 1], // Custom easing
                                        },
                                    }}
                                    animate={{
                                        y: 0,
                                        borderColor: 'rgba(255, 255, 255, 0.1)',
                                        transition: {
                                            duration: 0.4,
                                            //ease: [0.33, 1, 0.68, 1],
                                            type: 'ease',
                                        },
                                    }}
                                    //transition={{
                                    //    duration: 0.6,
                                    //    delay: index * 0.15,
                                    //    type: 'easeIn',
                                    //</div>}}
                                >
                                    <div className='image-wrapper'>
                                        <Image
                                            className='project-image'
                                            src={image}
                                            width={650}
                                            height={500}
                                            quality={90}
                                            alt={title}
                                        />
                                    </div>

                                    <div className='text-wrapper'>
                                        <motion.h3>
                                            <Link href={link}>{title}</Link>
                                        </motion.h3>

                                        <motion.div className='arrow-wrapper'>
                                            <FaAngleRight className='icon' />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        )}
                    </div>
                </section>
            </>
        )
    );
}

export default React.memo(ProjectSlider);
