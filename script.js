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

function init(){
    document.getElementById('question-amount').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}