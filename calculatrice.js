var chaineOperation = new String();

function concatenerOperation(touche) {
    chaineOperation = chaineOperation.concat(touche);
    console.log("concatenerOperations -> chaineOperation: " + chaineOperation);
}

function calculResultat() {
    chaineOperation = eval(chaineOperation);
    console.log("calculResultat -> chaineOperation: " + chaineOperation);
}

function effacerResultat() {
    chaineOperation = "";
    console.log("effacerResultat -> chaineOperation: " + chaineOperation);
}