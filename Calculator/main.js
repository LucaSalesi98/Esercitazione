
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

switch(math) {
    case "somma": aCaso();
    break;
    case 20: console.log('test');
    break;
}

function aCaso(){
    console.log('Successo!');
}







