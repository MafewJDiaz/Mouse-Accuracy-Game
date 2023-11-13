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
const circle = document.querySelector("#circle");
let clickCount = 0;
let circleClickCount = 0;
let animationCount = 0;
circle.addEventListener("click", function () {
  if (parseFloat(circle.style.width) > 0) {
    circleClickCount++;
    console.log("clicked!");
    document.querySelector(".scorebar ul").innerHTML += "<li class='dot'></li>";
    document.querySelector(".circle").style.display = "none"; // Fully disappear when clicked
    setTimeout(function () {
      createAndAnimateCircle();
    }, 500);
  }
});
function startGame() {
  const countdown = document.getElementById('safeTimerDisplay');
  let sec = 3;
  const timer = setInterval(function () {
    countdown.innerHTML = sec;
    sec--;

    if (sec < -1) {
      clearInterval(timer);
      document.querySelector(".countdown").style.display = "none";
      console.log("cleared timer");
      createAndAnimateCircle();
    }
  }, 1000);
}
function createAndAnimateCircle() {
  if (animationCount < 15) {
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
        circleClickCount ++;
        document.querySelector(".scorebar ul").innerHTML += "<li class='dot'></li>";
        document.querySelector(".circle").style.display = "none"; // Fully disappear when clicked
      }
    });

    const animationInterval = setInterval(function () {
      const currentDiameter = parseFloat(circle.style.width) * 2;
      if (currentDiameter < 200) {
        // Increase the width and height to 400
        circle.style.width = (parseFloat(circle.style.width) + 2) + "px";
        circle.style.height = (parseFloat(circle.style.height) + 2) + "px";
      } else {
        clearInterval(animationInterval);
        // After reaching 200px diameter, start shrinking
        shrinkCircle();
      }
    }, 50); // Adjusted interval to make it slower
  }
}
function shrinkCircle() {
  const shrinkInterval = setInterval(function () {
    const currentDiameter = parseFloat(circle.style.width) * 2;
    if (currentDiameter > 0) {
      // Shrink the width and height
      circle.style.width = (parseFloat(circle.style.width) - 2) + "px";
      circle.style.height = (parseFloat(circle.style.height) - 2) + "px";
    } else {
      clearInterval(shrinkInterval);
      // After shrinking to 0, reset and create a new circle
      createAndAnimateCircle();
    }
  }, 50); // Adjusted interval to make it slower
}
function getRandomLocation(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
