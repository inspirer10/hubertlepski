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

    return (
        <section className='technologies_section' id='Technologies'>
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
                Technologies
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
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-125px' }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.0825,
                            type: 'ease',
                        }}
                        whileHover={{
                            transform: 'translateY(-6px)',
                            backgroundColor: 'rgba(40, 40, 40, 1)',
                            transition: {
                                duration: 0.25,
                                type: 'ease',
                                delay: 0.075,
                            },
                        }}
                        animate={{
                            transform: 'translateY(0px)',
                            backgroundColor: 'rgba(30, 30, 30, 0.925);',
                            transition: {
                                duration: 0.25,
                                type: 'ease',
                                delay: 0.075,
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
