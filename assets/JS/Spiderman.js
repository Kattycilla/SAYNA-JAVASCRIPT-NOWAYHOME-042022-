// let btninverse = document.getElementsByClassName('btninverse');

// for(let i=0;i<btninverse-length;i++){
//     btninverse[i].addEventListener('mouseover',()=>{
//         btninverse[i].style.backgroundcolor ='#b11313';
//         btninverse[i].style.color='white';
//         btninverse[i].style.fontweight='bold'

//     });

var btn1= document.getElementsById('button1');
var btn2= document.getElementsById('button2');
var btn3= document.getElementsById('button3');
var btn4= document.getElementsById('button4');
var btn5= document.getElementsById('button5');
var btn6= document.getElementsById('button6');
var btn7= document.getElementsById('button7');

function myOverbtn1(){
    btn1.style.backgroundcolor='rgba(0,0,0,0)';
    btn1.style.border='solid 2px white';
    btn1.style.color='#fff';
    btn2.style.fontWeight='bold';
}
function myleavebtn1(){
    btn1.style.backgroundcolor='#fff';
    btn1.style.color='#b11313';
}
alert('bonjour');