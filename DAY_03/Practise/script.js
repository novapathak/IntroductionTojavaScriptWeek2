console.log("Hello world")

console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.childNodes) 
console.log(document.body.firstElementChild.children)


console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").attributes)

const button=document.querySelector(".alert")

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="This is a click"
    alert("This is a alert message...")
})

setInterval(()=>{
    document.querySelector(".button-set").style.background=getRandomColor()
},5000)