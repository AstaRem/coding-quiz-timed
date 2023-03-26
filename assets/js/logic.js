const startBtn = document.querySelector("#start");
let questionsSection = document.querySelector("#questions");
let choices = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
const startScreen = document.querySelector("#start-screen");
let score = 0;

startBtn.addEventListener("click", function(event){
    console.log("start button clicked!")
    startScreen.remove();

    questionsSection.style.display = 'block';

    questionTitle.innerHTML = questions[0].question;
    for (i = 0; i < questions[0].choice.length; i++){
        let choice = document.createElement("li");
        choice.setAttribute("data", "choice")
        choice.innerHTML = questions[0].choice[i];
        choices.appendChild(choice);
        choices.addEventListener("click", userChoice);
        }
       
    }
         
    )
//saves user response texts and then calls checkAnswer() to see is it correct
    function userChoice(evt) {
        userChoice = evt.target.textContent;
        console.log(userChoice)
        console.log(`correct answer is: ${questions[0].answer}`)
        checkAnswer();
      }
      
//definition - checks if a user choice was correct
      function checkAnswer(){
        if (userChoice == questions[0].answer){
            score += 10;
            console.log("you are right");
            console.log(`Your score is ${score}`);
          } else {
            console.log("you are wrong");
          }
    
      }




