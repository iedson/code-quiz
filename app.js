/* global variables */
var questionDiv = document.getElementById('question');
var choicesDiv = document.getElementById('choices');
var correctAnswer = document.getElementById('answer');
var nextBtn = document.getElementById('nextBtn');
var choiceBtn = document.getElementById('choiceBtn');
var scoreText = document.getElementById('score');
var highScores= document.getElementById('highScores');
var submitScoreButton = document.querySelector("#submit-score");
var user = document.querySelector('#user');
var userName = document.querySelector('#user-name')
var msgDiv = document.querySelector("#message");
var finalScore = document.querySelector('#final-score');

var currentQuestion = {};
var startQuestion = 0;
var score = 0;
var questionCounter = 0;

var CORRECT_BONUS = 5;
var MAX_QUESTIONS = 5;
// array of questions (question~string, choices~array (for loop), answer~string, key~number so you can id in local storage 

// helper function 
// takes in index, uses index to find question in database to return the title //
function renderQuestion(index) {
    return questions[index].title;
};
// take in index, use index to find answer in database, mark question correct, increase score 
function correctAnswer(index){
    return question[index].answer;
}
 
//build choices - for loop
function renderChoices(index){
    choicesDiv.innerHTML = '';
    for (i = 0; i < questions[index].choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[index].choices[i];
        choiceBtn.setAttribute('class', 'js-choice');
        choicesDiv.appendChild(choiceBtn);
    };
    var userChoice = document.querySelectorAll('.js-choice');
    userChoice.addEventListener('click', function(){
        alert('contact made');
     });
};



//if user clicks on a choice and it is the correct answer, increase score 


// events
    // start quiz 
nextBtn.addEventListener('click', function(){
    startQuestion++;
    // call render question 
    questionDiv.innerHTML=renderQuestion(startQuestion);
    renderChoices(startQuestion);
});




incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}





//score 
//finalScore.innerHTML = //dynamically add final score from quiz to highscores page
    //show score "You got" + score + "/" + questions.length;
    // enter initials and submit score, go to highscore event 
    // add to local storage
    // click highscore link 
    // find object in local storage 
    // parse object for screen 
    // display parsed oject in html
    // clear highscores 

renderHighScores();

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
//   }
  
function renderHighScores() {
    var user = localStorage.getItem("user");
  
    if (user && finalScore === null) {
      return;
    }
  
    userName.textContent = user;
};


submitScoreButton.addEventListener("click", function(event) {
  event.preventDefault();

  var user = document.querySelector("#user").finalScore;

  if (user === "") {
    displayMessage("error", "Username cannot be blank");
  } else {
    displayMessage("success", "Score submitted successfully");

    localStorage.setItem("user", finalScore);
    renderLastRegistered();
  }
}); 



// need to get this function talking to the html but only on click of the start button
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Time Remaining";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
    // choose answer
    // wrong answer speeds up countdown

/* init */
questionDiv.innerHTML = renderQuestion(startQuestion);
renderChoices(startQuestion);

