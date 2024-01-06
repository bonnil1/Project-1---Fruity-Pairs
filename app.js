
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", timer())

function timer() {
    let sec = 15;
    let timer = setInterval(function() { myTimer() }, 1000);
}



/*
const cards = document.getElementsByClassName("cover")
console.log(cards)
*/
const a = document.getElementById("A")
console.log(a);
const image = document.querySelectorAll("img")

a.addEventListener("click", function (event) {
    image.classList.remove("inactive");
})