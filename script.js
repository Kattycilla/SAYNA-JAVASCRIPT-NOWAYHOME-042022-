let btninverse = document.getElementsByClassName('btninverse');

for(let i=0;i<btninverse.length;i++){
    btninverse[i].addEventListener('mouseover',()=>{
        btninverse[i].style.backgroundColor ='#b11313';
        btninverse[i].style.color='white';
        btninverse[i].style.fontWeight='bold'

    });
    btninverse[i].addEventListener('mouseout',()=>{
        btninverse[i].style.backgroundColor ='white';
        btninverse[i].style.color='#b11313';
        btninverse[i].style.fontWeight='';

    });
}
 let footericones= document.getElementsByClassName('footer-icones');

 for(let i=0;i<footericones.length;i++){
    footericones[i].addEventListener('mouseover',()=>{
       
        footericones[i].style.color='white';
       
    });
    footericones[i].addEventListener('mouseout',()=>{
       
        footericones[i].style.color='#b11313';
       
    });
}

let menu = document.querySelectorAll('li');

for(let i = 0; i<menu.length; i++){
    menu[i].addEventListener("mouseover", ()=>{
        menu[i].style.textDecoration = "line-through";
    })
    menu[i].addEventListener("mouseout", ()=>{
        menu[i].style.textDecoration = "";
    })
}


$("button").ready(function(){
    $(".box").animate({
        left: "50px",
    });
    $(".description").fadeIn(5000);
  });

  //bonus timer
  // Set the date we're counting down to
var countDownDate = new Date("May 7, 2022 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// HEROS
$( ".entourage3-img" ).hover(function() {
    $( this ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
    
    });
  });