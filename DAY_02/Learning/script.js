/*********************************************************************************************/

//Strings

const a="Nova Pathak"

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

console.log(a.length)

const b="Hello"

const c="World"

console.log(b+" "+c)

console.log(`${b} ans ${c}`)

const d="Hello world"

console.log(d.toUpperCase())
console.log(d.toLowerCase())
console.log(d.length)
console.log(d.slice(1,4))

console.log(d.replace("Hello","Bye"))

/*********************************************************************************************/

//Arrays


const x=[1,2,3,4]

console.log(x[0]);
console.log(x[1]);

console.log(x.length)
console.log(x)

x[0]=10;

console.log(x)

console.log(x.toString())

console.log(x.join(" and "))

const y=[1,2,3,4]

console.log(x.concat(y))

//Splice

console.log(x.slice(1,4))
console.log(x.splice(1,4))

y.forEach((val,index,y)=>{
    console.log(val,index,y)
})
