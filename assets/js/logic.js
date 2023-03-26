const startBtn = document.querySelector("#start");
let questionsSection = document.querySelector("#questions");
let choices = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
const startScreen = document.querySelector("#start-screen");
let newClassName = "";


startBtn.addEventListener("click", function(event){
    console.log("start button clicked!")
    startScreen.remove();
    questionsSection.style.display = 'block';

    questionTitle.innerHTML = questions[0].question;
    for (i = 0; i < questions[0].choice.length; i++){
        let choice = document.createElement("li");
        choice.className = "choice";
        newClassName = choice.className;
        choice.innerHTML = questions[0].choice[i];
        choices.appendChild(choice);
        console.log(newClassName);
        
    }

    
    
    }
    


)

let userAnswer = "";


function myFunction(){
    userAnswer = document.querySelector(".choice").textContent;
    console.log("onclick was used")
    console.log(userAnswer);
    
}





