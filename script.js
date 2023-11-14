let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Rim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Wer ist CEO von Tesla?",
        "answer_1": "Jeff Bezos",
        "answer_2": "Elon Musk",
        "answer_3": "Mark Zuckerberg",
        "answer_4": "Bill Gates",
        "right_answer": 2
    },

    {
        "question": "Buenos aires ist die hauptstadt von...?",
        "answer_1": "Argentinien",
        "answer_2": "Paraguay",
        "answer_3": "Brasilien",
        "answer_4": "Albanien",
        "right_answer": 1
    },

    {
        "question": "Mit wie vielen Figuren startet ein Schachspiel?",
        "answer_1": "32",
        "answer_2": "36",
        "answer_3": "24",
        "answer_4": "12",
        "right_answer": 1
    },

    {
        "question": "Welcher ist der rote Planet unseres Sonnensystems?",
        "answer_1": "Venus",
        "answer_2": "Jupiter",
        "answer_3": "Neptun",
        "answer_4": "Mars",
        "right_answer": 4
    },

    {
        "question": "Wer ist der erfolgreichste Rapper der USA?",
        "answer_1": "Eminem",
        "answer_2": "Kanye West",
        "answer_3": "Drake",
        "answer_4": "Travis Scott",
        "right_answer": 3
    }
];

let currentQuestion = 0;

let rightQuestions = 0;

let audio_nice = new Audio('audio/nice.mp3');

let audio_fail = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('question-amount').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndscreen();
    }
    else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

function showEndscreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('quizBody').style = 'display: none';
    document.getElementById('sum-amount').innerHTML = questions.length;
    document.getElementById('right-answers').innerHTML = rightQuestions;
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('count').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {// Richtige Frage beantwortet
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_nice.play();
        rightQuestions++;
    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_fail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('quizBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    init();
}