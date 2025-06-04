import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import About from '@/components/About';
import RecentPhotos from '@/components/RecentPhotos';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import InitialLoading from '@/components/InitialLoading';
import ProjectSlider from '@/components/ProjectSlider';
import SectionsObserver from '@/components/SectionObserver';
import Experience from '@/components/Experience';

//* LENIS
import Lenis from 'lenis';
import Footer from '@/components/Footer';
/*
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
*/

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    //HANDLE LENIS SCROLL
    useEffect(() => {
        (async () => {
            setTimeout(() => {
                setIsLoading(false);
                window.scrollTo(0, 0);
                console.log('Loading finished');
            }, 2300);
        })();

        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <SectionsObserver>
            {({ refs, activeSection }) => (
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
                    <AnimatePresence mode='wait'>
                        {isLoading && <InitialLoading />}
                    </AnimatePresence>
                    <Header activeSection={activeSection} />

                    <Introduction />

                    <ProjectSlider />
                    <div ref={refs.aboutRef}>
                        <About />
                    </div>
                    <RecentPhotos />
                    <div ref={refs.techRef}>
                        <Technologies />
                    </div>
                    <div ref={refs.projectsRef}>
                        <Projects />
                    </div>
                    <div ref={refs.experienceRef}>
                        <Experience />
                    </div>
                    <div ref={refs.contactRef}>
                        <Contact />
                    </div>
                    <Footer />
                </>
            )}
        </SectionsObserver>
    );
}
