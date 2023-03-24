import React from "preact";
import { t, changeLanguage } from "i18next";

changeLanguage("lv");

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='wrapper'>
          <div className="footer__box">
        <a className='footer__logo' href="/astro-turn/"><img src='/assets/images/logo-footer.png' alt="logo"/></a>
          <nav className='footer__nav'>
            <a activeClassName="footer__link--active" className='footer__link' href="/astro-turn/">Home</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/astro-turn/#story">Story</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/astro-turn/#services">Services</a>
            <a activeClassName="footer__link--active" className='footer__link' href="/astro-turn/#contacts">Contacts</a>
          </nav>          
          </div>

          <ul className='footer__list'>
            <li className='footer__item'>
              <h5 className="footer__title">{t("global.footerInformationHeader")}</h5>
              <div>
                <a className='footer__text footer__text--hover' href="/astro-turn/">{t("global.footerCookiePolicy")}</a>
                <a className='footer__text footer__text--hover' href="/astro-turn/">{t("global.footerAvailability")}</a>
                <a className='footer__text footer__text--hover' href="/astro-turn/">{t("global.footerPrivacyPolicy")}</a>
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
