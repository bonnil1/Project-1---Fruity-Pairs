//Start button + Timer

const startButton = document.getElementById("start-btn");
let timer = document.getElementById("timer")

//startButton.addEventListener("click", countDown()); //figure out how to make timer dependent on click event

setInterval(countDown, 1000)

let time = 20;

function countDown() {
    let sec = time % 60;
    sec = pad(sec)
    timer.innerHTML = `00:${sec}`; 
    time--;
    time = time < 0 ? 0 : time;

    function pad(unit) {
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
if (time === 0) {
    timer.innerHTML = "Game Over! Would you like to try again?" //did not work...
}

//Can I create a class to make this faster??
/*
//Banana 1
const ban1 = document.getElementById("A");
const banImg1 = document.getElementById("imgA");

ban1.addEventListener("click", function() {
    banImg1.classList.remove("inactive");
})

//Banana 2
const ban2 = document.getElementById("B");
const banImg2 = document.getElementById("imgB");

ban2.addEventListener("click", function() {
    banImg2.classList.remove("inactive");
})
*/

const fruits = [
    {name: "banana", image: "Banana.png"}, 
    {name: "banana", image: "Banana.png"}, 
    {name: "blueberry", image: "Blueberry.png"}, 
    {name: "blueberry", image: "Blueberry.png"}, 
    /*
    {name: cherry, image: <a href="#"><img src="Cherry.png"/></a>}, 
    {name: cherry, image: <a href="#"><img src="Cherry.png"/></a>}, 
    {name: lemon, image: <a href="#"><img src="Lemon.png"/></a>}, 
    {name: lemon, image: <a href="#"><img src="Lemon.png"/></a>}, 
    {name: peach, image: <a href="#"><img src="Peach.png"/></a>}, 
    {name: peach, image: <a href="#"><img src="Peach.png"/></a>}, 
    {name: watermelon, image: <a href="#"><img src="Watermelon.png"/></a>}, 
    {name: watermelon, image: <a href="#"><img src="Watermelon.png"/></a>}, 
    */
]

//Generate random numbers to create new fruit placements on board.
const newArr = [];

function generateRandomNum(length, max, min) {
    for (i = 0; i < length; i++) {
        const newNum = Math.floor(Math.random() * (max - min)) + min;
        newArr.includes(newNum) ? length += 1 : newArr.push(newNum);
    }
    return newArr;
}
console.log(generateRandomNum(4, 4, 0)); //increase length to 12 later.

//Create the game board -- start with 4 squares first.
//A
let a = document.getElementById("A");
let imageA = `<img src="${fruits[newArr[0]].image}">`
a.innerHTML = imageA;
//B
let b = document.getElementById("B");
let imageB = `<img src="${fruits[newArr[1]].image}">`
b.innerHTML = imageB;
//C
let c = document.getElementById("C");
let imageC = `<img src="${fruits[newArr[2]].image}">`
c.innerHTML = imageC;
//D
let d = document.getElementById("D");
let imageD = `<img src="${fruits[newArr[3]].image}">`
d.innerHTML = imageD;
/*
//Puts the 'covers' on the fruits using the inactive class
let inactive = document.querySelectorAll("img")
for (i = 0; i < fruits.length; i++) {
    inactive[i].classList.add("inactive")
}
*/
//
