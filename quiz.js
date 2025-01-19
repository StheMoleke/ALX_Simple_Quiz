// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Feedback element
    const feedback = document.getElementById("feedback");

    // Check if user selected an answer
    if (!userAnswer) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "red";
        return;
    }

    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
