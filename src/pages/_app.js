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

// Import fontów
import {
    Geist,
    SUSE,
    Inter,
    Lexend_Deca,
    Plus_Jakarta_Sans,
    Merienda,
} from 'next/font/google';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const suse = SUSE({ subsets: ['latin'], variable: '--font-suse' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lexendDeca = Lexend_Deca({
    subsets: ['latin'],
    variable: '--font-lexend-deca',
});
const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta-sans',
});
const merienda = Merienda({ subsets: ['latin'], variable: '--font-merienda' });

export default function App({ Component, pageProps }) {
    return (
        <main
            className={`
        ${geistSans.variable}
        ${suse.variable}
        ${inter.variable}
        ${lexendDeca.variable}
        ${plusJakartaSans.variable}
        ${merienda.variable}
      `}
        >
            <Component {...pageProps} />
        </main>
    );
}
