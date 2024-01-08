let lightState = 0;
let working;
let outOfOrder;
let carPosition = 0;
let drive;
let stop = false;
const carSpeed = 5;

function changeTrafficLight() {
    if (lightState !== 3) {
        let trafficLightImg = document.getElementById("trafficLight");

        if (lightState === 0) {
            trafficLightImg.src = "./img/orange_light.png";
            lightState = 1;
        } else if (lightState === 1) {
            trafficLightImg.src = "./img/red_light.png";
            lightState = 2;
        } else if (lightState === 2) {
            trafficLightImg.src = "./img/green_light.png";
            lightState = 0;
        } else {
            trafficLightImg.src = "./img/red_light.png";
            lightState = 2;
        }
    }
}

function red() {
    let trafficLightImg = document.getElementById("trafficLight");
    trafficLightImg.src = "./img/red_light.png";
    lightState = 2;
    stop = true;
}

function orange() {
    let trafficLightImg = document.getElementById("trafficLight");
    trafficLightImg.src = "./img/orange_light.png";
    lightState = 1;
    stop = false;
}

function green() {
    let trafficLightImg = document.getElementById("trafficLight");
    trafficLightImg.src = "./img/green_light.png";
    lightState = 0;
    stop = false;
}

function shutoff() {
    let trafficLightImg = document.getElementById("trafficLight");
    trafficLightImg.src = "./img/off_light.png";
    lightState = 3;
    stop = false
}

function start() {
    if (!stop && carPosition < window.innerHeight) {
        drive = setTimeout(autoDrive, -10);
    } else {
        carPosition = 0;
        updateCarPosition();
        start();
    }
}

function autoDrive() {
    if (stop || carPosition <= 0) {
        carSpeed = 0;
    }

    carPosition -= carSpeed;
    updateCarPosition();
    start();
}

function stop() {
    clearTimeout(drive);
}

function turnOn() {
    clearTimeout(outOfOrder);

    working = setTimeout(() => {
        green();
        working = setTimeout(() => {
            orange();
            working = setTimeout(() => {
                red();
                turnOn();
            }, 2000);
        }, 4000);
    }, 4000);
}

function blink() {
    clearTimeout(working);

    outOfOrder = setTimeout(() => {
        if (lightState !== 3) {
            if (lightState !== 1) {
                orange();
            }
            blink();
        }
    }, 500);
}

function turnOff() {
    clearTimeout(working);
    clearTimeout(outOfOrder);
    shutoff();
}

function again() {
    clearTimeout(drive);
    carPosition = 0;
    updateCarPosition();
}

function updateCarPosition() {
    const car = document.getElementById("car");
    car.style.bottom = `${carPosition}px`;
}

turnOff();