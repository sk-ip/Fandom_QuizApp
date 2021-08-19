const readlineSync = require("readline-sync");
const chalk = require("chalk");

var username = readlineSync.question("What is your name? ");

console.log(chalk.cyan("Welcome "+username+" We wil be playing some General Knowledge Questions about INDIA"));

var score = 0;

function play(question, answer) {
  userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Correct!"));
    score += 1;
  } else {
    console.log(chalk.red("Wrong!"));
    console.log(chalk.blue("Correct answer is "+answer));
  }

  console.log(chalk.yellow("Current score: "+score));
  console.log("-----------------------");
}

questions = [
  {
    question: "India is a federal union comprising twenty-nine states and how many union territories?",
    answer: "7",
  },
  {
    question: "Which is the largest coffee producing state of India?",
    answer: "Karnataka",
  },
  {
    question: "Which state has the largest area?",
    answer: "Rajasthan",
  },
  {
    question: "Which state has the largest population?",
    answer: "Uttar Pradesh",
  },
  {
    question: "In what state is the Elephant Falls located?",
    answer: "Meghalaya",
  }
]

top_scores = [
  {
    username: "Sudhanshu",
    score: 3,
  },
  {
    username: "Manoj",
    score: 1,
  },
]

// loop

for (i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Final Score: " + score);

// top scores
for (i=0; i<top_scores.length; i++) {
  console.log(top_scores[i].username, top_scores[i].score);
}

console.log("If you beat the top score, send us a screenshot we will update the top scores!!");