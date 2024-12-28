//Simple Solution by me

let colors = ["red","blue","green","brown","black"]
let fcolors = ["white","yellow","orange","pink","aliceblue"]
let x = Math.floor((Math.random())*5);
let y = Math.floor((Math.random())*5);


for(i=0;i<5;i++){
let x = Math.floor((Math.random())*5);
let y = Math.floor((Math.random())*5);
document.querySelectorAll(".box")[i].style.backgroundColor = colors[x];
document.querySelectorAll(".box")[i].style.color = fcolors[y];
}