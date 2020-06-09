export default class UI{
     //gets the text to analize
    static getVersos(){
        let textBoxText = document.getElementById("work_area_text_box").value
        let textArray = textBoxText.split(/\n/g);
        console.log(textArray);
        return textArray;

    }


}