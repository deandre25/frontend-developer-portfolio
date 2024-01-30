import gitHubIcon from '../../img/icons/gitHub-black.svg';

import './style.css';

const ButtonGitHub = ({link}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
      <img src={gitHubIcon} alt="GitHub repo" />
      GitHub repo
    </a>
  );
}

export default ButtonGitHub;