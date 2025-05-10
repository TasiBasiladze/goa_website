const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const form = document.getElementById("form");
let i = 1
nextBtn.addEventListener("click", () => {
    if(i < 3){
        i++
        document.getElementById(`div${i}`).style.display = "grid";
        for(let j = 1; j < i; j++){
            document.getElementById(`div${j}`).style.display = "none";
        }
    }
})

backBtn.addEventListener("click", () => {
    if(i > 1){
        document.getElementById(`div${i}`).style.display = "none";
        i--
        document.getElementById(`div${i}`).style.display = "grid";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const feedBack = form.elements.feedback.value;
    let x = 1;
    while (localStorage.getItem(`feedback${x}`)) {
        x++;
    }
    localStorage.setItem(`feedback${x}`, JSON.stringify(feedBack));
    form.reset()
});