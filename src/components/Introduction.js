import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react';

import { useAnimation } from 'motion/react';
import { DownloadIcon } from './animatedIcons/DownloadIcon';

function Introduction() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    return (
        <section className='introduction_section' id='Home'>
            <main>
                <Image
                    src={'/avatar.png'}
                    height={650}
                    width={650}
                    className='avatar_image'
                    alt='person avatar'
                    priority={true}
                    placeholder='blur'
                    blurDataURL='/avatar.png'
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus omnis distinctio atque natus dolores! Aperiam
                    dolor doloribus vero minima.
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
                    <motion.button className='projects'>
                        Available for new projects
                    </motion.button>
                </motion.div>
            </main>
        </section>
    );
}

export default Introduction;
