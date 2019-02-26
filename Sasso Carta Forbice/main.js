//sasso = 0
//carta = 1
//forbice = 2

var PlayerChoise = '';

var sasso = 0;
var carta = 1;
var forbice = 2;

let getRandomNumber = function(start, range){
     let getRandom = Math.floor((Math.random() * range) + start);

     while(getRandom > range){
        let getRandom = Math.floor((Math.random() * range) + start);
     }
     return getRandom;
}



function ChoiseRock(){
    var PlayerChoise = 0;
    var AI = (getRandomNumber(0, 9));
    if(AI <= 3){
        //sasso contro carta
        console.log('Hai perso!')
    }
    if(AI > 3 && AI <= 6){
        //sasso contro forbici
        console.log('Hai vinto!')
    }
    if(AI > 6){
        //sasso contro sasso
  
        console.log('Pareggio!')
        }
    return ;
}

function ChoisePaper(){
    var PlayerChoise = 1;
    var AI = (getRandomNumber(0, 9));
    if(AI <= 3){
        //carta contro sasso
        console.log('Hai vinto!')
    }
    if(AI > 3 && AI <= 6){
        //carta contro carta
        console.log('Pareggio!')
    }
    if(AI > 6){
        //carta contro forbice
        console.log('Hai perso!')
    }

}

function ChoiseScissors(){
    var PlayerChoise = 2;
    var AI = (getRandomNumber(0, 9));
    if(AI <= 3){
        //forbice contro sasso
        console.log('Hai perso!')
    }
    if(AI > 3 && AI <= 6){
        //forbice contro carta
        console.log('Hai vinto!')
    }
    if(AI > 6){
        //forbice contro forbice
        console.log('Pareggio!')
    }

}

