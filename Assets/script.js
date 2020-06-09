var questions = [
  {
    id: 0,
    title: "question 1__",
    options: [
      {
        id: 0,
        label: "1. Answer 1A",
      },
      {
        id: 1,
        label: "2. Answer 1B",
      },
      {
        id: 2,
        label: "3.Answer 1C",
      },
    ],
  },
  {
    id: 1,
    title: "question 2__",
    options: [
      {
        id: 0,
        label: "1. Answer 2A",
      },
      {
        id: 1,
        label: "2. Answer 2B",
      },
      {
        id: 2,
        label: "3.Answer 2C",
      },
    ],
  },
  {
    id: 2,
    title: "question 3__",
    options: [
      {
        id: 0,
        label: "1. Answer 3A",
      },
      {
        id: 1,
        label: "2. Answer 3B",
      },
      {
        id: 2,
        label: "3.Answer 3C",
      },
    ],
  },
];

var correctAnswers = [{
  questionId: 0,   
  optionId: "1. Answer 1A"
}, {
  questionId: 1,
  optionId: "1. Answer 2A"
}, {
  questionId: 2,
  optionId: "1. Answer 3A"
}];

var startQuizBtn = document.querySelector("#start-quiz-button");
var welcomePage = document.querySelector("#greeting");
var questionPage = document.querySelector("#question");
var titleQuestion = document.querySelector("#question-title");
var answersOnQuestions = document.querySelector("#question-options");
var hintAnswer = document.querySelector("#question-hint");
var lineH = document.querySelector("#line");


var timeEl = document.querySelector("#timer");
// var mainEl = document.getElementById("main");

// countdown timer.
var secondsLeft = 75;
function countDownTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
        timeEl.textContent = "";
    }
  }, 1000);
}
function hideWelcomePage() {
  var logoPage = document.querySelector(".logo");
  welcomePage.setAttribute("style", "display: none");
  logoPage.setAttribute("style", "display:none");
}

startQuizBtn.addEventListener("click", function () {
  countDownTimer();
  hideWelcomePage();
  showQuestion();
});
var index = 0;

function showQuestion() {
  answersOnQuestions.innerHTML="";
  questionPage.setAttribute("style", "display: block");
  titleQuestion.textContent = questions[index].title;

  for (var j = 0; j < 3; j++) {
    let answers = questions[index].options[j].label;
    // Create list item
    var li = document.createElement("li");
    // Create question option button
    var button = document.createElement("button");
    // Add class name to apply styles
    button.classList.add("button");
    button.setAttribute("value", answers);
    button.onclick = pushButton;
    // Add button label
    li.appendChild(button);
    button.textContent = answers;
    answersOnQuestions.appendChild(li);
  }


// how to make hint show up  and to switch page????????????????
  button.addEventListener("click", function () {
    
  });
}
// correctAnswers[index].optionId
function pushButton (){
  if(index===questions.length){
    //this is end of quiz
}
var correctAnswer = correctAnswers[index].optionId;
  index++;
console.log(this.value);

  if (correctAnswer===this.value) {
    setTimeout(function(){
      hintAnswer.textContent="";
      lineH.innerHTML="";

    }, 1000);

    var line = document.createElement("hr");
    lineH.appendChild(line);
    hintAnswer.textContent = "Correct";
    console.log("correct");
  } 

  showQuestion();
  console.log("click")
}


