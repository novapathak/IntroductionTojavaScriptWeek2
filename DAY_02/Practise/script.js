function addition(a,b)
{
    answer=a+b;
    console.log(answer);

}

function subtraction(a,b)
{
    answer=a-b;
    console.log(answer);
    
}

function division(a,b)
{
    answer=a/b;
    console.log(answer);
    
}

function multiplication(a,b)
{
    answer=a*b;
    console.log(answer);
    
}

function exponentation(a,b)
{
    answer=a**b;
    console.log(answer);
    
}

let a=prompt("Enter a number");
let b=prompt("Enter another number");

if(Math.random()<0.1)
{
    console.log("Addition is two number is")
    subtraction(a,b);
    console.log("multiplicationis two number is")
    addition(a,b);
    console.log("subtraction is two number is")
    division(a,b);
    console.log("division is two number is")
    exponentation(a,b);
    

}
else{
    console.log("Addition is two number is")
    addition(a,b);
    console.log("multiplication is two number is")
    multiplication(a,b);
    console.log("subtraction is two number is")
    subtraction(a,b);
    console.log("divisionis two number is")
    division(a,b);
}