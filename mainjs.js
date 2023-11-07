window.addEventListener("load", function(){

    setTimeout(function (){
        document.querySelector(".popup").style.display = "block";
    }, 1500);
    
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    console.log("close");

});

var timeleft = 5;
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds before the game starts.";
    }
    timeleft -= 1;
}, 1000);

