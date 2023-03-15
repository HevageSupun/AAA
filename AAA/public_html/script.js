/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
let resultvalue;
let searchButton = document.getElementById("search-button");

function searchWeather() {
			const city = document.getElementById('city').value;
			const data = {"List":[{"CityCode":"1248991","CityName":"Colombo","Temp":"33.0","Status":"Clouds"},
				{"CityCode":"1850147","CityName":"Tokyo","Temp":"8.6","Status":"Clear"},
				{"CityCode":"2644210","CityName":"Liverpool","Temp":"16.5","Status":"Rain"},
				{"CityCode":"2988507","CityName":"Paris","Temp":"22.4","Status":"Clear"},
				{"CityCode":"2147714","CityName":"Sydney","Temp":"27.3","Status":"Rain"},
				{"CityCode":"4930956","CityName":"Boston","Temp":"4.2","Status":"Mist"},
				{"CityCode":"1796236","CityName":"Shanghai","Temp":"10.1","Status":"Clouds"},
				{"CityCode":"3143244","CityName":"Oslo","Temp":"-3.9","Status":"Clear"}]};
			const result = data.List.find((item) => item.CityName.toLowerCase() === city.toLowerCase());

			if (result) {
				const resultFrame = document.getElementById('resultFrame');
				resultFrame.src = "weather.html?CityCode=" + result.CityCode + "&CityName=" + result.CityName + "&Temp=" + result.Temp + "&Status=" + result.Status;
                                resultvalue = result;
                                document.getElementById("result-button").addEventListener("click", function() {
  // Open the result in a new window
  const width = 500;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const windowOptions = `width=${width},height=${height},left=${left},top=${top}`;
  window.open(document.getElementById("resultFrame").src, "resultWindow", windowOptions);
  
  // Hide the result div
  //document.getElementById("result").style.display = "none";
});
                                
			} else {
				alert('City not found.');
			}
		}
                
                


const iframe = document.querySelector('resultFrame');

// Add an onclick event listener to the iframe
iframe.addEventListener('click', () => {
  // Open a new window with the specified URL and window features
    // Open the result in a new window
  const width = 500;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const windowOptions = `width=${width},height=${height},left=${left},top=${top}`;
  window.open(document.getElementById("resultFrame").src, "resultWindow", windowOptions);
});
