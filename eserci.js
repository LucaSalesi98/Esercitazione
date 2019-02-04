//test

var myNumber = prompt('write a number');  // prompt rialascia una stringa 
myNumber =parseInt(myNumber);

if(myNumber < 0) {
    alert('given number is negative.');
    myNumber = Math.abs(myNumber);
} else{
    alert('given number is positive');
}
var squareRoot = Math.sqrt(myNumber);

alert(squareRoot);
