/*var randomnumber = Math.floor(Math.random() * 2) + 1;
console.log(randomnumber)
//1 for tail
//2 for head
var count = 0;
function playNow() {
    document.getElementById("flipping").innerText = "Flipping : " + randomnumber;
    switch (randomnumber) {
        case 1:
            count = count + 1;
            document.getElementById("player1Score").innerText = "player1 Score : " + count;
            break;
        case 2:
            count = count + 1;
            document.getElementById("player2Score").innerText = "Player2 Score : " + count;
            break;
        default:
            document.getElementById("tryAgain").innerText = "Please Try Again : " + count;
    }
}*/

//simply Assign the Player name and Choose Head or Tail

/*
var Player1Name = prompt("Please Enter Player 1 Name : ")
var Player2Name = prompt("Please Enter Player 2 Name : ")

document.getElementById("player1").innerText = "Player1 : " + Player1Name;
document.getElementById("player2").innerText = "Player2 : " + Player2Name;

var random_Number_For_Head_and_Tail = Math.floor(Math.random() * 2) + 1;
console.log(random_Number_For_Head_and_Tail);
var choosePayer1;
var choosePayer2;
switch (random_Number_For_Head_and_Tail) {
    case 1:
        alert(Player1Name + " you Choose Head or Tail");
        choosePayer1 = prompt("First " + Player1Name + " Please Choose Head or Tail : ");
        document.getElementById("choseHeadtailPlayer1").innerText = "Choose: "+choosePayer1;
        if (choosePayer1 === "head" || choosePayer1 === "Head") {
            document.getElementById("choseHeadtailPlayer2").innerText = "Choose : Tail";
        }
        else if (choosePayer1 === "tail" || choosePayer1 === "Tail");
        {
            document.getElementById("choseHeadtailPlayer2").innerText = "Choose: Head";
        }
        break;
    case 2:
        alert(Player2Name + " you Choose Head or Tail");
        choosePayer2 = prompt("First " + Player2Name + " Please Choose Head or Tail : ");
        document.getElementById("choseHeadtailPlayer2").innerText = "Choose: "+choosePayer2;
        if (choosePayer2 === "head" || choosePayer2 === "Head") {
            document.getElementById("choseHeadtailPlayer1").innerText = "Choose : Tail";
        }
        else if (choosePayer2 === "tail" || choosePayer2 === "Tail");
        {
            document.getElementById("choseHeadtailPlayer1").innerText = "Choose : Head";
        }
        break;
    default:
        alert("Please Choose Option")

}

//Wroking on Play Button
var score1 = 0;
var score2 = 0;

function playerGame() {
    var randomNumberForFliping = Math.floor(Math.random() * 2) + 1;
    switch (randomNumberForFliping) {
        case 1:
            document.getElementById("FlipingDice").innerText = "Head";
            score1 = score1 + 1;
            document.getElementById("ScorePlayer1").innerText = "Score : "+score1;
            break;
        case 2:
            document.getElementById("FlipingDice").innerText = "Tail";
            score2 = score2 + 1;
            document.getElementById("ScorePlayer2").innerText = "Score : "+score2;
            break;
    }
}

 //Wroking on countDown Timer
 var startingMintes = 1;
 var time = startingMintes * 60;
 var countDown = document.getElementById("Timer");

 var settime = setInterval(updateCountDown, 1000)
 function updateCountDown() {
     var minutes = Math.floor(time / 60)
     let second = time % 60;
     second = second < 1 ? '0' + second : second;
     countDown.innerText = `${minutes} : ${second}`;
     time--;
     if (minutes === 0 && second == 00) {
         clearInterval(settime);
         if (score1 > score2) {
             document.getElementById("winner").innerText = "Congrats 🏆" + Player1Name + " WON MATCH";
         }
         else if (score2 > score1) {
             document.getElementById("winner").innerText = "Congrats 🏆" + Player2Name + " WON MATCH";
         }
         else{
            document.getElementById("winner").innerText = "MATCH TIED 😨"
         }
     }
 }
