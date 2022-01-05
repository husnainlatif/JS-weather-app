// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const Api = {
    key: '319f7ea74dc1e957c17ce93950785624',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

const input = document.getElementById('input');
input.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        console.log(input.value);
        getWeather(input.value)
    }
})

function getWeather(city) {
    fetch(`${Api.baseUrl}?q=${city}&appid=${Api.key}&units=metric`)
    .then(weather => {
        return weather.json(); 
    }).then(showWeather);
}

function showWeather(weather) {
    console.log(weather);

    let city = document.getElementById('city')
    city.innerText = `${weather.name}, ${weather.sys.country}`
    
    let temperature = document.getElementById('temperature')
    temperature.innerHTML = `${Math.round(weather.main.temp)}℃`;

    let minmax = document.getElementById('min-max')
    minmax.innerText = `${Math.floor(weather.main.temp_min)}℃(min) / ${Math.ceil(weather.main.temp_max)}℃(max)` 

    let condition = document.getElementById('condition')
    condition.innerText = `${weather.weather[0].main}`

    let date = document.getElementById('date')
    let newDate = new Date()
    date.innerText = dateManage(newDate)
}

function dateManage(dateArg) {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG",
    "SEP", "OCT", "NOV", "DEC"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();

    return `${date} ${month} ${year}`;
}
