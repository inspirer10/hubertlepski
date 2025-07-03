import React, { useEffect, useRef, useState } from 'react';
//import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
    'I am an open-minded developer, eager to learn new',
    'technologies and tools. I am flexible in working both',
    'remotely and in-office, and open to relocation if necessary.',
    'I quickly adapt to new environments, effectively communicate',
    'in English, and enjoy working in diverse teams.',
];

function TestComponent() {
    return (
        <div className='test-container'>
            <MaskText />
            {/*<MaskText />
            <MaskText />
            <MaskText />
            <MaskText />*/}
        </div>
    );
}

export function MaskText() {
    // Dodajemy stan do opóźnienia animacji
    const [startAnimation, setStartAnimation] = useState(false);

    const wrapper = useRef(null);
    const { ref, inView } = useInView({
        //threshold: 0.1,
        triggerOnce: true,
        rootMargin: '-75%', // Opóźnienie aktywacji
    });

    const setRefs = (element) => {
        wrapper.current = element;
        ref(element);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 4000); //4sekundy

        return () => clearTimeout(timer);
    }, []);

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
            {phrases.map((phrase, phraseIndex) => {
                const words = phrase.split(' ');
                return (
                    <div key={phraseIndex} className='line-mask'>
                        {words.map((word, wordIndex) => (
                            <motion.p
                                key={wordIndex}
                                custom={wordIndex}
                                variants={animation}
                                initial='initial'
                                animate={
                                    inView && startAnimation
                                        ? 'enter'
                                        : 'initial'
                                }
                            >
                                {word}
                            </motion.p>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

export default TestComponent;
