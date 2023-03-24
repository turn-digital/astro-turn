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
            <a activeClassName="footer__link--active" className='footer__link' href="/">{t("global.headerHome")}</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/#story">{t("global.headerStory")}</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/#services">{t("global.headerServices")}</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/#contacts">{t("global.headerContacts")}</a>
          </nav>          
          </div>

          <ul className='footer__list'>
            <li className='footer__item'>
              <h5 className="footer__title">{t("global.footerInformationHeader")}</h5>
              <div>
                <a className='footer__text footer__text--hover' href="/">{t("global.footerCookiePolicy")}</a>
                <a className='footer__text footer__text--hover' href="/">{t("global.footerAvailability")}</a>
                <a className='footer__text footer__text--hover' href="/">{t("global.footerPrivacyPolicy")}</a>
              </div>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{t("global.footerContactsHeader")}</h5>
              <ul>
                <li>
                  <a className='footer__text footer__text--hover' href={"tel:" + t("global.footerPhone")}>{t("global.footerPhone")}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href={"mailto:" + t("global.footerEmail")}>{t("global.footerEmail")}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href=''>{t("global.footerAddress")}</a>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{t("global.footerCompanyDetailsHeader")}</h5>
              <ul>
                <li className='footer__text'>
                  <p className='footer__inline'>{t("global.footerSIA")}&nbsp;</p>
                  <p className='footer__inline'>{t("global.footerREG")}&nbsp;</p>
                </li>
                <li className='footer__text'>
                  <p className='footer__inline'>{t("global.footerBANK")}&nbsp;</p>
                  <p className='footer__inline'>{t("global.footerSWIFT")}</p>
                </li>
                <li className='footer__text'>{t("global.footerACCOUNT")}</li>
              </ul>
            </li>
          </ul>
          <p  className='footer__text'>{t("global.footerCopyright")}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
