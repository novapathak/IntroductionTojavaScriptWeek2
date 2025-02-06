let a="hello"
let count=0;

for(let i of a){
    if((i=='a' || i=='e' || i=='i' || i=='o' || i=='u')|| (i=='A' || i=='E' || i=='I' || i=='O' || i=='U')){
        count++;
    }
}

console.log(count);