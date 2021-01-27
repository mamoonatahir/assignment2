var mathMarks = parseFloat(prompt("Enter your Math marks"));
var sciMarks = parseFloat(prompt("Enter your Science Marks"));
var engMarks = parseFloat(prompt("Enter your English Marks"));
var totalMarks = mathMarks + sciMarks + engMarks;
console.log("Maths Marks = " + mathMarks);
console.log("Science Marks = " + sciMarks);
console.log("English Marks =  "+ engMarks);
document.write("<h1>Maths Marks = " + mathMarks);
document.write("<h1>Science Marks = " + sciMarks);
document.write("<h1>English Marks = " + engMarks);
console.log("Marks Obtained =" +totalMarks);
document.write("<h1>  Marks Obtained = " + totalMarks );
var perCent = totalMarks / 300 *100;
console.log(perCent);
document.write("<h1> Percentage = " + perCent +"%");
if(perCent > 79 && perCent <= 100) { 
    console.log("Grade A-one");
    document.write("<h1>Grade A-one </h1.");
    document.write("<h1>Remarks :  Excellent </h1>");
}
else if(perCent >= 70) {
    console.log("A Grade");
    document.write("<h1>Grade A</h1> ");
    document.write("<h1>Remarks:  Good</h1>");
}
else if(perCent >= 60) {
    console.log("Grade B");
    document.write("<h1>Grade B</h1> ");
    document.write("<h1>Remarks:  You need to improve</h1>");
}
else if(perCent <60) {
    console.log("Grade = Fail");
    document.write("<h1>Grade = Fail</h1> ");
    document.write("<h1>Remarks:  Sorry</h1>");
}

