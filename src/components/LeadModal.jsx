import React, { useState, useEffect, useMemo } from 'react';
import { X } from 'lucide-react';
import { buildFormUrlWithUTM } from '../utils/utmCapture';
import { trackCustomEvent } from '../utils/pixel';

const FORM_BASE_URL = 'https://links.fullfunnel.app/widget/form/fcI4szJ2BBj65rKkNV2t';

const LeadModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const formUrl = useMemo(() => buildFormUrlWithUTM(FORM_BASE_URL), []);

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            trackCustomEvent('ViewContent', { content_name: 'Lead Registration Modal' });
        };
        window.addEventListener('open-lead-modal', handleOpen);
        return () => window.removeEventListener('open-lead-modal', handleOpen);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('message', handleMessage); // Clean up just in case
        };
    }, [isOpen]);

    // Handle iframe resize messages from GoHighLevel
    const handleMessage = (e) => {
        if (e.data && e.data.type === 'setHeight' && e.data.id === "inline-fcI4szJ2BBj65rKkNV2t") {
            const iframe = document.getElementById("inline-fcI4szJ2BBj65rKkNV2t");
            if (iframe) {
                iframe.style.height = `${e.data.height}px`;
            }
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('message', handleMessage);

            // Re-run the GHL script embed logic manually since react might not parse the <script> tags dynamically on render
            const script = document.createElement('script');
            script.src = 'https://links.fullfunnel.app/js/form_embed.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                window.removeEventListener('message', handleMessage);
                if (document.body.contains(script)) {
                    document.body.removeChild(script);
                }
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100dvh',
            backgroundColor: 'rgba(5, 5, 17, 0.85)',
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(8px)',
            padding: '20px',
            overflowY: 'auto'
        }} onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
        }}>
            <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto'
            }}>
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'rgba(255,255,255,0.05)',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'background 0.2s ease, color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                >
                    <X size={18} />
                </button>

                <div style={{ padding: '32px 24px 16px', textAlign: 'center' }}>
                    <h3 style={{
                        color: 'var(--gold-primary)',
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        margin: '0 0 8px 0',
                        fontFamily: 'var(--font-serif)'
                    }}>
                        Entre no Grupo para Participar
                    </h3>
                    <p style={{
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        margin: 0,
                        fontWeight: 500,
                        letterSpacing: '0.5px'
                    }}>
                        17/03 às 20h
                    </p>
                </div>

                <div style={{
                    padding: '0 24px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '380px' // Initial minimum height for the form
                }}>
                    <iframe
                        src={formUrl}
                        style={{ width: '100%', height: '100%', border: 'none', minHeight: '380px' }}
                        id="inline-fcI4szJ2BBj65rKkNV2t"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="POS-T2 - NA"
                        data-height="480"
                        data-layout-iframe-id="inline-fcI4szJ2BBj65rKkNV2t"
                        data-form-id="fcI4szJ2BBj65rKkNV2t"
                        title="POS-T2 - NA"
                    ></iframe>
                </div>

                <div style={{
                    padding: '24px',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(0,0,0,0.2)',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px'
                }}>
                    <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        margin: 0,
                        lineHeight: '1.5'
                    }}>
                        <strong style={{ color: 'var(--gold-mid)' }}>Lembrete:</strong> Ao final da aula iniciaremos oficialmente a <strong>Semana do Consumidor</strong>, com a melhor oferta do ano para a Pós-Graduação Nutrição Avançada.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeadModal;
