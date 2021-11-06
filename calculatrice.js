var chaineOperation = new String();

function concatenerOperation(touche) {
    chaineOperation = chaineOperation.concat(touche);
    updateAffichage();
    console.log("concatenerOperations -> chaineOperation: " + chaineOperation);
}

function calculResultat() {
    chaineOperation = eval(chaineOperation);
    updateAffichage();
    console.log("calculResultat -> chaineOperation: " + chaineOperation);
}

function effacerResultat() {
    chaineOperation = "";
    updateAffichage();
    console.log("effacerResultat -> chaineOperation: " + chaineOperation);
}

function updateAffichage() {
    document.getElementById("ecran-affichage").value = chaineOperation;
}