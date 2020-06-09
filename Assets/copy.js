//variables

var startQuizBtn = document.querySelector("#start-quiz-button");
var welcomePage = document.querySelector("#greeting");
var questionPage = document.querySelector("#question");
var titleQuestion = document.querySelector("#question-title");
var answersOnQuestions = document.querySelector("#question-options");

var questionSection_1 = document.querySelector("#question-1");
var questionSection_2 = document.querySelector("#question-2");
var questionSection_3 = document.querySelector("#question-3");

var timeEl = document.querySelector("#timer");

// countdown timer.
var secondsLeft = 75;
function countDownTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "";
    }
  }, 1000);
}


//hiding welcome page
function hideWelcomePage() {
  var logoPage = document.querySelector(".logo");

  welcomePage.setAttribute("style", "display: none");
  logoPage.setAttribute("style", "display:none");
}

//
startQuizBtn.addEventListener("click", function () {
  countDownTimer();
  hideWelcomePage();
  renderQuestion(1);
  
});

function renderQuestion(questionNumber) {
  if (questionNumber === 1) {
    questionSection_1.setAttribute("style", "display: block");
  } else if (questionNumber === 2) {
    questionSection_1.setAttribute("style", "display: none");
    questionSection_2.setAttribute("style", "display: block");
  } else if (questionNumber === 3) {
    questionSection_2.setAttribute("style", "display: none");
    questionSection_3.setAttribute("style", "display: block");
  }

 
  }




   var question_1_option_1 = document.querySelector("#question-1-option-1");
  var question_1_option_2 = document.querySelector("#question-1-option-2");
  var question_2_option_1 = document.querySelector("#question-2-option-1");
  var question_2_option_2 = document.querySelector("#question-2-option-2");
  var question_3_option_1 = document.querySelector("#question-3-option-1");
  var question_3_option_2 = document.querySelector("#question-3-option-2");

  function onClick(e) {
    var correctAnswer = e.target.getAttribute("data-correct") === "true";
    console.log("correctAnswer", correctAnswer);

  question_1_option_1.addEventListener("click", onClick);
  question_1_option_2.addEventListener("click", onClick);
  question_2_option_1.addEventListener("click", onClick);
  question_2_option_2.addEventListener("click", onClick);
  question_3_option_1.addEventListener("click", onClick);
  question_3_option_2.addEventListener("click", onClick);

  var question = questions.find(function (q) {
    return q.id === questionId;
  });

  // question[0].title
  // question[0].option
  // var question;

  // for (var i = 0; i < questions.length; i++) {
  //   var currentQuestion = questions[i];

  //   if (currentQuestion.id === questionId) {
  //     question = currentQuestion;
  //     break;
  //   }
  // }

  // titleQuestion.textContent = question.title;

  // for (var j = 0; j < question.options.length; j++) {
  //   var option = question.options[j];
  //   var li = document.createElement("li");
  //   // Create question option button
  //   var button = document.createElement("button");
  //   // Add class name to apply styles
  //   button.classList.add("button");
  //   // Add button label
  //   li.appendChild(button);
  //   button.textContent = option.label;
  //   answersOnQuestions.appendChild(li);

  //   button.addEventListener("click", function () {
  //     var correctAnswer;
  //     var answeredCorrectly;

  //     for (var i = 0; i < correctAnswers.length; i++) {
  //       var correctAnswer = correctAnswers[i];

  //       if (correctAnswer.questionId === question.id) {
  //         answeredCorrectly = option.id === correctAnswer.optionId;
  //         break;
  //       }
  //     }

  //     console.log('answeredCorrectly', answeredCorrectly);
  //   });
  // }

  // console.log(question)
}

// function showFirstQuestion() {
//   questionPage.setAttribute("style", "display: block");
//   titleQuestion.textContent = questions[0].title;

//   for (var j = 0; j < 3; j++) {

//     var answers = questions[0].options[j].label;
//     // Create list item
//     var li = document.createElement("li");
//     // Create question option button
//     var button = document.createElement("button");
//     // Add class name to apply styles
//     button.classList.add("button");
//     // Add button label
//     li.appendChild(button);
//     button.textContent = answers;
//     answersOnQuestions.appendChild(li);

//     button.addEventListener("click", function () {
//       var correctAnswer = questions[0].options[0].label;

//       if (correctAnswer) {
//         var line = document.createElement("hr");
//         hintAnswer.appendChild(line);
//         hintAnswer.textContent = "Correct";
//         console.log(correctAnswer);
//       }
//     });
//   }

// }
