// alert("working");
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDice="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDice2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Won";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}