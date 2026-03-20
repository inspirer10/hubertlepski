import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useScrolled } from '@/components/hooks/useScrolled';
//* LENIS
import Lenis from 'lenis';
import { LuMousePointerClick } from 'react-icons/lu';
import { SiRedux } from 'react-icons/si';
import { TbBrandTinder, TbSchema } from 'react-icons/tb';
import {
    FaArrowTrendUp,
    FaBorderTopLeft,
    FaCode,
    FaMagnifyingGlass,
    FaQuestion,
    FaRegEye,
} from 'react-icons/fa6';

function Microinteractions() {
    const trigger = useRef(null);
    const triggerBlockRef = useRef(null);
    const [isTriggerHovered, setIsTriggerHovered] = useState(false);

    const isScrolled = useScrolled(85);

    //HANDLE LENIS SCROLL
    useEffect(() => {
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
        <>
            <Head>
                <title>Mikrointerakcje | Hubert Łepski</title>
                <meta
                    name='description'
                    content='Przewodnik po mikrointerakcjach w nowoczesnym web designie i implementacji w Next.js/React.'
                />
            </Head>

            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <ul>
                    <Link className='link' href='#whatAre'>
                        Czym są
                    </Link>
                    <Link className='link' href='#meaning'>
                        Znaczenie
                    </Link>
                    <Link className='link' href='#scheme'>
                        Schemat
                    </Link>
                    <Link className='link' href='#types'>
                        Rodzaje
                    </Link>
                    <Link className='link' href='#implementation'>
                        Implementacja
                    </Link>
                    <Link className='link' href='#accessibility'>
                        Dostępność
                    </Link>
                    <Link className='link' href='#examples'>
                        Przykłady
                    </Link>
                    <Link className='link' href='#practices'>
                        Praktyki
                    </Link>
                </ul>
            </nav>

            <section className='microinteractions_section'>
                <div className='header'>
                    <div className='author_wrapper'>
                        <Image
                            src={'/avatar.png'}
                            height={150}
                            width={150}
                            quality={100}
                            priority
                            alt='Hubert Łepski'
                        />
                        <p className='author'>Hubert Łepski</p>
                    </div>

                    <h2>
                        Mikrointerakcje przy projektowaniu stron internetowych:
                        Przewodnik dla Frontend Developerów
                    </h2>

                    <p className='subHeading'>
                        Jako Frontend Developer pracujący codziennie z Next.js i
                        React, zauważyłem, że to właśnie małe detale często
                        decydują o tym, czy strona internetowa jest tylko
                        funkcjonalna, czy prawdziwie angażująca. Mikrointerakcje
                        – te subtelne animacje i reakcje interfejsu na działania
                        użytkownika – to właśnie te detale, które potrafią
                        przekształcić przeciętne doświadczenie w coś
                        wyjątkowego.
                    </p>
                </div>

                <article className='content'>
                    <div className='block' id='whatAre'>
                        <div className='heading'>
                            <LuMousePointerClick className='icon' />
                            <h3>Czym właściwie są mikrointerakcje</h3>
                        </div>

                        <p>
                            Mikrointerakcje to krótkie, celowe momenty
                            interakcji między użytkownikiem a interfejsem.
                            Reagują na akcję użytkownika, systemu lub zmianę
                            stanu. Przykłady: zmiana koloru przycisku przy
                            najechaniu kursorem, animacje ładowania, delikatne
                            potrząśnięcie formularza logowania po wpisaniu
                            błędnego hasła, powiadomienia, reakcje na kliknięcia
                            oraz drobne animacje w menu. Dzięki nim interfejs
                            staje się czytelniejszy, bardziej praktyczny i
                            przyjazny.
                        </p>

                        <p>
                            Mikrointerakcje, choć pozornie drobne, mają ogromny
                            wpływ na UX – doświadczenie użytkownika, a co za tym
                            idzie na zaangażowanie, retencję i konwersje.
                            Użytkownik, który dostaje natychmiastową informację
                            zwrotną, czuje się pewniej i chętniej korzysta z
                            funkcji – a przez to wraca na stronę częściej.
                        </p>
                    </div>

                    <div className='block' id='meaning'>
                        <div className='heading'>
                            <FaQuestion className='icon' />
                            <h3>Dlaczego mikrointerakcje mają znaczenie</h3>
                        </div>

                        <div className='subblock'>
                            <h4>Psychologia za małymi detalami</h4>
                            <p>
                                Mikrointerakcje wykorzystują podstawowe zasady
                                psychologii behawioralnej. Natychmiastowy,
                                satysfakcjonujący feedback po akcji użytkownika
                                wzmacnia poczucie kontroli i buduje nawyki, co
                                przekłada się na częstsze i dłuższe korzystanie
                                z produktu.
                            </p>
                            <p>
                                Drobne sygnały wizualne i dźwiękowe zwiększają
                                zaufanie do interfejsu, bo potwierdzają, że
                                system {"'słucha'"} i reaguje. To zmniejsza
                                niepewność i frustrację, szczególnie w
                                krytycznych momentach, jak wysyłanie formularzy
                                czy płatności.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Redukcja porzuceń i wzrost retencji</h4>
                            <p>
                                Subtelne wskazówki, paski postępu i
                                potwierdzenia akcji potrafią znacząco ograniczać
                                porzucenia podczas onboardingu i procesów
                                wieloetapowych. Użytkownik, który wie, co się
                                dzieje i ile to potrwa, rzadziej rezygnuje po
                                drodze.
                            </p>
                            <p>
                                Dobrze zaprojektowane mikrointerakcje, zwłaszcza
                                w momentach o wysokim ryzyku błędu, zwiększają
                                satysfakcję, co przekłada się na lepszą retencję
                                i rekomendacje.
                            </p>
                        </div>
                    </div>

                    <div className='block' id='scheme'>
                        <div className='heading'>
                            <TbSchema className='icon' />
                            <h3>Budowa mikrointerakcji – model Dana Saffera</h3>
                        </div>

                        <div
                            ref={triggerBlockRef}
                            className={`subblock ${
                                isTriggerHovered ? 'active' : ''
                            }`}
                        >
                            <h4>
                                Wyzwalacz <span>(trigger)</span>
                            </h4>
                            <p>
                                Moment startu mikrointerakcji: kliknięcie,
                                najechanie kursorem, focus z klawiatury lub
                                zdarzenie systemowe. Ważne, by wyzwalacz był
                                jednoznaczny i przewidywalny.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>
                                Reguły <span>(rules)</span>
                            </h4>
                            <p>
                                Logika określająca, co dzieje się po wyzwoleniu,
                                czy dany przycisk może być kliknięty, co się
                                dzieje, gdy pole formularza jest nieprawidłowo
                                wypełnione, kolejność kroków, warunki
                                zakończenia, czas trwania i zależności od stanu
                                aplikacji.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>
                                Informacja zwrotna <span>(feedback)</span>
                            </h4>
                            <p>
                                To, co widzi, słyszy i czuje użytkownik w
                                odpowiedzi na{' '}
                                <span
                                    className='trigger'
                                    ref={trigger}
                                    onMouseEnter={() =>
                                        setIsTriggerHovered(true)
                                    }
                                    onMouseLeave={() =>
                                        setIsTriggerHovered(false)
                                    }
                                >
                                    wyzwalacz
                                </span>{' '}
                                - np. animacja, zmiana koloru, pojawiająca się
                                ikona, dźwięk, wibracja. Powinna być szybka,
                                czytelna i prosta w zrozumieniu.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>
                                Pętle i tryby <span>(loops &amp; modes)</span>
                            </h4>
                            <p>
                                Zasady powtarzania i długotrwałości
                                mikrointerakcji oraz tryby wpływające na jej
                                zachowanie w innych kontekstach (np. preferencje
                                użytkownika).
                            </p>
                        </div>
                    </div>

                    <div className='block' id='types'>
                        <div className='heading'>
                            <SiRedux className='icon' />
                            <h3>
                                Rodzaje mikrointerakcji, które poprawiają UX
                            </h3>
                        </div>

                        <div className='subblock'>
                            <h4>Paski postępu</h4>
                            <p>
                                Komunikują postęp i czas oczekiwania,
                                ograniczając frustrację w procesach ładowania,
                                uploadu czy wieloetapowych formularzach.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Efekty hover i focus</h4>
                            <p>
                                Sygnalizują interaktywność i poprawiają
                                odkrywalność funkcji. Działają najlepiej, gdy
                                zmiany są subtelne i konsekwentne.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Feedback na akcje</h4>
                            <p>
                                Potwierdzenia dodania do koszyka, wysłania
                                wiadomości, zapisania ustawień lub walidacji
                                formularza zmniejszają niepewność i błędy.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Gamifikacyjne celebracje</h4>
                            <p>
                                Delikatne animacje po osiągnięciu kamieni
                                milowych motywują użytkowników i wzmacniają
                                pozytywne nawyki bez rozpraszania.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Kreatywna obsługa błędów</h4>
                            <p>
                                Mikrointerakcje w komunikatach błędów (np. 404)
                                łagodzą negatywne odczucia i utrzymują spójność
                                charakteru marki.
                            </p>
                        </div>
                    </div>

                    <div className='block' id='implementation'>
                        <div className='heading'>
                            <FaCode className='icon' />
                            <h3>Implementacja: perspektywa techniczna</h3>
                        </div>

                        <div className='subblock'>
                            <h4>CSS vs JavaScript</h4>
                            <p>
                                Do prostych, powtarzalnych efektów preferuj CSS
                                (transform, opacity) ze względu na wydajność. Do
                                złożonych, stanowych interakcji wykorzystuj
                                JavaScript lub biblioteki animacyjne w React,
                                gdy potrzebujesz orkiestracji, sekwencji i
                                zależności od danych.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Wydajność</h4>
                            <p>
                                Animuj właściwości niepowodujące reflow,
                                utrzymuj 60 FPS, ogranicz liczbę jednoczesnych
                                animacji, stosuj lazy-loading oraz
                                throttling/debouncing dla zdarzeń scroll i
                                resize.
                            </p>
                        </div>
                    </div>

                    <div className='block' id='accessibility'>
                        <div className='heading'>
                            <FaMagnifyingGlass className='icon' />
                            <h3>Dostępność i mikrointerakcje</h3>
                        </div>

                        <div className='subblock'>
                            <h4>Preferencje ruchu</h4>
                            <p>
                                Szanuj prefers-reduced-motion, zapewniając
                                alternatywy lub skrócone animacje dla osób
                                wrażliwych na ruch.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Nawigacja klawiaturą</h4>
                            <p>
                                Wszelkie interakcje muszą być możliwe do
                                wywołania i odczytania z klawiatury; stany focus
                                powinny być czytelne i przewidywalne.
                            </p>
                        </div>

                        <div className='subblock'>
                            <h4>Czytelność i kontrast</h4>
                            <p>
                                Animacje nie mogą obniżać czytelności treści ani
                                kontrastu; feedback nie powinien opierać się
                                wyłącznie na kolorze.
                            </p>
                        </div>
                    </div>

                    <div className='block' id='examples'>
                        <div className='heading'>
                            <TbBrandTinder className='icon' />
                            <h3>Przykłady z realnych produktów</h3>
                        </div>

                        <div className='subblock'>
                            <h4>Nagradzanie postępów</h4>
                            <p>
                                Celebracyjne mikrointerakcje po ukończeniu etapu
                                nauki czy konfiguracji wzmacniają motywację i
                                poczucie sprawczości.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>Nawigacyjne podświetlenia</h4>
                            <p>
                                Kontekstowe wskazówki i hotspoty kierują uwagę
                                na kluczowe elementy, skracając czas realizacji
                                zadań.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>Checklisty walidacyjne</h4>
                            <p>
                                Dynamiczne listy wymagań (np. dla haseł)
                                redukują błędy i poprawiają doświadczenie w
                                newralgicznych formularzach.
                            </p>
                        </div>
                    </div>

                    <div className='block' id='practices'>
                        <div className='heading'>
                            <FaBorderTopLeft className='icon' />
                            <h3>Najlepsze praktyki</h3>
                        </div>

                        <div className='subblock'>
                            <h4>Cel i kontekst</h4>
                            <p>
                                Każda mikrointerakcja powinna mieć jasno
                                określony cel, wspierać zadanie użytkownika i
                                nie rozpraszać od głównego przepływu.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>Subtelność i spójność</h4>
                            <p>
                                Utrzymuj konsekwentny język ruchu i intensywność
                                efektów; małe różnice w czasie i odległości
                                czynią interfejs {"'żywym'"}, ale nie
                                chaotycznym.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>Natychmiastowy feedback</h4>
                            <p>
                                Reakcja interfejsu powinna pojawiać się bez
                                zauważalnej zwłoki; opóźnienia tłumacz czytelnie
                                (np. loader, szkielety).
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>Testowanie i iteracja</h4>
                            <p>
                                Weryfikuj efekty w badaniach z użytkownikami i
                                na urządzeniach o różnej wydajności; optymalizuj
                                długości i krzywe animacji.
                            </p>
                        </div>
                    </div>

                    <div className='block' id='trends'>
                        <div className='heading'>
                            <FaArrowTrendUp className='icon' />
                            <h3>Trendy na 2026</h3>
                        </div>

                        <div className='subblock'>
                            <h4>Personalizacja mikrointerakcji</h4>
                            <p>
                                Dostosowywanie intensywności i rodzaju feedbacku
                                do zachowań użytkownika oraz scenariuszy użycia
                                zwiększa trafność i komfort.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>Scroll i gesty</h4>
                            <p>
                                Narracyjne mikrointerakcje reagujące na
                                przewijanie i gesty dotykowe wspierają opowieść
                                marki bez przytłaczania treścią.
                            </p>
                        </div>
                        <div className='subblock'>
                            <h4>Dźwięk i wielozmysłowość</h4>
                            <p>
                                Delikatne efekty audio w kluczowych momentach
                                potrafią wzmocnić odbiór i ułatwić dostępność, o
                                ile są subtelne i konfigurowalne.
                            </p>
                        </div>
                    </div>

                    <div className='block' id='summary'>
                        <div className='heading'>
                            <FaRegEye className='icon' />
                            <h3>Podsumowanie</h3>
                        </div>

                        <p>
                            Mikrointerakcje nie są dodatkiem estetycznym, lecz
                            podstawowym składnikiem nowoczesnego UX. Dają
                            użytkownikom pewność, skracają czas wykonania zadań
                            i budują pozytywną relację z produktem.
                        </p>
                        <p>
                            Jako frontend developerzy mamy narzędzia, by tworzyć
                            je odpowiedzialnie: od prostych animacji CSS po
                            zaawansowane orkiestracje w React. Klucz to
                            równowaga między wrażeniem, wydajnością i
                            dostępnością.
                        </p>
                    </div>
                </article>
            </section>

            <Link href='/' className='copyright'>
                &copy; Hubert Łepski 2025
            </Link>
        </>
    );
}

export default Microinteractions;
