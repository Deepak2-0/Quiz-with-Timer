let score = 0;
let questionNo = 2;

const startTimer = () => {
  let timeleft = 0;

  let downloadTimer = setInterval(function () {
    // console.log(timeleft);
    if (timeleft >= 9) {
      document.getElementById("timer").innerHTML = "";
      clearInterval(downloadTimer);
    }
    document.getElementById("timer").innerHTML = 10 - timeleft;
    timeleft += 1;
  }, 1000);
};
startTimer();
function Question(question, optiona, optionb, optionc, optiond, answer) {
  this.question = question;
  this.optiona = optiona;
  this.optionb = optionb;
  this.optionc = optionc;
  this.optiond = optiond;
  this.answer = answer;
}

let question1 = new Question(
  "For which film did Leonardo DiCaprio got his Oscar?",
  "Shutter Island",
  "Titanic",
  "The Departed",
  "The Revenant",
  "The Revenant"
);
let question2 = new Question(
  "Higest grossing movie of all time?",
  "Avengers: Endgame",
  "Avatar",
  "Titanic",
  "Star Wars:The Force Awakens",
  "Avengers: Endgame"
);
let question3 = new Question(
  "Which is the first feature film made in India in 1913?",
  "Alam Ara",
  "Raja Harishchandra",
  "Kisan Kanya",
  "Roundhay Garden Scene",
  "Raja Harishchandra"
);
let question4 = new Question(
  "Who is the highest run scorer in ODI?",
  "Brian Lara",
  "Virat Kohli",
  "Sachin Tendulkar",
  "Ricky Ponting",
  "Sachin Tendulkar"
);
let question5 = new Question(
  "Who painted Monalisa?",
  "Vincent Van Gogh",
  "Leonardo Da Vinci",
  "Claude Monet",
  "Michelangelo",
  "Leonardo Da Vinci"
);
// console.log(question1.question);
// console.log(question1.optiona);
function startGame(quesNum) {
  document.getElementById("question").innerHTML = eval(
    `question${quesNum}.question`
  );
  document.getElementsByClassName("options")[0].innerHTML = eval(
    `question${quesNum}.optiona`
  );
  document.getElementsByClassName("options")[1].innerHTML = eval(
    `question${quesNum}.optionb`
  );
  document.getElementsByClassName("options")[2].innerHTML = eval(
    `question${quesNum}.optionc`
  );
  document.getElementsByClassName("options")[3].innerHTML = eval(
    `question${quesNum}.optiond`
  );

  // for (let i = 0; i < 4; i++) {
  //   let abc = document.getElementsByClassName("options")[i];
  //   abc.addEventListener("click", handleClick);
  // }
  // document.querySelectorAll(".options").forEach((item) => {
  //   item.addEventListener("click", (event) => {
  //     console.log(event);
  //   });
  // });
}

function handleClick(event) {
  // console.log("clicked option is" + event.innerHTML);

  let answer = eval(`question${questionNo - 1}.answer`);
  // console.log(answer);

  if (event.innerHTML === answer) {
    // console.log("123");
    score++;
    document.getElementById("score").innerHTML = "Score: " + eval(`${score}`);
    event.classList.add("correct");
    setTimeout(() => {
      event.classList.remove("correct");
    }, 2000);
  } else {
    event.classList.add("wrong");
    setTimeout(() => {
      event.classList.remove("wrong");
    }, 3000);
  }

  let ele = document.getElementsByClassName("options");
  // console.log(ele);
  for (let i = 0; i < 4; i++) {
    // console.log(i);
    ele[i].removeAttribute("onclick");

    setTimeout(() => {
      ele[i].setAttribute("onclick", "handleClick(this)");
    }, 6000);
  }
}

// function gameOver() {
//   console.log("entered gameover");
//   document.getElementById("question").innerHTML = "GameOver";

//   for (let i = 0; i < 4; i++) {
//     document.getElementsByClassName("options")[0].innerHTML = "";
//     document.getElementsByClassName("options")[0].classList.remove("options");
//   }
// }

let interval = setInterval(() => {
  if (questionNo >= 5) {
    clearInterval(interval);
  }

  startGame(questionNo);
  startTimer();

  questionNo++;
}, 11000);
