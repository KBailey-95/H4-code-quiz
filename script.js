//grab relevant DOM elements
var startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
var shuffledQuestions = "";
var currentQuestion = "";
const answerButtonsEl = document.getElementById("answer-buttons");




//make start and next buttpon
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion();
})


//set what happens upon game start
function startQuiz(){
console.log("hello");
//hide start button when game begins
startButton.classList.add("hide");
//shuffle questions every time game is started 
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestion = 0;
questionContainer.classList.remove("hide");
nextButton.classList.remove("hide");
nextQuestion();
}

//move to the next question
function nextQuestion(){
    showQuestion(shuffledQuestions[currentQuestion]);

}

function showQuestion(question) {
   resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer);
        answerButtonsEl.appendChild("button");

});

//reset state of the quiz after a question is answered 
function resetState(){
    nextButton.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild;
        (answerButtonsEl.firstChild);
    }
}

function chooseAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

}

//how the correct answer is actually selected
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
]}