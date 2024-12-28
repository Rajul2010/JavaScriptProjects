for(i=0;i<5;i++){

//Generating Random Color from the color palette - 16777215 represents white
let randomColor = "#"+ Math.floor(Math.random()*16777215).toString(16);
console.log("Font Color is "+ randomColor)


//Another way to generate random color
let value1 = Math.floor(Math.random()*255)
let value2 = Math.floor(Math.random()*255)
let value3 = Math.floor(Math.random()*255)
//let randomBackgroundColor = `rgb(${value1},${value2},${value3})` 
//or it can be written as
let randomBackgroundColor = "rgb(" + value1 +"," +value2 +"," +value3 +")"
console.log("BackgroundColor is " +randomBackgroundColor);


document.querySelectorAll(".box")[i].style.backgroundColor = randomBackgroundColor;
document.querySelectorAll(".box")[i].style.color = randomColor;
}