    
    //Annalisis algorithms

const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouym]*$|[^aeiouy](?=[^aeiouyhlr]))?/gi; //ajustar para yatos, sinalefas y acentuadas
      
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

    //devides a texbox into metric units (needs to include Hiphenization)
    static getSyMetric(txtBOX)
    {   
        let textBoxText = txtBOX.value;
        textBoxText = textBoxText.trim().split(/\n/g).map((element)=> element.trim());
        return textBoxText.map((element)=> element.replace(/\s/g, "")).map((element)=> element.match(syllableRegex));
    }  
}

export {TEXAN};