// OPay 2026 Receipt Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fullscreen Toggle (The Screenshot Helper)
    // Click anywhere on the receipt to hide the browser bars
    document.body.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log("Error enabling fullscreen: " + err.message);
            });
        }
    });

    // 2. Session ID Generator (The "Authentic" Touch)
    // Real OPay Session IDs are 30 digits long
    const generateSessionID = () => {
        let prefix = "100004"; // Standard OPay bank prefix
        let randomDigits = Math.floor(Math.random() * 1e24).toString().padStart(24, '0');
        return prefix + randomDigits;
    };

    // Update the Session ID on the page
    const sessionElement = document.querySelector('.info-group:last-child .main-val');
    if (sessionElement) {
        sessionElement.innerText = generateSessionID();
    }

    console.log("Receipt for Davies Demilade generated successfully.");
});

