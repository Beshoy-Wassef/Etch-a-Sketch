console.log("Hello World")

const container = document.querySelector(".container")
const button = document.querySelector("button")

for (let i = 0; i < 256; i++){
    const div = document.createElement("div")
    div.classList.add("square")
    let opacity = 1
    div.addEventListener("mouseover", function (){

        div.style.background = `rgb(0 0 0 / ${opacity = opacity- 0.1})`;
        console.log("fired")
        console.log(opacity)
    })
    container.appendChild(div)
}


button.addEventListener("click", function (e){
    const alert = Number(prompt("Enter the number of squares per side (max 100)"))
    if (alert >= 100){
        alert("Too many squares! (max 100)");
        e.preventDefault()
    }

    container.replaceChildren()
    const newArea = 768 / alert;

    for (let i = 0; i < (alert*alert); i++){
        //empty container
        //create new divs
        const div1 = document.createElement("div")
        //div1.classList.add("square")
        console.log(newArea)
        div1.style.width = `${(newArea - 8)}px`
        div1.style.height = `${(newArea - 8)}px`
        div1.style.border = "2px solid black"

        div1.addEventListener("mouseover", function (){
        div1.style.backgroundColor = "black";
    })
        container.appendChild(div1)

    }
        
})

