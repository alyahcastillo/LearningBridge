
// Stat Icons

// Function to handle the animation
function animateNumbers() {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = +valueDisplay.getAttribute("data-val");

    // Adjust the animation speed by changing the increment value
    let increment = 80;

    // Calculate the duration based on the adjusted increment
    let duration = Math.floor(interval / (endValue / increment));

    function updateDisplay() {
      startValue += increment;
      valueDisplay.textContent = startValue;

      if (startValue < endValue) {
        requestAnimationFrame(updateDisplay);
      }
    }

    updateDisplay();
  });
}

// Check if the section is in the viewport when the page is scrolled
function checkSectionVisibility() {
  let section = document.querySelector(".statistics"); // Replace with the actual ID of your section

  // Get the position of the section
  let sectionPosition = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 600) {
    // Section is visible, play the animation
    animateNumbers();

    // Remove the event listener to avoid redundant calls
    window.removeEventListener("scroll", checkSectionVisibility);
  }
}

// Attach an event listener to the scroll event
window.addEventListener("scroll", checkSectionVisibility);
