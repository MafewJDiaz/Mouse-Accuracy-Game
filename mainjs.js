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


const possible = document.querySelector(".possible");

function randomcircles() {
        const target = doucment.createElement("div");
        target.className = "target";
        const randomSize = Math.floor (Math.random() * 50)+25;
        const randomX = Math.floor(Math.random()*(possible.offsetWidth - randomSize));
        const randomY = Math.floor(Math.random()*(possible.offsetHeight - randomSize) );
       
        possible.appendChild(target);

        
            setTimeout ( () =>{
                target.style.transform = "scale(1)";
                target.style.opacity = 1;
        
            });

                setTimeout ( () => {
                    target.style.transform = "scale(0)"
                    target.style.opacity = 0;
                    target.addEventListener ("click", () => { 
                        possible.removeChild(target);
                });

                 },5000);
},5);

target.addEventListener("disappear",() => {
        possible.removeChild(target);
            } );
        
            const time = 30000;
            const targetduration = 2000;
            let gameTimer = setInterval(randomcircles, targetduration);


    