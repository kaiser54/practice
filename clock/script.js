document.addEventListener("DOMContentLoaded", function() {
    // Get the clock face element
    const clockFace = document.getElementById("clockFace");
  
    // Define the number of seconds on the clock
    const numSeconds = 60;
  
    // Generate and append lines dynamically
    for (let i = 1; i <= numSeconds; i++) {
      // Create a line element
      const line = document.createElement("div");
      line.className = "hour-line";
  
      // Calculate the rotation angle for each line
      const angle = (i - 1) * (360 / numSeconds);
  
      // Apply rotation to the line
      line.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
  
      // Append the line to the clock face
      clockFace.appendChild(line);
    }
  
    // Update lines color based on seconds
    setInterval(() => {
      const lines = document.querySelectorAll('.hour-line');
      const currentSecond = new Date().getSeconds();
  
      lines.forEach((line, index) => {
        line.classList.toggle('active', index < currentSecond);
      });
    }, 1000);
  });
  