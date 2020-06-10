//Volodymyr Petrytsya   06/10/20

// questions and answers are placed in the array with objects
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    options: [
      {
        label: "1. strings",
      },
      {
        label: "2. booleans",
      },
      {
        label: "3. alerts",
      },
      {
        label: "4. numbers",
      },
    ],
  },
  {
    title: "The condition in if / else statement is enclosed within _____.",
    options: [
      {
        label: "1. quotes",
      },
      {
        label: "2. curly brackets",
      },
      {
        label: "3. parentheses",
      },
      {
        label: "4. squere brackets",
      },
    ],
  },
  {
    title: "Arrays in JavaScript can be used to store _____.",
    options: [
      {
        label: "1. numbers and strings",
      },
      {
        label: "2. other arrays",
      },
      {
        label: "3. booleans",
      },
      {
        label: "4. all of the above",
      },
    ],
  },
  {
    title:
      "String values must be enclosed within _____ when being assigned to variables",
    options: [
      {
        label: "1. commas",
      },
      {
        label: "2. curly brackets",
      },
      {
        label: "3. quotes",
      },
      {
        label: "4. parentheses",
      },
    ],
  },
  {
    title:
      "A very strong useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      {
        label: "1. JavaScript",
      },
      {
        label: "2. terminal/bash",
      },
      {
        label: "3. for loops",
      },
      {
        label: "4. console.log",
      },
    ],
  },
];

// answers for comparison are placed in the array with objects
var correctAnswers = [
  {
    optionId: "3. alerts",
  },
  {
    optionId: "3. parentheses",
  },
  {
    optionId: "4. all of the above",
  },
  {
    optionId: "3. quotes",
  },
  {
    optionId: "4. console.log",
  },
];

//selectors are defined
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
var liAdded = document.querySelector(".high-scores");
var count = localStorage.getItem("count");
var clearHighscore = document.querySelector("#clear-highscore-button");
var lastPage = document.querySelector("#summary");
var goBackButton = document.querySelector("#go-back-button-2");
//index is used for pushButton function to move forward questions
var index = 0;

// countdown timer
var secondsLeft = 75;
function countDownTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    var lastQuestionIndex = questions.length - 1;

    if (secondsLeft <= 0 || index == lastQuestionIndex) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//function to hide welcome page
function hideWelcomePage() {
  welcomePage.setAttribute("style", "display: none");
}

//add listener added to start quiz button and user is switched to page with questions
startQuizBtn.addEventListener("click", function () {
  countDownTimer();
  hideWelcomePage();
  showQuestion();
});

//function to hide and show dynamically 5 questions
function showQuestion() {
  answersOnQuestions.innerHTML = "";
  questionPage.setAttribute("style", "display: block");
  titleQuestion.textContent = questions[index].title;

  for (var j = 0; j < questions[index].options.length; j++) {
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

//this function responsible on events that suppose to happen after user clicks on one of the answers
function pushButton() {
  var correctAnswer = correctAnswers[index].optionId;
  var lastQuestionIndex = questions.length - 1;
  //if answer is correct user will see hint correct or wrong for duration of 1 second
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

    // substract from countdown timer
    secondsLeft = secondsLeft - 15;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      secondsLeft = 0;
      showInitialsPage();
      timeEl.textContent = 0;
    }
    console.log(secondsLeft);
  }
  //set timeot for questions and answers to be in sync with hint timeout time
  setTimeout(function () {
    showQuestion();
  }, 1000);

  //this is end of quiz
  if (index < lastQuestionIndex) {
    index++;
  } else {
    hideQuestionPage();
    showInitialsPage();
  }
}

//function responsible for displaying page where user input initials
function showInitialsPage() {
  allDonePage.setAttribute("style", "display: block");
  finalScore.textContent = secondsLeft;
  console.log(secondsLeft);
}
//function responsible for hiding last question with answers
function hideQuestionPage() {
  titleQuestion.setAttribute("style", "display: none");
  answersOnQuestions.setAttribute("style", "display: none");
}

//listener that responsible storing users initials in local storage
submitInitialsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //user initials submitted
  var userName = document.querySelector("#userName").value;
  localStorage.setItem("userName", JSON.stringify(userName));
  hideInitialsAndHeaderPages();
  printedInitialsAndScore();
  console.log(userName);
});

//function responsible for hiding initial input page
function hideInitialsAndHeaderPages() {
  allDonePage.setAttribute("style", "display: none");
  header.setAttribute("style", "display: none");
}

//function responsible for printing score and users initials by taking them from local storage
function printedInitialsAndScore() {
  printedScorePage.setAttribute("style", "display: block");

  var lastUserInitials = JSON.parse(localStorage.getItem("userName"));
  var finalSc = (finalScore.textContent = secondsLeft);
  scorePrinted.innerHTML = "1." + " " + lastUserInitials + " : " + finalSc;
}
//listener that reset the page
clearHighscore.addEventListener("click", function () {
  event.preventDefault();
  printedScorePage.setAttribute("style", "display: none");
  lastPage.setAttribute("style", "display: block");
});
