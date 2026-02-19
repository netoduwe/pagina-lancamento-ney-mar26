import React from 'react';

const Bio = () => {
    return (
        <section className="section-padding fade-in-section" style={{ background: 'var(--bg-deep)' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{
                        height: '450px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {/* Placeholder for Ney Image */}
                        <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)' }}>
                            FOTO NEY FELIPE
                        </div>
                    </div>

                    <div>
                        <span style={{
                            color: 'var(--gold-primary)',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            letterSpacing: '2px'
                        }}>
                            Mestre & Referência Nacional
                        </span>
                        <h2 className="font-serif" style={{ color: 'var(--text-primary)', margin: '1rem 0 1.5rem', fontSize: '3rem', lineHeight: '1.2' }}>
                            Aprenda com quem vive o consultório há <span className="text-gold-gradient">18 anos.</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.7', fontWeight: 300 }}>
                            Nutricionista clínico, mestre e referência nacional. Ney Felipe Fernandes estruturou esta pós-graduação para entregar exatamente o que ele sentiu falta quando começou: uma base sólida, científica e, acima de tudo, prática.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <div style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                                <strong style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>+10 Mil</strong> <br />
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Alunos formados</span>
                            </div>
                            <div style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                                <strong style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>Mestrado</strong> <br />
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>em Bioquímica</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
