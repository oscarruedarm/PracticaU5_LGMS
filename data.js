//nuestros objetos con la info que vamos a iterar para llenar los literales de nuestra pagina
const personajes = [
    {
      "titulo": "Frodo Baggins",
      "texto": "El portador del Anillo Único, un hobbit de la Comarca que emprende la misión de destruir el Anillo en el Monte del Destino."
    },
    {
      "titulo": "Samwise Gamgee",
      "texto": "El fiel amigo y jardinero de Frodo, que lo acompaña en su viaje y demuestra un gran valor y lealtad."
    },
    {
      "titulo": "Gandalf",
      "texto": "Un poderoso mago que guía a los personajes principales y juega un papel crucial en la lucha contra Sauron."
    },
    {
      "titulo": "Aragorn",
      "texto": "También conocido como Strider, es el heredero al trono de Gondor y un líder valiente en la lucha contra las fuerzas oscuras."
    },
    {
      "titulo": "Legolas",
      "texto": "Un elfo de la Tierra de los Elfos, experto arquero y miembro de la Comunidad del Anillo."
    },
    {
      "titulo": "Gimli",
      "texto": "Un guerrero enano que representa a su pueblo en la Comunidad del Anillo, conocido por su fuerza y lealtad."
    },
    {
      "titulo": "Gollum",
      "texto": "Una criatura que fue un hobbit, pero que se ha transformado por la influencia del Anillo, buscando recuperarlo a toda costa."
    },
    {
      "titulo": "Boromir",
      "texto": "Un noble guerrero de Gondor que lucha con la tentación del Anillo y su deseo de proteger a su ciudad."
    },
    {
      "titulo": "Arwen",
      "texto": "Una elfa de Rivendel, que se enamora de Aragorn y juega un papel importante en la historia de amor y sacrificio."
    },
      {
      "titulo": "Galadriel",
      "texto": "La poderosa y sabia reina de Lothlórien, que ofrece ayuda y consejos a la Comunidad del Anillo."
    }
  ]

  const resumenLoTR = [
    {
      "titulo": "La Comunidad del Anillo",
      "texto": "Frodo hereda el Anillo Único y forma la Comunidad para destruirlo."
    },
    {
      "titulo": "Las Dos Torres",
      "texto": "La Comunidad se divide, Frodo y Sam continúan a Mordor, y Aragorn lucha en Rohan."
    },
    {
      "titulo": "El Retorno del Rey",
      "texto": "Frodo destruye el Anillo, Sauron es derrotado, y Aragorn se convierte en rey."
    }
  ]

  const cronologia =  [
    {
      "año": "Segunda Edad",
      "eventos": [
        "Creación de los Anillos de Poder.",
        "Ascenso de Sauron.",
        "Guerra de la Última Alianza entre elfos y hombres contra Sauron.",
        "Derrota de Sauron y pérdida del Anillo Único."
      ]
    },
    {
      "año": "Tercera Edad",
      "eventos": [
        "El Anillo Único es encontrado por Gollum.",
        "Bilbo Bolsón encuentra el Anillo.",
        "Frodo Bolsón hereda el Anillo.",
        "Formación de la Comunidad del Anillo.",
        "Viaje de la Comunidad para destruir el Anillo.",
        "Guerra del Anillo.",
        "Destrucción del Anillo Único.",
        "Caída de Sauron.",
        "Partida de los elfos hacia las Tierras Imperecederas."
      ]
    },
      {
      "año": "Cuarta Edad",
      "eventos": [
        "Aragorn se convierte en Rey del Reino Reunificado.",
        "Los hobbits regresan a la Comarca.",
        "Sam se casa con Rosie Cotton.",
        "Sam parte hacia las Tierras Imperecederas."
      ]
    }
  ]
const perso = document.getElementById("perso");
const resume = document.getElementById("resume");
const crono = document.getElementById("crono");

//funcion que va a ingresar nuestros datos dinamicamente usando parametros para los array y para el contenedor a appendear
function rellenado(arr,contenedor) {
//recorremos el array 
  for(let i =0; i < arr.length; i++){
//creamos cada elemento a rellenar 
    const creaDiv = document.createElement('div');
    const creaTitulo = document.createElement('h3');
    const creaParrafo = document.createElement('p');
  
    //asignamos el valor de nuestros H y nuestros P.
    creaTitulo.textContent = `${arr[i].titulo}`;
    creaParrafo.textContent = `${arr[i].texto}`;
   //addjuntamos a nuestro contenedor div
    creaTitulo.appendChild(creaParrafo);
    creaDiv.appendChild(creaTitulo);
    contenedor.appendChild(creaDiv);
  }

}
//llamamos nuestra funcion tantas veces queramos, usando los parametros que coinciden
rellenado(personajes, perso);
rellenado(resumenLoTR, resume);

//con este for, vamos a rellenar la cronologia que tiene un arrayu dentro de eventos y necesitamos recorrelos 2 veces para poder iterar y crear los li debidamente
for(let i =0; i < cronologia.length; i++){
  const eventos = cronologia[i].eventos;

   const creaDiv = document.createElement('div');
   const creaTitulo = document.createElement('ul');
   
   creaTitulo.textContent = `${cronologia[i].año}`;
    for(j=0; j< eventos.length;j++){
      const creaParrafo = document.createElement('li');
      creaParrafo.textContent = `${eventos[j]}`;
      creaTitulo.appendChild(creaParrafo);

    }
   creaDiv.appendChild(creaTitulo);
   crono.appendChild(creaDiv);
 }

 //slider
 
 const slider = document.getElementById('slider');
 const prev = document.getElementById('prev');
 const next = document.getElementById('next');
 let contador = 0;

//este boton hace que sea negativo el contador, y por ende las imaganes van de posicion hacia atras con el evento click
 prev.addEventListener('click', () => {
  contador--;
  if (contador < 0) {
      contador = slider.children.length - 1;
  }
  slider.style.transform = `translateX(-${contador * 100}%)`;
});
//este boton del slide, hace lo opuesto, va sumando y da la sensacion que va hacia adelante
next.addEventListener('click', () => {
  contador++;
  if (contador >= slider.children.length) {
      contador = 0;
  }
  slider.style.transform = `translateX(-${contador * 100}%)`;
});