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
var allDonePage = document.querySelector("#user");
var timeEl = document.querySelector("#timer");
var header = document.querySelector(".header");
var finalScore = document.querySelector("#final-score");
var submitInitialsForm = document.querySelector("#initials-form");
var printedScorePage = document.querySelector("#printed-score");
var scorePrinted = document.querySelector("#highscores");
var count = localStorage.getItem("count");
var clearHighscore = document.querySelector("#clear-highscore-button");
var lastPage = document.querySelector("#summary");
var goBackButton = document.querySelector("#go-back-button-2");
var index = 0;

// countdown timer
var secondsLeft = 75;
function countDownTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === -1 || index == 5) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
function hideWelcomePage() {
  welcomePage.setAttribute("style", "display: none");
}

startQuizBtn.addEventListener("click", function () {
  countDownTimer();
  hideWelcomePage();
  showQuestion();
});

function showQuestion() {
  answersOnQuestions.innerHTML = "";
  questionPage.setAttribute("style", "display: block");
  titleQuestion.textContent = questions[index].title;

  for (var j = 0; j < questions.length; j++) {
    var answers = questions[index].options[j].label;
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
}

function pushButton() {
  if (index == 4) {
    //this is end of quiz

    hideQuestionPage();
    showInitialsPage();
  }
  console.log("questions:" + questions.length + "index" + index);

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

  //  display wrong answers
  else if (correctAnswer !== this.value) {
    setTimeout(function () {
      hintAnswer.textContent = "";
      lineH.innerHTML = "";
    }, 1000);

    var line = document.createElement("hr");
    lineH.appendChild(line);
    hintAnswer.textContent = "Wrong";
    console.log("wrong");
    // needed to substract from countdown timer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    timeEl.textContent = secondsLeft - 15;
  }

  showQuestion();
  console.log("click");
}
function showInitialsPage() {
  allDonePage.setAttribute("style", "display: block");
  finalScore.textContent = secondsLeft;
}
function hideQuestionPage() {
  titleQuestion.setAttribute("style", "display: none");
}

submitInitialsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //user initials submitted

  var userName = document.querySelector("#userName").value;
  localStorage.setItem("userName", JSON.stringify(userName));

  // var usernInitials = userInitialsInput.value.trim();
  hideInitialsAndHeaderPages();
  printedInitialsAndScore();
  console.log(userName);
});

function hideInitialsAndHeaderPages() {
  allDonePage.setAttribute("style", "display: none");
  header.setAttribute("style", "display: none");
}

function printedInitialsAndScore() {
  printedScorePage.setAttribute("style", "display: block");

  var lastUserInitials = JSON.parse(localStorage.getItem("userName"));
  var finalSc = (finalScore.textContent = secondsLeft);
  // Create list item
  // var li = document.createElement("li");

  // Create question option button
  // Added content
  scorePrinted.innerHTML =
    "1." + " " + lastUserInitials + " " + " - " + finalSc;
  // Add button label
  // ul.appendChild(li);
  // button.textContent = answers;
  // answersOnQuestions.appendChild(li);

  // finalScore.textContent = secondsLeft;
}

clearHighscore.addEventListener("click", function () {
  event.preventDefault();

  printedScorePage.setAttribute("style", "display: none");
  lastPage.setAttribute("style", "display: block");
});

goBackButton.addEventListener("click", function () {});
