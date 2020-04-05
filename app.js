//Start quiz on button click "Start Quiz"
const startButton = document.getElementById("startQuizAndTimer")
startButton.addEventListener("click", generateQuiz)


//Variables
var quizContainer = document.getElementById("quizContainer");
var scoreContainer = document.getElementById("score"); //tallies points, will save to high scores
var highScores

//Timer 
document.getElementById("startQuizAndTimer").addEventListener("click", function(){
  var timeleft = 100;

  var timer = setInterval(function function1(){
  document.getElementById("countdown").innerHTML = timeleft + 
  "&nbsp"+"seconds remaining";

  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Time is up!"
  }
  }, 1000);

  console.log(countdown);
});

//Quiz Generating Fuction aka the Quiz Machine
//loop over all arrays (Q/A sets) with:
//if correct answer == true add to 10 to scoreContainer, else subtract 10 from timer
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




