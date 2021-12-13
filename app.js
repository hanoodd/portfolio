var balls = document.getElementsByClassName("ball");

// event.clientX/Y gets the horizontal/vertical coordinate of the onmousemove
// window.innerWidth/Height gets the browser width/height
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%" ;
  var y = event.clientY * 100 / window.innerHeight + "%" ;

// Movement of eyeballs
  for(var i=0;i<2;i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

var amogus = document.getElementById("amogus");
var brain = document.getElementById("brain");
var imposter = document.getElementById("imposter");

// Makes the brain visible, plays a sound effect, and changes the background when div is hovered over
brain.addEventListener("mouseover", () => {
  document.getElementById("brainImg").style.visibility="visible";
  amogus.play();
  document.body.classList.add("replacedBodyBackground");
});

brain.addEventListener("mouseout", () => {
  document.getElementById("brainImg").style.visibility="hidden";
  amogus.pause();
  amogus.currentTime = 0;
  document.body.classList.remove("replacedBodyBackground");
});

// Intro screen onclick event to activate CSS Animation
intro.addEventListener('click', () => {
  // intro.style.display = "none";
  document.getElementById('intro').style.animationName ="goAway";
});
