let lightState = 0;

function changeTrafficLight() {
    let trafficLightImg = document.getElementById("trafficLight");

    if (lightState === 0) {
        trafficLightImg.src = "./img/orange_light.jpg";
        lightState = 1;
    } else if (lightState === 1) {
        trafficLightImg.src = "./img/red_light.jpg";
        lightState = 2;
    } else if (lightState === 2) {
        trafficLightImg.src = "./img/green_light.jpg";
        lightState = 0;
    } else {
    }
}