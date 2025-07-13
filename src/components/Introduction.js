import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { DownloadIcon } from './animatedIcons/DownloadIcon';
import { BsMouse3 } from 'react-icons/bs';
import Link from 'next/link';

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
        { src: '/html.png', alt: 'HTML' },
        { src: '/css.png', alt: 'CSS' },
        { src: '/sass.png', alt: 'Sass' },
        //*2nd row
        { src: '/git.png', alt: 'Git' },
        { src: '/js.png', alt: 'JavaScript' },
        { src: '/react.png', alt: 'React' },
        //*3rd row
        { src: '/zustand.jpg', alt: 'Zustand' },
        { src: '/redux.png', alt: 'Redux' },
        { src: '/next.png', alt: 'Next.js' },
        //*4th row
        { src: '/mui.png', alt: 'MUI' },
        { src: '/ts.png', alt: 'TypeScript' },
        { src: '/node.png', alt: 'Node.js' },
        //*5th row
        { src: '/storybook.svg', alt: 'Storybook' },
        { src: '/mongoDB.png', alt: 'MongoDB' },
        { src: '/tailwind.png', alt: 'Tailwind' },
    ];

    return (
        <section className='introduction_section' id='Home'>
            <main>
                <article>
                    <Image
                        className='avatar_image'
                        src={'/avatar.png'}
                        height={300}
                        width={300}
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
                        technologies and tools. I am flexible in working both
                        remotely and in-office, and open to relocation if
                        necessary. I quickly adapt to new environments,
                        effectively communicate in English, and enjoy working in
                        diverse teams.
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
                            onClick={(e) => handleContactClick(e, 'Contact')}
                        >
                            Available for new projects
                        </button>
                    </motion.div>
                </article>

                <aside className='technologies_wrapper'>
                    {imagesData.map(({ src, alt }, index) => (
                        <motion.div
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
                                width={100}
                                height={100}
                                alt={alt}
                            />
                        </motion.div>
                    ))}
                </aside>
            </main>

            <div className='scroll-Suggestion'>
                <BsMouse3 className='icon' />
            </div>
        </section>
    );
}

export default React.memo(Introduction);
