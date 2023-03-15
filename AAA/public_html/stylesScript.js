/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

      const time = new Date().getHours();

      // Get the current weather (fake for demo purposes)
      const weather = "sunny"; // Change this to "cloudy" or "rainy" for different effects

      // Update the main section's class to reflect the current weather and time
      const mainEl = document.getElementById("main");

      if (weather === "sunny") {
        mainEl.classList.add("weather-sunny");
        
      } 
      else if (weather === "cloudy") {
        mainEl.classList.add("weather-cloudy");
      } 
      else if (weather === "rainy") {
        mainEl.classList.add("weather-rainy");
      };

      if (time >= 5 && time < 12) {
        mainEl.classList.add("time-morning");
      } else if (time >= 12 && time < 18) {
        mainEl.classList.add("time-afternoon");
      } else if (time >= 18 && time < 22) {
        mainEl.classList.add("time-evening");
      } else {
        mainEl.classList.add("time-night");
      };
      
