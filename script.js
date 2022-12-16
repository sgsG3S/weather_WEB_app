function myFunction(){
  let SP =document.querySelector("#locationP");
  let DP =document.querySelector("#locationD");
   cityName.innerHTML=SP.value;
   cityName1.innerHTML=DP.value;
//this is the api fetch for the weather data of present city
let options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6edb016a42msh5ab25eaaa89987dp1dbad0jsnbdfed63886ba",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  }
};
fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+SP.value,options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
  
//this is the api fetch for the weather data of Destination
let opt = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6edb016a42msh5ab25eaaa89987dp1dbad0jsnbdfed63886ba",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  }
};
fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+DP.value,opt)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct1.innerHTML = response.cloud_pct;
      temp1.innerHTML = response.temp;
      feels_like1.innerHTML = response.feels_like;
      humidity1.innerHTML = response.humidity;
      min_temp1.innerHTML = response.min_temp;
      max_temp1.innerHTML = response.max_temp;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees1.innerHTML = response.wind_degrees;
      sunrise1.innerHTML = response.sunrise;
      sunset1.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
  }

