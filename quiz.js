var questions = [
  {
    question: "自動車が一定の速さ15m/sでまっすぐに進むとき、4.0秒間の移動距離xは何mか。",
    correct_answer: "60"
  },
  {
    question: "10m/sは何km/hか。",
    correct_answer: "36"
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
