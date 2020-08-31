/*cuenta las veces que una  palabla ha ocurrido en un conjunto 
de arreglos de parrafor divididos por palabra resultado de la funcion splitToWords en spliter,js
retorna un conjunto de objetos con cada palabra y su numero de veces que aparece
*/


function repitedWordsCounter(arraysOfWorByParagraph, originalText){
    let result=[];
    let controlArray=[];
    let textArray = arraysOfWorByParagraph;
    textArray.forEach(paragraph => {
        
        paragraph.forEach(word => {

            if (controlArray.indexOf(word) === -1 && word!==""){
                const numberOfOccurrences = originalText.match(new RegExp(word, "g")).length
                controlArray.push(word);
                result.push({word: word, times: numberOfOccurrences});
            }
        })

    });

    return result;

}





function getStandardDeviation (array) {
    const n = array.length
    if( n===0){ 
        let result =[];  return result
    } else{

        const mean = array.reduce((a, b) => a + b) / n
        return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)}
    
  }



  function checkGreaterthen(num) {
    return num >= 100;
  }






module.exports= {repitedWordsCounter, getStandardDeviation, checkGreaterthen };