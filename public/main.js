//selectors

const Form = document.getElementById("input-area__form");
const Textbox = document.getElementById("input-area__text-box");
const ClearButton = document.getElementById("clear-button");

//event listeners

Form.addEventListener("submit", processText);
ClearButton.addEventListener("click", cleanTextBox);






//functions

async function  processText(e){
    e.preventDefault();
      const rawResponse = await fetch("/text/analisis/",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({narrative: Textbox.value})
    })
    const content = await rawResponse.json();

    console.log(content);
}


function cleanTextBox(e){
    Textbox.value="";
    ClearButton.style.display = "none";
}