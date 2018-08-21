// various ops objects MAYBE USE THE ARGUMENT PART OF THE FUNCTION TO PASS THE OBJECT INTO IT
var ash = {
    ashHp: 95,
    ashAtk: 9,
    ashCntAtk: 6,
};

var thermite = {
    thermHp: 120,
    thermAtk: 6,
    thermCntAtk: 6,
};

var dokkaebi = {
    dokkHp: 115,
    dokkAtk: 7,
    dokkCntAtk: 4,
};

var jager = {
    jagerHp: 100,
    jagerAtk: 8,
    jagerCntAtk: 6,
};

var smoke = {
    smokeHp: 110,
    smokeAtk: 6,
    smokeCntAtk: 9,
};

var rook = {
    rookHp: 140,
    rookAtk: 6,
    rookCntAtk: 6,
};

var tachanka = {
    lordHp: 1000,
    lordAtk: 25,
};
// informs the attack button whether or not the ops have been choosen
// attack total counter is here
// and a counter of kills so the game knows when the player has won
var playerChosen = false;
var opostionChosen = false;
var attackTotalCounter = 0;
var killCounter = 0;
// because i call the images to different html sections through out the app i thought it would be easier to store them as strings
// in an array and then just call the index that i needed
var imgArray = ["<img src='./assests/R6RPG_images/ash.jpg' heigth = 150px width = 150px>", 
    "<img src='./assests/R6RPG_images/thermite.png' height = 150px width = 150px>",
    "<img src='./assests/R6RPG_images/Dokka_bea.png' height = 150px width = 150px>",
    "<img src='./assests/R6RPG_images/vape_lord.jpg' height = 150px width = 150px>",
    "<img src='./assests/R6RPG_images/Jager.png' height = 150px width = 150px>",
    "<img src='./assests/R6RPG_images/destroyer_of_buffets.jpg' height = 150px width = 150px>",
    "<img src='./assests/R6RPG_images/god_Himself.png' height = 150px width = 150px>"]
// each character button will push itself into the chosen character of the arena and call the correct 3 opposing operators for 
// the user to choose who to challenge in the arena/ should i then grab the player object?
$("#ashButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[0]);
    var playerOp = ash;
    attackOpChosen();
});

$("#thermButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[1]);
    var playerOp = thermite;
    attackOpChosen();
});

$("#dokkButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[2]);
    var playerOp = dokkaebi
    attackOpChosen();
});

$("#smokeButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[3]);
    var playerOp = smoke;
    defenderOpChosen();
});

$("#jagerButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[4]);
    var playerOp = jager;
    defenderOpChosen();
});

$("#rookButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[5]);
    var playerOp = rook;
    defenderOpChosen();
});

$("#memeButton").click(function(){
    alert("You have choosen our lord and savior, Tachanka");
    playerChosen = true;
    $("#playerCharacter").html(imgArray[6]);
    var playerOp = tachanka;
    defenderOpChosen();
});
// will call if you choose a orange attacker as your character
// will place the images of defender operators in the hidden buttons and returns its opacity to visible
function attackOpChosen(){
    $("#opsButtonRow").css("opacity", "0");
    $("#godModeRow").css("opacity", "0")
    $("#hiddenOpponentButtonOne").html(imgArray[3]);
    $("#hiddenOpponentButtonTwo").html(imgArray[4]);
    $("#hiddenOpponentButtonThree").html(imgArray[5]);
    $(".hiddenOpButtons").css("opacity", "1");
// when the player decides on a opponent to place on the arena it will move that image to the arena and makes the button return opacity to invisible
// should only run if opositionChosen is set to false not working that way
    if(!opostionChosen){
        $("#hiddenOpponentButtonOne").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[3]);
            $("#hiddenOpponentButtonOne").css("opacity", "0");
            var opponentOp = smoke;
        });

        $("#hiddenOpponentButtonTwo").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[4]);
            $("#hiddenOpponentButtonTwo").css("opacity", "0");
            var opponentOp = jager;
        });

        $("#hiddenOpponentButtonThree").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[5]);
            $("#hiddenOpponentButtonThree").css("opacity", "0");
            var opponentOp = rook;
        });
    } else if (opostionChosen) {
        alert("You must fight your choosen opponent first!");
    };
};
// maybe have something like a defender/attackopchosen = true; and then inform form there to DRY out the code?
// will call if you choose a blue defender as your character
// will place the images of attack operators in the hidden buttons and returns its opacity to visible
function defenderOpChosen(){
    $("#opsButtonRow").css("opacity", "0");
    $("#godModeRow").css("opacity", "0")
    $("#hiddenOpponentButtonOne").html(imgArray[0]);
    $("#hiddenOpponentButtonTwo").html(imgArray[1]);
    $("#hiddenOpponentButtonThree").html(imgArray[2]);
    $(".hiddenOpButtons").css("opacity", "1");
// when the player decides on a opponent to place on the arena it will move that image to the arena and makes the button return opacity to invisible
// should only run if opositionChosen is set to false but it is not working that way
    if(!opostionChosen){
        $("#hiddenOpponentButtonOne").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[0]);
            $("#hiddenOpponentButtonOne").css("opacity", "0");
            var opponentOp = ash;
        });

        $("#hiddenOpponentButtonTwo").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[1]);
            $("#hiddenOpponentButtonTwo").css("opacity", "0");
            var opponentOp = thermite;
        });

        $("#hiddenOpponentButtonThree").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[2]);
            $("#hiddenOpponentButtonThree").css("opacity", "0");
            var opponentOp = dokkaebi;
        });
    } else if (opostionChosen) {
        alert("You must fight your choosen opponent first!");
    };
};
// reset button function here, calls resetFunk
$("#resetButton").click(function(){
    resetFunk();
});
// reset function that will be called by both the reset button and a win/lose condition
function resetFunk(){
    playerChosen = false;
    opostionChosen = false;
    $("#opsButtonRow").css("opacity", "1");
    $("#godModeRow").css("opacity", "1")
    $("#playerCharacter").html("");
    $("#opponentChoices").html("");
    $("#computerCharacter").html("");
    $(".hiddenOpButtons").css("opacity", "0");
};
// attack button instrucitons here, will check for the user to have choosen a operator and an opponent
$("#attackButton").click(function(){
    if (playerChosen && opostionChosen){
        console.log("Fight Fight Fight");
        attack();
        //should just call the attack funtion
    } else if(!playerChosen){
        alert("You must choose an Operator first!!!");
    } else if(!opostionChosen){
        alert("You must pick your opponent!!!");
    }
});
// attack funtion that will be passed into each object or integrated into the attack button...
// maybe when the op is choosen as a character or an opponent you should grab the object then?
function attack(){
    playerOp.hp
    console.log(playerOp);
    console.log(playerOp.hp);
//     if (hp > 0){
        
//     } else if (hp <= 0){
//         resetFunk();
//     }
};

