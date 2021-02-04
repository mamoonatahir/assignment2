var alpha1 = prompt("Enter any alphabate");
alpha = alpha1.toLocaleLowerCase();

if(alpha === "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u" ){
    console.log(true);
}
else if(alpha){
    console.log(false);
}
