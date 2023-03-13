const doc = document.querySelector('.game');

const button = document.querySelector('button');

let arrOfButtons = [];

let buttonPressed = [];

let start = false;

let round = 0;

let score = 0;

doc.addEventListener("click", function(e) {
    // console.log(e.target.id)
    if (e.target.id == "button1" || e.target.id == "button2" || e.target.id == "button3" || e.target.id == "button4") {
        console.log("element was pressed", e.target.id)
        buttonPressed.push(e.target.id)
        compearer(arrOfButtons,buttonPressed)
        console.log(arrOfButtons,buttonPressed)
        
    }
})

button.addEventListener("click", () => randButton())


// compeare both arrays, each turn and add a score and run randButton()


function compearer(arr1, arr2) {
    let length = arr2.length - 1;
    // console.log(arr1[length], arr2[length])
    score = score +1
    if (arr1[length] === arr2[length]) {
        console.log("correct")
        if (arr1.length === arr2.length) {
            console.log("round done")
            buttonPressed = [];
            randButton()
        }
    } else {
        console.log("false")
    }

}


function randButton() {
    const buttons = ['button1', 'button2', 'button3', 'button4'];
    const randomIndex = Math.floor(Math.random() * buttons.length)
    // return buttons[randomIndex]
    arrOfButtons.push(buttons[randomIndex])

    console.log(buttons[randomIndex])
    illuminator()
}


function illuminator() {
    console.log(arrOfButtons)
    arrOfButtons.forEach(elementid => {
        const element = document.getElementById(elementid)
        const styles = window.getComputedStyle(element).getPropertyValue("background-color")
        console.log(styles)
        // console.log(color)
        document.getElementById(elementid).style.backgroundColor = "lightgray"
        // fix dette
        document.getElementById(elementid).style.backgroundColor = styles
    });
}