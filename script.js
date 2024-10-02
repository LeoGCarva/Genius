var h1 = $("h1");
var btn = $(".btn");
var btnStart = $("button");

var btnColors = ["green", "red", "yellow", "blue"];
var order = [];
var playerOrder = [];
var level = 0;

btnStart.click(function(){
    h1.text(`Level ${level}`);
    nextSequence();
})

btn.click(function(){
    var userChosenColour = this.id;
    playerOrder.push(userChosenColour);
    
    animationPress(userChosenColour);
    checkAnswer(playerOrder.length - 1);
});

function nextSequence(){
    playerOrder = [];
    level++

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoose = btnColors[randomNumber];
    $("." + randomChoose).animate({opacity: 0.4}).delay(500).animate({opacity: 1});
    
    h1.text(`Level ${level}`);
    order.push(randomChoose);
}

function animationPress(currentColour){
    $("#" + currentColour).addClass("pressed_" + currentColour); setTimeout(function(){ $("#" + currentColour).removeClass("pressed_" + currentColour) }, 250);
}

function checkAnswer(currentLevel){
    if(order[currentLevel] === playerOrder[currentLevel]){
        if(playerOrder.length === order.length){ 
            setTimeout(function(){ nextSequence()}, 1000); 
        }
    } else {
        level = 0
        order = [];

        $("h1").addClass("game_over").text("Try Again!"); setTimeout(function(){ $("h1").removeClass("game_over")}, 200);
        $("body").addClass("game_over"); setTimeout(function(){ $("body").removeClass("game_over")}, 200);
    }
}