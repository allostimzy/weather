


let enterCity = document.getElementById("cName");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {

let cityName = document.getElementById('cityName');  //==append city name here
let temp = document.getElementById('temp'); //==append temperature in celcius here
let condition = document.getElementById('condition'); //==is it sunnny? cloudy? or rainy? add it here
let humidity = document.getElementById('humidity'); //==append humidity here
let windSpeed = document.getElementById('windSpeed'); //append windSpeed here, i just hope the wind do not take you to an unknown location (lol)


// Clear old data before appending new ones
document.getElementById('pressure').textContent = '';
document.getElementById('cityName').textContent = '';
document.getElementById('temp').textContent = ''; 
document.getElementById('condition').textContent = ''; 
document.getElementById('humidity').textContent = ''; 
document.getElementById('windSpeed').textContent = ''; 
document.getElementById('pressure').textContent = '';


fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${enterCity.value}&appid=66b3cc7995d5e0275a5da3ff0fb540df&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })



})