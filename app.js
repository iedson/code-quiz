/* global variables */
var questionDiv = document.getElementById('question');
var choicesDiv = document.getElementById('choices');
var nextBtn = document.getElementById('nextBtn')
var questionZero = questions[0].title;
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
// array of questions (question~string, choices~array (for loop), answer~string, key~number so you can id in local storage 

// helper function 
// takes in index, uses index to find question in database to return the title //
function renderQuestion(index) {
    return questions[index].title;
};
//function renderQuestions
//for loop of questions in the array in questions.js file 

/* events */
    /* click highscore link */
        /* find object in local storage */
        /* parse object for screen */
        /* display parsed oject in html */
    /* clear highscores */
    /* go back */

    // start quiz */
nextBtn.addEventListener('click', function(){
    // call render question 
});


// need to get this function talking to the html but only on click of the start button
// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + "Time Remaining";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }
    /* choose answer */
    // wrong answer speeds up countdown //
    /* enter initials and submit score, go to highscore event */

/* init */
questionDiv.innerHTML = renderQuestion(0);
choicesDiv.innterHTML = 'replaced by js';


