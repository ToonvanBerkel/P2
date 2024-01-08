let lightState = 0;

function changeTrafficLight() {
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
