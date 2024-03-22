// Define quiz questions and answers
const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Rome', 'Berlin'],
        answer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars'
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Whale', 'Giraffe', 'Hippo'],
        answer: 'Whale'
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

// Load question and options
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

// Select option and check answer
function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    questionElement.innerText = `You have completed the quiz! Your score is ${score}/${quizData.length}.`;

    optionsElement.innerHTML = '';

    submitButton.style.display = 'none';
}

// Load first question
loadQuestion();
