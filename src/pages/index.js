import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import RecentPhotos from '@/components/RecentPhotos';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import InitialLoading from '@/components/InitialLoading';
import ProjectSlider from '@/components/ProjectSlider';
import SectionsObserver from '@/components/SectionObserver';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

//* LENIS
import Lenis from 'lenis';
import Navbar from '@/components/Header';

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

                    <Navbar activeSection={activeSection} />

                    <Introduction />

                    <ProjectSlider />
                    <div ref={refs.aboutRef}>
                        <About />
                    </div>
                    <RecentPhotos />
                    <div ref={refs.techRef}>
                        <Technologies />
                    </div>

                    {/* <TestComponent />  */}

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
