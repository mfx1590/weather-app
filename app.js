const appStorage = new AppStorage();

const weatherLocation = appStorage.getLocationData();



const weather = new Weather(weatherLocation.city , weatherLocation.country);


const ui =new UI();


document.addEventListener('DOMContentLoaded', getWeather);


document.getElementById('w-change-btn').addEventListener('click' , changeLocation);

function changeLocation() {
    const city = document.getElementById('city').value; 
    const country = document.getElementById('country').value; 

    weather.changeLocation(city, country); 
    appStorage.setLocationData(city, country); 

    getWeather(); 

    $('#locationModal').modal('hide'); 
}



function getWeather(){

    weather.getWeather()
        .then(result => {
            console.log(result);
            ui.paint(result);
        })
    .catch(err => console.log(err.message));
}

    // By Mehdi Farazi
    // Email:mehdifarazi9784@gmail.com 