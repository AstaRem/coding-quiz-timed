const startBtn = document.querySelector("#start");
let questionsSection = document.querySelector("#questions");
let choices = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
const startScreen = document.querySelector("#start-screen");
let score = 0;
let questionsLength = questions.length;
//on clicking start button, dynamically displays question and possible choices
startBtn.addEventListener("click", function(event){
    console.log("start button clicked!")
    startScreen.remove();

    questionsSection.style.display = 'block';
    displayTask();

    }
         
    )

// function to display question and possible answers
function displayTask(){
    for(q = 0; q < questions.length; q++){
        questionTitle.innerHTML = questions[q].question;
        for (i = 0; i < questions[q].choice.length; i++){
            let choice = document.createElement("li");
            choice.setAttribute("data", "choice")
            choice.innerHTML = questions[q].choice[i];
            choices.appendChild(choice);
            choices.addEventListener("click", userChoice);
            }
            
    }
}
//saves user response texts and then calls checkAnswer() to see is it correct
    function userChoice(evt) {
        userChoice = evt.target.textContent;
        console.log(userChoice)
        console.log(`correct answer is: ${questions[0].answer}`)
        checkAnswer();
      }
      
//definition - checks if a user choice was correct
let feedbackDiv = document.querySelector("#feedback");

function checkAnswer(){
    if (userChoice == questions[0].answer){
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
//remove event listener does not work for some reason
    //   choices.removeEventListener("click", userChoice);





