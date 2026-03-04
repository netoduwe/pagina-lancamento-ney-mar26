import React, { useMemo } from 'react';
import { buildFormUrlWithUTM } from '../../utils/utmCapture';
import './semana-consumidor.css';

const FORM_BASE_URL = 'https://links.fullfunnel.app/widget/form/fcI4szJ2BBj65rKkNV2t';

const tapeText = ' ★ SEMANA DO CONSUMIDOR ★ OFERTA INÉDITA ★ PÓS NUTRIÇÃO AVANÇADA ★ 17 A 27 DE MARÇO ★ ';

const SCHero = () => {
    const formUrl = useMemo(() => buildFormUrlWithUTM(FORM_BASE_URL), []);
    const repeatedTape = tapeText.repeat(8);

    return (
        <section className="sc-hero">
            {/* Sliding Tape Banners */}
            <div className="sc-tape-container">
                <div className="sc-tape sc-tape-1">{repeatedTape}</div>
                <div className="sc-tape sc-tape-2">{repeatedTape}</div>
                <div className="sc-tape sc-tape-3">{repeatedTape}</div>
            </div>

            {/* Hero Content */}
            <div className="sc-hero-content">
                {/* Date Badge */}
                <div className="sc-date-badge">
                    📅 17 a 27 de Março
                </div>

                {/* Main Headline */}
                <h1 className="sc-headline">
                    <span className="sc-headline-orange">Semana do</span>
                    <span className="sc-headline-yellow">Consumidor</span>
                </h1>

                {/* Sub-headline */}
                <p className="sc-sub-headline">
                    A <strong>Pós-Graduação Nutrição Avançada</strong> com a maior condição financeira
                    que já fizemos. Uma oportunidade única para transformar sua carreira.
                </p>

                {/* Diagonal Separator */}
                <div className="sc-stripe" style={{ maxWidth: '400px', borderRadius: '4px' }}></div>

                {/* Embedded Form */}
                <div className="sc-form-container">
                    <div style={{
                        width: '100%',
                        height: '420px',
                    }}>
                        <iframe
                            src={formUrl}
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            id="inline-sc-fcI4szJ2BBj65rKkNV2t"
                            data-layout="{'id':'INLINE'}"
                            data-form-name="POS-T2 - NA"
                            data-height="420"
                            data-layout-iframe-id="inline-sc-fcI4szJ2BBj65rKkNV2t"
                            data-form-id="fcI4szJ2BBj65rKkNV2t"
                            title="POS-T2 - NA"
                        ></iframe>
                    </div>
                    <p style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '0.5px',
                        marginTop: '0.5rem',
                        textAlign: 'center'
                    }}>
                        🔒 Cadastre-se para garantir acesso à oferta exclusiva
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SCHero;
