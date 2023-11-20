/* to set current time */
const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const mins = -60 * time.getMinutes();
app.style.setProperty('--_dm', `${mins}s`);
app.style.setProperty('--_dh', `${(hour + mins)}s`);




// Get the clock face element
const clockFace = document.querySelector(".clock-face");

// Define the number of seconds in a clock
const numSeconds = 60;

// Generate and apply styles dynamically
for (let i = 1; i <= numSeconds; i++) {
  // Calculate the degree for each second
  const degree = (i - 1) * 1;

  // Create a style element
  const style = document.createElement("style");

  // Set the CSS rules
  style.textContent = `
    .clock-face .second:nth-child(${i}) {
      --_d: ${degree}deg;
    }
  `;

  // Append the style element to the head
  document.head.appendChild(style);
}
