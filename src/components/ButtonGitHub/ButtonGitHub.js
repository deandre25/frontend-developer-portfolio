import gitHubIcon from '../../img/icons/gitHub-black.svg';

import './style.css';

const ButtonGitHub = ({title, link}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
      <img src={gitHubIcon} alt="GitHub repo" />
      {title}
    </a>
  );
}

export default ButtonGitHub;