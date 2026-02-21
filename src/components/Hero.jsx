import React from 'react';

const Hero = () => {
    return (
        <section className="section-padding fade-in-section" style={{
            paddingTop: '90px',
            paddingBottom: '140px',
            textAlign: 'center',
            position: 'relative'
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

                <div style={{ display: 'inline-block', marginBottom: '2rem', padding: '10px 28px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '50px', border: '1px solid var(--gold-primary)' }}>
                    <span style={{
                        color: 'var(--gold-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--gold-primary)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--gold-primary)' }}></span>
                        MASTERCLASS AO VIVO
                    </span>
                </div>

                <h1 style={{
                    fontSize: '4.5rem',
                    marginBottom: '2.5rem',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.05'
                }}>
                    Do medo do primeiro atendimento à <br />
                    <span className="text-gold-gradient" style={{ fontStyle: 'italic', paddingRight: '10px' }}>segurança de ser referência.</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    maxWidth: '920px',
                    margin: '0 auto 0.5rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    lineHeight: '1.5'
                }}>
                    A prática clínica que a faculdade não te deu, revelada em uma Masterclass inédita.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>

                    {/* Event Info Boxes */}
                    <div style={{
                        marginTop: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        width: '100%',
                        maxWidth: '600px'
                    }}>
                        {/* Box 1: Date */}
                        <div style={{
                            background: 'rgba(0,0,0,0.6)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '12px',
                            padding: '16px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.5px' }}>
                                17 DE MARÇO • ÀS 20H • AO VIVO
                            </span>
                        </div>

                        {/* Box 2: Offer Warning */}
                        <div style={{
                            background: 'rgba(0,0,0,0.6)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '12px',
                            padding: '16px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            backdropFilter: 'blur(10px)',
                            textAlign: 'left'
                        }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '28px' }}>
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12V9a9 9 0 0 1 18 0v3"></path>
                            </svg>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                                <strong style={{ color: 'var(--text-primary)', textTransform: 'uppercase' }}>Ao final:</strong> Aproveite a condição <span style={{ color: 'var(--gold-primary)' }}>"Black Friday"</span> da Semana do Consumidor para entrar na Pós-Graduação Nutrição Avançada.
                            </span>
                        </div>
                    </div>

                    {/* Embedded Form */}
                    <div style={{ width: '100%', maxWidth: '605px', height: '380px' }}>
                        <iframe
                            src="https://links.fullfunnel.app/widget/form/fcI4szJ2BBj65rKkNV2t"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            id="inline-fcI4szJ2BBj65rKkNV2t"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="POS-T2 - NA"
                            data-height="480"
                            data-layout-iframe-id="inline-fcI4szJ2BBj65rKkNV2t"
                            data-form-id="fcI4szJ2BBj65rKkNV2t"
                            title="POS-T2 - NA"
                        ></iframe>
                        <script src="https://links.fullfunnel.app/js/form_embed.js"></script>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', letterSpacing: '0.5px' }}>
                        🔒 Acesso exclusivo para Nutricionistas
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
