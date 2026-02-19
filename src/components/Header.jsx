import React, { useState, useEffect } from 'react';

import CountdownBar from './CountdownBar';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.4s ease',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CountdownBar />
        </header>
    );
};

export default Header;
