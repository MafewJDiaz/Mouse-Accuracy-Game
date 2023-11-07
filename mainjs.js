window.addEventListener("load", function(){

    setTimeout(function (){
        document.querySelector(".popup").style.display = "block";
    }, 1500);
    
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    console.log("close");

});



    var timeleft = 30;
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " until the game ends";
    }
    timeleft -= 1;
}, 1000);

document.getElementById("circle").onclick = function() {
    document.getElementById("circle").style.display ="none";
}
