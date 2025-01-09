// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    // Event Listener returns all buttons on page as array (4 game button, 1 submit button)
    let buttons = document.getElementsByTagName("button");

    // 1of2 methond for iterating through array NOT used in this
    // for (let i = 0; i < buttons.length; i++); {
    //
    //}

    // 2of2 modern version because index notation is not neccessary when navigating array
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

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

function displayAdditionQuestion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}


// DELETE
console.log("END TEST");