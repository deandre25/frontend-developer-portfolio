import { useParams } from 'react-router-dom';
import ButtonGitHub from '../components/ButtonGitHub';
import { projectsList } from '../helpers/projectsList';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsList[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">
            {project.title}
          </h1>

          <img src={project.imgBig} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <ButtonGitHub link='https://github.com' />
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;