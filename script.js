//Definirea variabilelor

let userScore = 0;
let computerScore = 0;
const userScore_txt = document.getElementById("user_score");
const compScore_txt = document.getElementById("computer_score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  userScore++;
  userScore_txt.innerText = userScore;
  document.getElementById("comp_img").classList.add("win-shadow");
}

function loses() {
  computerScore++;
  compScore_txt.innerText = computerScore;
  document.getElementById("comp_img").classList.add("lose-shadow");
}

function draw() {
  document.getElementById("comp_img").classList.add("draw-shadow");
}

function resetCompImageShadow() {
  // Înlătură clasa pentru umbra roșie de pe imaginea computerului
  document.getElementById("comp_img").classList.remove("win-shadow");
  document.getElementById("comp_img").classList.remove("draw-shadow");
  document.getElementById("comp_img").classList.remove("draw-shadow");
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  var imagine = document.getElementById("comp_img");

  document.getElementById(userChoice).classList.add("selected");
  document.getElementById(userChoice).addEventListener("mouseup", function () {
    document.getElementById(userChoice).classList.remove("selected");
  });
  document
    .getElementById(userChoice)
    .addEventListener("mouseleave", function () {
      document.getElementById(userChoice).classList.remove("selected");
    });

  resetCompImageShadow();
  switch (userChoice + compChoice) {
    case "paperrock":
      imagine.src = "rock.png";
      win();

      break;
    case "rockscissors":
      imagine.src = "scissors.png";
      win();
      break;
    case "scissorspaper":
      imagine.src = "paper.png";
      win();

      break;
  }
  switch (userChoice + compChoice) {
    case "paperscissors":
      imagine.src = "scissors.png";
      loses();

      break;
    case "rockpaper":
      imagine.src = "paper.png";
      loses();

      break;
    case "scissorsrock":
      imagine.src = "rock.png";
      loses();

      break;
  }
  switch (userChoice + compChoice) {
    case "paperpaper":
      imagine.src = "paper.png";
      draw();

      break;
    case "rockrock":
      imagine.src = "rock.png";
      draw();

      break;
    case "scissorsscissors":
      imagine.src = "scissors.png";
      draw();

      break;
  }
}

function main() {
  rock_div.addEventListener("mousedown", function () {
    game("rock");
  });
  paper_div.addEventListener("mousedown", function () {
    game("paper");
  });
  scissors_div.addEventListener("mousedown", function () {
    game("scissors");
  });
}
main();

const HomeBtn = document.getElementById("homeBtn");
const AboutBtn = document.getElementById("aboutBtn");
const SkillsBtn = document.getElementById("skillsBtn");
const GamesBtn = document.getElementById("gamesBtn");
const ContactBtn = document.getElementById("contactBtn");

function navBarTranslate() {
  HomeBtn.addEventListener("mousedown", function () {
    HomeBtn.classList.add("selected-navBtn");
    HomeBtn.addEventListener("mouseup", function () {
      HomeBtn.classList.remove("selected-navBtn");
    });
    HomeBtn.addEventListener("mouseleave", function () {
      HomeBtn.classList.remove("selected-navBtn");
    });
  });

  // Repetă același proces pentru celelalte butoane din navigație
  AboutBtn.addEventListener("mousedown", function () {
    AboutBtn.classList.add("selected-navBtn");
    AboutBtn.addEventListener("mouseup", function () {
      AboutBtn.classList.remove("selected-navBtn");
    });
    AboutBtn.addEventListener("mouseleave", function () {
      AboutBtn.classList.remove("selected-navBtn");
    });
  });

  SkillsBtn.addEventListener("mousedown", function () {
    SkillsBtn.classList.add("selected-navBtn");
    SkillsBtn.addEventListener("mouseup", function () {
      SkillsBtn.classList.remove("selected-navBtn");
    });
    SkillsBtn.addEventListener("mouseleave", function () {
      SkillsBtn.classList.remove("selected-navBtn");
    });
  });

  GamesBtn.addEventListener("mousedown", function () {
    GamesBtn.classList.add("selected-navBtn");
    GamesBtn.addEventListener("mouseup", function () {
      GamesBtn.classList.remove("selected-navBtn");
    });
    GamesBtn.addEventListener("mouseleave", function () {
      GamesBtn.classList.remove("selected-navBtn");
    });
  });

  ContactBtn.addEventListener("mousedown", function () {
    ContactBtn.classList.add("selected-navBtn");
    ContactBtn.addEventListener("mouseup", function () {
      ContactBtn.classList.remove("selected-navBtn");
    });
    ContactBtn.addEventListener("mouseleave", function () {
      ContactBtn.classList.remove("selected-navBtn");
    });
  });
}

navBarTranslate();
