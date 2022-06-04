"use strict";
// Defining Values
let currentLevel;
let levelNumber = 2;
let blocksInPlay
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");

// Set Functions

// If Any Key is Pressed Down on User's Keyboard, the "helloWorld" Function Gets Called
document.onkeydown=function(event){
    if (event.key);
    currentLevel = "Level 1";
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
 }


 red.onclick = function redClicked() {
    red.classList.add("pressed");
    setTimeout(function (){
        red.classList.remove("pressed");
    }, 100);
 }

 yellow.onclick = function yellowClicked() {
    yellow.classList.add("pressed");
    setTimeout(function (){
        yellow.classList.remove("pressed");
    }, 100);
 }

 blue.onclick = function blueClicked() {
    blue.classList.add("pressed");
    setTimeout(function (){
        blue.classList.remove("pressed");
    }, 100);
 }









// function playingGame(){
//     blocksInPlay = Math.floor(Math.random() * 4) + 1;

//     console.log(blocksInPlay);
// }






