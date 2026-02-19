import React from 'react';

const FAQ = () => {
    const questions = [
        { q: "Para quem é o curso?", a: "Para nutricionistas graduados que buscam segurança e autoridade clínica." },
        { q: "Estudantes podem participar?", a: "Podem assistir à aula gratuita, mas a matrícula na Pós requer diploma de graduação." },
        { q: "Tem certificado?", a: "Sim, Pós-graduação Lato Sensu reconhecida pelo MEC (Certificação Anhanguera)." },
        { q: "Tenho acesso por quanto tempo?", a: "Você terá 3 anos de acesso irrestrito a todo o conteúdo e atualizações." }
    ];

    return (
        <section className="section-padding fade-in-section" style={{ background: 'var(--bg-light)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="font-serif" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem', color: 'var(--text-on-light)' }}>Perguntas Frequentes</h2>
                <div>
                    {questions.map((item, index) => (
                        <div key={index} style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(15,23,42,0.1)', paddingBottom: '1.5rem' }}>
                            <h4 style={{ marginBottom: '1rem', cursor: 'pointer', color: 'var(--text-on-light)', fontSize: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {item.q}
                                <span style={{ color: 'var(--gold-mid)', fontSize: '1.5rem' }}>+</span>
                            </h4>
                            <p style={{ color: 'var(--text-muted-on-light)', lineHeight: '1.7', fontSize: '1.1rem' }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
