import project from './assets/project.jpg'
import project2 from './assets/project2.jpg'
// import project3 from './assets/project3.jpg'
// import project4 from './assets/project4.jpg'
import project5 from './assets/project5.jpg'
import project6 from './assets/project6.jpg'
import project7 from './assets/project7.jpg'
import project8 from './assets/project8.jpg'


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Sebastian Delescabe Portfolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sebastian Delescabe',
  role: 'Full Stack Developer',
  resume: 'https://drive.google.com/u/0/uc?id=1u-32xGgfbBh1rXKf4-RNRDDz1sE7_VGk&export=download',
  social: {
    linkedin: 'https://www.linkedin.com/in/sebastian-delescabe/',
    github: 'https://github.com/SebastianDelescabe',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'VideoGames APP',
    image: project,
    description: [
      'Desarrollo de una pagina web de videojuegos utilizando en el Front React y Redux para mostrar, filtrar y ordenar los juegos. El manejo de estilos estuvo hecho con CSS sin uso de librerías externas.',
      'La pagina consume datos de una API (rawg.io) a través de un Backend desarrollado en Node.JS.',
    ],
    stack: ['React', 'JavaScript', 'CSS', 'Redux', 'Node', 'PostgreSQL', 'Express', 'Sequelize'],
    sourceCode: 'https://github.com/SebastianDelescabe/PI-Videogames-FT15a"',
    livePreview: 'https://videogames-app-one.vercel.app/',
  },
  {
    name: 'Henropoly Game',
    image: project2,
    description: [
      'Henropoly es un juego de 1-4 jugadores, con temática financiera, en el cual se debe arruinar financieramente a tus amigos.',
      'La totalidad de lo utilizado en esta app, fue creado desde cero',
      'Este trabajo fue realizado en conjunto con seis compañeros, bajo la metodología ágil Scrum.'
    ],
    stack: ['React', 'JavaScript', 'CSS', 'Redux', 'Node', 'PostgreSQL', 'Express', 'Sequelize', 'Redis', 'Socket-io'],
    sourceCode: 'https://github.com/matiasgarrid0/Henropoly',
    livePreview: 'https://henropoly.vercel.app/',
  },
  {
    name: 'CRUD animals',
    image: project8,
    description: [
      'Pagina web para el control de animales desde una tabla. Se pueden agregar, editar, buscar y elimnar los animales de acuerdo a lo que se necesite',
      'El frontend de la pagina fue hecho en su totalidad con React context y CSS para el manejo de estilos',
      'El backend se conecta con una base de datos con sus respectivos modelos y rutas'
    ],
    stack: ['React', 'JavaScript', 'CSS', 'Node', 'MongoDB', 'Express'],
    sourceCode: 'https://github.com/SebastianDelescabe/scoutProject',
    livePreview: 'https://scoutelectronic-demo.netlify.app/',
  },
  {
    name: 'Toyota App',
    image: project6,
    description: [
      'Toyota APP es una pagia web donde podes encontrar la maquetacion de la pagina Toyota y sus correspondientes autos pudiendo filtrarlos y ordenarlos segun año y precio. Posee un navbar desplegable',
      'Se puede visualizar detalles de cada vehiculo.',
      'Diseño full responsive'
    ],
    stack: ['React', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/SebastianDelescabe/ToyotaAPP',
    livePreview: 'https://toyotapp.netlify.app/',
  },
  {
    name: 'DeleFlix',
    image: project5,
    description: [
      'Desarrollo de una pagina web de peliculas con sistema de logeo, utilizando React y context para mostrar, añadir a favoritos, buscar y visualizar proximos estrenos.',
      'Se utlizó de librerias animate.css y sweetAlert para dar estilos genereales a las alertas y transiciones.',
      'La pagina consume datos de la API themoviedb'
    ],
    stack: ['React', 'JavaScript', 'Bootstrap', 'CSS'],
    sourceCode: 'https://github.com/SebastianDelescabe/InfoPeliculas',
    livePreview: 'https://github.com',
  },
  {
    name: 'Musica APP',
    image: project7,
    description: [
      'Musica APP es una web para buscar y guardar tus albumes favoritos!',
      'Se consume información de la API de Spotify, ya sea para el login de usario como para el manejo de la informacion',
      'Proyecto de maquetacion frontend con guardado de datos en storage del navegador'
    ],
    stack: ['React', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/SebastianDelescabe/Musica_APP',
    livePreview: 'https://music-app-delescabe.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Bootstrap',
  'Git',
  'Node',
  'Redis',
  'MongoDB',
  'PostgreSQL',
  'Express',
  'Sequelize',
  'Socket-io',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sebastiandelescabe@gmail.com',
}

export { header, about, projects, skills, contact }
