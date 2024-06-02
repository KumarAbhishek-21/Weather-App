
const apikey = "aeac120974175dcb09c34fafb740a74a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather app images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather app images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather app images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather app images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather app images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})


