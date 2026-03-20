import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { DownloadIcon } from './animatedIcons/DownloadIcon';
import { BsMouse3 } from 'react-icons/bs';
import Link from 'next/link';
import DarkVeil from './DarkVeil/DarkVeil';

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

    const imagesData = [
        { src: '/html.png', alt: 'HTML', backgroundColor: '#F06529' },
        { src: '/css.png', alt: 'CSS', backgroundColor: '#2565ae' },
        { src: '/sass.png', alt: 'Sass', backgroundColor: '#CD6799' },

        //*2nd row
        { src: '/tailwind.png', alt: 'Tailwind', backgroundColor: '#84f1ff' },
        { src: '/js.png', alt: 'JavaScript', backgroundColor: '#F0DB4F' },
        { src: '/react.png', alt: 'React', backgroundColor: '#61DBFB' },

        //*3rd row
        { src: '/zustand.jpg', alt: 'Zustand', backgroundColor: '#8B4513' },
        { src: '/redux.png', alt: 'Redux', backgroundColor: '#6d009c' },
        { src: '/next.png', alt: 'Next.js', backgroundColor: '#84f1ff' },

        //*4th row
        { src: '/git.png', alt: 'Git', backgroundColor: '#ffff00' },
        { src: '/mui.png', alt: 'MUI', backgroundColor: '#007bff' },
        { src: '/ts.png', alt: 'TypeScript', backgroundColor: '#358EF1' },

        //*5th row
        { src: '/node.png', alt: 'Node.js', backgroundColor: '#66CC33' },
        { src: '/storybook.svg', alt: 'Storybook', backgroundColor: '#ff00ea' },
        { src: '/mongoDB.png', alt: 'MongoDB', backgroundColor: '#77ff00' },
    ];

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
                            <button
                                className='projects'
                                onClick={(e) =>
                                    handleContactClick(e, 'Contact')
                                }
                            >
                                Available for new projects
                            </button>
                        </motion.div>
                    </article>

                    <aside className='technologies_wrapper'>
                        {imagesData.map(
                            ({ src, alt, backgroundColor }, index) => (
                                <motion.div
                                    style={{ '--attr-bgc': backgroundColor }}
                                    key={index}
                                    className='tech-card'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.85,
                                        delay: index * 0.3,
                                        type: 'ease',
                                    }}
                                >
                                    <Image
                                        src={`/technologies${src}`}
                                        width={120}
                                        height={120}
                                        alt={alt}
                                    />
                                </motion.div>
                            ),
                        )}
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
