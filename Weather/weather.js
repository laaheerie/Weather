var locationInput = document.getElementById('location');
var getWeatherButton = document.getElementById('getWeather');
var weatherDiv = document.getElementById('weather');

getWeatherButton.addEventListener('click', function() 
{
	var location = locationInput.value;
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=YOUR_API_KEY')
		.then(function(response) 
		{
			return response.json();
		})
		.then(function(data))
		 {
			var weather = {
				conditions: data.weather[0].description,
				temperature: data.main.temp,
			}
		 }
}
		);