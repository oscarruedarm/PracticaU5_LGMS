const empezar = document.getElementById('start');
const quizContainer = document.getElementById('quizContainer');
//ponemos el elemento en un const para luego ocultar el div detras y jugar con los botones del quiz

empezar.addEventListener('click', empezarQuiz);

//funcion que de comienzo al quiz, activado por el boton
function empezarQuiz() {
         empezar.classList.add('hidden');
         quizContainer.classList.remove('hidden');
         cargaPreguntas();
   
     }
     //nuestro array de preguntas
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

//variables que vaqmos a usar para llevar la puntuacion por cada quiz realizado
let preguntaActual = 0;
let puntuacion = 0;

//funcion de la creacion de las preguntas en botones dinamicamante
function cargaPreguntas() {
    
    quizContainer.innerHTML = ''; // Limpiar el contenedor

    const question = questions[preguntaActual];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('mb-4','gap-4','flex', 'flex-col', 'items-center', 'justify-center');

    //creamos el p que contiene la pregunta y vamos poniendo detras el numero de la pregunta
    const questionText = document.createElement('p');
    questionText.classList.add('font-semibold','text-lg', 'text-gray-700');
    questionText.textContent = `${preguntaActual + 1}. ${question.question}`;
    questionDiv.appendChild(questionText);

    //recorremos en array de preguntas y vamos creando dinamicamente los botones con la informacion dentro
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
//funcion que va iterando por cada respuesta si es correcta va sumando al contador para luego mostrarlo
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
//funcion del resultado nuevamante juega con el hidde y oculta el otro contenedor y enseña el del resultado
function resultado() {
  
    //ocultamos el div de las preguntas
    quizContainer.classList.add('hidden');
    const quizResult = document.getElementById('quizResult');
    quizResult.classList.remove('hidden');

    //creamos nuestro div del resultado
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Tu puntuación es: ${puntuacion} de ${questions.length}`;

    //nuestro boton recarga la pagina para volver a rehacer el quiz
    const reHacer = document.getElementById('reDoIt'); 
    reHacer.addEventListener('click', ()=>{
        location.reload();
    })

}

