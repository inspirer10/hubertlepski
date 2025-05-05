import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Technologies() {
    const imagesData = [
        { src: '/js.png', alt: 'JavaScript' },
        { src: '/react.png', alt: 'React' },
        { src: '/html.png', alt: 'HTML' },
        { src: '/redux.png', alt: 'Redux' },
        { src: '/next.png', alt: 'Next.js' },
        { src: '/express.png', alt: 'Express' },
        { src: '/mui.png', alt: 'MUI' },
        { src: '/sass.png', alt: 'Sass' },
        { src: '/rwd.png', alt: 'RWD' },
        { src: '/ts.png', alt: 'TypeScript' },
        { src: '/git.png', alt: 'Git' },
        { src: '/node.png', alt: 'Node.js' },
        { src: '/express.png', alt: 'Express' },
        { src: '/mongoDB.png', alt: 'MongoDB' },
        { src: '/vsc.png', alt: 'VSC' },
        { src: '/uxui.png', alt: 'UX/UI' },
        { src: '/css.png', alt: 'CSS' },
    ];

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
                    {[...imagesData, ...imagesData].map(
                        ({ src, alt }, index) => (
                            <div key={index} className='technology-item'>
                                <Image
                                    src={`/technologies${src}`}
                                    width={75}
                                    height={75}
                                    alt={alt}
                                />
                                <span className='tech-name'>{alt}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
