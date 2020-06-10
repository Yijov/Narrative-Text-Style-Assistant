import {POETRY as POEM}  from "./texan.js" 
const textForm = document.querySelector("#textForm");
let activeButton = document.getElementsByClassName("active");
let activeButtonID = activeButton[0].getAttribute("id");




//General Functions


//Event Listeners
//obtain text from textbox depending on the tipe of text to analize
textForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    switch (activeButtonID) {
        case "poem-btn":
            console.log(POEM.getVerses(textForm));
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




