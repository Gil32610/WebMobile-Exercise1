const tempRecife = document.getElementById("tempRecife");
const velRecife = document.getElementById("velRecife");
const tempAmsterdam = document.getElementById("tempAmsterdam");
const velAmsterdam = document.getElementById("velAmsterdam");
const tempGuadalajara = document.getElementById("tempGuadalajara");
const velGuadalajara = document.getElementById("velGuadalajara");
const allTemp = [tempRecife, tempAmsterdam, tempGuadalajara];
const allVel = [velRecife, velAmsterdam, velGuadalajara];
const urls = [
  "https://api.open-meteo.com/v1/forecast?latitude=-8.0539&longitude=-34.8811&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=auto",
  "https://api.open-meteo.com/v1/forecast?latitude=52.374&longitude=4.8897&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=auto",
  "https://api.open-meteo.com/v1/forecast?latitude=20.6668&longitude=-103.3918&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=auto",
];

const exibirTempo = (current_weather, temp, windspeed) => {
  console.log(current_weather);
  var t = document.createTextNode(`${current_weather.temperature} C°`);
  var vel = document.createTextNode(`${current_weather.windspeed} km/h`);
  temp.appendChild(t);
  windspeed.appendChild(vel);
};

const fetchAPI = async () => {
  for (let i = 0; i < urls.length; i++) {
        const response = await fetch(urls[i]);
        const data = await response.json();
        const temp = data.current_weather.temperature;  
        exibirTempo(data.current_weather,allTemp[i],allVel[i]);
  }
};
fetchAPI();

