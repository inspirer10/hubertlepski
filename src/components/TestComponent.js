import React, { useRef } from 'react';
//import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
    'It is a long established fact',
    'that a reader will be distracted',
    'by the readable content of a page',
    'when looking at its layout.',
];

function TestComponent() {
    return (
        <div className='test-container'>
            <MaskText />
            <MaskText />
            <MaskText />
            <MaskText />
            <MaskText />
        </div>
    );
}

export function MaskText() {
    const wrapper = useRef(null);
    const { ref, inView } = useInView({
        //threshold: 0.1, // Poprawiony próg widoczności
        triggerOnce: true,
        rootMargin: '-75%', // Opóźnienie aktywacji
    });

    // Połącz refy w jeden element
    const setRefs = (element) => {
        wrapper.current = element;
        ref(element);
    };

    const animation = {
        initial: { y: '100%' },
        enter: (i) => ({
            y: '0',
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.1 * i,
            },
        }),
    };

    return (
        <div ref={setRefs} className='wrapper'>
            {phrases.map((phrase, index) => {
                return (
                    <div key={index} className='line-mask'>
                        <motion.p
                            custom={index}
                            variants={animation}
                            initial='initial'
                            animate={inView ? 'enter' : 'initial'}
                        >
                            {phrase}
                        </motion.p>
                    </div>
                );
            })}
        </div>
    );
}

export default TestComponent;
