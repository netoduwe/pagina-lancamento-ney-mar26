import React from 'react';

const Solution = () => {
    return (
        <section className="section-padding fade-in-section" style={{ background: 'var(--bg-white)', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--text-on-light)' }}>
                            A Única Pós que Integra os 3 Pilares da <span className="text-gold-gradient">Nutrição Avançada</span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--text-muted-on-light)' }}>
                            Chega de cursos fragmentados. Aqui você domina a tríade que fideliza pacientes:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {['Funcional', 'Esportiva', 'Comportamental'].map((pilar) => (
                                <div key={pilar} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1.2rem 1.5rem',
                                    background: 'rgba(15, 23, 42, 0.04)',
                                    borderRadius: '12px',
                                    borderLeft: '4px solid var(--gold-mid)'
                                }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-on-light)' }}>{pilar}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: 'var(--text-muted-on-light)' }}>
                            <div>
                                <p style={{ color: 'var(--gold-mid)', fontWeight: 'bold', marginBottom: '0.2rem' }}>Reconhecida pelo MEC</p>
                                <p style={{ fontSize: '0.9rem' }}>Certificação Anhanguera + Nutrição Avançada</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--gold-mid)', fontWeight: 'bold', marginBottom: '0.2rem' }}>Duração</p>
                                <p style={{ fontSize: '0.9rem' }}>12 meses de formação intensa</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--gold-mid)', fontWeight: 'bold', marginBottom: '0.2rem' }}>Acesso</p>
                                <p style={{ fontSize: '0.9rem' }}>Todo o conteúdo por 3 anos</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--gold-mid)', fontWeight: 'bold', marginBottom: '0.2rem' }}>Sem TCC Obrigatório</p>
                                <p style={{ fontSize: '0.9rem' }}>Foco total na prática clínica</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                        <p style={{ color: '#94A3B8' }}>[Imagem: Ney Felipe + Professores]</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
