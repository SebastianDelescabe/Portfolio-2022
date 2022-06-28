import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <br />
    <div>
      <a rel="noreferrer" href={project.livePreview} target="_blank">
        <div data-tilt class="thumbnail rounded js-tilt">
          <img alt="Project Image" src={project.image} height="150px" width="250px" />
        </div>
      </a>
    </div>
    <div className='project__description'>
      {project.description && project.description.map(e => (
        <p key={uniqid()}>{e}</p>
      ))}
    </div>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
