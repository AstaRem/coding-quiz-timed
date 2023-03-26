const startBtn = document.querySelector("#start");
let questionsSection = document.querySelector("#questions");
let choices = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
const startScreen = document.querySelector("#start-screen");
let score = 0;
// let questionsLength = questions.length;
let feedbackDiv = document.querySelector("#feedback");



//on clicking start button, dynamically displays question and possible choices
startBtn.addEventListener("click", function(){
    console.log("start button clicked!")
    startScreen.remove();
    questionsSection.style.display = 'block';
    displayTask();
    // setTimeout(displayTask, 2000);
    })

setTimeout(displayTask, 3000);


// function to display question and possible answers
function displayTask(){
    // for(q = 0; q < questions.length; q++){
        questionTitle.innerHTML = questions[1].question;
        for (i = 0; i < questions[1].choice.length; i++){
            let choice = document.createElement("li");
            choice.innerHTML = questions[1].choice[i];
            choices.appendChild(choice);
            }
            
    // }
}
//saves user response texts and then calls checkAnswer() to see is it correct
    function userChoice(evt) {
        userChoice = evt.target.textContent;
        console.log(userChoice)
        console.log(`correct answer is: ${questions[1].answer}`)
        checkAnswer();
        // setTimeout(displayTask, 3000);

      }
      
//definition - checks if a user choice was correct and displays it

function checkAnswer(){
    if (userChoice == questions[1].answer){
        score += 10;
        feedbackDiv.style.display = 'block';
        feedbackDiv.innerHTML = "Correct";
        //show righ
        console.log("you are right");
        console.log(`Your score is ${score}`);
        } else {
        //show wrong
        feedbackDiv.style.display = 'block';
        feedbackDiv.innerHTML = "Wrong";

        console.log("you are wrong");
        }

    }
    // setTimeout(questionsSection.innerHTML = "", 3000);

    choices.addEventListener("click", userChoice);



//remove event listener does not work for some reason
    //   choices.removeEventListener("click", userChoice);





