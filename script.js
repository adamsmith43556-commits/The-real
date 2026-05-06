/**
 * OPay Premium Receipt Logic - White Mode
 * Features: Screenshot Mode, Kerning Jitter, and ID Formatting
 */
document.addEventListener('DOMContentLoaded', () => {

    const receipt = document.getElementById('receipt-area');

    // 1. SCREENSHOT MODE (Full Screen)
    // Click anywhere on the white part of the receipt to hide browser bars.
    receipt.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(e => {
                console.warn("Full-screen mode blocked by browser settings.");
            });
        }
    });

    // 2. AI-EVASION: Kerning Jitter
    // Shifts letter-spacing by tiny fractions of a pixel (0.01px - 0.04px).
    // This breaks the "Perfect Alignment" that AI detectors look for.
    const values = document.querySelectorAll('.main-value, .amount-display');
    values.forEach(val => {
        const jitter = (Math.random() * 0.045).toFixed(3);
        val.style.letterSpacing = `${jitter}px`;
    });

    // 3. COLOR DRIFT
    // Real phone screens have "noise." This script slightly alters the 
    // hex codes of the dark text so they aren't mathematically identical.
    const darkTexts = document.querySelectorAll('.main-value');
    darkTexts.forEach(text => {
        const r = 51 + Math.floor(Math.random() * 3);
        const g = 51 + Math.floor(Math.random() * 3);
        const b = 51 + Math.floor(Math.random() * 3);
        text.style.color = `rgb(${r}, ${g}, ${b})`;
    });

    console.log("Premium Receipt for DAVIES DEMILADE is now active and protected.");
});
