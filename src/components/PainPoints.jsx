import React from 'react';

const PainPoints = () => {
    const points = [
        {
            title: '"Me sinto um nutricionista de papel"',
            desc: "Você tem o diploma, mas na frente do paciente sente que é uma fraude. O medo de não saber o que fazer com um caso complexo te paralisa."
        },
        {
            title: '"Tenho medo de prescrever"',
            desc: "A insegurança bate na hora da conduta: 'Será que essa dose está certa? Essa combinação funciona?'. Você acaba passando o básico por medo de errar."
        },
        {
            title: '"Aprendi muita teoria solta"',
            desc: "A faculdade te deu pedaços de informação, mas não te ensinou a conectar bioquímica, fisiologia e exames num raciocínio clínico."
        },
        {
            title: '"Não tenho coragem de cobrar"',
            desc: "Como cobrar um valor justo se você não garante o resultado? A falta de segurança técnica te obriga a competir por preço e desvaloriza sua consulta."
        }
    ];

    return (
        <section className="section-padding fade-in-section" style={{
            background: 'var(--bg-light)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Soft border indicator of transition */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.05), transparent)' }}></div>

            {/* Soft decorative element */}
            <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '400px', height: '400px', background: 'rgba(212, 175, 55, 0.03)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'var(--text-on-light)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                    Você aprendeu a Nutrição <br /> <span className="text-gold-gradient">em pedaços.</span>
                </h2>
                <p style={{ maxWidth: '650px', margin: '0 auto 5rem', fontSize: '1.3rem', color: 'var(--text-muted-on-light)', lineHeight: '1.6', fontWeight: 300 }}>
                    Mas na vida real o paciente vem inteiro. É por isso que você se sente assim hoje:
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
                    gap: '2.5rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {points.map((point, index) => (
                        <div key={index} className="pain-card" style={{
                            padding: '4rem 3rem',
                            textAlign: 'left',
                            borderRadius: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            position: 'relative',
                            cursor: 'default'
                        }}>
                            <div className="icon-box" style={{
                                fontSize: '1.5rem',
                                marginBottom: '2rem',
                                color: '#EF4444',
                                background: '#FEE2E2',
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                ✕
                            </div>
                            <h3 className="font-serif" style={{ fontSize: '1.6rem', marginBottom: '1.2rem', color: 'var(--text-on-light)', lineHeight: '1.3' }}>{point.title}</h3>
                            <p style={{ color: 'var(--text-muted-on-light)', lineHeight: '1.7', fontSize: '1.1rem', fontWeight: 300 }}>{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
