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
        // console.log(arrOfButtons,buttonPressed)
        
    }
})

button.addEventListener("click", () => {
    score = 0;
    round = 0;
    buttonPressed = [];
    arrOfButtons = [];
    button.textContent = score;
    document.getElementById("start").style.backgroundColor = "green"
    randButton()
})

// compeare both arrays, each turn and add a score and run randButton()


function compearer(arr1, arr2) {
    let length = arr2.length - 1;
    // console.log(arr1[length], arr2[length])
    score = score +1
    if (arr1[length] === arr2[length]) {
        // console.log("correct")
        button.textContent = score;
        if (arr1.length === arr2.length) {
            // console.log("round done")
            buttonPressed = [];
            randButton()
        }
    } else {
        // console.log("false")
        document.getElementById("start").style.backgroundColor = "red"
    }

}


function randButton() {
    const buttons = ['button1', 'button2', 'button3', 'button4'];
    const randomIndex = Math.floor(Math.random() * buttons.length)
    arrOfButtons.push(buttons[randomIndex])

    illuminator()
}


function illuminator() {
    console.log(arrOfButtons)
    arrOfButtons.forEach((elementid, index) => {
        setTimeout(() => {
            const element = document.getElementById(elementid)
            const styles = window.getComputedStyle(element).getPropertyValue("background-color")
            document.getElementById(elementid).style.backgroundColor = "lightgray"

            //sound
            let src = "./audio/" + elementid + ".wav"
            let audio = document.createElement("audio")
            audio.src = src
            audio.play()

            setTimeout(() => {
                document.getElementById(elementid).style.backgroundColor = styles
            }, 300);
            // document.getElementById(elementid).style.backgroundColor = styles
        }, index*500);
            
    });
}