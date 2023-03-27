let questionsContainer = document.querySelector("#questions");
let startBtn = document.getElementById("start");
let startScreen = document.getElementById("start-screen");
let span= document.querySelectorAll('span'); //returns array
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let finalScore = document.getElementById("final-score");
let finalScreen = document.getElementById("end-screen");
let nextBtn = document.getElementById("next");
let questionTitle = document.getElementById("question-title");
let feedbackDiv = document.getElementById("feedback");
let time = document.getElementById("time");
let timeSeconds = 10;
let i=0;
let score= 0;

startBtn.addEventListener("click", function(){
    console.log("start button clicked!")
    startScreen.style.display = "none";
    questionsContainer.style.display = 'block';
    nextBtn.style.display = "block";

    //timer
time.innerHTML = `${timeSeconds}`
let countDown = setInterval(myTimer, 1000);
function myTimer(){
    timeSeconds--;
    time.innerHTML = `${timeSeconds}`
    if(timeSeconds <= 0 || timeSeconds < 1 || finalScreen.style.display == 'block'){
        clearInterval(countDown);
    }
}

    })


//to display questions
function displayQuestion(){
    questionTitle.innerHTML= questions[i].question;
    option1.innerHTML= questions[i].choice[1];
    option0.innerHTML= questions[i].choice[0];
    option2.innerHTML= questions[i].choice[2];
    option3.innerHTML= questions[i].choice[3];
    // stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questions.length;
    
}

function userChoice(evt) {
    userChoice = evt.target.textContent;
    console.log(userChoice)
    console.log(`correct answer is: ${questions[i].answer}`)

    if (userChoice == questions[i].answer){
        score += 1;
        //show right
        feedbackDiv.style.display = 'block';
        feedbackDiv.innerHTML = "Correct";
        console.log("you are right");
        console.log(`Your score is ${score}`);
        } else {
        //show wrong
        feedbackDiv.style.display = 'block';
        feedbackDiv.innerHTML = "Wrong";
        console.log("you are wrong");
        console.log(`Your score is ${score}`);
        }


  }

  choices.addEventListener("click", userChoice);



//to calculate score
function calcScore(e){
    if(userChoice===questions[i].answer )
    {
        score= score+1;
    }
    setTimeout(nextQuestion,2000);

}

//function to display next question
function nextQuestion(){
    if(i<questions.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        finalScore.innerHTML= score+ '/'+ questions.length;
        questionsContainer.style.display= 'none';
        nextBtn.style.display = "none";
        finalScreen.style.display = 'block';
    }
    // checkAnswer();
    feedbackDiv.style.display = 'none';

}

//click events to next button
nextBtn.addEventListener('click',nextQuestion);

displayQuestion();

