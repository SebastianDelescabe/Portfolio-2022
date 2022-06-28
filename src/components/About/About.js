import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import profileImage from '../../assets/profile.jpg'
import './About.css'

const About = () => {
  const { name, role, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hola, soy <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <div className='about__description'>
        <div className='about__description-image'>
          <img src={profileImage} height="auto" width="400px" />
        </div>
        <div className='about__description-data'>
          <p>
            Soy estudiante de programación informática con conocimientos en desarrollo web. Me encanta crear
            aplicaciones con diferentes funcionalidades y aprender nuevas tecnologías.
          </p>
          <p>
            Recientemente realicé un bootcamp de más de 800 hs. de estudio intensivo que me preparó para desempeñarme
            como desarrollador Fullstack. Dentro del curso aprendí desde lo básico hasta desarrollar una aplicación en
            equipo bajo la metodologia ágil Scrum.
          </p>
          <p>
            Me gustaría poder aplicar los conocimientos aprendidos formando parte de equipos de trabajo que me
            permitan desarrollar mis habilidades y crecer profesionalmente ya que sin dudas encontré todo lo que me
            apasiona en un mismo lugar 🚀🚀.
          </p>
        </div>
      </div>
      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Descargar CV
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon github'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
