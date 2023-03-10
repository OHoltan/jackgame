const doc = document.querySelector('.game');

const button = document.querySelector('button');

let arrOfButtons = [];

let start = false

doc.addEventListener("click", function(e) {
    // console.log(e.target.id)
    if (e.target.id == "button1" || e.target.id == "button2" || e.target.id == "button3" || e.target.id == "button4") {
        console.log("element was pressed")

    }
})


// compeare both arrays, each turn and add a score and run randButton()




function randButton() {
    const buttons = ['button1', 'button2', 'button3', 'button4'];
    const randomIndex = Math.floor(Math.random() * buttons.length)
    // return buttons[randomIndex]
    arrOfButtons.push(buttons[randomIndex])
}
