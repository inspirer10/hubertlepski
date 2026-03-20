import '@/styles/globals.scss';
import '@/styles/initialLoading.scss';
import '@/styles/header.scss';
import '@/styles/introduction.scss';
import '@/styles/projectsSlider.scss';
import '@/styles/aboutMe.scss';
import '@/styles/recentPhotos.scss';
import '@/styles/technologies.scss';
import '@/styles/experience.scss';
import '@/styles/projects.scss';
import '@/styles/contact.scss';
import '@/styles/footer.scss';
import '@/styles/microinteractions.scss';

import { Barlow, Inter, Merienda, Onest, SUSE } from 'next/font/google';

const suse = SUSE({
    subsets: ['latin'],
    variable: '--font-suse',
    display: 'swap',
});
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});
const merienda = Merienda({
    subsets: ['latin'],
    variable: '--font-merienda',
    display: 'swap',
});
const onest = Onest({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-onest',
    display: 'swap',
});
const barlow = Barlow({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-barlow',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function App({ Component, pageProps }) {
    return (
        <main
            className={`
                ${suse.variable}
                ${inter.variable}
                ${merienda.variable}
                ${onest.variable}
                ${barlow.variable}
            `}
        >
            <Component {...pageProps} />
        </main>
    );
}
