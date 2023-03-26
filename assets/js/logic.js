const startBtn = document.querySelector("#start");
let questionsSection = document.querySelector("#questions");
let choices = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
const startScreen = document.querySelector("#start-screen");
// let newClassName = "";
let listItem = document.querySelector("li");


startBtn.addEventListener("click", function(event){
    console.log("start button clicked!")
    startScreen.remove();
    questionsSection.style.display = 'block';

    questionTitle.innerHTML = questions[0].question;
    for (i = 0; i < questions[0].choice.length; i++){
        let choice = document.createElement("li");
        choice.setAttribute("id", `choice${i}`)
        // newClassName = choice.className;
        choice.innerHTML = questions[0].choice[i];
        choices.appendChild(choice);
        // console.log(newClassName);
        
        }
    }
    )

    let newId = document.querySelector("#choice0");
    console.log(startBtn);
    console.log(newId);

// listItem.addEventListener("click", function(event){
//     let userChoice = listItem.textContent;
//     console.log(userChoice);
// })

    
    

    




// let userAnswer = "";


// function myFunction(){
//     userAnswer = document.querySelector(".choice").textContent;
//     console.log("onclick was used")
//     console.log(userAnswer);
    
// }
// const answerChosen = (e) => {
//     if(e.target.nodeName == "LI")
//     e.target.classList.add("choice");

// }

// choices.addEventListener("click", answerChosen);
// console.log(answerChosen);




