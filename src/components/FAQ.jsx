import React, { useState } from 'react';

const FAQ = () => {
    const questions = [
        { q: "Para quem é o curso?", a: "Para nutricionistas graduados que buscam segurança e autoridade clínica." },
        { q: "Estudantes podem participar?", a: "Podem assistir à aula gratuita, mas a matrícula na Pós requer diploma de graduação." },
        { q: "Tem certificado?", a: "Sim, Pós-graduação Lato Sensu reconhecida pelo MEC (Certificação Anhanguera)." },
        { q: "Tenho acesso por quanto tempo?", a: "Você terá 3 anos de acesso irrestrito a todo o conteúdo e atualizações." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-padding fade-in-section" style={{ background: 'var(--bg-light)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="font-serif" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem', color: 'var(--text-on-light)' }}>Perguntas Frequentes</h2>
                <div>
                    {questions.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(15,23,42,0.1)', paddingBottom: '1.5rem' }}>
                                <div onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ margin: 0, color: 'var(--text-on-light)', fontSize: '1.25rem', paddingRight: '1rem' }}>
                                        {item.q}
                                    </h4>
                                    <span style={{
                                        color: 'var(--gold-mid)',
                                        fontSize: '1.75rem',
                                        fontWeight: '300',
                                        lineHeight: 1,
                                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                    }}>+</span>
                                </div>
                                <div style={{
                                    maxHeight: isOpen ? '300px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease',
                                    opacity: isOpen ? 1 : 0,
                                    marginTop: isOpen ? '1rem' : '0'
                                }}>
                                    <p style={{ color: 'var(--text-muted-on-light)', lineHeight: '1.7', fontSize: '1.1rem', margin: 0 }}>{item.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
