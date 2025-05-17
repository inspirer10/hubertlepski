import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function SectionsObserver({ children }) {
    //HANDLE NAVIGATION LINK - UNDERLINE
    const [activeSection, setActiveSection] = useState('home');
    const [scrollDirection, setScrollDirection] = useState('down');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollDirection(
                currentScrollY > lastScrollY.current ? 'down' : 'up'
            );
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getThreshold = (sectionName) => {
        const thresholds = {
            Home: scrollDirection === 'down' ? 0.33 : 0.2,
            About: scrollDirection === 'down' ? 0.6 : 0.175,
            Technologies: scrollDirection === 'down' ? 0.66 : 0.3,
            Projects: scrollDirection === 'down' ? 0.66 : 0.3,
            Contact: scrollDirection === 'down' ? 0.66 : 0.3,
        };
        return thresholds[sectionName];
    };

    const { ref: homeRef, inView: homeInView } = useInView({
        threshold: getThreshold('Home'),
        delay: 50,
    });

    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: getThreshold('About'),
        delay: 50,
    });

    const { ref: techRef, inView: techInView } = useInView({
        threshold: getThreshold('Technologies'),
        delay: 50,
    });

    const { ref: projectsRef, inView: projectsInView } = useInView({
        threshold: getThreshold('Projects'),
        delay: 50,
    });

    const { ref: contactRef, inView: contactInView } = useInView({
        threshold: getThreshold('Contact'),
        delay: 50,
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (homeInView) setActiveSection('Home');
            if (aboutInView) setActiveSection('About');
            if (techInView) setActiveSection('Technologies');
            if (projectsInView) setActiveSection('Projects');
            if (contactInView) setActiveSection('Contact');
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [homeInView, aboutInView, techInView, projectsInView, contactInView]);

    return children({
        refs: {
            homeRef,
            aboutRef,
            techRef,
            projectsRef,
            contactRef,
        },
        activeSection,
        scrollDirection,
    });
}

export default SectionsObserver;
