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

//Fruits Array
const fruits = [
    {name: "banana", image: "Banana.png"}, 
    {name: "banana", image: "Banana.png"}, 
    {name: "blueberry", image: "Blueberry.png"}, 
    {name: "blueberry", image: "Blueberry.png"}, 
    {name: "cherry", image: "Cherry.png"}, 
    {name: "cherry", image: "Cherry.png"}, 
    {name: "lemon", image: "Lemon.png"}, 
    {name: "lemon", image: "Lemon.png"}, 
    {name: "peach", image: "Peach.png"}, 
    {name: "peach", image: "Peach.png"}, 
    {name: "watermelon", image: "Watermelon.png"}, 
    {name: "watermelon" , image: "Watermelon.png"}, 
]

//Generate random numbers to create new fruit placements on board.
const newArr = [];

function generateRandomNum(length, max, min) {
    for (let i = 0; i < length; i++) {
        const newNum = Math.floor(Math.random() * (max - min)) + min;
        newArr.includes(newNum) ? length += 1 : newArr.push(newNum);
    }
    return newArr;
}
console.log(generateRandomNum(12, 12, 0));

//Create the game board -- how to make more efficient?
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
//E
let e = document.getElementById("E");
let imageE = `<img src="${fruits[newArr[4]].image}">`
e.innerHTML = imageE;
//F
let f = document.getElementById("F");
let imageF = `<img src="${fruits[newArr[5]].image}">`
f.innerHTML = imageF;
//G
let g = document.getElementById("G");
let imageG = `<img src="${fruits[newArr[6]].image}">`
g.innerHTML = imageG;
//H
let h = document.getElementById("H");
let imageH = `<img src="${fruits[newArr[7]].image}">`
h.innerHTML = imageH;
//I
let letterI = document.getElementById("I"); // i. is not allowed?
let imageI = `<img src="${fruits[newArr[8]].image}">`
letterI.innerHTML = imageI;
//J
let j = document.getElementById("J");
let imageJ = `<img src="${fruits[newArr[9]].image}">`
j.innerHTML = imageJ;
//K
let k = document.getElementById("K");
let imageK = `<img src="${fruits[newArr[10]].image}">`
k.innerHTML = imageK;
//L
let l = document.getElementById("L");
let imageL = `<img src="${fruits[newArr[11]].image}">`
l.innerHTML = imageL;

//Puts the 'covers' on the fruits using the inactive class
let inactive = document.querySelectorAll("img")

for (i = 0; i < fruits.length; i++) {
    inactive[i].classList.add("inactive")
}

//console.log(a.childNodes) //returns as nodelist, does not allow use of img values

//Event Listeners for Click
//A
a.addEventListener("click", () => {
    let element = a.querySelector("img") //queryselector returns as value and not a node list
    //console.log(element)
    element.classList.remove("inactive")
})
//B
b.addEventListener("click", () => {
    let element = b.querySelector("img")
    element.classList.remove("inactive")
})
//C
c.addEventListener("click", () => {
    let element = c.querySelector("img")
    element.classList.remove("inactive")
})
//D
d.addEventListener("click", () => {
    let element = d.querySelector("img")
    element.classList.remove("inactive")
})
//E
e.addEventListener("click", () => {
    let element = e.querySelector("img")
    element.classList.remove("inactive")
})
//F
f.addEventListener("click", () => {
    let element = f.querySelector("img")
    element.classList.remove("inactive")
})
//G
g.addEventListener("click", () => {
    let element = g.querySelector("img")
    element.classList.remove("inactive")
})
//H
h.addEventListener("click", () => {
    let element = h.querySelector("img")
    element.classList.remove("inactive")
})
//I
letterI.addEventListener("click", () => {
    let element = letterI.querySelector("img")
    element.classList.remove("inactive")
})
//J
j.addEventListener("click", () => {
    let element = j.querySelector("img")
    element.classList.remove("inactive")
})
//K
k.addEventListener("click", () => {
    let element = k.querySelector("img")
    element.classList.remove("inactive")
})
//L
l.addEventListener("click", () => {
    let element = l.querySelector("img")
    element.classList.remove("inactive")
})

//Function to check for correct or incorrect match


