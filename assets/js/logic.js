const startBtn = document.querySelector("#start")
let questionsSection = document.querySelector("#questions")
let choices = document.querySelector("#choices")
let questionTitle = document.querySelector("#question-title")



startBtn.addEventListener("click", function(){
    console.log("start button clicked!")
    // console.log(questions.question1.questions)
    questionsSection.style.display = 'block';
    questionTitle.innerHTML = questions[0].question;

    let choice1 = document.createElement("li");
    choice1.innerHTML = questions[0].choice1;
    choices.appendChild(choice1);

    let choice2 = document.createElement("li");
    choice2.innerHTML = questions[0].choice2;
    choices.appendChild(choice2);

    let choice3 = document.createElement("li");
    choice3.innerHTML = questions[0].choice3;
    choices.appendChild(choice3);

    let choice4 = document.createElement("li");
    choice4.innerHTML = questions[0].choice4;
    choices.appendChild(choice4);


})