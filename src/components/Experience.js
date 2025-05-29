import React, { useState } from 'react';
import { motion, useAnimation } from 'motion/react';

import { CodeIcon } from './animatedIcons/CodeIcon';
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
            time: '05.2025',
            jobTitle: 'AI Course',
            company: 'AIDEAS',
            certificate: true,
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
    ];

    return (
        <section className='experience_section' id='Experience'>
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
                Experience
            </motion.h5>
            <motion.p
                className='subHeading'
                initial={{ opacity: 0, x: -55 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.1,
                    delay: 0.375,
                    type: 'ease',
                }}
            >
                Practical experience I’ve gained through various projects and
                jobs and courses
            </motion.p>

            <div className='experience-container'>
                {experienceData.map(
                    ({ time, jobTitle, company, certificate }, index) => (
                        <motion.div
                            key={index}
                            className='experience-item'
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15 * index,
                                type: 'spring',
                                stiffness: 100,
                                damping: 12,
                            }}
                        >
                            <p className='time'>{time}</p>
                            <p className='job-title'>{jobTitle}</p>
                            <p className='company-name'>{company}</p>
                            {certificate && (
                                <a
                                    className='download_button'
                                    href='/CV/aideasCertificate.pdf'
                                    download='Hubert Łepski AiDEAS.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onMouseEnter={() =>
                                        setIsHeaderHovered(true)
                                    }
                                    onMouseMove={() => setIsHeaderHovered(true)}
                                    onMouseLeave={() =>
                                        setIsHeaderHovered(false)
                                    }
                                >
                                    <DownloadIcon
                                        isHovered={isHeaderHovered}
                                        controls={controls}
                                        stroke='rgb(210, 210, 210)'
                                        width={23}
                                        height={23}
                                    />
                                    Certificate
                                </a>
                            )}
                        </motion.div>
                    )
                )}
            </div>
        </section>
    );
}

export default React.memo(Experience);
