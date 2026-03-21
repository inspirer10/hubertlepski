import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { DownloadIcon } from './animatedIcons/DownloadIcon';
import { BsMouse3 } from 'react-icons/bs';
import { FiCode, FiCompass } from 'react-icons/fi';
import Link from 'next/link';
import DarkVeil from './DarkVeil/DarkVeil';

const aboutStats = [
    {
        id: 'years',
        icon: FiCompass,
        value: '4+',
        label: 'Years of experience',
    },
    {
        id: 'projects',
        icon: FiCode,
        value: '40+',
        label: 'Projects shipped',
        isAccent: true,
    },
];

function Introduction() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    const handleContactClick = useCallback((e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section className='introduction_section' id='Home'>
            <div
                style={{ width: '100%', height: '100vh', position: 'relative' }}
            >
                <DarkVeil hueShift={24} speed={1.1} />

                <main>
                    <article>
                        <Image
                            className='avatar_image'
                            src={'/avatar.png'}
                            height={325}
                            width={325}
                            priority={true}
                            //loading='lazy'
                            quality={100}
                            alt='person avatar'
                        />
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 2.6,
                                duration: 1.5,
                                type: 'spring',

                                stiffness: 35,
                            }}
                        >
                            Hey, I&#39;m <span>Hubert</span> Łepski.
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 2.725,
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 35,
                            }}
                        >
                            Dreamer &
                            <Image
                                src={'/favicon.ico'}
                                width={150}
                                height={150}
                                className='icon_image'
                                alt='icon thumbnail'
                            />
                            Programmer
                        </motion.h3>
                        <motion.p
                            className='subHeading'
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 2.85,
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 35,
                            }}
                        >
                            I am an open-minded developer, eager to learn new
                            technologies and tools. I am flexible in working
                            both remotely and in-office, and open to relocation
                            if necessary. I quickly adapt to new environments,
                            effectively communicate in English, and enjoy
                            working in diverse teams.
                        </motion.p>
                        <motion.div
                            className='buttons-wrapepr'
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 3.05,
                                duration: 0.8,
                                type: 'easeIn',
                            }}
                        >
                            <button
                                className='projects'
                                onClick={(e) =>
                                    handleContactClick(e, 'Contact')
                                }
                            >
                                Available for new projects
                            </button>

                            <Link
                                href='/CV/CV.pdf'
                                download='Hubert Łepski CV.pdf'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button
                                    className='download_button'
                                    onMouseEnter={() => {
                                        setIsHovered(true);
                                        controls.start('animate'); // Start animation
                                    }}
                                    onMouseLeave={() => {
                                        setIsHovered(false);
                                        controls.start('normal'); // Reset animation
                                    }}
                                >
                                    Download CV
                                    <DownloadIcon
                                        stroke={isHovered ? '#fff' : '#000'}
                                        controls={controls}
                                    />
                                </button>
                            </Link>
                        </motion.div>
                    </article>

                    <aside className='aboutMe_wrapper'>
                        <motion.div
                            className='aboutCard--avatar'
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 2.9,
                                duration: 0.9,
                                ease: 'easeOut',
                            }}
                        >
                            <Image
                                className='aboutCard_avatarImage'
                                src='/avatar.png'
                                fill
                                sizes='(max-width: 550px) 95vw, 375px'
                                quality={100}
                                priority
                                alt='Hubert Łepski avatar'
                            />

                            <div className='aboutCard_avatarGradient'></div>
                            <div className='aboutCard_location'>
                                <div>
                                    <p className='aboutCard_locationName'>
                                        Wrocław, PL
                                    </p>
                                    <p className='aboutCard_locationLabel'>
                                        Current location
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className='aboutMe_statsRow'>
                            {aboutStats.map((stat, index) => {
                                const StatIcon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.id}
                                        className={`aboutCard--stat ${stat.isAccent ? 'aboutCard--accent' : ''}`}
                                        initial={{ opacity: 0, y: 22 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 3.05 + index * 0.14,
                                            duration: 0.75,
                                            ease: 'easeOut',
                                        }}
                                    >
                                        <span className='aboutCard_statIcon'>
                                            <StatIcon />
                                        </span>
                                        <p className='aboutCard_statValue'>
                                            {stat.value}
                                        </p>
                                        <p className='aboutCard_statLabel'>
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </aside>
                </main>

                <div className='scroll-Suggestion'>
                    <BsMouse3 className='icon' />
                </div>
            </div>
        </section>
    );
}

export default React.memo(Introduction);
