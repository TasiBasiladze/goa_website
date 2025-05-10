const button = document.getElementById("btn");
const img = document.getElementById("img")
let list = [
    "./photo1.jpg",
    "./photo2.jpg",
    "./photo3.jpg"
]
let i = 0
button.addEventListener("click", () => {
    i++
    if (i === list.length){
        i = 0
    }
    img.src = list[i]
})
