import React, { useRef } from 'react';
import Link from 'next/link';
import { HiOutlineArrowUpRight as Arrow } from 'react-icons/hi2';
import { LiaPhoneVolumeSolid as PhoneIcon } from 'react-icons/lia';
import { IoMailOutline as MailIcon } from 'react-icons/io5';
import { MdOutlineDownloading as DownloadIcon } from 'react-icons/md';
import { motion, useScroll, useTransform } from 'motion/react';

function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const scrollParalaxSlow = useTransform(scrollYProgress, [0, 1], [350, -50]);
    const scrollParalaxFast = useTransform(
        scrollYProgress,
        [0, 1],
        [450, -100]
    );

    return (
        <section className='contact_section' id='Contact'>
            <article ref={container}>
                <motion.p style={{ y: scrollParalaxSlow }}>
                    Feel free to
                </motion.p>
                <motion.h2 style={{ y: scrollParalaxFast }}>Contact</motion.h2>
                <motion.p style={{ y: scrollParalaxSlow }}>me</motion.p>
            </article>
            <div className='links-wrapper'>
                <Link href='tel:+48697819866' className='link'>
                    PHONE <Arrow className='arrow-icon' />
                    <PhoneIcon className='background-icon' />
                    <p>(+48) 697 819 866</p>
                </Link>

                <a
                    href='/CV/CV.pdf'
                    download='Hubert Łepski CV.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <button>
                        Download CV <DownloadIcon className='icon' />
                    </button>
                </a>

                <Link href='mailto:hubertlepsky@gmail.com' className='link'>
                    E-MAIL <Arrow className='arrow-icon' />
                    <MailIcon className='background-icon' />
                    <p>hubertlepsky@gmail.com</p>
                </Link>
            </div>
        </section>
    );
}

export default React.memo(Contact);
