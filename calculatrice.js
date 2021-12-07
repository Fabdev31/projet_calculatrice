'use strict'
var chaineOperation = new String();
function concatenerOperation(touche) {
    getAffichage();
    chaineOperation = chaineOperation.concat(touche);
    updateAffichage();
    console.log("concatenerOperations -> chaineOperation: " + chaineOperation);
}

function calculResultat() {
    chaineOperation = eval(chaineOperation).toFixed(2).toString();
    updateAffichage();
    console.log("calculResultat -> chaineOperation: " + chaineOperation);
}

function effacerResultat() {
    chaineOperation = "";
    updateAffichage();
    console.log("effacerResultat -> chaineOperation: " + chaineOperation);
}
function supprimerDernierCaractere() {
    chaineOperation = chaineOperation.slice(0, -1);
    updateAffichage();
}

function updateAffichage() {
    document.getElementById("ecran-affichage").value = chaineOperation;
}

function getAffichage() {
    chaineOperation = document.getElementById("ecran-affichage").value;
}

function taperEntree(e) {
    if ( e.keyCode == 13 ) {
        calculResultat();
    }
}