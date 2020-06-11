    
    
    //Annalisis algorithms
      
class TEXAN //manages the text analisys
{   
     
    //gets the text from a taxt box to analize and divides it in verses keeping the line brakes
    static getVerses(txtBox)
    {
        let textBoxText = txtBox.value;
        let textArray = textBoxText.trim().split(/\n/g).map((element)=> element.trim());
        return textArray;
    } 
    //devides an array of paragraphs into syllables 
    static getSyllables(txtArray)
    {
        let text = textArray.slice();
        return text;
    }   
}

export {TEXAN};