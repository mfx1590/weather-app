class UI{
     constructor(){
        this.location = document.getElementById("w-location");
        this.main = document.getElementById("w-main");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("w-temp");
        this.temp_min = document.getElementById("w-temp_min");
        this.temp_max = document.getElementById("w-temp_max");
        this.pressure = document.getElementById("w-pressure");
        this.humidity = document.getElementById("w-humidity");
        this.wind_speed = document.getElementById("w-wind_speed");
        this.lon = document.getElementById("w-lon");
        this.lat = document.getElementById("w-lat");
     }
     paint(weather) {

        this.location.textContent = `${weather.name}, ${weather.sys.country}`; 
        this.main.textContent = weather.weather[0].main;  
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);  
        this.temp.textContent = `${(weather.main.temp - 273.15).toFixed(2)} °C`; 
        this.temp_min.textContent = `Lowest: ${(weather.main.temp_min - 273.15).toFixed(2)} °C`;  
        this.temp_max.textContent = `Highest: ${(weather.main.temp_max - 273.15).toFixed(2)} °C`; 
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;  
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`; 
        this.wind_speed.textContent = `Wind Speed: ${weather.wind.speed} m/s`; 
        this.lon.textContent = `Longitude: ${weather.coord.lon}`;  
        this.lat.textContent = `Latitude: ${weather.coord.lat}`;  
    }
}

   // By Mehdi Farazi
   // Email:mehdifarazi9784@gmail.com 