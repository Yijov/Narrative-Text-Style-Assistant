import UI from "./UI.js"

const textForm = document.querySelector("#textForm");


textForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    UI.getVersos();
});




