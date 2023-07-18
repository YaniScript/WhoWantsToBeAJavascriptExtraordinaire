var questions = [
    {
        question: "Question #1", //add the question between the quotes
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #2", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #3", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #4", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"  
    },
    {
        question: "Question #5", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #6", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #7", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #8", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #9", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    },
    {
        question: "Question #10", //add the next question
        answers: ["A", "B", "C", "D"],
        rightAnswer: "A"
    }
] 


var interval
var timeLeft = 60

var questionIndex = 1
console.log(questions[questionIndex].question)
questionIndex = 0
console.log(questions[questionIndex].question)

function startTimer() {
    interval = setInterval(() => {
        if (timeLeft < 1) {
            clearInterval(interval);
            console.log("Game Over!")
        } else {
            timeLeft--
            console.log(timeLeft)
        }
    }, 1000);
}

startTimer();