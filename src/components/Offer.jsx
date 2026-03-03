import React from 'react';

const Offer = () => {
    return (
        <section id="oferta" className="section-padding fade-in-section" style={{
            background: 'var(--bg-deep)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
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

                <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '3rem 0 1.5rem', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                    Por que entrar <span className="text-gold-gradient">nessa turma</span> agora?
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
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{ textDecoration: 'line-through', color: 'var(--text-tertiary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                        De R$ 7.000,00
                    </div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-tertiary)', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                        <span style={{ textDecoration: 'line-through' }}>R$ 400 matrícula</span>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: '800', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
                        O Maior Desconto do Ano
                    </div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--gold-mid)', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Pós Graduação Online
                    </div>

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

                    <button
                        className="btn-cta"
                        style={{ width: '100%', fontSize: '1.2rem' }}
                        onClick={() => window.dispatchEvent(new Event('open-lead-modal'))}
                    >
                        QUERO APROVEITAR A OFERTA
                    </button>
                    <p style={{ fontSize: '0.85rem', marginTop: '1.5rem', color: 'var(--text-tertiary)' }}>
                        *Condição exclusiva para a Turma Fundadora
                    </p>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'left' }}>
                        <p style={{ color: 'var(--gold-mid)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Tenho acesso por quanto tempo?</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>Você terá 2 anos de acesso irrestrito a todo o conteúdo da Pós.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
