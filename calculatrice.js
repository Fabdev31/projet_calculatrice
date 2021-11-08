var chaineOperation = new String();
var resultat = new String();
function concatenerOperation(touche) {
    chaineOperation = chaineOperation.concat(touche);
    updateAffichage();
    console.log("concatenerOperations -> chaineOperation: " + chaineOperation);
}

function calculResultat() {
    chaineOperation = eval(chaineOperation).toString();
    updateAffichage();
    console.log("calculResultat -> chaineOperation: " + chaineOperation);
}

function effacerResultat() {
    chaineOperation = chaineOperation.slice(0, -1);
    updateAffichage();
    console.log("effacerResultat -> chaineOperation: " + chaineOperation);
}

function updateAffichage() {
    document.getElementById("ecran-affichage").value = chaineOperation;
}