
// mostra il menu in un alert

// leggi l'operazione da effettuare

// leggi gli operandi

// esegui lo switch per l'operazione da effettuare (e salva il risultato)

// scrivi il risultato

alert('Select the mathematical operation you want by writing it');

var math = prompt('somma-sottrazione-divisione-moltiplicazione');

var firstNumber = prompt(' insert first number ');
firstNumber = parseInt(firstNumber);

var secondNumber = prompt(' insert second number ');
secondNumber = parseInt(secondNumber);

function somma(){
    var risultato = firstNumber + secondNumber;
    alert(risultato);
}

function sottrazione(){
    var risultato = firstNumber - secondNumber;
    alert(risultato);
}

function divisione(){
    var risultato = firstNumber / secondNumber;
    alert(risultato);
}

function moltiplicazione(){
    var risultato = firstNumber * secondNumber;
    alert(risultato);
}

function doMath(){
    switch(math) {
        case "somma": somma();
            break;
        case "sottrazione": sottrazione();
            break;
        case "divisione": divisione();
            break;
        case "moltiplicazione": moltiplicazione();
            break;
    }

}

doMath();





