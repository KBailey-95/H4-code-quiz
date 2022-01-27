const startButton = document.getElementsByID("start-btn");
const questionsContainer = document.getElementById("question-container");
const shuffledQuestions, currentQuestionIndex





startButton.addEventListener("click", startQuiz);

function startQuiz(){
startButton.classList.add("hide");
questionsContainer.classList.remove("hide");
nextQuestion();
}

function nextQuestion(){

}

function chooseAnswer() {

}

const questions = [
    {
        question: "Fill in the blank. H_ML",
        answers: [
            {text: "I", correct: false },
            {text: "T", correct: true },
            {text: "A", correct: false },
            {text: "K", correct: false }
        ]
    }
]