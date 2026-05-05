/**
 * 2026 OPay Premium Receipt Logic
 * Features: Fullscreen toggle, AI Jitter, and Metadata Scrubbing
 */
document.addEventListener('DOMContentLoaded', () => {

    // 1. FULLSCREEN TOGGLE
    // Tap the receipt once to hide the browser URL bar for a clean screenshot
    const receipt = document.getElementById('receipt');
    receipt.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(e => {
                console.log("Full-screen mode unavailable: " + e.message);
            });
        }
    });

    // 2. AI EVASION: Kerning Jitter
    // Adds microscopic, random spacing between letters to confuse AI OCR scanners
    const textElements = document.querySelectorAll('.field-value, .amount-hero');
    textElements.forEach(el => {
        const jitter = (Math.random() * 0.04).toFixed(3);
        el.style.letterSpacing = `${jitter}px`;
    });

    // 3. COLOR PERTURBATION
    // Slightly shifts the hex code of the text colors so they aren't "Template Perfect"
    const labels = document.querySelectorAll('.field-label');
    labels.forEach(label => {
        const shade = 140 + Math.floor(Math.random() * 5);
        label.style.color = `rgb(${shade}, ${shade}, ${shade})`;
    });

    console.log("Receipt for DAVIES DEMILADE is ready for export.");
});
