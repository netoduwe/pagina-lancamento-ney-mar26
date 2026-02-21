import React from 'react';

const pillars = [
    { label: 'Funcional', desc: 'Baseado em evidências para aplicar na consulta', angle: -90 },
    { label: 'Esportiva', desc: 'Alto desempenho e recomposição corporal', angle: 30 },
    { label: 'Comportamental', desc: 'Adesão, vínculo e fidelização de pacientes', angle: 150 },
];

// Triqueta SVG as a decorative React component
const TriquetaSVG = () => (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '420px', filter: 'drop-shadow(0 0 30px rgba(198,157,72,0.12))' }}>
        <defs>
            <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D6B360" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#D6B360" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Central decorative glow */}
        <circle cx="200" cy="200" r="90" fill="url(#orbGrad)" />

        {/* Circle 1 - Top */}
        <circle cx="200" cy="130" r="88"
            fill="none"
            stroke="#C29D48"
            strokeWidth="1.5"
            strokeOpacity="0.6"
        />
        {/* Circle 2 - Bottom-Left */}
        <circle cx="140" cy="240" r="88"
            fill="none"
            stroke="#C29D48"
            strokeWidth="1.5"
            strokeOpacity="0.6"
        />
        {/* Circle 3 - Bottom-Right */}
        <circle cx="260" cy="240" r="88"
            fill="none"
            stroke="#C29D48"
            strokeWidth="1.5"
            strokeOpacity="0.6"
        />

        {/* Outer ring */}
        <circle cx="200" cy="200" r="175"
            fill="none"
            stroke="#C29D48"
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="4 6"
        />

        {/* Pillar labels */}
        {/* Top */}
        <text x="200" y="42" textAnchor="middle" fill="#D6B360" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">FUNCIONAL</text>
        {/* Bottom Left */}
        <text x="82" y="368" textAnchor="middle" fill="#D6B360" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">ESPORTIVA</text>
        {/* Bottom Right */}
        <text x="320" y="368" textAnchor="middle" fill="#D6B360" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">COMPORTAMENTAL</text>

        {/* Central node */}
        <circle cx="200" cy="200" r="10" fill="#D6B360" fillOpacity="0.8" />
        <circle cx="200" cy="200" r="5" fill="#F3E3B6" />
    </svg>
);

const Solution = () => {
    return (
        <section className="section-padding fade-in-section" style={{ background: 'var(--bg-light)', position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                    gap: '5rem',
                    alignItems: 'center'
                }}>
                    {/* Left: Text */}
                    <div>
                        <h2 className="font-serif" style={{
                            fontSize: '3rem',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1',
                            color: 'var(--text-on-light)'
                        }}>
                            A Única Pós que Integra os 3 Pilares da{' '}
                            <span className="text-gold-gradient">Nutrição Avançada</span>
                        </h2>
                        <p style={{
                            fontSize: '1.15rem',
                            marginBottom: '2.5rem',
                            color: 'var(--text-muted-on-light)',
                            lineHeight: '1.7'
                        }}>
                            Chega de cursos fragmentados. Aqui você domina a tríade que
                            fideliza pacientes e te diferencia no mercado:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {pillars.map(({ label, desc }) => (
                                <div key={label} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                }}>
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: 'var(--gold-mid)',
                                        flexShrink: 0,
                                        marginTop: '7px'
                                    }} />
                                    <div>
                                        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-on-light)' }}>
                                            Nutrição {label}
                                        </span>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-on-light)', marginTop: '2px' }}>
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Triqueta visual */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}>
                        <TriquetaSVG />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
