/* global variables */
var questionDiv = document.getElementById('question');
var choicesDiv = document.getElementById('choices');
var answerDiv = document.getElementById('answer');
var nextBtn = document.getElementById('nextBtn');
var choiceBtn = document.getElementById('choiceBtn');
var scoreDiv = document.getElementById('score');
var currentQuestion = {};
var startQuestion = 0;
var score = 0;
// array of questions (question~string, choices~array (for loop), answer~string, key~number so you can id in local storage 

// helper function 
// takes in index, uses index to find question in database to return the title //
function renderQuestion(index) {
    return questions[index].title;
};
//build choices - for loop
function renderChoices(index){
    choicesDiv.innerHTML = '';
    for (i = 0; i < questions[index].choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[index].choices[i];
        choicesDiv.appendChild(choiceBtn);
    };
    choiceBtn.addEventListener('click', function(){
        choices.innerText = currentQuestion['choice' + answer];
        if (choice == answer){
            alert('correct!');
        } else {
            alert('Wrong!');
            // speed up timer by 2 seconds
        }
    });
};

// events
    // start quiz 
nextBtn.addEventListener('click', function(){
    startQuestion++;
    // call render question 
    questionDiv.innerHTML=renderQuestion(startQuestion);
    renderChoices(startQuestion);
});

// choiceBtn.addEventListener('click', function(){
//     if(choiceBtn == questions[i].answer){
//         alert('Correct!');
//     } else {
//         alert('WRONG!');
//         //speed up timer by 2 seconds
//     };
// });


//score 
    //show score "You got" + score + "/" + questions.lenght;
    // enter initials and submit score, go to highscore event 
    // add to local storage
    // click highscore link 
    // find object in local storage 
    // parse object for screen 
    // display parsed oject in html
    // clear highscores 



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
    // choose answer
    // wrong answer speeds up countdown

/* init */
questionDiv.innerHTML = renderQuestion(startQuestion);
renderChoices(startQuestion);


