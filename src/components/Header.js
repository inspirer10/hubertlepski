import React, { useCallback, useState } from 'react';
import { CodeIcon } from './animatedIcons/CodeIcon';
import Link from 'next/link';

function Header({ activeSection }) {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    const linksData = [
        //   { name: 'Home' },
        { name: 'About' },
        { name: 'Technologies' },
        { name: 'Projects' },
        { name: 'Experience' },
        { name: 'Contact' },
    ];

    const handleClick = useCallback((e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <header
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseMove={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
        >
            <CodeIcon isHovered={isHeaderHovered} />
            <nav>
                {linksData.map(({ name }, index) => (
                    <Link
                        key={index}
                        href={`#${name}`}
                        onClick={(e) => handleClick(e, name)}
                        className={
                            activeSection === name ? 'active link' : 'link'
                        }
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;
