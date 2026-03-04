import React, { useEffect } from 'react';
import SCHero from '../components/semana-consumidor/SCHero';
import ConsumerWeek from '../components/ConsumerWeek';
import Solution from '../components/Solution';
import CourseDetails from '../components/CourseDetails';
import Bio from '../components/Bio';
import Offer from '../components/Offer';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import LeadModal from '../components/LeadModal';
import '../index.css';

const SemanaDoConsumidorPage = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="sc-page bg-spotlight" style={{ minHeight: '100vh', width: '100%' }}>
            {/* 1. Hero - Semana do Consumidor com faixas deslizantes */}
            <SCHero />

            {/* Diagonal Stripe separator */}
            <div className="sc-stripe"></div>

            {/* 2. Especial Mês do Consumidor */}
            <ConsumerWeek />

            {/* 3. A Única Pós que integra os 3 pilares */}
            <Solution />

            {/* 4. Como vai funcionar a Pós-Graduação */}
            <CourseDetails />

            {/* 5. Autoridade Ney */}
            <Bio />

            {/* 6. Ancoragem / Oferta */}
            <Offer />

            {/* 7. FAQ */}
            <FAQ />

            {/* Footer */}
            <Footer />

            {/* Lead Modal */}
            <LeadModal />
        </div>
    );
};

export default SemanaDoConsumidorPage;
