const { paragraphSpliter, splitToWords } = require("./spliter");
const { repitedWordsCounter, getStandardDeviation, checkGreaterthen } = require("./repitedWordsCounter");



class NarrativeText {

    constructor(textString) {

        this.narativeText = textString;

    }

    get numberOfWords() {
        let temporal = repitedWordsCounter(splitToWords(this.narativeText));
        return temporal.reduce((a, b) => a + b.times, 0);

    }


    get repitedWords() {

        return repitedWordsCounter(splitToWords(this.narativeText));

    }


    get muletillas() {
        return this.repitedWords.filter(word => word.times > Math.pow(this.numberOfWords, 0.08));
    }


    get paragraphStructure() {

        return paragraphSpliter(this.narativeText)
            .map((p, index) => ({
                paragIndex: index,
                paragraph: p,
                numberOfSentences: p.split(".").length - 1, words: p.split(" ").length
            }));
    }


    get sentenceStructure() {

        let paragraphsDividedInSentences = this.paragraphStructure
            .map(parag => parag.paragraph)
            .map(para => para.split("."))
            .map(par => { //eliminates null sentences
                par.splice(par.indexOf("", 1))
                return par
            });
        return paragraphsDividedInSentences.map((paragraph, index) => (
            {
                paragraphIndex: index,
                numOfSentences: paragraph.length,
                sentences: paragraph,
                sentencesLength: paragraph.map(sentence => sentence.length),
                sentenceVariation: getStandardDeviation(paragraph.map(sentence => sentence.length))
            }))


    }

    get paragraphsWithLowVariation() {
        return this.sentenceStructure
            .filter(parag => ((parag.numOfSentences > 1) && (parag.sentenceVariation < 10)))
    }
    get paragraphsWithLargeSentences() {// returns paragraphs witch sentences are grather then 88 characters
        return this.sentenceStructure
            .filter(para => para.sentencesLength.some(checkGreaterthen))
            .map(para => ({
                paragNumber: para.paragraphIndex + 1,
                sentences: para.sentences,
                longSentences: para.sentences.filter(sentenc => checkGreaterthen(sentenc.length))
            }))
    }



}




let juan = new NarrativeText("Yo no sé, mirá, es terrible cómo llueve. Llueve todo el tiempo, afuera tupido y gris, aquí contra el balcón con goterones cuajados y duros, que hacen plaf y se aplastan como bofetadas uno detrás de otro qué hastío. Ahora aparece una gotita en lo alto del marco de la ventana, se queda temblequeando contra el cielo que la triza en mil brillos apagados, va creciendo y se tambalea, ya va a caer y no se cae, todavía no se cae. Está prendida con todas las uñas, no quiere caerse y se la ve que se agarra con los dientes mientras le crece la barriga, ya es una gotaza que cuelga majestuosa y de pronto zup ahí va, plaf, deshecha, nada, una viscosidad en el mármol. Pero las hay que se suicidan y se entregan en seguida, brotan en el marco y ahí mismo se tiran, me parece ver la vibración del salto, sus piernitas desprendiéndose y el grito que las emborracha en esa nada del caer y aniquilarse. Tristes gotas, redondas inocentes gotas. Adiós gotas. Adiós.");

//logs for testing the gets
//console.log(juan.paragraphStructure);
//console.log(juan.repitedWords);
//console.log(juan.sentenceStructure);
//console.log(juan.numberOfWords);
//console.log(juan.muletillas);
//console.log(juan.paragraphsWithLowVariation);
//console.log(juan.paragraphsWithLargeSentences);


module.exports = NarrativeText;