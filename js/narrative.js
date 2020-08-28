const {paragraphSpliter, splitToWords} = require("./spliter");
const {repitedWordsCounter, getStandardDeviation, checkGreaterthen}= require("./repitedWordsCounter");



class NarrativeText {

    constructor(textString){

        this.narativeText = textString;
        
    }

    get numberOfWords(){
        let temporal = repitedWordsCounter(splitToWords(this.narativeText), this. narativeText);
        return temporal.reduce((a, b)=>a + b.times , 0);
        
    }
    

    get  repitedWords () {
         
         return repitedWordsCounter(splitToWords(this.narativeText), this. narativeText) ;
    
    }


    get muletillas(){
        return this.repitedWords.filter(word=> word.times > Math.pow(this.numberOfWords, 0.087));
    }


    get paragraphStructure() {

        return paragraphSpliter(this.narativeText)
        .map( (p, index) => ({ paragIndex: index, 
                               paragraph: p, 
                               numberOfSentences:p.split(".").length-1, words: p.split(" ").length}));
    }


    get sentenceStructure() {

       let paragraphsDividedInSentences = this.paragraphStructure
                            .map(parag=> parag.paragraph)
                            .map(para=> para.split("."))
                            .map(par=> { //eliminates null sentences
                                        par.splice(par.indexOf("", 1))
                                        return par
                                        });
        return paragraphsDividedInSentences.map((paragraph, index) => (
             {   paragraphIndex: index, 
                 numOfSentences: paragraph.length,
                 sentences: paragraph,
                 sentencesLength: paragraph.map(sentence => sentence.length),
                 sentenceVariation: getStandardDeviation(paragraph.map(sentence => sentence.length))
                }))
        
        
    }

    get paragraphsWithLowVariation(){
        return this.sentenceStructure
        .filter(parag=> ((parag.numOfSentences> 1) && (parag.sentenceVariation <10)))
    }
    get paragraphsWithLargeSentences(){// returns paragraphs witch sentences are grather then 88 characters
        return this.sentenceStructure
        .filter(para=> para.sentencesLength.some(checkGreaterthen))
        .map(para => ({
            paragNumber: para.paragraphIndex + 1,
            sentences:para.sentences,
            longSentences: para.sentences.filter(sentenc=> checkGreaterthen(sentenc.length))
        })  )
    }

    

}




let juan= new NarrativeText ("panadero de los andes. tu que por caminos secos alguna vez andaste. tu. \n panadero de la mar. ");

//logs for testing the gets
//console.log(juan.paragraphStructure);
//console.log(juan.repitedWords);
//console.log(juan.sentenceStructure);
//console.log(juan.numberOfWords);
//console.log(juan.muletillas);
//console.log(juan.paragraphsWithLowVariation);
console.log(juan.paragraphsWithLargeSentences);


module.exports= NarrativeText;