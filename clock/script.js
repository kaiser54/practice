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
      const CurrentHour = new Date().getHours();
      const CurrentMinutes = new Date().getMinutes();
      const period = CurrentHour >= 12 ? 'PM' : 'AM';

      document.getElementById("time").innerText = CurrentHour + ':' + (CurrentMinutes < 10 ? '0' : '') + CurrentMinutes;
      document.getElementById("period").innerText = currentSecond
      document.getElementById("moment").innerText = period

      var dayOfWeek = new Date().toLocaleString('en', { weekday: 'short' });
      var month = new Date().toLocaleString('en', { month: 'short' });
      var day = new Date().getDate();
      var year = new Date().getFullYear();

      document.getElementById("date").innerText = dayOfWeek + "-" + month + "-" + year

      lines.forEach((line, index) => {
        line.classList.toggle('active', index < currentSecond);
      });
    }, 1000);
  });
  
