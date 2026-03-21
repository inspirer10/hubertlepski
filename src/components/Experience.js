import React, { useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { DownloadIcon } from './animatedIcons/DownloadIcon';

function Experience() {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);
    const controls = useAnimation();

    const experienceData = [
        {
            time: '05.2025 - Present',
            jobTitle: 'Next.js Developer',
            company: 'Fundacja Kompetencji Cyfrowych',
        },
        {
            time: '10.2025',
            jobTitle: 'AI Course',
            company: 'Umiejętnosci Jutra AI',
            certificate: true,
            href: '/CV/umiejetnosciJutraCertificate.pdf',
            fileName: 'Hubert Łepski Umiejętności JutraAI.pdf',
        },
        {
            time: '05.2025',
            jobTitle: 'AI Course',
            company: 'AIDEAS',
            certificate: true,
            href: '/CV/aideasCertificate.pdf',
            fileName: 'Hubert Łepski AiDEAS.pdf',
        },
        {
            time: '12.2024 - 03.2025',
            jobTitle: 'Office Assistant',
            company: 'Aztec Group',
        },
        {
            time: '11.2022 - 10.2024',
            jobTitle: 'Web Developer',
            company: 'Avangarde Websites',
        },
        {
            time: '2021',
            jobTitle: 'Web Dev Course',
            company: 'Kodilla',
        },
        {
            time: '2018 - 2020',
            jobTitle: 'IT Studies',
            company: 'WSB Wrocław',
        },
    ];

    const revealEase = [0.22, 1, 0.36, 1];
    const hoverEase = [0.25, 1, 0.5, 1];

    return (
        <section className='experience_section' id='Experience'>
            <motion.h5
                initial={{ opacity: 0, x: -38 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.82,
                    delay: 0.22,
                    ease: revealEase,
                }}
            >
                Experience
            </motion.h5>
            <motion.p
                className='subHeading'
                initial={{ opacity: 0, x: -38 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.82,
                    delay: 0.3,
                    ease: revealEase,
                }}
            >
                Practical experience I’ve gained through various projects, jobs
                and courses
            </motion.p>

            <div className='experience-container'>
                {experienceData.map(
                    (
                        {
                            time,
                            jobTitle,
                            company,
                            certificate,
                            href,
                            fileName,
                        },
                        index
                    ) => (
                        <motion.div
                            key={index}
                            className='experience-item'
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{
                                x: 10,
                                transition: {
                                    duration: 0.38,
                                    ease: hoverEase,
                                },
                            }}
                            whileTap={{
                                x: 5,
                                transition: {
                                    duration: 0.2,
                                    ease: [0.4, 0, 0.2, 1],
                                },
                            }}
                            transition={{
                                duration: 0.62,
                                delay: index * 0.115,
                                ease: revealEase,
                            }}
                        >
                            <p className='time'>{time}</p>
                            <p className='job-title'>{jobTitle}</p>
                            <p className='company-name'>{company}</p>
                            {certificate && (
                                <motion.a
                                    className='download_button'
                                    href={href}
                                    download={fileName}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onMouseEnter={() =>
                                        setIsHeaderHovered(true)
                                    }
                                    onMouseLeave={() =>
                                        setIsHeaderHovered(false)
                                    }
                                    onFocus={() => setIsHeaderHovered(true)}
                                    onBlur={() => setIsHeaderHovered(false)}
                                    whileHover={{ x: 2 }}
                                    whileTap={{ scale: 0.975 }}
                                    transition={{
                                        duration: 0.26,
                                        ease: hoverEase,
                                    }}
                                >
                                    <DownloadIcon
                                        isHovered={isHeaderHovered}
                                        controls={controls}
                                        stroke='rgb(210, 210, 210)'
                                        width={23}
                                        height={23}
                                    />
                                    Certificate
                                </motion.a>
                            )}
                        </motion.div>
                    )
                )}
            </div>
        </section>
    );
}

export default React.memo(Experience);
