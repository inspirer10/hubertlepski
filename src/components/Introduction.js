import Image from 'next/image';
import React from 'react';

function Introduction() {
    return (
        <section className='introduction_section'>
            <main>
                <Image
                    src={'/avatar.png'}
                    height={650}
                    width={650}
                    className='avatar_image'
                    alt='person avatar'
                />
                <h2>
                    Hey, I&#39;m <span>Hubert</span> Łepski.
                </h2>
                <h3>
                    Dreamer &
                    <Image
                        src={'/favicon.ico'}
                        width={150}
                        height={150}
                        className='icon_image'
                        alt='icon thumbnail'
                    />
                    Programmer
                </h3>

                <p className='subHeading'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus omnis distinctio atque natus dolores! Aperiam
                    dolor doloribus vero minima.
                </p>

                <div className='buttons-wrapepr'>
                    <button className='book_call'>Book a Call</button>
                    <button className='projects'>
                        Available for new projects
                    </button>
                </div>
            </main>
        </section>
    );
}

export default Introduction;
