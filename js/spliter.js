function paragraphSpliter(string){
  return  string.trim().split(/\n/g).map((element)=> element.trim());
}



function splitToWords(string){//returns an array paragraphs separated by words
        return paragraphSpliter(string)
                .map((element)=> element.replace(/[,:.;]/g, ""))
                .map(parag => parag.split(" "))

}


function poemUnitSpliter (reyex, poemString){ //separa palabras por verso de acuerdo al reyex indicado
    let result=[]; 
let text = poemString;
text = paragraphSpliter(text);
text = text.map((element)=> element.replace(/[,:.;]/g, ""))
        .map((element)=> element.match(reyex));// hasta este punto corrige la mayoría de casos.

//correcting exceptions
//making words like "merlusa"  equal to Mer-lu-sa instead of me-rlu-sa and pier-na instead of pie-rna
text.map((line)=> 
{
    if (line!=null)// evitar los saltos de linea nulos
    {
        line.map(((silab, index, vers) => {
            if((silab[0]=="r") && (silab[1]=="l"|silab[1]=="n")){
                let newSilab= vers[index].slice(1);
                vers[index]= newSilab;
                vers[index-1]+="r";
            }
        }));

    }
});

//Hiphenize lines and counts syllables
text.map((verso)=> 
{
    if(verso!=null) //accounts for line breaks
    {
        result.push({"splitedVerse":verso.join("-"), "length":verso.length});
    } else {
        result.push(null);            }
});

return result;


}


module.exports = {poemUnitSpliter, paragraphSpliter, splitToWords};