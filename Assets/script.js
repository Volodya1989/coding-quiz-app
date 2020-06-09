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

var startQuizBtn = document.querySelector("#start-quiz-button");
var welcomePage = document.querySelector("#greeting");
var questionPage = document.querySelector("#question");
var titleQuestion = document.querySelector("#question-title");
var answersOnQuestions = document.querySelector("#question-options");
var hintAnswer = document.querySelector("#question-hint");

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
      // sendMessage();
      //   timeEl.textContent = "";
      //   speedRead();
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
  showFirstQuestion();
});

function showFirstQuestion() {
  questionPage.setAttribute("style", "display: block");
  titleQuestion.textContent = questions[0].title;

  for (var j = 0; j < 3; j++) {
    var answers = questions[0].options[j].label;
    // Create list item
    var li = document.createElement("li");
    // Create question option button
    var button = document.createElement("button");
    // Add class name to apply styles
    button.classList.add("button");
    // Add button label
    li.appendChild(button);
    button.textContent = answers;
    answersOnQuestions.appendChild(li);
  }

// how to make hint show up?????
  button.addEventListener("click", function () {
    var correctAnswer = questions[0].options[0].label;
    if (correctAnswer) {
      var line = document.createElement("hr");
      hintAnswer.hasPointerCapture(line);
      hintAnswer.textContent = "Correct";
      console.log(correctAnswer);
    } 
  });
}

var correctAnswer = questions[0].options[1].label;

// console.log(questions[0].options[1].label)

// for (var i = 0; i < questions.length; i++) {
//   var titles = questions[i].title;
//   if (logoPage.setAttribute("style", "display:none")) {
//     // questionPage.setAttribute("style", "display: block")
//     // titleQuestion.textContent=questions[0].title;
//   }

//   //   for (var j = 0; j < questions[0].options.length; j++) {
//   //     var answers = questions[i].options[j].label;
//   //     console.log(answers);
//   //   }
//   // var answers = questions[i].options[i].label

//   //   console.log(titles + " " + answers);
// }
