// let show = document.getElementById("show");
// let search = document.getElementById("search");
// let cityVal = document.getElementById("city");

// //Make sure you have your own key.
// // let key = "2f745fa85d563da5adb87b6cd4b81caf";
// let key = "616af53e7813811fe7deb9c3303af79b";

// let getWeather = () => {
//   let cityValue = cityVal.value;
//   if (cityValue.length == 0) {
//     show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
//   }
//   else {
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
//     cityVal.value = "";
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         show.innerHTML = `
//         <h2>${data.name}, ${data.sys.country}</h2>
//         <h4 class="weather">${data.weather[0].main}</h4>
//         <h4 class="desc">${data.weather[0].description}</h4>
//         <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
//         <h1>${data.main.temp} &#176;</h1>
//         <div class="temp_container">
//          <div>
//             <h4 class="title">min</h4>
//             <h4 class="temp">${data.main.temp_min}&#176;</h4>
//          </div>
//          <div>
//             <h4 class="title">max</h4>
//             <h4 class="temp">${data.main.temp_max}&#176;</h4>
//          </div>   
//         </div>
//         `;
//       })
//       .catch(() => {
//         show.innerHTML = `<h3 class="error">City not found</h3>`;as
//       });
//   }
// };

// // Trigger search on button click
// search.addEventListener("click", getWeather);

// // Trigger search when Enter key is pressed
// cityVal.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     getWeather();
//   }
// });
// search.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);



// let show = document.getElementById("show");
// let search = document.getElementById("search");
// let cityVal = document.getElementById("city");

// let key = "616af53e7813811fe7deb9c3303af79b";

// let getWeather = () => {
//   let cityValue = cityVal.value.trim();

//   if (!cityValue) {
//     show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
//     return;
//   }

//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}&units=metric`;

//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       if (data.cod !== "200") {
//         throw new Error(data.message || "City not found");
//       }

//       const list = data.list;

//       // Get today's date (UTC)
//       const today = new Date().toISOString().split('T')[0];

//       // Filter forecasts for today only
//       const todayForecasts = list.filter(item => item.dt_txt.startsWith(today));

//       if (todayForecasts.length === 0) {
//         throw new Error("No forecast data for today");
//       }

//       // Find min and max from today’s entries
//       const temps = todayForecasts.map(item => item.main.temp);
//       const minTemp = Math.min(...temps);
//       const maxTemp = Math.max(...temps);

//       const current = todayForecasts[0]; // first entry of today

//       show.innerHTML = `
//         <h2>${data.city.name}, ${data.city.country}</h2>
//         <h4 class="weather">${current.weather[0].main}</h4>
//         <h4 class="desc">${current.weather[0].description}</h4>
//         <img src="https://openweathermap.org/img/wn/${current.weather[0].icon}.png">
//         <h1>${current.main.temp}&#176;C</h1>
//         <div class="temp_container">
//           <div>
//             <h4 class="title">min</h4>
//             <h4 class="temp">${minTemp.toFixed(1)}&#176;C</h4>
//           </div>
//           <div>
//             <h4 class="title">max</h4>
//             <h4 class="temp">${maxTemp.toFixed(1)}&#176;C</h4>
//           </div>
//         </div>
//       `;
//     })
//     .catch(err => {
//       show.innerHTML = `<h3 class="error">Error: ${err.message}</h3>`;
//     });

//   cityVal.value = "";
// };

// search.addEventListener("click", getWeather);
// cityVal.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") getWeather();
// });





// let show = document.getElementById("show");
// let search = document.getElementById("search");
// let cityVal = document.getElementById("city");

// let key = "616af53e7813811fe7deb9c3303af79b";

// let getWeather = () => {
//   let cityValue = cityVal.value.trim();

//   if (!cityValue) {
//     show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
//     return;
//   }

//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}&units=metric`;

//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       if (data.cod !== "200") {
//         throw new Error(data.message || "City not found");
//       }

//       const list = data.list.slice(0, 8);  // ✅ Next 24 hours = 8 intervals

//       const temps = list.map(item => item.main.temp);
//       const minTemp = Math.min(...temps);
//       const maxTemp = Math.max(...temps);

