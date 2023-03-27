let highscores = document.getElementById("highscores");
let clearScore = document.getElementById("clear");

let storedInitials = localStorage.getItem("initials");
let storedScore = localStorage.getItem("currentScore");
console.log(storedInitials)
console.log(storedScore)

let li = document.createElement("li");
li.innerHTML = `${storedInitials} - ${storedScore}`;
highscores.appendChild(li);

clearScore.addEventListener("click", function (){
    li.remove();
})



