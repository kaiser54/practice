document.addEventListener("DOMContentLoaded", function () {
  const clockFace = document.getElementById("clockFace");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");

  const numSeconds = 60;
  const beepSound = "stop.mp3";

  let audio;
  let audioInterval;
  let lastSecond = -1;

  // Generate and append lines dynamically
  for (let i = 1; i <= numSeconds; i++) {
    const line = document.createElement("div");
    line.className = "hour-line";
    const angle = (i - 1) * (360 / numSeconds);
    line.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
    clockFace.appendChild(line);
  }

  // Event listeners for play and pause buttons
  playButton.addEventListener("click", playBeep);
  pauseButton.addEventListener("click", pauseBeep);

  function playBeep() {
    audio = new Audio(beepSound);
    audio.play();
    playButton.style.display = "none";
    pauseButton.style.display = "flex";

    audioInterval = setInterval(function () {
      var currentSecond = new Date().getSeconds();
      if (currentSecond !== lastSecond) {
        audio.play();
        lastSecond = currentSecond;
      }
    }, 1000);
  }

  function pauseBeep() {
    if (audio) {
      audio.pause();
      clearInterval(audioInterval);
      pauseButton.style.display = "none";
      playButton.style.display = "flex";
    }
  }

  
  // Play the sound by default
  playBeep();

  setInterval(() => {
    const lines = document.querySelectorAll(".hour-line");
    const currentSecond = new Date().getSeconds();
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const period = currentHour >= 12 ? "PM" : "AM";

    document.getElementById("time").innerText =
      currentHour + ":" + (currentMinutes < 10 ? "0" : "") + currentMinutes;
    document.getElementById("period").innerText = currentSecond;
    document.getElementById("moment").innerText = period;

    const dayOfWeek = new Date().toLocaleString("en", { weekday: "short" });
    const month = new Date().toLocaleString("en", { month: "short" });
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    document.getElementById("date").innerText =
      dayOfWeek + "-" + month + "-" + year;

    lines.forEach((line, index) => {
      line.classList.toggle("active", index < currentSecond);
    });
  }, 1000);
});
