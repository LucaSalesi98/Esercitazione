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

// IF_ ELSE
function binaryCheck(){
    var myNumber = readNumber();
    var isThatNumberEqualToTen = isEqualeToTen();
    if(isThatNumberEqualToTen){
        printMessage('si, il numero è proprio uguale a 10.')
    } else{
        printMessage('no, non è 10')
    }
}


alert("simple check");
simpleCheck();




// 2, 5, 7, 13 --> primo
// 10 --> base
// 8, 64 --> octal

//Modo complicato e poco ordinato


function switchPie(myNumber){
    var returnedMessage = '';
    switch(myNumber){
        case 2:
        case 5:
        case 7:
        case 13:
            returnedMessage = 'primo';
            break;
        case 10:
            returnedMessage = 'base';
            break;
        case 8:
        case 64:
            returnedMessage = 'octal';
            break;
        } return returnedMessage
    }

function callSwitch(){
    var aNumber = readNumber();
    var message = switchPie(aNumber);
    printMessage(message);
}



//pseudo codice per calcolatrice

// mostra il menu in un alert

// leggi l'operazione da effettuare

// leggi gli operandi

// esegui lo switch per l'operazione da effettuare (e salva il risultato)

// scrivi il risultato














//versione senza funzioni
/*
const COMPARABLE_NUMBER = 10;
var readedNumber = prompt('insert a number:');

readedNumber = parseInt(readedNumber);

if(readedNumber == COMPARABLE_NUMBER ){
    alert("paragone OK");
}
*/
