//IF  consente di eseguire una determinata serie di istruzioni quando una determinata condizione è verificata
//differenza fra var e const: const non è modificabile una volta dichiarata, se dichiarata come in questo caso uguale a 10, rimarra sempre uguale a 10
//      e si scrive in UPPERCASE ovvero tutto maiuscolo con l'utilizzo del trattino basso 

//FUNCTION    

function readNumber() {
    var myNumber = prompt('insert a number:'); 
    myNumber = parseInt(myNumber);
    return myNumber;
}

function printMessage(message) {
    var myMessage = message;
    alert (myMessage);
    return;
}

function isEqualeToTen(myNumber){
    const COMPARABLE_NUMBER = 10;
    return myNumber == COMPARABLE_NUMBER;

}

function simpleCheck(){
var myNumber = readNumber();
var isThatNumberEqualToTen = isEqualeToTen(myNumber);

if(isThatNumberEqualToTen){
    printMessage('YES, the number is equal to ten');
}

}

simpleCheck();

/*
const COMPARABLE_NUMBER = 10;
var readedNumber = prompt('insert a number:');

readedNumber = parseInt(readedNumber);

if(readedNumber == COMPARABLE_NUMBER ){
    alert("paragone OK");
}
*/
