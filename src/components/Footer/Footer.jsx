import React from "preact";
import { t, changeLanguage } from "i18next";

changeLanguage("lv");

const Footer = () => {
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
              <h5 className="footer__title">{t("global.FooterInformationHeader")}</h5>
              <div>
                <a className='footer__text footer__text--hover' href="/">{t("global.FooterCookiePolicy")}</a>
                <a className='footer__text footer__text--hover' href="/">{t("global.FooterAvailability")}</a>
                <a className='footer__text footer__text--hover' href="/">{t("global.FooterPrivacyPolicy")}</a>
              </div>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{t("global.FooterContactsHeader")}</h5>
              <ul>
                <li>
                  <a className='footer__text footer__text--hover' href={"tel:" + t("global.FooterPhone")}>{t("global.FooterPhone")}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href={"mailto:" + t("global.FooterEmail")}>{t("global.FooterEmail")}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href=''>{t("global.FooterAddress")}</a>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{t("global.FooterCompanyDetailsHeader")}</h5>
              <ul>
                <li className='footer__text'>
                  <p className='footer__inline'>{t("global.FooterSIA")}&nbsp;</p>
                  <p className='footer__inline'>{t("global.FooterREG")}&nbsp;</p>
                </li>
                <li className='footer__text'>
                  <p className='footer__inline'>{t("global.FooterBANK")}&nbsp;</p>
                  <p className='footer__inline'>{t("global.FooterSWIFT")}</p>
                </li>
                <li className='footer__text'>{t("global.FooterACCOUNT")}</li>
              </ul>
            </li>
          </ul>
          <p  className='footer__text'>{t("global.FooterCopyright")}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
