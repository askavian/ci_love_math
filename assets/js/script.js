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
                runGame(gameType);
            }
        });
    }

    runGame("addition"); // FUNCTION CALL starts game as soon as page is loaded or refreshed

});

// DOCSTRING comments (below) is displayed when calling function (below: runGame();)
/**
 * The main game "loop", called when the script is first loaded
 * after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`; // Gives Alert and stops game is Error
    }
    
}


function checkAnswer() {
    
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc...)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText); // parseInt gives number as INTEGER (whole number)
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Uniplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }        
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}


// DELETE
console.log("END TEST");