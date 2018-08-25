// op objects that will be passed as arguments through the attackbutton into the attack function
var ash = {
    name: "Ash",
    hp: 95,
    atk: 9,
    cntAtk: 6,
};

var thermite = {
    name: "Thermite",
    hp: 120,
    atk: 6,
    cntAtk: 6,
};

var dokkaebi = {
    name: "Dokkaebi",
    hp: 115,
    atk: 7,
    cntAtk: 4,
};

var jager = {
    name: "Jäger",
    hp: 100,
    atk: 8,
    cntAtk: 6,
};

var smoke = {
    name: "Smoke",
    hp: 110,
    atk: 6,
    cntAtk: 9,
};

var rook = {
    name: "Rook",
    hp: 140,
    atk: 6,
    cntAtk: 6,
};

var tachanka = {
    name: "Tachanka",
    hp: 1000,
    atk: 25,
};
// used by the attack function to store and iterate the attack of the players op
var attackStorage = 0;
var attackTemp = 0;
// used by the attackbutton as a place holder for the op objects and then will be used as an arguement to pass
// into the attack function
var playerOp = "";
var opponentOp = "";
// informs the attack button whether or not the ops have been choosen
var playerChosen = false;
var opostionChosen = false;
// a counter of kills so the game knows when the player has won
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
// the user to choose who to challenge in the arena. also sets playerOp variable to the correct object to be passed as an argument
$("#ashButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[0]);
    playerOp = ash;
    attackOpChosen();
});

$("#thermButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[1]);
    playerOp = thermite;
    attackOpChosen();
});

$("#dokkButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[2]);
    playerOp = dokkaebi
    attackOpChosen();
});

$("#smokeButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[3]);
    playerOp = smoke;
    defenderOpChosen();
});

$("#jagerButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[4]);
    playerOp = jager;
    defenderOpChosen();
});

$("#rookButton").click(function(){
    playerChosen = true;
    $("#playerCharacter").html(imgArray[5]);
    playerOp = rook;
    defenderOpChosen();
});

$("#memeButton").click(function(){
    alert("You have choosen our lord and savior, Tachanka");
    playerChosen = true;
    $("#playerCharacter").html(imgArray[6]);
    playerOp = tachanka;
    defenderOpChosen();
});
// will call if you choose an orange attacker as your character
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
            opponentOp = smoke;
        });

        $("#hiddenOpponentButtonTwo").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[4]);
            $("#hiddenOpponentButtonTwo").css("opacity", "0");
            opponentOp = jager;
        });

        $("#hiddenOpponentButtonThree").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[5]);
            $("#hiddenOpponentButtonThree").css("opacity", "0");
            opponentOp = rook;
        });
    } else if (opostionChosen) {
        alert("You must fight your choosen opponent first!");
    };
};
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
            opponentOp = ash;
        });

        $("#hiddenOpponentButtonTwo").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[1]);
            $("#hiddenOpponentButtonTwo").css("opacity", "0");
            opponentOp = thermite;
        });

        $("#hiddenOpponentButtonThree").click(function(){
            opostionChosen = true;
            $("#computerCharacter").html(imgArray[2]);
            $("#hiddenOpponentButtonThree").css("opacity", "0");
            opponentOp = dokkaebi;
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
    playerOp = "";
    opponentOp = "";
};
// attack button instrucitons here, will check for the user to have choosen a operator and an opponent
$("#attackButton").click(function(){
    
    if (playerChosen && opostionChosen){
        attack(playerOp, opponentOp);
        //should just call the attack funtion
    } else if(!playerChosen){
        alert("You must choose an Operator first!!!");
    } else if(!opostionChosen){
        alert("You must pick your opponent!!!");
    }
});
// attack funtion that will be passed each object by the attack button when they are chosen by the player
function attack(playerOpHolder, compOpHolder){
    // initial if checks to see if the player has already won the game, may be more efficent to make winloss function
    if (killCounter === 3){
        alert("You got the Ace!!!");
        resetFunk();
    // the brains of the attack funtion, stores the base playerop atk, then iterates each time the player attacks
    // removes a portion of the opponent op's hp as well as the playerop's hp
    } else if (playerOpHolder.hp > 0 && compOpHolder.hp > 0){
        attackStorage = playerOpHolder.atk;
        attackTemp = attackStorage + attackTemp;
        compOpHolder.hp = compOpHolder.hp - attackTemp;
        playerOpHolder.hp = playerOpHolder.hp - compOpHolder.cntAtk;
        alert("You hit " + compOpHolder.name + " for " + attackTemp);
        alert(compOpHolder.name + " now has " + compOpHolder.hp + " HP")
        alert(playerOpHolder.name + " now has " + playerOpHolder.hp + " HP");
    // checks to see if the player killed thier opponent 
    } else if (compOpHolder.hp <= 0){
        killCounter++;
        alert("You've fragged " + compOpHolder.name);
        // supposed to check to see if the player has killed all the opponents and if not tell them to select another
        // isn't working, maybe it should be apart of the aforementioned winloss function?
        if (killCounter !== 3){
            alert("Find your next target.");
        };
    // checks to see if the players op is alive, if not resets the game    
    } else if (playerOpHolder.hp <= 0){
        alert("You've been fragged!!!!");
        resetFunk();
    };
};

