const batteryCharge = document.querySelector('.charge');

// Simulate battery charging animation
function animateBattery() {
    let chargeLevel = 0;
    const interval = setInterval(() => {
        chargeLevel += 10;
        batteryCharge.style.height = `${chargeLevel}%`;

        if (chargeLevel >= 100) {
            clearInterval(interval);
        }
    }, 500);
}

animateBattery();
