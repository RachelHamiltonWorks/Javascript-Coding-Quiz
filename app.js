//Start quiz on button click "Start Quiz"
const startButton = document.getElementById("startQuiz")
startButton.addEventListener("click", generateQuiz)

//Variables
var quizContainer = document.getElementById("quiz");
var scoreContainer = document.getElementById("score"); //tallies points, will save to high scores
var highScores

//Quiz Generating Fuction aka the Quiz Machine
//if 'true' add to 10 to scoreContainer, if false subtract 10 from timer
function generateQuiz() {
  console.log("generated");
 quiz = [
    {
      question : "Question 1",
      answerChoices : [
        "Correct answer",
        "Wrong answer 1",
        "Wrong answer 2",
        "Wrong answer 3"
      ]
      
    },

    {
      question : "Question 2",
      answerChoices : [
        "Correct answer",
        "Wrong answer 1",
        "Wrong answer 2",
        "Wrong answer 3"
      ]
    }
   ]
  }

    // {
    //   question : "Question 3",
    //   answerChoices : [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // },

    // {
    //   question: "Question 4",
    //   answerChoices: [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // },

    // {
    //   question: "Question 5",
    //   answerChoices: [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // },

    // {
    //   question: "Question 6",
    //   answerChoices: [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // },

    // {
    //   question: "Question 7",
    //   answerChoices: [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // },

    // {
    //   question: "Question 8",
    //   answerChoices: [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // },

    // {
    //   question: "Question 9",
    //   answerChoices: [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // },

    // {
    //   question: "Question 10",
    //   answerChoices: [
    //     "Correct answer",
    //     "Wrong answer 1",
    //     "Wrong answer 2",
    //     "Wrong answer 3"
    //   ]
      
    // }




