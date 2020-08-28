
const {poemUnitSpliter, paragraphSpliter} = require("./spliter");
const {syllableRegex, metricRegex} = require("./reyex");



class Poem {

    constructor(textString){

        this.poemText = textString;
        
    }
    
    get verses () {

        return paragraphSpliter(this.poemText);

    }

    get syllabels () {
       return poemUnitSpliter( syllableRegex, this.poemText);
    }
    get metric(){

        return poemUnitSpliter( metricRegex, this.poemText);
    }

}


let luis = new Poem("poema");
console.log(luis.syllabels);
console.log(luis.verses);
console.log(luis.metric);


module.exports= Poem;