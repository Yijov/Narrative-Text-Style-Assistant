import {POETRY as POEM}  from "./texan.js" 
const textForm = document.getElementById("textForm");
const txtBox = document.getElementById("work-area_text-box");
const clearButon = document.getElementById("btn-clear");
let activeButton = document.getElementsByClassName("active");
let activeButtonID = activeButton[0].getAttribute("id");



//Event Listeners
//obtain text from textbox depending on the tipe of text to analize
textForm.addEventListener("submit", (e)=> {
     e.preventDefault();
     switch (activeButtonID) {
         case "poem-btn":
             console.log(POEM.getVerses(txtBox));
             break;
         case "tales-btn":
             console.log(POEM.getVerses());
             break;
         case "novel-btn":
             console.log(POEM.getVerses());
             break;
         case "esey-Btn":
             console.log(POEM.getVerses());
             break;
         default:
             console.log("nextthing");
             break;
     }
   });

// clear the screen
clearButon.addEventListener("click", ()=> window.location.reload());



