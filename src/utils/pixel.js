/**
 * pixel.js
 * Utilitário para gerenciamento do Meta Pixel (Facebook Pixel)
 */

export const PIXEL_ID = '2794166034202244';

/**
 * Inicializa o Meta Pixel na página
 */
export const initPixel = () => {
    if (typeof window === 'undefined') return;
    if (window.fbq) return;

    const n = window.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    const t = document.createElement('script');
    t.async = !0;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);

    window.fbq('init', PIXEL_ID);
};

/**
 * Dispara o evento PageView
 */
export const trackPageView = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
        console.log('[Pixel] PageView tracked');
    }
};

/**
 * Dispara o evento Lead
 */
export const trackLead = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead');
        console.log('[Pixel] Lead tracked');
    }
};

/**
 * Dispara eventos customizados
 * @param {string} eventName 
 * @param {object} params 
 */
export const trackCustomEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, params);
        console.log(`[Pixel] ${eventName} tracked`, params);
    }
};
