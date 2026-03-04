import React, { useMemo } from 'react';
import { buildFormUrlWithUTM } from '../utils/utmCapture';

const FORM_BASE_URL = 'https://links.fullfunnel.app/widget/form/fcI4szJ2BBj65rKkNV2t';

const Hero = () => {
    const formUrl = useMemo(() => buildFormUrlWithUTM(FORM_BASE_URL), []);
    return (
        <section className="section-padding fade-in-section" style={{
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>

            {/* Premium Animated Grid */}
            <div className="bg-premium-grid"></div>

            {/* Floating Glow Orbs */}
            <div className="glow-orb" style={{
                top: '5%',
                left: '20%',
                width: '400px',
                height: '400px',
                background: 'rgba(214, 179, 96, 0.08)', // Subtle Gold
            }}></div>
            <div className="glow-orb" style={{
                top: '30%',
                right: '15%',
                width: '500px',
                height: '500px',
                background: 'rgba(247, 245, 240, 0.03)', // Very faint cream
                animationDelay: '-5s', // Offset animation
                animationDuration: '15s'
            }}></div>

            {/* Background Glow Effect specific to Hero */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1200px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(5, 5, 17, 0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Masterclass Badge Removed for Space Optimization */}

                <h1 style={{
                    fontSize: 'clamp(1.65rem, 5.5vw, 3.2rem)',
                    marginBottom: '1rem',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.2',
                    maxWidth: '1100px',
                    margin: '0 auto 1.5rem',
                    padding: '0 10px',
                    paddingTop: window.innerWidth <= 768 ? '50px' : '15px'
                }}>
                    Do medo do 1º atendimento <br className="mobile-only" />
                    à <br className="desktop-only" />
                    <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
                        segurança para viver de <br className="mobile-only" />
                        atendimentos Nutricionais.
                    </span>
                </h1>

                <p style={{
                    fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
                    maxWidth: '800px',
                    margin: '0 auto 1.5rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 400,
                    lineHeight: '1.5'
                }}>
                    A prática clínica que a faculdade não te deu, revelada em uma Masterclass inédita.
                </p>

                {/* Main Hero Content Layout - Centered Single Column */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gap: window.innerWidth <= 768 ? '5px' : '1.5rem', /* Fine-tuned to 5px as requested by the user */
                    maxWidth: '850px',
                    margin: '0 auto',
                    padding: '0 10px'
                }}>
                    {/* Info Boxes Grid - Side by side on larger screens */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1rem',
                        width: '100%'
                    }}>
                        {/* Event Date Box */}
                        <div style={{
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            padding: '12px 15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            backdropFilter: 'blur(10px)',
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                                17 DE MARÇO • ÀS 20H • AO VIVO
                            </span>
                        </div>

                        {/* Offer Warning Box */}
                        <div style={{
                            background: 'rgba(212, 175, 55, 0.05)',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            borderRadius: '12px',
                            padding: '12px 15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            backdropFilter: 'blur(10px)',
                            textAlign: 'left',
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '20px' }}>
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12V9a9 0 0 1 18 0v3"></path>
                            </svg>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.3' }}>
                                <strong style={{ color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '0.75rem' }}>Ao final:</strong> Inicio da Semana do Consumidor com oferta inédita da Pós Nutrição Avançada
                            </span>
                        </div>
                    </div>

                    {/* Embedded Form */}
                    <div style={{
                        width: '100%',
                        height: '420px',
                        marginTop: '0rem'
                    }}>
                        <iframe
                            src={formUrl}
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            id="inline-fcI4szJ2BBj65rKkNV2t"
                            data-layout="{'id':'INLINE'}"
                            data-form-name="POS-T2 - NA"
                            data-height="420"
                            data-layout-iframe-id="inline-fcI4szJ2BBj65rKkNV2t"
                            data-form-id="fcI4szJ2BBj65rKkNV2t"
                            title="POS-T2 - NA"
                        ></iframe>
                    </div>

                    {/* Additional Benefits or Trust Badges */}
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', letterSpacing: '0.5px', marginTop: '0.5rem' }}>
                        🔒 Acesso exclusivo para Nutricionistas
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
