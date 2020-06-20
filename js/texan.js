    
    //Text Annalisis Methods

const syllableRegex = /[^aeiouyáóáéíú\s]{0,2}([óáéíú]|[aeiouy]+[óáéíú]?)(?:[^aeiouyáóáéíú]$|[^aeiouytpd\s]{0,1}(?=[^aeiouyhrlnáóáéíú]))?/gi; //para dividir en silabas. trabaja mal para palabras con "rl"  en medio como "merlusa" = me-rlu-sa

const metricRegex = /[^aeiouyáóáéíú\s]{0,2}([óáéíú]|[aeiouyh]+[óáéíú]?)(?:[^aeiouyáóáéíú]$|[^aeiouytpd\s]{0,1}(?=[^aeiouyhrlnáóáéíú]))?/gi; //para dividir en unidades métricas de poesía. 



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
        text = text.map((element)=> element.replace(/[,:.;]/g, "")).map((element)=> element.match(syllableRegex));// hasta este punto corrige la mayoría de casos.

        //correcting exceptions

        //making words like "merlusa"  equal to Mer-lu-sa instead of me-rlu-sa 
        text.map((line)=> 
        {
            if (line!=null)// evitar los saltos de linea
            {
                line.map(((silab, index, vers) => {
                    if((silab[0]=="r") && (silab[1]=="l")){
                        let newSilab= vers[index].slice(1);
                        vers[index]= newSilab;
                        vers[index-1]+="r";
                    }
                }));

            }
        });

        return text;
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
        textB = textB.map((element)=> element.replace(/[,:.;\s]/g, "")).map((element)=> element.match(metricRegex));
        
        
        return textB;
        
    }
}

export {TEXAN};