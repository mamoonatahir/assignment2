var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var sign = prompt("Enter operation + - / * % ");

var result 
if( sign=="+"){
    result= num1+num2;
    console.log(result);
    document.write("<h1> " + num1 + " + " + num2+ " = "  + result);
}
else if( sign=="-"){
    result= num1-num2;
    console.log(result);
    document.write("<h1> " + num1 + " - " + num2+ " = "  + result);
    
}
else if( sign=="*"){
    result= num1*num2;
    console.log(result);
    document.write("<h1> " + num1 + " * " + num2+ " = "  + result);
}
else if( sign=="/"){
    result= num1/num2;
    console.log(result);
    document.write("<h1> " + num1 + " / " + num2+ " = "  + result);

}
else if( sign=="%"){
    result= num1%num2;
    console.log(result);
    document.write("<h1> " + num1 + " % " + num2+ " = "  + result);


}