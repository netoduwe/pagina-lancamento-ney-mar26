import React from 'react';
import { AlertTriangle, Tag, Clock } from 'lucide-react';

const ConsumerWeek = () => {
    return (
        <section className="fade-in-section" style={{
            background: 'linear-gradient(135deg, #FF6B00 0%, #D83C00 100%)', // Vibrant Orange to Deep Red/Orange
            color: '#FFFFFF',
            padding: '4rem 1.5rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background elements to make it dynamic */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255,180,0,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{
                maxWidth: '1000px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center'
            }}>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    padding: '0.5rem 1rem',
                    borderRadius: '100px',
                    marginBottom: '2rem',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    <Tag size={18} />
                    <span>Especial Mês do Consumidor</span>
                </div>

                <h2 className="font-serif" style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    lineHeight: '1.2',
                    marginBottom: '1.5rem',
                    fontWeight: '700',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}>
                    Uma oportunidade <span style={{ color: '#FFD700' }}>inacreditável</span> será revelada ao vivo.
                </h2>

                <p style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    maxWidth: '800px',
                    margin: '0 auto 2.5rem auto',
                    opacity: 0.9,
                    fontWeight: '400'
                }}>
                    No final desta aula gratuita, iniciaremos oficialmente a nossa Semana do Consumidor.
                    Para quem estiver ao vivo, a Pós-Graduação Nutrição Avançada será liberada com uma
                    <strong> condição financeira fantástica</strong> que nunca fizemos antes.
                </p>

                <div className="glass-panel" style={{
                    background: 'rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '1.5rem 2rem',
                    borderRadius: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            padding: '12px',
                            borderRadius: '50%',
                            display: 'flex'
                        }}>
                            <Clock size={28} color="#FFD700" />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '2px', fontWeight: 600 }}>Atenção</p>
                            <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>Essa oferta não ficará disponível por muito tempo.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ConsumerWeek;
