import { useEffect } from 'react';
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
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

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
            <div className=''></div>
            <Header />
            <Introduction />
            <AboutMe />
            <RecentPhotos />
        </>
    );
}
