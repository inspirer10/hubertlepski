import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import Image from 'next/image';

function ProjectsModal({ modal, projects }) {
    const { active, index, currentElement } = modal;

    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect(() => {
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
            duration: 0.8,
            ease: 'power3',
        });
        let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
            duration: 0.8,
            ease: 'power3',
        });

        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
            duration: 0.5,
            ease: 'power3',
        });
        let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
            duration: 0.5,
            ease: 'power3',
        });

        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
            duration: 0.45,
            ease: 'power3',
        });
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
            duration: 0.45,
            ease: 'power3',
        });

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
            xMoveCursor(pageX);
            yMoveCursor(pageY);
            xMoveCursorLabel(pageX);
            yMoveCursorLabel(pageY);
        });
    }, []);

    const scaleAnimation = {
        initial: { scale: 0, x: '-50%', y: '-50%' },

        enter: {
            scale: 1,
            x: '-50%',
            y: '-50%',
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
        },

        closed: {
            scale: 0,
            x: '-50%',
            y: '-50%',
            transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] },
        },
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <>
            <motion.div
                ref={modalContainer}
                variants={scaleAnimation}
                initial='initial'
                animate={active ? 'enter' : 'closed'}
                className='modalContainer'
            >
                <div
                    style={{ top: index * -100 + '%' }}
                    className='modalSlider'
                >
                    {projects.map(({ color, src, id }, index) => {
                        return (
                            <div
                                className='modal'
                                style={{ backgroundImage: color }}
                                key={`modal_${index}`}
                            >
                                <Image
                                    src={`/projects/${src}`}
                                    width={325}
                                    height={200}
                                    alt='project thumbnail'
                                    className={
                                        id === currentElement
                                            ? 'active'
                                            : 'disabled'
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div
                ref={cursor}
                className='cursor-gallery'
                variants={scaleAnimation}
                initial='initial'
                animate={active ? 'enter' : 'closed'}
            ></motion.div>

            <motion.div
                ref={cursorLabel}
                className='cursorLabel'
                variants={scaleAnimation}
                initial='initial'
                animate={active ? 'enter' : 'closed'}
            >
                View
            </motion.div>
        </>
    );
}

export default ProjectsModal;
