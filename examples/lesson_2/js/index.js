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