// A simple variable
let projectTitle = "Weather Data Explorer";

// Logging output
console.log(projectTitle);

// Select an element
document.addEventListener('DOMContentLoaded', () => {
    // Select an element
    const heading = document.querySelector("h1");
    console.log(heading)
    // Change its text
    heading.textContent = projectTitle;



const buttons = document.querySelectorAll('.tab-button');
  const panels = document.querySelectorAll('.tab-panel');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      // Update button states
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      // Update panel visibility
      panels.forEach(panel => {
        panel.classList.toggle(
          'active',
          panel.id === target
        );
      });
    });
  });
    

});


navigator.geolocation.getCurrentPosition(position => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  get_weather_forcast(lat,lon)
    .then(data => {
    update_forcast(data);
    }              
  )
});

async function get_weather_forcast(lat, lon) {
  console.log("Fetching forecast for:", lat, lon);
  const pointsRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  const pointsData = await pointsRes.json();

  const forecastRes = await fetch(pointsData.properties.forecast);
  return await forecastRes.json();
}

update_forcast = function(_forecastData){
    console.log(_forecastData)
    const tbody = document.querySelector('#forecast tbody');
    tbody.innerHTML = ""; // Clear existing rows  
_forecastData.properties.periods.forEach(period => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${period.name}</td>
    <td>${period.temperature}°F</td>
    <td>${period.shortForecast}</td>
  `;

  tbody.appendChild(row);
  
});
} 