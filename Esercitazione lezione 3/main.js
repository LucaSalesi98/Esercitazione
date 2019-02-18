//costrutti iterativi

console.log('costrutti iterativi');

// i costrutti iterativi         for     foreach    while      possono essere comodi per percorrere tutto il percorso di un array


// CICLO FOR

//for( <inizializzazione> ; <condizione> ; <operazione>){
//   <blocco di codice>
//}


// for ( var count = 1; count < 10; count++){
// console.log("sto contando : ", count);
// doSomethingWithNumber(count);
//}


const MILK_FOR_A_PORTION = 60;


function printMilkByPeople(peopleNumber){
    var milkTotal =  peopleNumber * MILK_FOR_A_PORTION;
    console.log('il latte necessario per ' + peopleNumber +' persone corrisponde a' + milkTotal + 'ml'   );
}

function printMilkQuantities(){

        for(var peopleNumber = 1; peopleNumber <= 10; peopleNumber++ ){
            printMilkByPeople(peopleNumber);
        }

}
// ARRAY 
var names = ['luca', 'francesco', 'carlo', 'sam', 'genoveffo'];

function printTarget(name){
    console.log('Target of today is customer ' + name);
}

for(var nameIndex in names){ 
    
    var name = names[nameIndex]
    printTarget(name);

}

