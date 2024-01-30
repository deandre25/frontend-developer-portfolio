import { projectsList } from '../helpers/projectsList';

import Project from '../components/Project';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">
          Projects
        </h2>

        <ul className="projects">

          {projectsList.map((project, index) => (
            <Project key={project.title} title={project.title} img={project.img} index={index} />
          ))}

        </ul>
      </div>
    </main>
  );
}

export default Projects;