let lightState = 0;
let working;
let outOfOrder;

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
}

function orange() {
    let trafficLightImg = document.getElementById("trafficLight");
    trafficLightImg.src = "./img/orange_light.png";
    lightState = 1;
}

function green() {
    let trafficLightImg = document.getElementById("trafficLight");
    trafficLightImg.src = "./img/green_light.png";
    lightState = 0;
}

function shutoff() {
    let trafficLightImg = document.getElementById("trafficLight");
    trafficLightImg.src = "./img/off_light.png";
    lightState = 3;
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

turnOff();
