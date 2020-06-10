    
    
    //Annalisis algorithms
      
    class POETRY { //manages the poetry analisys  
     
        //gets the text to analize and divides it in verse
        static getVerses(txtBox){
            let textBoxText = txtBox.value;
            let textArray = textBoxText.split(/\n/g);
            return textArray;

    }


}

export {POETRY};