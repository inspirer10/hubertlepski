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
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.1,
                    delay: 0.4,
                    type: 'ease',
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                x: 14,
                                transition: {
                                    duration: 0.325,
                                    delay: 0.025,
                                    type: 'ease',
                                },
                            }}
                            animate={{
                                x: 0,
                                transition: {
                                    duration: 0.325,
                                    delay: 0.15,
                                    type: 'ease',
                                },
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                type: 'easeIn',
                            }}
                        >
                            <p className='time'>{time}</p>
                            <p className='job-title'>{jobTitle}</p>
                            <p className='company-name'>{company}</p>
                            {certificate && (
                                <a
                                    className='download_button'
                                    href={href}
                                    download={fileName}
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
