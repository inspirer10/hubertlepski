import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { DownloadIcon } from './animatedIcons/DownloadIcon';
import { BsMouse3 } from 'react-icons/bs';

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
            <main>
                <Image
                    className='avatar_image'
                    src={'/avatar.png'}
                    height={275}
                    width={275}
                    priority={true}
                    //loading='lazy'
                    quality={100}
                    placeholder='blur'
                    blurDataURL='/avatar.png'
                    alt='person avatar'
                />
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.6,
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
                        delay: 0.65,
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
                        delay: 0.7,
                        duration: 1.5,
                        type: 'spring',
                        stiffness: 35,
                    }}
                >
                    I am an open-minded developer, eager to learn new
                    technologies and tools. I am flexible in working both
                    remotely and in-office, and open to relocation if necessary.
                    I quickly adapt to new environments, effectively communicate
                    in English, and enjoy working in diverse teams.
                </motion.p>

                <motion.div
                    className='buttons-wrapepr'
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.9,
                        duration: 0.8,
                        type: 'easeIn',
                    }}
                >
                    <motion.button
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
                    </motion.button>

                    <motion.button
                        className='projects'
                        onClick={(e) => handleContactClick(e, 'Contact')}
                    >
                        Available for new projects
                    </motion.button>
                </motion.div>
            </main>

            <div className='scroll-Suggestion'>
                <BsMouse3 className='icon' />
            </div>
        </section>
    );
}

export default React.memo(Introduction);
