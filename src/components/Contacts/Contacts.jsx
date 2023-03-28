import React from "preact";
import { t, changeLanguage } from "i18next";
import Tag from "../Tag/Tag.jsx"
changeLanguage("lv");

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="wrapper">
        <Tag info={{title:t("global.contactsTag")}}/>
        <h2 className="contacts__title">{t("global.contactsHeader")}</h2>
        <p className="contacts__text">{t("global.contactsContent1")}</p>
        <p className="contacts__text">{t("global.contactsContent2")}</p>
        <p className="contacts__text">{t("global.contactsContent3")}</p>
        <p className="contacts__text contacts__text--margin">{t("global.contactsContent4")}</p>
        <ul>
        <li><p className="contacts__text contacts__text--bold">{t("global.contactsName")}</p></li>
        <li><a className="contacts__text contacts__text--hover" href={"tel:" + t("global.contactsPhone")}>{t("global.contactsPhone")}</a></li>
        <li><a className="contacts__text contacts__text--hover" href={"mailto:" + t("global.contactsEmail")}>{t("global.contactsEmail")}</a></li>
        </ul>
      </div>
      <div className="contacts__circle contacts__circle--first"></div>
      <div className="contacts__circle contacts__circle--second"></div>
      <div className="contacts__circle contacts__circle--third"></div>
      <div className="contacts__circle contacts__circle--fourth"></div>
    </section>
  );
};
export default Contacts;
