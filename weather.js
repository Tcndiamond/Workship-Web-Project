const weatherData={
  "Gauteng":{temp: "22\u00B0C", conditon:"Sunny"},
  "Limpopo":{temp: "26\u00B0C", condition:"Cloudy"},
  "CapeTown":{temp: "18\u00B0C", condition:"Rainy"},
  "Lesotho":{temp: "20\u00B0C", condition:"Clear"}
  
  };
  
  const weatherIcons={
      "sunny":"☀",
      "clear":"☁",
      "cloudy":"🌥",
      "windy":"🌫",
      "stormy":"🌩",
  };
  
  function getWeather() {
    const city = document.getElementById('cityInput').value.trim().toLowerCase();
    const infoDiv = document.getElementById('weatherInfo');
  
    if (city === "") {
      infoDiv.innerHTML = "<p>Please enter a city name.</p>";
      return;
    }
  
    let weather;
    if (weatherData[city]) {
      weather = weatherData[city];
    } else {
      // Generate random weather data if city not found
      const conditions = ["sunny", "cloudy", "rainy", "windy", "stormy"];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const randomTemp = Math.floor(Math.random() * 15 + 15) + "°C";
  
      weather = {
        temp: randomTemp,
        condition: randomCondition.charAt(0).toUpperCase() + randomCondition.slice(1)
      };
    }
  
    // Get icon based on condition
    let iconKey = weather.condition.toLowerCase();
    let icon = weatherIcons[iconKey] || "";
    
    infoDiv.innerHTML = `
      <p style="font-size:2rem;">${icon}</p>
      <p>Temperature: ${weather.temp}</p>
      <p>Condition: ${weather.condition}</p>
      <p>(Simulated Data for ${city.charAt(0).toUpperCase() + city.slice(1)})</p>
    `;
  }
  