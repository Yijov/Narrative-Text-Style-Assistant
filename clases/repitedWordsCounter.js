/*cuenta las veces que una  palabla ha ocurrido en un conjunto 
de arreglos de parrafor divididos por palabra resultado de la funcion splitToWords en spliter,js
retorna un conjunto de objetos con cada palabra y su numero de veces que aparece
*/




function repitedWordsCounter(splitedOriginalText){


    let result=[];

    let textArr = splitedOriginalText
    let  arr = [...new Set(splitedOriginalText)];
    arr.map(word => {
      if(word!==""){
        result.push({word: word, times: textArr.filter(c => c === word).length})

      }

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
    return num >= 160;
  }






module.exports= {repitedWordsCounter, getStandardDeviation, checkGreaterthen };