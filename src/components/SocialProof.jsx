import React from 'react';

const SocialProof = () => {
    return (
        <section className="section-padding fade-in-section" style={{ backgroundColor: '#F8FAFC', textAlign: 'center' }}>
            <div className="container">
                <h2 className="font-serif" style={{ color: 'var(--text-on-light)', marginBottom: '1rem', fontSize: '2.5rem' }}>
                    Quem aplica o método, <span className="text-gold-gradient">tem resultados.</span>
                </h2>
                <p style={{ marginBottom: '4rem', color: 'var(--text-muted-on-light)', fontSize: '1.1rem', opacity: 0.9 }}>
                    Veja o que dizem os alunos que hoje vivem exclusivamente de consultório.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
                            textAlign: 'left',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', background: '#CBD5E1', borderRadius: '50%', marginRight: '1rem' }}></div>
                                <div>
                                    <h4 style={{ margin: 0, color: 'var(--color-primary-dark)', fontFamily: 'var(--font-serif)' }}>Dra. Ana Silva</h4>
                                    <small style={{ color: '#64748B' }}>Aluna Turma 1</small>
                                </div>
                            </div>
                            <p style={{ fontStyle: 'italic', color: '#334155', lineHeight: '1.6' }}>
                                "Antes eu tinha medo de atender. Hoje cobro 3x mais na minha consulta e tenho segurança clínica graças ao método do Ney."
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
