var questions = [
  {
    question: "日本の首都はどこですか？",
    correct_answer: "東京"
  },
  {
    question: "「こんにちは」は英語で何と言いますか？",
    correct_answer: "Hello"
  },
  {
    question: "1+1はいくつですか？",
    correct_answer: "2"
  }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
  var questionDiv = document.getElementById("question");
  questionDiv.innerHTML = questions[currentQuestion].question;
}

function checkAnswer() {
  var answerInput = document.getElementById("answer");
  var userAnswer = answerInput.value;

  if (userAnswer.toLowerCase() === questions[currentQuestion].correct_answer.toLowerCase()) {
    score++;
    document.getElementById("result").innerHTML = "正解です！";
  } else {
    document.getElementById("result").innerHTML = "不正解です。";
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
    answerInput.value = "";
  } else {
    displayScore();
  }
}

function displayScore() {
  var scoreDiv = document.getElementById("result");
  scoreDiv.innerHTML = "クイズ終了！<br>あなたのスコアは " + score + " 点です。";
}

displayQuestion();
