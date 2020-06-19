    
    //Annalisis algorithms

const syllableRegex = /[^aeiouy\s]{0,3}[aeiouyóáéíú]+(?:[^aeiouy]$|[^aeiouy\s]{1,2}(?=[^aeiouyhrln]))?/gi; //ajustar para yatos, sinalefas y acentuadas
      
class TEXAN //manages the text analisys
{   
     
    //gets the text from a text-box and divides it in verses keeping the line brakes
    static getVerses(txtBox)
    {
        let textBoxText = txtBox.value;
        return textBoxText.trim().split(/\n/g).map((element)=> element.trim());
         
    } 

    //devides a textbox into syllables 
    static getSyllables(words)
    {
        let text = words.value;
        text = text.trim().split(/\n/g).map((element)=> element.trim());
        return text.match(syllableRegex);
    }   

    //devides a texbox into poetic metric units 
    static getMetric(txtBOX)
    {   
        //trabajar separación por yato
        //needs to include Hiphenization

        let textB = txtBOX.value;
        
        
        //removes all Extra white spaces 
        textB = textB.trim().split(/\n/g).map((element)=> element.trim());
        
        
        //splits into metric units according to regex. It does not accounts for diptongo so it needt to be refined
        textB = textB.map((element)=> element.replace(/[,:.;\s]/g, "")).map((element)=> element.match(syllableRegex));
        
        
        return textB;
        
    }
}

export {TEXAN};