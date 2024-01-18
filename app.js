//Start button 
const startButton = document.getElementById("start-btn");

//Timer Variables + Timer Function
let timer = document.getElementById("timer")
let time = 30;
let start = 0;

function countDown() { //cite source
    let sec = time % 60;
    sec = pad(sec)
    timer.innerHTML = `00:${sec}`; 
    time--;
    time = time < 0 ? 0 : time;
    if (time === 0) {
        timer.innerHTML = "Time's Up! Try Again!";
    }

    function pad(unit) {
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }
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

//Generate random numbers to create new fruit placements on board

const newArr = [];

function generateRandomNum(length, max, min) { //cite source
    for (let i = 0; i < length; i++) {
        const newNum = Math.floor(Math.random() * (max - min)) + min;
        newArr.includes(newNum) ? length += 1 : newArr.push(newNum);
    }
    return newArr;
}
generateRandomNum(12, 12, 0);

//Create the game board -- how to make more efficient?
//for loop that goes through the array + figure out how to iterate through divs...
//Initialize div A-L variables
//A
let a = 0;
let imageA = 0;
//B
let b = 0;
let imageB = 0;
//C
let c = 0;
let imageC = 0;
//D
let d = 0;
let imageD = 0;
//E
let e = 0;
let imageE = 0;
//F
let f = 0;
let imageF = 0;
//G
let g = 0;
let imageG = 0;
//H
let h = 0;
let imageH = 0;
//I
let letterI = 0; // i. is not allowed?
let imageI = 0;
//J
let j = 0;
let imageJ = 0;
//K
let k = 0;
let imageK = 0;
//L
let l = 0;
let imageL = 0;

//Function to assign fruits to a div
function arrangeFruits() {
    //A
    a = document.getElementById("A");
    imageA = `<img src="${fruits[newArr[0]].image}">`
    a.innerHTML = imageA;
    //B
    b = document.getElementById("B");
    imageB = `<img src="${fruits[newArr[1]].image}">`
    b.innerHTML = imageB;
    //C
    c = document.getElementById("C");
    imageC = `<img src="${fruits[newArr[2]].image}">`
    c.innerHTML = imageC;
    //D
    d = document.getElementById("D");
    imageD = `<img src="${fruits[newArr[3]].image}">`
    d.innerHTML = imageD;
    //E
    e = document.getElementById("E");
    imageE = `<img src="${fruits[newArr[4]].image}">`
    e.innerHTML = imageE;
    //F
    f = document.getElementById("F");
    imageF = `<img src="${fruits[newArr[5]].image}">`
    f.innerHTML = imageF;
    //G
    g = document.getElementById("G");
    imageG = `<img src="${fruits[newArr[6]].image}">`
    g.innerHTML = imageG;
    //H
    h = document.getElementById("H");
    imageH = `<img src="${fruits[newArr[7]].image}">`
    h.innerHTML = imageH;
    //I
    letterI = document.getElementById("I"); // i. is not allowed?
    imageI = `<img src="${fruits[newArr[8]].image}">`
    letterI.innerHTML = imageI;
    //J
    j = document.getElementById("J");
    imageJ = `<img src="${fruits[newArr[9]].image}">`
    j.innerHTML = imageJ;
    //K
    k = document.getElementById("K");
    imageK = `<img src="${fruits[newArr[10]].image}">`
    k.innerHTML = imageK;
    //L
    l = document.getElementById("L");
    imageL = `<img src="${fruits[newArr[11]].image}">`
    l.innerHTML = imageL;
}
arrangeFruits();

//Puts the 'covers' on the fruits using the inactive class
function covers() {
    let inactive = document.querySelectorAll("img")

    for (i = 0; i < fruits.length; i++) {
        inactive[i].classList.add("inactive")
    }
}
covers();

//Initialize variables in start button event listener
let win = document.getElementById("win-tag");
let guessesLeft = 0;
let guesses = 0;
let matches = 0;
let element = 0;
let imgSRC = 0;
let firstPick = 0;

const divAlpha = [a, b, c, d, e, f, g, h, letterI, j, k, l]
let clickEvent = [];

//On click on start buttton, timer starts + can click cards to reveal fruits
startButton.addEventListener("click", function() {
    //Starts 30 second time
    time = 30;
    start = setInterval(countDown, 1000);

    //Event Listeners for Card Click
    guessesLeft = 5;
    guesses = document.getElementById("lives-left");
    guesses.innerHTML = `Guesses Left: ${guessesLeft}`;

    //Matches Counter
    matches = 0;

    divAlpha.forEach((div) => {
        div.addEventListener("click", () => {
        element = div.querySelector("img") //queryselector returns as value and not a node list
        element.classList.remove("inactive")
        imgSRC = div.querySelector("img").src;

        if (clickEvent.length === 0) {
            clickEvent[0] = imgSRC;
            console.log(clickEvent[0]);
            element.setAttribute("id", "first-pick"); //add ID tag so I can call the first card again
        } else {
            clickEvent[1] = imgSRC;
            console.log(clickEvent[1]);
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) { //match condition
                    matches++;
                    firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    if (matches === 6) {
                        win.innerHTML = "YAY, you win!"
                        clearInterval(start);
                    } 
                } else { //not a match condition
                    element.classList.add("inactive"); //add "inactive" tag to remove img from screen
                    firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id")
                    clickEvent.splice(0,2);
                    guessesLeft--;
                    guesses.innerHTML = `Guesses Left: ${guessesLeft}`;
                    if (guessesLeft === 0) {
                        guesses.innerHTML = "You're out of guesses! Try again!";
                        clearInterval(start);
                    }
                }
            }, 500)
        }
        })
    })
});

