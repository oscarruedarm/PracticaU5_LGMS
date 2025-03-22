// const empezar = document.getElementById('start');
// const contenedor = document.getElementById('quiz');
// const questionContainer = document.getElementById('question');
// const answerButtons = document.getElementById('answer-buttons');
// const nextButton = document.getElementById('next-button');
// const questionCounter = document.getElementById('question-counter');

//questions
const questiones = [
    {
        question: "¿Quién es el portador del Anillo Único al inicio de la historia?",
        answers: [
            { text: "Aragorn", correct: false },
            { text: "Frodo", correct: true },
            { text: "Gandalf", correct: false },
            { text: "Boromir", correct: false }
        ]
    },
    {
        question: "¿Qué criatura es Gollum originalmente",
        answers: [
            { text: "Un elfo", correct: false },
            { text: "Un hobbit", correct: true },
            { text: "Un orco", correct: false },
            { text: "Un hombre", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre del lugar donde se forjó el Anillo Único?",
        answers: [
            { text: "Rivendel", correct: false },
            { text: "Isengard", correct: false },
            { text: "Mordor", correct: true },
            { text: "La Comarca", correct: false }
        ]
    },
    {
        question: "¿Quién es el rey de Rohan?",
        answers: [
            { text: "Théoden", correct: true },
            { text: "Faramir", correct: false },
            { text: "Denethor", correct: false },
            { text: "Elrond", correct: false }
        ]
    },
    {
        question: "¿Qué objeto se utiliza para convocar a los Ents?",
        answers: [
            { text: "Un cuerno", correct: true },
            { text: "Un anillo", correct: false },
            { text: " Un bastón", correct: false },
            { text: "Un silbato", correct: false }
        ]
    }
];

// let currentQuestionIndex = 0;
// let score = 0;

// //empezar.addEventListener('click', startQuiz);

// function startQuiz() {
//     empezar.classList.add('hidden');
//     contenedor.classList.remove('hidden');
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.classList.add('hidden');
//     showQuestion(questions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//     questionContainer.innerText = question.question;
//     //limpiamos 
//     answerButtons.innerHTML = '';
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded', 'm-1');
//         button.addEventListener('click', () => selectAnswer(answer));
//         answerButtons.appendChild(button);
//     });
//     questionCounter.innerText = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
// }

// function selectAnswer(answer) {
//     if (answer.correct) {
//         score++;
//     }
//     nextButton.classList.remove('hidden');
// }

// //nextButton.addEventListener('click', () => {
//     // currentQuestionIndex++;
//     // if (currentQuestionIndex < questions.length) {
//     //     showQuestion(questions[currentQuestionIndex]);
//     //     nextButton.classList.add('hidden');
//     // } else {
//     //     showScore();
//     // }
// //});

// function showScore() {
//     questionContainer.innerText = `Tu puntaje es ${score} de ${questions.length}`;
//     answerButtons.innerHTML = '';
//     nextButton.classList.add('hidden');
//     //let reload = document.createElement('button');
//     //reload.type ="button";
//     //reload.innerHTML = "Volver a hacer";
//     ////reload.style="mt-5 bg-blue-500 text-white px-4 py-2 rounded";
//     //reload.addEventListener('click',reDoIt);
//     //questionCounter.appendChild(reload);
// }

// const reDoIt = ()=> location.reload();

const empezar = document.getElementById('start');
const quizContainer = document.getElementById('quizContainer');

empezar.addEventListener('click', empezarQuiz);

function empezarQuiz() {
         empezar.classList.add('hidden');
         quizContainer.classList.remove('hidden');
         cargaPreguntas();
   
     }
const questions = [
    {
    question: "¿Quién es el portador del Anillo Único al inicio de la historia?",
    answers:
    {
        a: "Aragorn",
        b: "Frodo",
        c: "Gandalf",
        d: "Boromir"
    },
    correct:"b"
    
},
{
    question: "¿Qué criatura es Gollum originalmente",
    answers: 
    {
        a: "Un elfo",
        b: "Un hobbit",
        c: "Un orco",
        d: "Un hombre" 
    },
    correct: "b"
},
{
    question: "¿Cuál es el nombre del lugar donde se forjó el Anillo Único?",
    answers:
    {
        a: "Rivendel",
        b: "Isengard",
        c: "Mordor",
        d: "La Comarca"
    },
    correct: "c"
},
{
    question: "¿Quién es el rey de Rohan?",
    answers:
    {
        a: "Théoden",
        b: "Faramir",
        c: "Denethor",
        d: "Elrond" 
    },
    correct: "a"
},
{
    question: "¿Qué objeto se utiliza para convocar a los Ents?",
    answers:
    {
        a: "Un cuerno",
        b: "Un anillo",
        c: " Un bastón",
        d: "Un silbato"
    } ,
    correct: "a"
}
];

let preguntaActual = 0;
let puntuacion = 0;

function cargaPreguntas() {
    
    quizContainer.innerHTML = ''; // Limpiar el contenedor

    const question = questions[preguntaActual];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('mb-4','gap-4','flex');

    const questionText = document.createElement('p');
    questionText.classList.add('font-semibold');
    questionText.textContent = `${preguntaActual + 1}. ${question.question}`;
    questionDiv.appendChild(questionText);

    for (const [key, value] of Object.entries(question.answers)) {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-4', 'rounded', 'mb-4','w-1/2' );
        button.textContent = `${key.toUpperCase()}) ${value}`;
        button.onclick = () => seleccionado(key);
        questionDiv.appendChild(button);
    }

    quizContainer.appendChild(questionDiv);
}

function seleccionado(rSeleccionado) {
    const rCorrecta = questions[preguntaActual].correct;
    if (rSeleccionado === rCorrecta) {
        puntuacion++;
    }
    preguntaActual++;
    if (preguntaActual < questions.length) {
        cargaPreguntas();
    } else {
        resultado();
    }
}

function resultado() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = ''; // Limpiar el contenedor
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Tu puntuación es: ${puntuacion} de ${questions.length}`;
    document.getElementById('nextBtn').classList.add('hidden'); // Ocultar el botón de siguiente
}

