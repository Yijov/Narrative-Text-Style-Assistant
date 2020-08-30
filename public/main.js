
//selectors

const Form = document.getElementById("input-area__form");
const Textbox = document.getElementById("input-area__text-box");
const ClearButton = document.getElementById("clear-button");
const analisysPanel = document.getElementById("analisis-display");
const Muletillas = document.getElementById("muletillas");
const LongSentences = document.getElementById("long-sentences");
const UnbalancedParagraphs= document.getElementById("unbalanced-paragrphs");

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

    renderToScreen(await rawResponse.json());
}




function clearAll(e){
    e.preventDefault();
    Textbox.value="";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    contentReady= false;
    ClearButton.style.display = "none";
    setTimeout(function(){ analisysPanel.style.display = "none"; location.reload(); }, 500);
}





function diaplayAnalisysPanel(){
    ClearButton.style.display = "block";
    analisysPanel.style.display = "flex";
    window.scrollTo({ top: 800, behavior: 'smooth' });
}

function renderMuletilla ({times, word}){
    let palabra = document.createElement("DIV");
    let br= document.createElement("BR");
    palabra.innerHTML=`<p>${word}</p> <span>${times}</span>`;
    Muletillas.appendChild(palabra);
    Muletillas.appendChild(br);

}

function  renderLongSentences ({paragNumber,longSentences}){

    let br= document.createElement("BR");
    LongSentences.innerHTML+=`<span>Párrafo ${paragNumber}</span>`;
    longSentences.map( sentenc => LongSentences.innerHTML+= `<p><i>Oración: </i>${sentenc}</p> <br>`);
    LongSentences.appendChild(br);
    
}

function renderParagraphsWithLowVariation({paragNumber, sentences}){
    let br= document.createElement("BR");
    UnbalancedParagraphs.innerHTML+=`<span>Párrafo ${paragNumber}</span>`;
    UnbalancedParagraphs.innerHTML+= `<p>${sentences.join(". ")}</p>`;
    UnbalancedParagraphs.appendChild(br);
    
}


function renderToScreen({muletillas, variation, longsentences }){

    muletillas[0]==null && Muletillas.remove()  || muletillas.sort(function(a, b){return b.times-a.times}).forEach(palabra => renderMuletilla(palabra));
    variation[0] ==null && UnbalancedParagraphs.remove() ||variation.forEach(par => renderParagraphsWithLowVariation(par)) ;
    longsentences [0]== null && LongSentences.remove() || longsentences.forEach(parag => renderLongSentences(parag))

    if (muletillas[0]==null && variation[0] ==null && longsentences [0]== null){
        analisysPanel.innerHTML+=`<h1> No problemas encontrados</h1>`
    }
    
}



// function testFunction (e){
//     let br= document.createElement("BR");
//     e.preventDefault();
//     UnbalancedParagraphs.innerHTML+=`<span>Párrafo 33</span>`;
//     UnbalancedParagraphs.innerHTML+= `<p>Pero las hay que se suicidan y se entregan en seguida, brotan en el marco y ahí mismo se tiran, me parece ver la vibración del salto, sus 
//     piernitas desprendiéndose y el grito que las emborracha en esa nada del caer y aniquilarse'</p>`;
//     UnbalancedParagraphs.appendChild(br);
   
// }