var wordBlank = document.querySelector(".word-blanks");
var timerElement = document.getElementById("time");
var startButton = document.getElementById('start');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var finalscore1 = document.getElementById('final-score');
var answerContainers = document.getElementById('choices');
var endscreen = document.getElementById('end-screen');
var optionsbutton = document.querySelectorAll('.choices');
var newvar = document.getElementById("question-title");
var quizsection = document.querySelector(".quizsection");
var initials1 = document.getElementById("intials");
var numCorrect = 0;
var timer;
var timerCount = 70;
var scoresCounter = 0;
var currentquestions = 0;
var output;
var answers;



optionsbutton.forEach(button => button.addEventListener("click", showResults))
quizsection.classList.add("hide")

// Need the questions to put in the JavaScript:
var questions =
    [
        {
            question: "JavaScript is a ___ -side programming language.?",
            answers: ['client', 'server', 'both', 'none']
            ,
            correctAnswer: 'both'
        },


        {
            question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
            answers: ['alertBox(“Hello DataFlair!”)', 'alert(Hello DataFlair!);', 'msgAlert(“Hello DataFlair!”);', 'alert(“Hello DataFlair!”);']

            ,
            correctAnswer: 'alert(“Hello DataFlair!")'
        },

        {
            question: "How do you find the minimum of x and y using JavaScript?",

            answers: ['min(x,y);', 'Math.min(x,y);', 'Math.min(xy)', 'min(xy);',]

            ,
            correctAnswer: 'Math.min(x,y)'

        },

        {
            question: "Which JavaScript label catches all the values, except for the ones specified?",
            answers: ['catch', 'label', 'try', 'default',]
            ,
            correctAnswer: 'default'

        },

    ]
console.log(questions[0].answers.a)

// The startquiz function is called when the start button is clicked

function startquiz() {
    timerCount = 70;
}

// The finalscore function is called when the quiz is finished
function finalscore() {
    clearInterval(timer);
    quizsection.classList.add("hide")
document.getElementById("end-screen").classList.remove("hide")
    
}


function showQuestions() {
    
    newvar.textContent = questions[currentquestions].question
    for (let index = 0; index < 4; index++) {
        console.log("running")

        optionsbutton[index].textContent = questions[currentquestions].answers[index];
        console.log(optionsbutton[index])
    }
    
     
    }

function showResults(event) {

    // gather answer containers from our quiz


    // keep track of user's answers
    var userAnswer = event.target.textContent;
    
    // if answer is correct

    if (userAnswer === questions[currentquestions].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
    } else {
        timerCount -= 10 // timerCount = timerCount -10
    }
    if (currentquestions < questions.length - 1) {
        currentquestions++;
        showQuestions();
    } else {
        finalscore()
    }
    
}

// The setTimer function starts and stops the timer 
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            // Tests if all questions finished

            // Clears interval and stops timer

            finalscore();
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            finalscore();
        }
    }, 1000);
}
startButton.addEventListener('click', function () {
    console.log("buttonclicked")

    startTimer()
    var choices = document.getElementById('start-screen');
    //document.setattribute
    choices.setAttribute("class", "hide");
    //set the class to hide
    quizsection.classList.remove("hide")
    showQuestions(questions, quizContainer);

})

// on submit, show results
submitButton.addEventListener('click', function () {
    var initials1 = document.getElementById('end-screen');   
     initials1.setAttribute("class", "hide");
    
    //   showResults(finalscore);


})

