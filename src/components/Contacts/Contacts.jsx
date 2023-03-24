import React from "preact";

const Contacts = (props) => {
  const { tag, header, content1, content2, content3, content4, name, phone, email } = props.info;

  return (
    <>
      <section id="contacts" className="contacts">
        <div className="wrapper">
        <div>
          <img class="icon__slash" src="/astro-turn/assets/images/svg/slash-line.svg" alt="slash line" />
          <p className="contacts__text contacts__text--inline">{tag}</p>
          </div>
          <h2 className="contacts__title">{header}</h2>
          <p className="contacts__text">{content1}&nbsp;</p>
          <p className="contacts__text">{content2}&nbsp;</p>
          <p className="contacts__text">{content3}&nbsp;</p>
          <p className="contacts__text contacts__text--margin">{content4}</p>
         <ul>
          <li><p className="contacts__text contacts__text--bold">{name}</p></li>
          <li><a className="contacts__text contacts__text--hover" href={"tel:" + phone}>{phone}</a></li>
          <li><a className="contacts__text contacts__text--hover" href={"mailto:" + email}>{email}</a></li>
         </ul>
        </div>
        <div className="contacts__circle contacts__circle--first"></div>
        <div className="contacts__circle contacts__circle--second"></div>
        <div className="contacts__circle contacts__circle--third"></div>
        <div className="contacts__circle contacts__circle--fourth"></div>
      </section>
    </>
  );
};
export default Contacts;
