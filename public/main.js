//selectors

const Form = document.getElementById("input-area__form");
const Textbox = document.getElementById("input-area__text-box");
const submitButton = document.getElementById("analizar");
const ClearButton = document.getElementById("clear-button");
const analisysPanel = document.getElementById("analisis-display");
const Muletillas = document.getElementById("muletillas");
const LongSentences = document.getElementById("long-sentences");
const UnbalancedParagraphs = document.getElementById("unbalanced-paragrphs");

//event listeners

Form.addEventListener("submit", processText);
ClearButton.addEventListener("click", clearAll);

//functions

async function processText(e) {
  e.preventDefault();
  submitButton.value = "Cargando...";
  submitButton.style.pointerEvents = "none";

  try {
    const rawResponse = await fetch("/text/analisis/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ narrative: Textbox.value }),
    });

    diaplayAnalisysPanel();
    submitButton.value = "Analizar";
    renderToScreen(await rawResponse.json());
  } catch (error) {
    analisysPanel.innerHTML = `<h2> Ha ocurrido un error</h2> <P>${error}</p>`;
  }
}

function clearAll(e) {
  e.preventDefault();
  Textbox.value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
  contentReady = false;
  ClearButton.style.display = "none";
  setTimeout(function () {
    analisysPanel.style.display = "none";
    location.reload();
  }, 150);
}

function diaplayAnalisysPanel() {
  ClearButton.style.display = "block";
  analisysPanel.style.display = "flex";
  window.scrollTo({ top: 800, behavior: "smooth" });
}

function renderMuletilla({ times, word }) {
  let palabra = document.createElement("DIV");
  let br = document.createElement("BR");
  palabra.innerHTML += `<p>${word}</p> <span>${times}</span>`;
  Muletillas.appendChild(palabra);
  Muletillas.appendChild(br);
}

function renderLongSentences({ paragNumber, longSentences }) {
  let br = document.createElement("BR");
  LongSentences.innerHTML += `<span>Párrafo ${paragNumber}</span>`;
  longSentences.map(
    (sentenc) =>
      (LongSentences.innerHTML += `<p><i>Oración: </i>${sentenc}</p> <br>`)
  );
  LongSentences.appendChild(br);
}

function renderParagraphsWithLowVariation({ paragraphIndex, sentences }) {
  let br = document.createElement("BR");
  UnbalancedParagraphs.innerHTML += `<span>Párrafo ${
    paragraphIndex + 1
  }</span>`;
  UnbalancedParagraphs.innerHTML += `<p>${sentences.join(". ")}</p>`;
  UnbalancedParagraphs.appendChild(br);
}

function renderToScreen({ muletillas, variation, longsentences }) {
  (muletillas[0] == null && Muletillas.remove()) ||
    muletillas
      .sort(function (a, b) {
        return b.times - a.times;
      })
      .forEach((palabra) => renderMuletilla(palabra));
  (variation[0] == null && UnbalancedParagraphs.remove()) ||
    variation.forEach((par) => renderParagraphsWithLowVariation(par));
  (longsentences[0] == null && LongSentences.remove()) ||
    longsentences.forEach((parag) => renderLongSentences(parag));

  if (
    muletillas[0] == null &&
    variation[0] == null &&
    longsentences[0] == null
  ) {
    analisysPanel.innerHTML += `<h2> No problemas encontrados</h2>`;
  }
}
