import React from "preact";

const Footer = (props) => {
  const {
    informationHeader,
    cookiePolicy,
    availability,
    privacyPolicy,
    contactsHeader,
    phone,
    email,
    address,
    companyDetails,
    SIA,
    REG,
    BANK,
    SWIFT,
    ACCOUNT,
    copyright,
  } = props.info;

  return (
    <>
      <footer className='footer'>
        <div className='wrapper'>
          <div className="footer__box">
        <a className='footer__logo' href="/"><img src='./src/assets/images/logo-footer.png' alt="logo"/></a>
          <nav className='footer__nav'>
            <a activeClassName="footer__link--active" className='footer__link' href="/">Home</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/#story">Story</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/#services">Services</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/#contacts">Contacts</a>
          </nav>          
          </div>

          <ul className='footer__list'>
            <li className='footer__item'>
              <h5 className="footer__title">{informationHeader}</h5>
              <div>
                <a className='footer__text footer__text--hover' href="/">{cookiePolicy}</a>
                <a className='footer__text footer__text--hover' href="/">{availability}</a>
                <a className='footer__text footer__text--hover' href="/">{privacyPolicy}</a>
              </div>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{contactsHeader}</h5>
              <ul>
                <li>
                  <a className='footer__text footer__text--hover' href={"tel:" + phone}>{phone}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href={"mailto:" + email}>{email}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href=''>{address}</a>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{companyDetails}</h5>
              <ul>
                <li className='footer__text'>
                  <p className='footer__inline'>{SIA}&nbsp;</p>
                  <p className='footer__inline'>{REG}&nbsp;</p>
                </li>
                <li className='footer__text'>
                  <p className='footer__inline'>{BANK}&nbsp;</p>
                  <p className='footer__inline'>{SWIFT}</p>
                </li>
                <li className='footer__text'>{ACCOUNT}</li>
              </ul>
            </li>
          </ul>
          <p  className='footer__text'>{copyright}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
