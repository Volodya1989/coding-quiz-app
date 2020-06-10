var questions = [
  {
    id: 0,
    title: "Commonly used data types DO NOT include:",
    options: [
      {
        id: 0,
        label: "1. strings",
      },
      {
        id: 1,
        label: "2. booleans",
      },
      {
        id: 2,
        label: "3. alerts",
      },
      {
        id: 4,
        label: "4. numbers",
      },
    ],
  },
  {
    id: 1,
    title: "The condition in if / else statement is enclosed within _____.",
    options: [
      {
        id: 1,
        label: "1. quotes",
      },
      {
        id: 0,
        label: "2. curly brackets",
      },
      {
        id: 0,
        label: "3. parentheses",
      },
      {
        id: 0,
        label: "4. squere brackets",
      },
    ],
  },
  {
    id: 2,
    title: "Arrays in JavaScript can be used to store _____.",
    options: [
      {
        id: 1,
        label: "1. numbers and strings",
      },
      {
        id: 0,
        label: "2. other arrays",
      },
      {
        id: 0,
        label: "3. booleans",
      },
      {
        id: 0,
        label: "4. all of the above",
      },
    ],
  },
  {
    id: 3,
    title:
      "String values must be enclosed within _____ when being assigned to variables",
    options: [
      {
        id: 1,
        label: "1. commas",
      },
      {
        id: 0,
        label: "2. curly brackets",
      },
      {
        id: 0,
        label: "3. quotes",
      },
      {
        id: 0,
        label: "4. parentheses",
      },
    ],
  },
  {
    id: 4,
    title:
      "A very strong useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      {
        id: 1,
        label: "1. JavaScript",
      },
      {
        id: 0,
        label: "2. terminal/bash",
      },
      {
        id: 0,
        label: "3. for loops",
      },
      {
        id: 0,
        label: "4. console.log",
      },
    ],
  },
];

var correctAnswers = [
  {
    questionId: 0,
    optionId: "3. alerts",
  },
  {
    questionId: 1,
    optionId: "3. parentheses",
  },
  {
    questionId: 2,
    optionId: "4. all of the above",
  },
  {
    questionId: 3,
    optionId: "3. quotes",
  },
  {
    questionId: 4,
    optionId: "4. console.log",
  },
];

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

    if (secondsLeft === -1) {
      clearInterval(timerInterval);
      submitInitials();
   
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
  answersOnQuestions.innerHTML = "";
  questionPage.setAttribute("style", "display: block");
  titleQuestion.textContent = questions[index].title;

  for (var j = 0; j < questions.length; j++) {
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
  button.addEventListener("click", function () {});
}

function pushButton() {
  if (index === questions.length) {
    //this is end of quiz
  }
  var correctAnswer = correctAnswers[index].optionId;
  index++;
  console.log(this.value);

  if (correctAnswer === this.value) {
    setTimeout(function () {
      hintAnswer.textContent = "";
      lineH.innerHTML = "";
    }, 1000);

    var line = document.createElement("hr");
    lineH.appendChild(line);
    hintAnswer.textContent = "Correct";
    console.log("correct");
  }

  //not  display wrong answers!!!!!
  else if (correctAnswer !== this.value) {
    setTimeout(function () {
      hintAnswer.textContent = "";
      lineH.innerHTML = "";
    }, 1000);

    var line = document.createElement("hr");
    lineH.appendChild(line);
    hintAnswer.textContent = "Wrong";
    console.log("wrong");
  }

  showQuestion();
  console.log("click");
}
function submitInitials(){
  questionPage.setAttribute("style", "display: none");
  header.setAttribute("style", "display: none");
  allDonePage.setAttribute("style", "display: block");
}