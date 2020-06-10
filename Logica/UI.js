export default class POEM{
     //gets the text to analize
    static getVerses(){
        let textBoxText = document.getElementById("work-area_text-box").value
        let textArray = textBoxText.split(/\n/g);
        return textArray;

    }


}