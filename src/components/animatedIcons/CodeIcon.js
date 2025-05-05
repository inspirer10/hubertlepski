'use client';

import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';

const defaultTransition = {
    type: 'spring',
    stiffness: 250,
    damping: 25,
};

const CodeIcon = ({
    width = 30,
    height = 30,
    strokeWidth = 2,
    stroke = '#FFF',
    isHovered,
    ...props
}) => {
    const controls = useAnimation();

    useEffect(() => {
        if (isHovered) {
            controls.start('animate');
        } else {
            controls.start('normal');
        }
    }, [isHovered, controls]);

    return (
        <div
            style={{
                cursor: 'pointer',
                userSelect: 'none',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.5rem',
            }}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={width}
                height={height}
                viewBox='0 0 24 24'
                fill='none'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
                style={{ overflow: 'visible' }}
            >
                <motion.polyline
                    variants={{
                        normal: { translateX: '0%' },
                        animate: { translateX: '-4px' },
                    }}
                    transition={defaultTransition}
                    animate={controls}
                    initial='normal'
                    points='8 6 2 12 8 18'
                />
                <motion.polyline
                    variants={{
                        normal: { translateX: '0%' },
                        animate: { translateX: '4px' },
                    }}
                    transition={defaultTransition}
                    animate={controls}
                    initial='normal'
                    points='16 18 22 12 16 6'
                />
            </svg>
        </div>
    );
};

export { CodeIcon };
