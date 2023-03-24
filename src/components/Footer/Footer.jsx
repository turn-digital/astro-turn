import React from "preact";
import { t, changeLanguage } from "i18next";

changeLanguage("lv");

const Footer = () => {
  const footer = {
    informationHeader: t("global.FooterInformationHeader"),
    cookiePolicy: t("global.FooterCookiePolicy"),
    availability: t("global.FooterAvailability"),
    privacyPolicy: t("global.FooterPrivacyPolicy"),
    contactsHeader: t("global.FooterContactsHeader"),
    phone: t("global.FooterPhone"),
    email: t("global.FooterEmail"),
    address: t("global.FooterAddress"),
    companyDetails: t("global.FooterCompanyDetailsHeader"),
    SIA: t("global.FooterSIA"),
    REG: t("global.FooterREG"),
    BANK: t("global.FooterBANK"),
    SWIFT: t("global.FooterSWIFT"),
    ACCOUNT: t("global.FooterACCOUNT"),
    copyright: t("global.FooterCopyright"),
};

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
              <h5 className="footer__title">{footer.informationHeader}</h5>
              <div>
                <a className='footer__text footer__text--hover' href="/">{footer.cookiePolicy}</a>
                <a className='footer__text footer__text--hover' href="/">{footer.availability}</a>
                <a className='footer__text footer__text--hover' href="/">{footer.privacyPolicy}</a>
              </div>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{footer.contactsHeader}</h5>
              <ul>
                <li>
                  <a className='footer__text footer__text--hover' href={"tel:" + footer.phone}>{footer.phone}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href={"mailto:" + footer.email}>{footer.email}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href=''>{footer.address}</a>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{footer.companyDetails}</h5>
              <ul>
                <li className='footer__text'>
                  <p className='footer__inline'>{footer.SIA}&nbsp;</p>
                  <p className='footer__inline'>{footer.REG}&nbsp;</p>
                </li>
                <li className='footer__text'>
                  <p className='footer__inline'>{footer.BANK}&nbsp;</p>
                  <p className='footer__inline'>{footer.SWIFT}</p>
                </li>
                <li className='footer__text'>{footer.ACCOUNT}</li>
              </ul>
            </li>
          </ul>
          <p  className='footer__text'>{footer.copyright}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
