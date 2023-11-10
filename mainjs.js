window.addEventListener("load", function () {
  document.querySelector(".countdown").style.display = "none";
  setTimeout(function () {
      document.querySelector(".popup").style.display = "block";
  }, 1500);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".countdown").style.display = "block";
  startGame();
});

let clickCount = 0;
let circleClickCount = 0;
let animationCount = 0;

function startGame() {
  const countdown = document.getElementById('safeTimerDisplay');
  let sec = 3;
  const timer = setInterval(function () {
      countdown.innerHTML = sec;
      sec--;

      if (sec < -1) {
          clearInterval(timer);
          document.querySelector(".countdown").style.display = "none";
          createAndAnimateCircle();
      }
  }, 1000);
}

function createAndAnimateCircle() {
  if (animationCount < 15) {
    const circle = document.querySelector("#circle");
    circle.style.display = "block";
    circle.style.width = "0"; // Start from 0 width
    circle.style.height = "0"; // Start from 0 height
    circle.style.opacity = "1";

    const x = getRandomLocation(0, window.innerWidth - 400); // Ensure it fits within the window
    const y = getRandomLocation(0, window.innerHeight - 400); // Ensure it fits within the window
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    circle.addEventListener("click", function () {
      if (parseFloat(circle.style.width) > 0) {
        circleclickCount+;
        document.querySelector(".scorebar ul").innerHTML += "<li class='dot'></li>";
        document.querySelector(".circle").style.display= "none"; // Fully disappear when clicked
      }
    });

    const animationInterval = setInterval(function () {
      if (parseFloat(circle.style.width) < 400) {
        // Increase the width and height to 400
        circle.style.width = (parseFloat(circle.style.width) + 4) + "px";
        circle.style.height = (parseFloat(circle.style.height) + 4) + "px";
      } else {
        clearInterval(animationInterval);
        // After reaching 400, hide the circle
        circle.style.opacity = "0";

        setTimeout(function () {
          createAndAnimateCircle();
        }, 500);
      }
    }, 25);
  }
}




function getRandomLocation(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
