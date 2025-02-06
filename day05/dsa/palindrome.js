let a="welcome"
let b=""

for(let i=a.length-1;i>=0;i--){
    b+=a[i];
}

if(a==b){
    console.log("Yes! It is a palindrome.")
}
else{
    console.log("No! It is not a palindrome.")
}