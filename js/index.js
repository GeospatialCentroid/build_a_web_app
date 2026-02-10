
document.addEventListener('DOMContentLoaded', () => {
// Select an element
const heading = document.querySelector("h1");
console.log(heading)
// Change its text
heading.textContent = "Interactive Research Page";

const button = document.querySelector("#toggle");
const abstract = document.querySelector("#abstract");

button.addEventListener("click", () => {
  abstract.hidden = !abstract.hidden;
});

const sections = document.querySelectorAll("section");

function highlightSection() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top < 200) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", highlightSection);


});

// A basic function
function greetUser(name) {
  return "Welcome, " + name;
}

const temperatureRanges = 
 [
    { "id": "extreme_cold_warning", "label": "Extreme Cold Warning", "metric": "wind_chill", "min": null, "max": -29, "severity": "danger", "color": "#3a4cc0", "message": "Dangerously cold wind chills. Frostbite possible in minutes." },
    { "id": "extreme_cold_watch", "label": "Extreme Cold Watch", "metric": "wind_chill", "min": -28, "max": -23, "severity": "warning", "color": "#5a6fdc", "message": "Potential for life-threatening cold conditions." },
    { "id": "cold_weather_advisory", "label": "Cold Weather Advisory", "metric": "wind_chill", "min": -22, "max": -15, "severity": "advisory", "color": "#8fa8ff", "message": "Cold wind chills. Use caution outdoors." },
    { "id": "heat_advisory", "label": "Heat Advisory", "metric": "heat_index", "min": 38, "max": 40, "severity": "advisory", "color": "#f9c74f", "message": "Heat-related illnesses possible with prolonged exposure." },
    { "id": "excessive_heat_watch", "label": "Excessive Heat Watch", "metric": "heat_index", "min": 41, "max": 43, "severity": "warning", "color": "#f9844a", "message": "Conditions favorable for dangerous heat." },
    { "id": "excessive_heat_warning", "label": "Excessive Heat Warning", "metric": "heat_index", "min": 44, "max": null, "severity": "danger", "color": "#d62828", "message": "Extreme heat. High risk of heat-related illness or death." }
    ];

function getAlertMessage(temperatureValue, ranges) {
  for (const range of ranges) {
   if (
      (range.min === null || temperatureValue >= range.min) &&
      (range.max === null || temperatureValue <= range.max)
    )  {
      return range.message;
    }
  }
}
  console.log(getAlertMessage(10, temperatureRanges) );

