//variables

let content;
let contentReady=false;
//selectors

const Form = document.getElementById("input-area__form");
const Textbox = document.getElementById("input-area__text-box");
const ClearButton = document.getElementById("clear-button");
const analisysPanel = document.getElementById("analisis-display");

//event listeners

Form.addEventListener("submit", processText);
ClearButton.addEventListener("click", clearAll);



//functions

async function  processText(e){
    e.preventDefault();
    diaplayAnalisysPanel();
    const rawResponse = await fetch("/text/analisis/",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({narrative: Textbox.value})
    });

     content = await rawResponse.json();
     contentReady= true;
     console.log(content);
}


function clearAll(e){
    e.preventDefault();
    Textbox.value="";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    contentReady= false;
    ClearButton.style.display = "none";
    setTimeout(function(){ analisysPanel.style.display = "none"; }, 500);
}



function diaplayAnalisysPanel(){
    ClearButton.style.display = "block";
    analisysPanel.style.display = "flex";
    window.scrollTo({ top: 800, behavior: 'smooth' });
}

