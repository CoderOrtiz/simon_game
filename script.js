"use strict";
// Defining Values
let currentLevel;
let levelNumber = 2;
let blocksInPlay
const green = document.querySelector("#green");
const greenSound = new Audio("./assets/sounds/green.mp3");
const red = document.querySelector("#red");
const redSound = new Audio("./assets/sounds/red.mp3");
const yellow = document.querySelector("#yellow");
const yellowSound = new Audio("./assets/sounds/yellow.mp3");
const blue = document.querySelector("#blue");
const blueSound = new Audio("./assets/sounds/blue.mp3");

// Set Functions

// If Any Key is Pressed Down on User's Keyboard, the "helloWorld" Function Gets Called
document.onkeydown=function(event){
    if (event.key);
    currentLevel = "Level 1";
    console.log("working");
}

// Targets #level-title and Updates What Level the User is On
function currentGameLevelFunction(){
    document.querySelector("#level-title").textContent = currentLevel;
    if (currentLevel !== "hello friend"){ 
        currentLevel = `Level ${levelNumber}`;
        levelNumber++;
        } 
  }

//   Functions that Correlate to Each Colored Square
  green.onclick = function greenClicked() {
    green.classList.add("pressed");

    setTimeout(function (){
        green.classList.remove("pressed");
    }, 100);

    greenSound.play();
 }


 red.onclick = function redClicked() {
    red.classList.add("pressed");

    setTimeout(function (){
        red.classList.remove("pressed");
    }, 100);

    redSound.play();
}

 yellow.onclick = function yellowClicked() {
    yellow.classList.add("pressed");

    setTimeout(function (){
        yellow.classList.remove("pressed");
    }, 100);

    yellowSound.play();
 }

 blue.onclick = function blueClicked() {
    blue.classList.add("pressed");

    setTimeout(function (){
        blue.classList.remove("pressed");
    }, 100);

    blueSound.play();
 }









// function playingGame(){
//     blocksInPlay = Math.floor(Math.random() * 4) + 1;

//     console.log(blocksInPlay);
// }
