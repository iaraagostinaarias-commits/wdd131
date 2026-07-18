const temperature = 9;
const speed = 14.65;

document.querySelector("#temperature").textContent = `${temperature} °C`;
document.querySelector("#windSpeed").textContent = `${speed} km/h`;

function calculateWindChill(temp, windSpeed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * (windSpeed ** .16) + 0.3965 * temp * (windSpeed ** .16)
    );
}

const windChill = document.querySelector("#windChill");

if (temperature <= 10 && speed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, speed).toFixed(1)} °C`
}
else {
    windChill.textContent = "N/A";
}