var num1= Math.floor((Math.random()*6)+1);
var dice1 = "images/dice"+num1+".png";
document.querySelector(".img1").setAttribute("src",dice1);
var num2= Math.floor((Math.random()*6)+1);
var dice2 = "images/dice"+num2+".png";
document.querySelector(".img2").setAttribute("src",dice2);
if(num1>num2){
    document.querySelector("h1").textContent="Player 1 wins!";
} else
if(num1<num2){
    document.querySelector("h1").textContent="Player 2 wins!";
} else 
if(num1=num2){
    document.querySelector("h1").textContent="It's a Draw!";
}
