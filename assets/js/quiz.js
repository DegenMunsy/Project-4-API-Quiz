// set variables for the quiz
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

//  generate an array with the questions for the quiz
let questions = [
  {
    question: "What version of html is the most recent??",
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "5",
    answer: 4
  },
  {
    question: "Which of the following is a css package",
    choice1: "BootLace",
    choice2: "BootStrap",
    choice3: "VelcroStrap",
    choice4: "WorkBoots",
    answer: 2
  },
  {
    question: "Where should you push your code frequently?",
    choice1: "Space",
    choice2: "Github",
    choice3: "Local Storage",
    choice4: "Blockchain",
    answer: 2
  }
];

//Constants for scoring and max questions
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

// start game w/ question counter, score, available questions from the array, get new question function
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

// formula to get new questions until MAX_QUESTIONS
getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //SEND INFO TO end.html
    return window.location.assign("/end.html");
  }
  // run the question counter and subtract that number from max questions
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
 
  //Move the progress bar as questions are answered
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // make variable for math function to 
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
// allow available questions to change
  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};
// add event listener to answer choices
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
// add variable for correct/incorrect answers
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
// if statement is correct add a bonus 
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }
// add answer to the parent element
    selectedChoice.parentElement.classList.add(classToApply);
// set a timeout after the question to allow for smooth transition
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

// actively set score for the quiz 
incrementScore = num => {
  score += num;
  scoreText.innerText = score;
  localStorage.setItem('finalScore', score);
};

startGame();
