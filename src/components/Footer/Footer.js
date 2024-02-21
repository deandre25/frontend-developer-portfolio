import instagram from '../../img/icons/instagram.svg';
import telegram from '../../img/icons/telegram.svg';
import gitHub from '../../img/icons/gitHub.svg';
import linkedIn from '../../img/icons/linkedIn.svg';

import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/de.andre_25/">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/de_andre_25">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/deandre25">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/andrii-deineka/">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>

          <div className="copyright">
            <p>© 2024 frontend-dev.com</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;