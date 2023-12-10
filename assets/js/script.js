// wait for the DOM to finish loading before running the game
//get the button elements and add event lsiteners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`you clicked ${gametype}`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion()  {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