//       const current = list[0]; // current period

//       show.innerHTML = `
//         <h2>${data.city.name}, ${data.city.country}</h2>
//         <h4 class="weather">${current.weather[0].main}</h4>
//         <h4 class="desc">${current.weather[0].description}</h4>
//         <img src="https://openweathermap.org/img/wn/${current.weather[0].icon}.png">
//         <h1>${current.main.temp}&#176;C</h1>
//         <div class="temp_container">
//           <div>
//             <h4 class="title">Next 24h Min</h4>
//             <h4 class="temp">${minTemp.toFixed(1)}&#176;C</h4>
//           </div>
//           <div>
//             <h4 class="title">Next 24h Max</h4>
//             <h4 class="temp">${maxTemp.toFixed(1)}&#176;C</h4>
//           </div>
//         </div>
//       `;
//     })
//     .catch(err => {
//       show.innerHTML = `<h3 class="error">Error: ${err.message}</h3>`;
//     });

//   cityVal.value = "";
// };

// search.addEventListener("click", getWeather);
// cityVal.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") getWeather();
// });







// HTML should include: 
// - an input field with id="city"
// - a div with id="show"
// - a canvas with id="forecastChart" (for the chart)

let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");

let key = "616af53e7813811fe7deb9c3303af79b";

// Try loading last searched city
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    cityVal.value = lastCity;
    getWeather(lastCity);
  } else {
    // Try geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
          .then(res => res.json())
          .then(data => {
            cityVal.value = data.name;
            getWeather(data.name);
          });
      });
    }
  }
});

let getWeather = (cityName = null) => {
  let cityValue = cityName || cityVal.value.trim();
  if (!cityValue) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
    return;
  }

  // Save to localStorage
  localStorage.setItem("lastCity", cityValue);

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== "200") throw new Error(data.message);

      const list = data.list.slice(0, 8); // next 24 hours
      const temps = list.map(item => item.main.temp);
      const minTemp = Math.min(...temps);
      const maxTemp = Math.max(...temps);
      const current = list[0];

      show.innerHTML = `
        <h2>${data.city.name}, ${data.city.country}</h2>
        <h4 class="weather">${current.weather[0].main}</h4>
        <h4 class="desc">${current.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/wn/${current.weather[0].icon}.png">
        <h1>${current.main.temp}&#176;C</h1>
        <div class="temp_container">
          <div>
            <h4 class="title">Next 24h Min</h4>
            <h4 class="temp">${minTemp.toFixed(1)}&#176;C</h4>
          </div>
          <div>
            <h4 class="title">Next 24h Max</h4>
            <h4 class="temp">${maxTemp.toFixed(1)}&#176;C</h4>
          </div>
        </div>
        <canvas id="forecastChart" style="max-width: 100%;"></canvas>
      `;

      drawChart(data);
    })
    .catch(err => {
      show.innerHTML = `<h3 class="error">Error: ${err.message}</h3>`;
    });

  cityVal.value = "";
};

// Draw 7-day forecast using chart.js
function drawChart(data) {
  const chartCanvas = document.getElementById("forecastChart");
  const dailyTemps = {};

  data.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0];
    if (!dailyTemps[date]) dailyTemps[date] = [];
    dailyTemps[date].push(item.main.temp);
  });

  const labels = Object.keys(dailyTemps).slice(0, 7);
  const avgTemps = labels.map(date => {
    const t = dailyTemps[date];
    return (t.reduce((a, b) => a + b, 0) / t.length).toFixed(1);
  });

  // ✅ Fix: destroy only if valid Chart instance
  if (window.forecastChart instanceof Chart) {
    window.forecastChart.destroy();
  }

  // ✅ Now draw
  window.forecastChart = new Chart(chartCanvas, {
    type:  'line',
    data: {
      labels,
      datasets: [{
        label: '7-Day Avg Temp (°C)',
        data: avgTemps,
        backgroundColor: 'rgba(0,123,255,0.2)',
        borderColor: 'rgba(0,123,255,1)',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}


search.addEventListener("click", () => getWeather());
cityVal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeather();
});
