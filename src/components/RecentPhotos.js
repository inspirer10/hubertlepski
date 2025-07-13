import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function RecentPhotos() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 600);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='recent-photos_section'>
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, type: 'ease' }}
            >
                Some of my recent photographs
            </motion.h2>

            <main>
                <motion.div
                    className='photo-container'
                    initial={{ opacity: 0, x: -250 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.25,
                        duration: 1.1,
                        type: 'easeIn',
                    }}
                >
                    <div className='image-wrapper'>
                        <Image
                            src={'/obraz1.jpg'}
                            height={600}
                            width={600}
                            quality={100}
                            alt='Recent Photography'
                            //className='rotated'
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.66 }}
                    >
                        Berlin - 05.2025
                    </motion.p>
                </motion.div>

                <motion.div
                    className='photo-container'
                    initial={{ opacity: 0, x: 250 }}
                    whileInView={
                        isMobile
                            ? { opacity: 1, x: 0, y: 50 }
                            : { opacity: 1, x: -70, y: -50 }
                    }
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.25,
                        duration: 1.1,
                        type: 'easeIn',
                    }}
                >
                    <div className='image-wrapper'>
                        <Image
                            src={'/obraz2.jpg'}
                            height={600}
                            width={600}
                            quality={100}
                            alt='Recent Photography'
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.66 }}
                    >
                        Wrocław - 06.2025
                    </motion.p>
                </motion.div>
            </main>
        </section>
    );
}

export default RecentPhotos;
