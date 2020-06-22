// Maneja las operaciones principales del UI



//Renderiza a la página el texto dividido en sílabas o en metrica a partir de un arreglo de objetos.
class LOADER
{
    static loadPoem(objArray){
        const resPanel = document.querySelector("#result-panel");
        const resList= document.createElement("ul");
        resList.classList.add("result-panel_ul"); 
        objArray.forEach(line => {
            if (line!=null){
                resList.innerHTML+=`<li>${line.splitedVerse}<span class="count">${line.length}</span></li>`; 

            } else {
                resList.innerHTML+=`<br>`
            }
            
        });
        resPanel.appendChild(resList);

    }

}

export {LOADER};