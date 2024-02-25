const winningnumber = 5

let zviadi = prompt("If You Choose The Correct Number From 1-10 You Win")


if (zviadi == ""){
    alert("Must Input Information")
}
else{
    if (isNaN(zviadi)) 
    {
    alert("Must input numbers");
    
    }
    else
    {
        if (zviadi >= 0 && zviadi <= 10){
            if (zviadi == winningnumber){
                document.open();
                document.write("<h1>You Won!</h1>");
                document.close();
            }
            else{
                document.open();
                document.write("<h1>You Lost!</h1>");
                document.close();// true falsis magivrad es miweria imitoro ufro logikuri iyo
            }
        }
        else{
            alert("Input A Valid Number")
        }
    }
}

