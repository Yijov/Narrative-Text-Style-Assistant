    
    
    
    //manages the poetry analisys    
        
    
    class POETRY {
     //gets the text to analize
        static getVerses(txtBoxID){
            let textBoxText = document.getElementById({txtBoxID}).value
            let textArray = textBoxText.split(/\n/g);
            return textArray;

    }


}

export {POETRY};