import React from 'react';

const Offer = () => {
    return (
        <section id="oferta" className="section-padding fade-in-section" style={{
            background: 'var(--bg-deep)',
            textAlign: 'center',
            position: 'relative'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    color: 'var(--gold-primary)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    border: '1px solid var(--gold-primary)'
                }}>
                    Mês do Consumidor • Condição Única
                </span>

                <h2 className="font-serif" style={{ fontSize: '3rem', margin: '2rem 0 1rem', color: 'var(--text-primary)' }}>
                    Por que entrar para a <span className="text-gold-gradient">Turma Fundadora</span> agora?
                </h2>

                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem', color: 'var(--text-tertiary)' }}>
                    Março é o Mês do Consumidor, e decidimos que este seria o momento da sua virada de chave.
                </p>

                <div className="glass-panel" style={{
                    maxWidth: '550px',
                    margin: '0 auto',
                    padding: '3rem',
                    background: 'rgba(11, 11, 30, 0.6)',
                    border: '1px solid var(--gold-dim)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{ textDecoration: 'line-through', color: 'var(--text-tertiary)', fontSize: '1.5rem' }}>
                        De R$ 7.400,00
                    </div>
                    <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1.5rem 0', fontFamily: 'var(--font-serif)', lineHeight: '1.2', color: 'var(--text-primary)' }}>
                        Desconto de até <br />
                        <span className="text-gold-gradient" style={{ fontSize: '3.5rem' }}>R$ 2.500,00</span>
                    </div>
                    <p style={{ color: 'var(--gold-mid)', fontWeight: 'bold', margin: '1rem 0', fontSize: '1.1rem' }}>
                        + Taxa de Matrícula ZERO
                    </p>

                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '2rem 0' }}></div>

                    <ul style={{ textAlign: 'left', margin: '2rem 0', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--gold-mid)' }}>✅</span> Pós-Graduação 100% Online
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--gold-mid)' }}>✅</span> Mentorias ao Vivo com Ney Felipe
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--gold-light)', fontWeight: 'bold' }}>
                            <span style={{ color: 'var(--gold-light)' }}>🎁</span> Bônus Exclusivo: Kit de Boas-Vindas físico para os 50 primeiros
                        </li>
                    </ul>

                    <button className="btn-cta" style={{ width: '100%', fontSize: '1.2rem' }}>
                        QUERO APROVEITAR A OFERTA
                    </button>
                    <p style={{ fontSize: '0.85rem', marginTop: '1.5rem', color: 'var(--text-tertiary)' }}>
                        *Condição exclusiva para a Turma Fundadora
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Offer;
