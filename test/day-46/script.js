const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector(".quiz");
const question = document.getElementById("question");
const answerEl = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const data = quizData[currentIndex];

  question.textContent = data.question;
  a_text.textContent = data.a;
  b_text.textContent = data.b;
  c_text.textContent = data.c;
  d_text.textContent = data.d;
}

function deselectAnswer() {
  answerEl.forEach((answer) => answer.checked === false);
}

function getQuizAnswer() {
  let answer;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getQuizAnswer();
  const correct = answer === quizData[currentIndex].correct;

  if (answer && correct) {
    score++;
  }

  currentIndex++;

  if (currentIndex < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
  }
});
