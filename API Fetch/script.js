const temperatura = document.getElementsByClassName("temperatura");

const exibirTemperatura = (data)=>{
    const paragraph = document.createElement("p");
    const celsius = document.createTextNode(`${data.current_weather}`);

}

const fetchAPI = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.current_weather);
    exibirTemperatura(data);
}

fetchAPI("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true");