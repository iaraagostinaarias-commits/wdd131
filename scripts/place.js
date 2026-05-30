const temp = 8;
const speed = 6;

document.querySelector("#temperature").textContent = `${temp} °C`;
document.querySelector("#windSpeed").textContent = `${speed} km/h`;

function calculateWindChill(temp, speed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * (speed ** .16) + 0.3965 * temp * (speed ** .16)
    );
}

const windChill = document.querySelector("#windChill");

if (temp <= 10 && speed > 4.8) {
    windChill.textContent = `${calculateWindChill(temp, speed).toFixed(1)} °C`;
}
else {
    windChill.textContent = "N/A";
}
