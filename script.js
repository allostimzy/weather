


let enterCity = document.getElementById("cName");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {

let cityName = document.getElementById('cityName');  //==append city name here
let temp = document.getElementById('temp'); //==append temperature in celcius here
let condition = document.getElementById('condition'); //==is it sunnny? cloudy? or rainy? add it here
let humidity = document.getElementById('humidity'); //==append humidity here
let windSpeed = document.getElementById('windSpeed'); //append windSpeed here, i just hope the wind do not take you to an unknown location (lol)
let pressure = document.getElementById('pressure');

// Clear old data before appending new ones
document.getElementById('cityName').textContent = '';
document.getElementById('temp').textContent = ''; 
document.getElementById('condition').textContent = ''; 
document.getElementById('humidity').textContent = ''; 
document.getElementById('windSpeed').textContent = ''; 
document.getElementById('pressure').textContent = '';
document.querySelector('.weatherIcon').innerHTML = '';



//lets fetch some data Tim (Javascript is sweet until you face a bug)
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${enterCity.value}&appid=66b3cc7995d5e0275a5da3ff0fb540df&units=metric`)
    .then(response => response.json())
    .then(data => {
    
        let callCityName = data.city.name
        let country = data.city.country
        let callTemp = data.list[0].main.temp
        let callTemperature = Math.round(parseInt(callTemp)) //round up decimal to integer and convert string to Number
        let callCondition = data.list[0].weather[0].description
        let callHumidity = data.list[0].main.humidity
        let callPressure = data.list[0].main.pressure
        let callWindSpeed = data.list[0].wind.speed
    
//Time to append them Tim
        cityName.append(`${callCityName}` + `  (${country})`)
        temp.append(`${callTemperature}`+ '°c')
        condition.append(callCondition)
        humidity.append(callHumidity)
        windSpeed.append(callWindSpeed)
        pressure.append(callPressure)

//Display my personalized icon--------------------

//This is an icon list for Drizzy and Rainy weather condition 
        if (callCondition === 'moderate rain' || callCondition === 'shower rain' || callCondition === 'drizzle' || callCondition === 'drizzle rain') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/rainy-5.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
        

        }else if (callCondition === 'light rain' || callCondition === 'light intensity shower rain' || callCondition === 'light intensity drizzle' || callCondition === 'light intensity drizzle rain') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/rainy-4.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
        

        }else if (callCondition === 'heavy intensity rain' || callCondition === 'heavy intensity shower rain' || callCondition === 'heavy intensity drizzle' || callCondition === 'shower drizzle') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/rainy-5.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
          

        }else if (callCondition === 'very heavy rain' || callCondition === 'heavy intensity drizzle rain' || callCondition === 'shower rain and drizzle') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/rainy-6.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
          

        }else if (callCondition === 'extreme rain' || callCondition === 'ragged shower rain' || callCondition === 'heavy shower rain and drizzle') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/rainy-7.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
        
        }else if (callCondition === 'freezing rain') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/snowy-4.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);

//cloudy weather conditions
        }else if (callCondition === 'few clouds' || callCondition === 'scattered clouds') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/cloudy-night-1.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);

        }else if (callCondition === 'broken clouds' || callCondition === 'overcast clouds') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
        }

//Clear weather 
          else if (callCondition === 'clear sky') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/night.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
      }
          
//Snowy weather condition
          else if (callCondition === 'light snow' || callCondition === 'Snow' || callCondition === 'Light shower sleet' || callCondition === 'Light rain and snow' || callCondition === 'Light shower snow') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/snowy-4.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
      }
          else if (callCondition === 'Sleet' || callCondition === 'Shower sleet' || callCondition === 'Shower snow' || callCondition === 'Rain and snow') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/snowy-5.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
      }
          else if (callCondition === 'Heavy snow' || callCondition === 'Heavy shower snow') {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/snowy-6.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
      }

//thunder weather condition
          else if (callCondition.includes('thunderstorm')) {
          var img = document.createElement("img");
          img.src = "./images/amcharts_weather_icons_1.0.0/animated/thunder.svg";

          var weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.appendChild(img);
      }
    })
   
})