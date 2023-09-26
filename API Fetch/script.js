const exibirTemperatura = (data)=>{

}

const fetchAPI = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

fetchAPI("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true");