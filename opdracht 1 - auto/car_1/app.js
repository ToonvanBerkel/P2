let carPosition = 0;
let drive;

function start() {
    drive = setTimeout(autoDrive, 100);
}

function again() {
    clearTimeout(drive);
    carPosition = 0;
    updateCarPosition();
}

function stop() {
    clearTimeout(drive);
}

function autoDrive() {
    carPosition -= -5;
    updateCarPosition();
    start();
}

function updateCarPosition() {
    const car = document.getElementById("car");
    car.style.bottom = `${carPosition}px`;
}
