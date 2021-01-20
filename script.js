let i = 0
const words = "Hei. Her er en beskjed til alle studenter. Dette her er en ekstraoppgave dere kan prøve dere på. Her får du prøvd deg på litt HTML, CSS og JavaScript. Knappene nedenfor skal <span>fjerne</span> og <span>legge</span> til ord fra denne listen. Lykke til. Alle 'span'-elementer inne i denne teksten skal ha <span>bold og ha understrek</span> styling.";


function welcome(i){
    let wordslist = words.split(" ");
    if (i > wordslist.length || i < 0){
        i = 0
    }
    list = wordslist.slice(0, i);
    list = list.toString();
    list = list.replaceAll(",", " ");
    document.getElementById("tekst").innerHTML = `${list}`; 
};

function next(){
    document.getElementById("nextbtn")
        i++
    welcome(i)
};
function prev(){
    document.getElementById("prevbtn")
        i--
    welcome(i)
}