//Play Again event listener
const playAgain = document.getElementById("play-again");

playAgain.addEventListener("click", function() {
    guessesLeft = 5;
    newArr.splice(0,12);
    generateRandomNum(12, 12, 0);
    arrangeFruits();
    covers();
})

//Version 1 (more redundant code) below
/*
checkCards();

function checkCards() {

    let clickEvent = [];

    //A
    a.addEventListener("click", () => {
        let element = a.querySelector("img") //queryselector returns as value and not a node list
        //console.log(element)
        element.classList.remove("inactive")
        let aSRC = a.querySelector("img").src;

        if (clickEvent.length === 0) {
            clickEvent[0] = aSRC;
            element.setAttribute("id", "first-pick"); //add ID tag so I can call the first card again
        } else {
            clickEvent[1] = aSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) { //match condition
                    console.log("match") // img remain on screen
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else { //not a match condition
                    element.classList.add("inactive"); //add "inactive" tag to remove img from screen
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id")
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //B
    b.addEventListener("click", () => {
        let element = b.querySelector("img")
        element.classList.remove("inactive")
        let bSRC = b.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = bSRC;
            element.setAttribute("id", "first-pick"); 
        } else {
            clickEvent[1] = bSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //C
    c.addEventListener("click", () => {
        let element = c.querySelector("img")
        element.classList.remove("inactive")
        let cSRC = c.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = cSRC;
            element.setAttribute("id", "first-pick"); 
        } else {
            clickEvent[1] = cSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) { 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else { 
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //D
    d.addEventListener("click", () => {
        let element = d.querySelector("img")
        element.classList.remove("inactive")
        let dSRC = d.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = dSRC;
            element.setAttribute("id", "first-pick");
        } else {
            clickEvent[1] = dSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //E
    e.addEventListener("click", () => {
        let element = e.querySelector("img")
        element.classList.remove("inactive")
        let eSRC = e.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = eSRC;
            element.setAttribute("id", "first-pick"); 
        } else {
            clickEvent[1] = eSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
        
    })
    //F
    f.addEventListener("click", () => {
        let element = f.querySelector("img")
        element.classList.remove("inactive")
        let fSRC = f.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = fSRC;
            element.setAttribute("id", "first-pick"); 
        } else {
            clickEvent[1] = fSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //G
    g.addEventListener("click", () => {
        let element = g.querySelector("img")
        element.classList.remove("inactive")
        let gSRC = g.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = gSRC;
            element.setAttribute("id", "first-pick"); 
        } else {
            clickEvent[1] = gSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //H
    h.addEventListener("click", () => {
        let element = h.querySelector("img")
        element.classList.remove("inactive")
        let hSRC = h.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = hSRC;
            element.setAttribute("id", "first-pick");
        } else {
            clickEvent[1] = hSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //I
    letterI.addEventListener("click", () => {
        let element = letterI.querySelector("img")
        element.classList.remove("inactive")
        let letterISRC = letterI.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = letterISRC;
            element.setAttribute("id", "first-pick"); 
        } else {
            clickEvent[1] = letterISRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //J
    j.addEventListener("click", () => {
        let element = j.querySelector("img")
        element.classList.remove("inactive")
        let jSRC = j.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = jSRC;
            element.setAttribute("id", "first-pick");
        } else {
            clickEvent[1] = jSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive");
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //K
    k.addEventListener("click", () => {
        let element = k.querySelector("img")
        element.classList.remove("inactive")
        let kSRC = k.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = kSRC;
            element.setAttribute("id", "first-pick");
        } else {
            clickEvent[1] = kSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })
    //L
    l.addEventListener("click", () => {
        let element = l.querySelector("img")
        element.classList.remove("inactive")
        let lSRC = l.querySelector("img").src;
        
        if (clickEvent.length === 0) {
            clickEvent[0] = lSRC;
            element.setAttribute("id", "first-pick");
        } else {
            clickEvent[1] = lSRC;
            setTimeout(function() {
                if (clickEvent[0] === clickEvent[1]) {
                    let firstPick = document.getElementById("first-pick");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                } else {
                    element.classList.add("inactive"); 
                    let firstPick = document.getElementById("first-pick");
                    firstPick.classList.add("inactive");
                    firstPick.removeAttribute("id");
                    clickEvent.splice(0,2);
                    livesLeft--;
                    lives.innerHTML = `Lives Left: ${livesLeft}`;
                }
            }, 500)
        }
    })

}
*/
