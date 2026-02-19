import React from 'react';

const Masterclass = () => {
    return (
        <section className="section-padding bg-dark-blue fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">

                {/* Reference PDF Insight: Explicit Pitch Warning */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '3rem',
                    background: 'rgba(251, 237, 202, 0.1)',
                    display: 'inline-block',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    border: '1px solid var(--gold-dark)',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <span style={{ color: 'var(--gold-mid)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                        🔔  AO FINAL: Abertura Oficial da Turma Fundadora
                    </span>
                </div>
                <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '3rem' }}>
                    <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
                        O que você vai aprender <span className="text-gold-gradient">nesta aula exclusiva?</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '0 auto 3rem' }}>
                        No dia 17 de março, o Prof. Ney Felipe vai abrir a "caixa preta" do raciocínio clínico que o tornou uma referência nacional. Você vai descobrir:
                    </p>

                    <ul style={{ listStyle: 'none', textAlign: 'left', margin: '0 auto', maxWidth: '750px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'white' }}>
                            <span style={{ color: 'var(--gold-mid)', fontSize: '1.5rem', lineHeight: '1' }}>✓</span>
                            <span><strong style={{ color: 'var(--gold-light)' }}>O fim da insegurança:</strong> Como estruturar sua conduta sem medo de errar a prescrição.</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'white' }}>
                            <span style={{ color: 'var(--gold-mid)', fontSize: '1.5rem', lineHeight: '1' }}>✓</span>
                            <span><strong style={{ color: 'var(--gold-light)' }}>Nutrição 360º:</strong> Por que combinar a funcional, a esportiva e a comportamental é o segredo para resultados que fidelizam.</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'white' }}>
                            <span style={{ color: 'var(--gold-mid)', fontSize: '1.5rem', lineHeight: '1' }}>✓</span>
                            <span><strong style={{ color: 'var(--gold-light)' }}>Diagnóstico além das calorias:</strong> Como interpretar exames laboratoriais e sinais clínicos com precisão cirúrgica.</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>📅 17 de Março às 20h (Brasília)</p>
                        <p style={{ color: '#CBD5E1' }}>📍 Online e Gratuito no YouTube</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                        <button className="btn-cta">
                            Quero Participar da Aula
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Masterclass;
