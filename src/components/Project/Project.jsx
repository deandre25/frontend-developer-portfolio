import { Link } from 'react-router-dom';

import './style.css';

const Project = ({title, img, index}) => {
  return (
    <li className="project">
      <Link to={`/project/${index}`} href="./project-page.html">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">
          {title}
        </h3>
      </Link>
    </li>
  );
}

export default Project;