var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red","blue","green","yellow"];

var levelCounter = 1;
var i = 0;

//pataei kai arxizei to paixnidi
$(document).keypress(function mainGame(){
    $("h1").text("Level "+ (levelCounter));
    nextSequence();
});
//button animation
function buttonAnimation (nameOfColor){
    $("." + nameOfColor).animate({"opacity":0},50);
    $("." + nameOfColor).animate({"opacity":1},50);
};
//gives a random number 0-3 and returns a random color
function nextSequence(){
    setTimeout(function (){     
    var newRandomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[newRandomNumber];
    soundCheck(randomChosenColour);
    buttonAnimation(randomChosenColour);
    gamePattern.push(randomChosenColour);
    }, (750)); // delay time before it goes
};
//sound player
function soundCheck(typeOfSound){
    switch (typeOfSound) {
        case "red":
                var redSound = new Audio('./sounds/red.mp3');
                redSound.play();
            break;
        
        case "blue":
                var blueSound = new Audio('./sounds/blue.mp3');
                blueSound.play();
            break;
    
        case "green":
                var greenSound = new Audio('./sounds/green.mp3');
                greenSound.play();
            break;
    
        case "yellow":
                var yellowSound = new Audio('./sounds/yellow.mp3');
                yellowSound.play();
            break;
        case "wrong":
                var wrongSound = new Audio('./sounds/wrong.mp3');
                wrongSound.play();
            break;
        default:
            console.log("wtf is going on");
            break;
}};
//user clicks - choses color
$(".btn").click(function handler(event){
    var userChosenColor;
    if ($(event.currentTarget).hasClass("red")){
        userChosenColor = ("red")
    } else if ($(event.currentTarget).hasClass("blue")){
        userChosenColor = ("blue")
    }else if ($(event.currentTarget).hasClass("green")){
        userChosenColor = ("green")
    }else if ($(event.currentTarget).hasClass("yellow")){
        userChosenColor = ("yellow")
    };
    userClickedPattern.push(userChosenColor);
    // checker - logic

    if (gamePattern[i] === userClickedPattern[i]){
        soundCheck(userChosenColor);
        buttonAnimation(userChosenColor);
        i++;
        if (userClickedPattern.length === levelCounter){
            userClickedPattern = [];
            levelCounter++;
            setTimeout(function (){
            $("h1").text("Level "+ levelCounter);},500);
            nextSequence();
            i =0;
        }
    } else {  //lathos apanthsh + reset
        soundCheck("wrong");
        levelCounter = 1;
        $("body").addClass("game-over");
        $("h1").text("GAME OVER. Press Any Key To Start Again.")
        $(document).keypress(function (){
        $("body").removeClass("game-over");
        $("h1").text("Level "+ (levelCounter));
        gamePattern = [];
        userClickedPattern = [];
        
        })}
    
});




