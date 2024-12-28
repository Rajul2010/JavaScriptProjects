var colors=["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keydown(function(){
    if(!started){
        $("h1").text("Level 0");
        nextSequence();
        started = true;
        }
});

$("button").click(function(){
    var userColor  = $(this).attr("class");
    userClickedPattern.push(userColor);
    animateButton(userColor);
    makeSound(userColor);
    console.log("User pattern is "+ userClickedPattern);
    checkAnswer(userClickedPattern.length-1);
  
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
       if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }else{
        $("h1").text("Game Over");
        makeSound("wrong");
        $("body").addClass("wrong");

        setTimeout(function(){
            $("body").removeClass("wrong");},500   
        );

        setTimeout(function(){
            $("h1").text("Press Any Key to Start");
        startOver();},1000);
    }
    }

function startOver(){
    started=false;
    level=0;
    gamePattern=[];
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+ level);
  var randomNumber = Math.floor((Math.random()*4));
   var randomColor = colors[randomNumber];
    gamePattern.push(randomColor);
    animateButton(randomColor);
    makeSound(randomColor);
    console.log(gamePattern);
}


function makeSound(button){
    var sound = new Audio("sounds/" + button + ".mp3");
    sound.play();

}

function animateButton(button){
    $("."+ button).fadeOut(100).fadeIn(100);
    $("."+ button).addClass("pressed");
    setTimeout(function() {
        $("."+ button).removeClass("pressed");
    }, 100);
}




















// $(".green").on("click",function(){
//     
//     $(".green").addClass("pressed");
//     setTimeout(function(){$(".green").removeClass("pressed")},200);
//     });


//     $(".red").on("click",function(){
//         var red= new Audio('sounds/red.mp3');
//         red.play();}
//     );