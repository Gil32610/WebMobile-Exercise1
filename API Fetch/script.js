const tempRecife = document.getElementById("tempRecife");
const tempAmsterdam = document.getElementById("tempAmsterdam");
const tempGuadalajara = document.getElementById("tempGuadalajara");
const exibirTemperatura = (data) => {
    var temperature = data.temperature;
    console.log(temperature);
    var text = document.createTextNode(`${data.temperature} C°`);
  tempRecife.appendChild(text);
  
};

const fetchAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  exibirTemperatura(data.current_weather);
};

fetchAPI(
  "https://api.open-meteo.com/v1/forecast?latitude=-8.0539&longitude=-34.8811&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=auto"
);

const urls = [
  "https://api.open-meteo.com/v1/forecast?latitude=-8.0539&longitude=-34.8811&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=auto",
  "https://api.open-meteo.com/v1/forecast?latitude=52.374&longitude=4.8897&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=auto",
  ,
  "https://api.open-meteo.com/v1/forecast?latitude=20.6668&longitude=-103.3918&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=auto",
];
