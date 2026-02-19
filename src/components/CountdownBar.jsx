import React, { useState, useEffect } from 'react';

const CountdownBar = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        // Target date: March 17th (Consumer Week Event)
        const targetDate = new Date('2026-03-17T20:00:00');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60)
            };
        } else {
            // Fallback if date passed
            timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <span key={interval} style={{ margin: '0 5px' }}>
                    <span style={{ fontWeight: 'bold', color: 'var(--gold-primary)' }}>{timeLeft[interval]}</span> {interval}
                </span>
            );
        }
    });

    return (
        <div style={{
            background: 'linear-gradient(90deg, #0f0f29 0%, #1a1a3a 50%, #0f0f29 100%)',
            color: '#E2E8F0',
            textAlign: 'center',
            padding: '10px 0',
            fontSize: '0.9rem',
            borderBottom: '1px solid var(--gold-dim)',
            position: 'relative',
            zIndex: 1002,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
        }}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                ⚠️ Abertura das Inscrições em:
            </span>
            <div style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
                {timerComponents.length ? timerComponents : <span>Oferta Expirada!</span>}
            </div>
        </div>
    );
};

export default CountdownBar;
