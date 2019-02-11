//IF  consente di eseguire una determinata serie di istruzioni quando una determinata condizione è verificata
//differenza fra var e const: const non è modificabile una volta dichiarata, se dichiarata come in questo caso uguale a 10, rimarra sempre uguale a 10
//      e si scrive in UPPERCASE ovvero tutto maiuscolo con l'utilizzo del trattino basso 

const COMPARABLE_NUMBER = 10;
var readedNumber = prompt('insert a number:');

readedNumber = parseInt(readedNumber);

if(readedNumber == COMPARABLE_NUMBER ){
    alert("paragone OK");
}