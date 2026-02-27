/**
 * utmCapture.js
 * Captura os parâmetros UTM da URL da página atual
 * e os repassa para a URL do iframe do formulário.
 */

const UTM_PARAMS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'fbclid',
    'gclid',
];

/**
 * Lê os UTMs presentes na URL atual da página.
 * @returns {URLSearchParams} objeto com os parâmetros encontrados
 */
export function getUTMParams() {
    const pageParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();

    UTM_PARAMS.forEach((param) => {
        const value = pageParams.get(param);
        if (value) {
            utmParams.set(param, value);
        }
    });

    return utmParams;
}

/**
 * Recebe a URL base do formulário e adiciona os UTMs encontrados na página.
 * @param {string} baseUrl - URL original do iframe
 * @returns {string} URL com UTMs appendados
 */
export function buildFormUrlWithUTM(baseUrl) {
    const utmParams = getUTMParams();

    if ([...utmParams].length === 0) {
        return baseUrl; // Sem UTMs, retorna URL original
    }

    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${utmParams.toString()}`;
}
