const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">
          Contacts
        </h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">
              Location
            </h2>
            <p>
              Kharkiv, Ukraine
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">
              Telegram
            </h2>
            <p>
              <a href="tel:+380668301597">
                +38 (066) 830-15-97
              </a> |
              <a href="https://t.me/de_andre_25" target="_blank" rel="noreferrer"> @de_andre_25</a>
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">
              Email
            </h2>
            <p>
              <a href="mailto:andrii.deineka.fe@gmail.com">
                andrii.deineka.fe@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;