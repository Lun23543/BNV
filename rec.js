let rec = document.getElementById("record");
let stop = document.getElementById("stop");
//const area = document.getElementById("txa");

let texte = document.getElementById("text");
texte.value="";

let recon = new (window.webkitSpeechRecognition)();
recon.lang = "fr-FR";
recon.continuous = true;
recon.onresult = function(event){

    texte.value += event.results[0][0].transcript;
}

rec.onclick = function() {

    recon.start();
}

stop.onclick = function() {
    recon.stop();
    localStorage.setItem("sauve", texte.value);
}

console.log(texte.value);


window.addEventListener("load", function(){
   texte.value= localStorage.getItem("sauve");
    if(texte.value){
        texte.innerHTML= texte.value;
    }

    //console.log(save);
})