"use strict";
// Defining Values
let currentLevel = "Level 1";
let levelNumber = 2;

// Set Functions

// Targets #level-title and Updates What Level the User is On
function helloWorld(){
    document.querySelector("#level-title").textContent = currentLevel;
    if (currentLevel !== "hello friend"){ 
        currentLevel = `Level ${levelNumber}`;
        levelNumber++;
        console.log("working");
        } 
  }

// If Any Key is Pressed Down on User's Keyboard, the "helloWorld" Function Gets Called
document.onkeydown=function(event){
      if (event.key)
      helloWorld();
  }



