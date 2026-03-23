import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';
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

const stackItems = [
    { id: 'html', src: '/technologies/html.png', label: 'HTML' },
    { id: 'css', src: '/technologies/css.png', label: 'CSS' },
    { id: 'sass', src: '/technologies/sass.png', label: 'Sass' },
    { id: 'git', src: '/technologies/git.png', label: 'Git' },
    { id: 'rwd', src: '/technologies/rwd.png', label: 'RWD' },
    { id: 'vsc', src: '/technologies/vsc.png', label: 'VSC' },
    { id: 'js', src: '/technologies/js.png', label: 'JavaScript' },
    { id: 'react', src: '/technologies/react.png', label: 'React' },
    { id: 'zustand', src: '/technologies/zustand.jpg', label: 'Zustand' },
    { id: 'redux', src: '/technologies/redux.png', label: 'Redux' },
    { id: 'next', src: '/technologies/next.png', label: 'Next.js' },
    { id: 'mui', src: '/technologies/mui.png', label: 'MUI' },
    { id: 'ts', src: '/technologies/ts.png', label: 'TypeScript' },
    { id: 'node', src: '/technologies/node.png', label: 'Node.js' },
    { id: 'express', src: '/technologies/express.png', label: 'Express' },
    { id: 'mongo', src: '/technologies/mongoDB.png', label: 'MongoDB' },
    { id: 'ux-ui', src: '/technologies/uxui.png', label: 'UX/UI' },
    { id: 'copilot', src: '/technologies/copilot.png', label: 'Copilot' },
    { id: 'storybook', src: '/technologies/storybook.svg', label: 'Storybook' },
    { id: 'tailwind', src: '/technologies/tailwind.png', label: 'Tailwind' },
    { id: 'bootstrap', src: '/technologies/bootstrap.png', label: 'Bootstrap' },
    {
        id: 'react-router',
        src: '/technologies/router.png',
        label: 'React Router',
    },
    {
        id: 'framer-motion',
        src: '/technologies/framerMotion.png',
        label: 'Framer Motion',
    },
    { id: 'git-flow', src: '/technologies/gitFlow.jpg', label: 'Git Flow' },
];

function Introduction() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const marqueeStackItems = useMemo(() => [...stackItems, ...stackItems], []);

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

                        <motion.article
                            className='introStack_article'
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 3.2,
                                duration: 0.9,
                                ease: 'easeOut',
                            }}
                        >
                            <p className='introStack_heading'>Tech stack</p>

                            <div className='introStack_slider'>
                                <div className='introStack_track'>
                                    {marqueeStackItems.map(
                                        ({ src, label, id }, index) => (
                                            <div
                                                key={`${id}-${index}`}
                                                className='introStack_item'
                                            >
                                                <div className='introStack_icon'>
                                                    <Image
                                                        src={src}
                                                        width={50}
                                                        height={50}
                                                        alt={label}
                                                    />
                                                </div>
                                                <span>{label}</span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </motion.article>
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
                                src='/avatarNew.png'
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
