import React, { useState } from 'react';
import { motion } from 'motion/react';
import ProjectsModal from './ProjectsModal';
import SingleProject from './SingleProject';
import Link from 'next/link';
import Image from 'next/image';

function Projects() {
    //projekty - tablia obiektów
    const projectsData = [
        {
            name: 'MUSTHAVE Webstore',
            icon: '👗',
            color: 'linear-gradient(#000, #000)',
            src: 'webstoreScroll.jpg',
            srcX: 'webstoreScroll.jpg',
            url: 'https://musthave.vercel.app/',
            id: 1,
        },

        {
            name: 'English Tutor',
            icon: '👩🏽‍🏫',
            color: 'linear-gradient(to right top, #990087, #CE2B37)',
            src: 'englishTutor3.png',
            url: 'https://julia-grzesiek.vercel.app/',
            id: 33,
        },

        {
            name: 'Food Master',
            icon: '🥗',
            color: 'linear-gradient(to right top, #135200, #ffffff)',
            src: 'foodMaster.png',
            url: 'https://food-master-hl.vercel.app/',
            id: 44,
        },

        {
            name: 'Rent Manager',
            icon: '🏘️',
            color: 'linear-gradient(to right top, #00042f, #0015ff)',
            src: 'rentManager.png',
            url: 'https://rent-manager-hl.vercel.app/',
            id: 33,
        },

        {
            name: 'Prototype Vehicle',
            icon: '🏎️',
            color: 'linear-gradient(to right top, #00042f, #00031e)',
            src: 'prototypeVehicleScroll.jpg',
            url: 'https://inspirer10.github.io/prototype-vehicle/',
            id: 2,
        },

        {
            name: 'Tuscany Restaurant',
            icon: '🍴',
            color: 'linear-gradient(to right, #257600 calc(100% / 3), white calc(100% / 3), white calc(100% / 3 * 2), #CE2B37 calc(100% / 3 * 2))',
            src: 'tuscanyScroll.jpg',
            url: 'https://inspirer10.github.io/tuscany/',
            id: 3,
        },

        {
            name: 'Expiration Reminder',
            icon: '🥑',
            color: 'linear-gradient(to left bottom, #5a9d31, #0a3500)',
            src: 'expirationReminderScroll.png',
            url: 'https://inspirer10.github.io/expiration-reminder/',
            id: 5,
        },

        {
            name: 'Subscriptions Tracker',
            icon: '📊',
            color: 'linear-gradient(to right top, #ca3f46, #FFF0DE)',
            src: 'subscriptionsTrackerScroll.png',
            url: 'https://inspirer10.github.io/subscriptions-tracker',
            id: 6,
        },

        {
            name: 'Sushi Page',
            icon: '🍣',
            color: 'linear-gradient(to right top, #ca3f46, #FFF0DE)',
            src: 'sushiScroll.jpg',
            url: 'https://inspirer10.github.io/sushi-page/',
            id: 7,
        },

        {
            name: 'Astra NFT',
            icon: '💸',
            color: 'linear-gradient(to right top, #9f4fec, #7f43cc, #6138ac, #452b8d, #2c1f6e, #221a60, #181453, #0e0f46, #0e0f46, #0e0f46, #0e0f46, #0e0f46)',
            src: 'astraNFTScroll.jpg',
            url: 'https://astra-nft-sigma.vercel.app/',
            id: 4,
        },

        {
            name: 'Astra Crypto',
            icon: '📈',
            color: 'linear-gradient(to right top, #000, rgb(20, 20, 20))',
            src: 'astraCrypto-scroll.png',
            url: 'https://astra-crypto.vercel.app/',
            id: 8,
        },

        {
            name: 'Clinify',
            icon: '⚕️',
            color: 'linear-gradient(to right top, #38ffb6, #5facff)',
            src: 'clinifyScroll.jpg',
            url: 'https://clinify-inspirer10.vercel.app/',
            id: 9,
        },

        {
            name: 'Home Store',
            icon: '🛋️',
            color: 'linear-gradient(to right top, #e38643, #fff)',
            src: 'myHome-scroll.jpg',
            url: 'https://inspirer10.github.io/my-home/',
            id: 10,
        },

        {
            name: 'Kanban Board',
            icon: '📋',
            color: 'linear-gradient(to right top, #090752, #fff)',
            src: 'kanban-scroll.jpg',
            url: 'https://draggable-kanban-board-topaz.vercel.app/',
            id: 11,
        },

        {
            name: 'Volcanic Wonder',
            icon: '🌋',
            color: 'linear-gradient(to right top, #000000, #371c1f, #6a312c, #9b4d30, #c47229, #c47229, #c47229, #c47229, #9b4d30, #6a312c, #371c1f, #000000)',
            src: 'volcanic-wonderScroll.jpg',
            url: 'https://volcanic-wonder.vercel.app/',
            id: 12,
        },

        {
            name: 'Weather App',
            icon: '🌤️',
            color: 'linear-gradient(to right, #a5d0ff, #007bff)',
            src: 'weatherApp.jpg',
            url: 'https://inspirer10.github.io/weather-app/',
            id: 13,
        },

        {
            name: 'Cars Rental',
            icon: '🚗',
            color: 'linear-gradient(to right top, #ffffff, #e6e2ff, #cbc6ff, #adabff, #8a91ff, #7886ff, #637bff, #4870ff, #4870ff, #4870ff, #4870ff, #4870ff)',
            src: 'cars-rentalScroll.jpg',
            url: 'https://cars-rental-inspirer10.vercel.app/',
            id: 14,
        },

        {
            name: 'Fast Food',
            icon: '🍔',
            color: 'linear-gradient(to right top, #000000, #331019, #620f24, #920728, #c20023, #c20023, #c20023, #c20023, #920728, #620f24, #331019, #000000)',
            src: 'fastFood-scroll.jpg',
            url: 'https://fast-food-taupe.vercel.app/',
            id: 15,
        },

        {
            name: 'Aura Living',
            icon: '🪑',
            color: 'linear-gradient(to right top, #ffa600e0, #cecece)',
            src: 'auraLiving-scroll.jpg',
            url: 'https://aura-living.vercel.app/',
            id: 16,
        },

        /* {
            name: 'Pizza Restaurant',
            icon: '🍕',
            color: 'linear-gradient(to right top, #ff0000, #ffee00)',
            src: 'pizzaRestaurant-Scroll.jpg',
            url: 'https://inspirer10.github.io/restaurant-page/',
            id: 17,
        },

        {
            name: 'Marle di Pawele',
            icon: '🐶',
            color: 'linear-gradient(to right top, #c8c8c8, #c8c8c8)',
            src: 'marle-scroll.png',
            url: 'https://inspirer10.github.io/marledipawele/',
            id: 18,
        }, */

        {
            name: 'Feed India',
            icon: '🥘',
            color: 'linear-gradient(to right, #0d1803, #0d1803)',
            src: 'feed-india.jpg',
            url: 'https://inspirer10.github.io/feed-india/',
            id: 19,
        },
        /*
        {
            name: 'Tic Tac Toe',
            icon: '🎲',
            color: 'linear-gradient(to right top, #58FF00, #241583)',
            src: 'ticTacToe-scroll.png',
            url: 'https://inspirer10.github.io/TicTacToe/',
            id: 20,
        },

        {
            name: 'Hangman',
            icon: '🧍‍♂️',
            color: 'linear-gradient(to right top, #cecece, #cecece)',
            src: 'hangmanScroll.png',
            url: 'https://inspirer10.github.io/hangman-react/',
            id: 21,
        },*/
    ];

    const [modal, setModal] = useState({
        active: false,
        index: 0,
        currentElement: '',
    });

    return (
        <section className='projects_section' id='Projects'>
            <motion.h5
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.1,
                    delay: 0.3,
                    type: 'ease',
                }}
            >
                Projects
            </motion.h5>
            <motion.p
                className='subHeading'
                initial={{ opacity: 0, x: -55 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.1,
                    delay: 0.375,
                    type: 'ease',
                }}
            >
                Feel free to take a look at some of my projects
            </motion.p>

            <div className='projects-spotlight-container'>
                <div className='project-card'>
                    <div className='image-wrapper'>
                        <Image
                            //src={'/slider/musthave2.jpg'}
                            src={'/projects/thumbnails/musthave-thumbnail.png'}
                            height={600}
                            width={600}
                            quality={100}
                            alt='project spotlight thumbnail'
                        />
                    </div>
                    <p>MUSTHAVE Webstore</p>
                </div>

                <div className='project-card'>
                    <div className='image-wrapper'>
                        <Image
                            srcX={'/mona.jpg'}
                            src={
                                '/projects/thumbnails/englishTutor-thumbnail.png'
                            }
                            height={600}
                            width={600}
                            quality={100}
                            alt='project spotlight thumbnail'
                        />
                    </div>
                    <p>English Tutor</p>
                </div>

                <div className='project-card'>
                    <div className='image-wrapper'>
                        <Image
                            src={
                                '/projects/thumbnails/rent-manager-thumbnail.png'
                            }
                            height={600}
                            width={600}
                            quality={100}
                            alt='project spotlight thumbnail'
                        />
                    </div>
                    <p>Food Expiration Reminder</p>
                </div>

                <div className='project-card'>
                    <div className='image-wrapper'>
                        <Image
                            src={
                                '/projects/thumbnails/food-master-thumbnail.png'
                            }
                            height={600}
                            width={600}
                            quality={100}
                            alt='project spotlight thumbnail'
                        />
                    </div>
                    <p>Food Master</p>
                </div>
            </div>

            <article className='projects-gallery'>
                <div className='projects-gallery-container'>
                    {projectsData.map((project, i) => (
                        <Link
                            href={project.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='project-link'
                            key={i}
                        >
                            <SingleProject
                                setModal={setModal}
                                index={i}
                                project={project}
                                key={i}
                            />
                        </Link>
                    ))}
                </div>
                <ProjectsModal modal={modal} projects={projectsData} />
            </article>
        </section>
    );
}

export default React.memo(Projects);
