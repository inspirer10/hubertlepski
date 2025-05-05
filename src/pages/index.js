import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Lenis from 'lenis';
import Head from 'next/head';
import {
    Geist,
    SUSE,
    Inter,
    Lexend_Deca,
    Plus_Jakarta_Sans,
    Merienda,
} from 'next/font/google';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import RecentPhotos from '@/components/RecentPhotos';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const suse = SUSE({
    variable: '--font-suse',
    subsets: ['latin'],
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const lexendDeca = Lexend_Deca({
    subsets: ['latin'],
    variable: '--font-lexend-deca',
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta-sans',
});

const merienda = Merienda({
    subsets: ['latin'],
    variable: '--font-merienda',
});

export default function Home() {
    //HANDLE LENIS SCROLL
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    //HANDLE NAVIGATION LINK - COLOR
    const lastScrollY = useRef(0);
    const [scrollingDirection, setScrollingDirection] = useState('down');
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setScrollingDirection('down');
            } else {
                setScrollingDirection('up');
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getThreshold = (sectionName) => {
        const thresholds = {
            Home: scrollingDirection === 'down' ? 0.33 : 0.2,
            About: scrollingDirection === 'down' ? 0.7 : 0.3,
            Technologies: scrollingDirection === 'down' ? 0.66 : 0.3,
            Projects: scrollingDirection === 'down' ? 0.66 : 0.3,
            Contact: scrollingDirection === 'down' ? 0.66 : 0.3,
        };
        return thresholds[sectionName];
    };

    const [homeRef, homeInView] = useInView({
        threshold: getThreshold('Home'),
    });
    const [aboutRef, aboutInView] = useInView({
        threshold: getThreshold('About'),
    });
    const [techRef, techInView] = useInView({
        threshold: getThreshold('Technologies'),
    });
    const [projectsRef, projectsInView] = useInView({
        threshold: getThreshold('Projects'),
    });
    const [contactRef, contactInView] = useInView({
        threshold: getThreshold('Contact'),
    });

    useEffect(() => {
        if (homeInView) setActiveSection('Home');
        if (aboutInView) setActiveSection('About');
        if (techInView) setActiveSection('Technologies');
        if (projectsInView) setActiveSection('Projects');
        if (contactInView) setActiveSection('Contact');
    }, [homeInView, aboutInView, techInView, projectsInView, contactInView]);

    return (
        <>
            <Head>
                <title>Hubert Łepski Web Developer</title>
                <meta
                    name='description'
                    content='Hubert Łepski Web Developer'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header activeSection={activeSection} />
            <div ref={homeRef}>
                <Introduction />
            </div>
            <div ref={aboutRef}>
                <AboutMe />
            </div>
            <RecentPhotos />
            <div ref={techRef}>
                <Technologies />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>

            <div ref={contactRef}>
                <Contact />
            </div>
        </>
    );
}
