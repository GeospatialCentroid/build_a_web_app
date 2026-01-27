
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

function getAQHIMessage(aqhiValue, ranges) {
  for (const range of ranges) {
    if ( aqhiValue >= range.min &&
      (range.max === null || aqhiValue <= range.max)
    ) {
      return range.message;
    }
  }

  return "Invalid AQHI value.";
}

