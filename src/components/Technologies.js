import Image from 'next/image';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';

function Technologies() {
    const imagesData = [
        { src: '/html.png', alt: 'HTML' },
        { src: '/css.png', alt: 'CSS' },
        { src: '/sass.png', alt: 'Sass' },
        { src: '/git.png', alt: 'Git' },
        { src: '/rwd.png', alt: 'RWD' },
        { src: '/vsc.png', alt: 'VSC' },
        //* second row
        { src: '/js.png', alt: 'JavaScript' },
        { src: '/react.png', alt: 'React' },
        { src: '/zustand.jpg', alt: 'Zustand' },
        { src: '/redux.png', alt: 'Redux' },
        { src: '/next.png', alt: 'Next.js' },
        { src: '/mui.png', alt: 'MUI' },
        //* third row
        { src: '/ts.png', alt: 'TypeScript' },
        { src: '/node.png', alt: 'Node.js' },
        { src: '/express.png', alt: 'Express' },
        { src: '/mongoDB.png', alt: 'MongoDB' },
        { src: '/uxui.png', alt: 'UX/UI' },
        { src: '/copilot.png', alt: 'Copilot' },
        //* fourth row
        { src: '/storybook.svg', alt: 'Storybook' },
        { src: '/tailwind.png', alt: 'Tailwind' },
        { src: '/bootstrap.png', alt: 'Bootstrap' },
        { src: '/router.png', alt: 'React Router' },
        { src: '/framerMotion.png', alt: 'Framer Motion' },
        { src: '/gitFlow.jpg', alt: 'Git Flow' },
    ];

    const doubledImagesData = useMemo(() => {
        return [...imagesData, ...imagesData];
    }, []); //empty array bcs imagesData is static

    const revealEase = [0.22, 1, 0.36, 1];
    const hoverEase = [0.25, 1, 0.5, 1];

    return (
        <section className='technologies_section' id='Technologies'>
            <motion.h5
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.82,
                    delay: 0.22,
                    ease: revealEase,
                }}
            >
                Technologies
            </motion.h5>
            <motion.p
                className='subHeading'
                initial={{ opacity: 0, x: -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.82,
                    delay: 0.3,
                    ease: revealEase,
                }}
            >
                Some of the technologies and tools that I use in my work
            </motion.p>

            <div className='marquee-container'>
                <div className='marquee'>
                    {doubledImagesData.map(({ src, alt }, index) => (
                        <div key={index} className='technology-item'>
                            <Image
                                src={`/technologies${src}`}
                                width={75}
                                height={75}
                                alt={alt}
                                loading='lazy'
                                placeholder='blur'
                                blurDataURL={`/technologies${src}`}
                            />
                            <span className='tech-name'>{alt}</span>
                        </div>
                    ))}
                </div>
            </div>

            <article className='technologies-wrapper'>
                {imagesData.map(({ src, alt }, index) => (
                    <motion.div
                        key={index}
                        className='tech-card'
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-125px' }}
                        transition={{
                            duration: 0.62,
                            delay: index * 0.0725,
                            ease: revealEase,
                        }}
                        whileHover={{
                            y: -6,
                            backgroundColor: 'rgba(40, 40, 40, 1)',
                            transition: {
                                duration: 0.34,
                                ease: hoverEase,
                            },
                        }}
                        whileTap={{
                            y: -3,
                            transition: {
                                duration: 0.18,
                                ease: [0.4, 0, 0.2, 1],
                            },
                        }}
                    >
                        <p>{alt}</p>
                        <Image
                            src={`/technologies${src}`}
                            width={150}
                            height={150}
                            alt={alt}
                            loading='lazy'
                        />
                    </motion.div>
                ))}
            </article>
        </section>
    );
}

export default React.memo(Technologies);
