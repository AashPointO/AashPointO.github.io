// reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
// Obviously call updateWeather first before calling any other function

var weather;

function updateWeather() {
	fetch("https://api.weather.gov/gridpoints/STO/31,67/forecast/hourly").then((response) => {
		return response.json();
	}).then((data) => {
		weather = data;
	        console.log(data);
	});
}

function getTemp() {
	try {
		return weather.properties.periods[0].temperature;
	} catch (err) {
		return 0;
	}
}

function getIsDayTime() {
	try { 
		return weather.properties.periods[0].isDaytime;
	} catch (err) {
		return true;
	}

}

function getWindDirection() {
	try { 
		return weather.properties.periods[0].windDirection;
	} catch (err) {
		return "";
	}
}

function getWindSpeed() {
	try {
		return weather.properties.periods[0].windSpeed;
	} catch (err) {
		return "";
	}
}

function getShortForecast() {
	try {
		return weather.properties.periods[0].shortForecast;
	} catch (err) {
		return "";
	}
}
