import React from "preact";

const Cta = (props) => {
  const { tag, title, content } = props.info;
  return (
    <>
      <section className="cta">
        <div className="wrapper">
          <div>
          <img  className="icon__slash" src="./src/assets/images/svg/slash-line.svg" alt="slash line" />
          <p className="cta__text">{tag}</p>
          </div>
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{content}</p>
        </div>
        <div className="cta__circle cta__circle--first"></div>
        <div className="cta__circle cta__circle--second"></div>
        <div className="cta__circle cta__circle--third"></div>
        <div className="cta__circle cta__circle--fourth"></div>
      </section>
    </>
  );
};
export default Cta;
