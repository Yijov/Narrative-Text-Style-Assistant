    
    //Annalisis algorithms

const syllableRegex = /[^aeiouy]*[aeiouyóá]+(?:[^aeiouy]$|[^aeiouy](?=[^aeiouyhrln]))?/gi; //ajustar para yatos, sinalefas y acentuadas
      
class TEXAN //manages the text analisys
{   
     
    //gets the text from a text-box and divides it in verses keeping the line brakes
    static getVerses(txtBox)
    {
        let textBoxText = txtBox.value;
        return textBoxText.trim().split(/\n/g).map((element)=> element.trim());
         
    } 

    //devides a word into syllables 
    static getSyllables(wordArray)
    {
        let text = wordArray.slice();
        return text.match(syllableRegex);
    }   

    //devides a texbox into metric units 
    static getMetric(txtBOX)
    {   //rompar silabas de mas de 4 letras que incluyen acento
        //trabajar separación por yato
        //needs to include Hiphenization

        let textBoxText = txtBOX.value;
        textBoxText = textBoxText.trim().split(/\n/g).map((element)=> element.trim());
        return textBoxText.map((element)=> element.replace(/[,:.;\s]/g, "")).map((element)=> element.match(syllableRegex));
        
    }
}

export {TEXAN};