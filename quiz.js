var questions = [
  {
    question: "質量2.0kgの物体が、東向きに1.4m/sの速さで進んでいる。この物体の運動量の大きさを求めよ。",
    correct_answer: "2.8"
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
