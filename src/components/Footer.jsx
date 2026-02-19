import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#020617', color: '#64748B', padding: '4rem 0', textAlign: 'center', borderTop: '1px solid #1E293B' }}>
            <div className="container">
                <p className="font-serif" style={{ marginBottom: '1.5rem', fontWeight: 'bold', color: 'white', fontSize: '1.5rem' }}>
                    Garanta que o seu nome esteja na lista da Turma Fundadora.
                </p>
                <button className="btn-cta" style={{ marginBottom: '3rem', fontSize: '1rem', padding: '12px 30px' }}>
                    QUERO ME INSCREVER NA AULA E GARANTIR O DESCONTO
                </button>
                <div style={{ borderTop: '1px solid #1E293B', paddingTop: '2rem', fontSize: '0.9rem' }}>
                    <p>&copy; 2026 Pós Nutrição Avançada. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
