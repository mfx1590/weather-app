class Weather { 
    constructor(city , country){
        this.apikey='2644a690820ca23530a9278d5a8df7c8'
        this.city = city,
        this.country = country
    }


    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}`);
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw Error(response.status);
        }
    }


    changeLocation(city,country){
        this.city=city ,
        this.country=country
    }

}
    // By Mehdi Farazi
    // Email:mehdifarazi9784@gmail.com 