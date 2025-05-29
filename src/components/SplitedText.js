import { motion } from 'motion/react';
import React from 'react';

export default function SplitedText({ phrase }) {
    const words = phrase.split(' ');

    return (
        <motion.p
            className='paragraph'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.75,
                delay: 0.175,
                type: 'ease',
            }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className='word'
                    style={{
                        display: 'inline-block',
                        marginRight: '4.75px',
                    }}
                    initial={{ color: 'rgba(125, 125, 125, 0.175)' }}
                    whileInView={{
                        color: 'rgba(255, 255, 255, 1)',
                    }}
                    viewport={{
                        once: true,
                        amount: 0.75,
                    }}
                    transition={{
                        duration: 0.5,
                        //delay: i * 0.0375,
                        delay: i * 0.04,
                        type: 'ease',
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
}
