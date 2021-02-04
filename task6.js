var inputNum = parseInt(prompt("Enter the number"));
var evenNum = inputNum % 2; 
if(evenNum === 0) { 
 console.log( inputNum + " is an Even number ");
 document.write( "<h1>Number "+ inputNum + " is an Even number</h1>");
}
else if(evenNum) {
    console.log(inputNum + " is an odd number");
    document.write( "<h1>Number "+ inputNum + " is an Odd number</h1>");
}
