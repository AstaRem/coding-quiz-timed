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
let i=0;
let score= 0;

startBtn.addEventListener("click", function(){
    console.log("start button clicked!")
    startScreen.remove();
    questionsContainer.style.display = 'block';
    nextBtn.style.display = "block";
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

//to calculate score
function calcScore(e){
    if(e.innerHTML===questions[i].answer && score<questions.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
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
        finalScreen.style.display= 'block';
    }
}

//click events to next button
nextBtn.addEventListener('click',nextQuestion);


displayQuestion();


