import React from "preact";
import Tag from "../Tag/Tag.jsx"

const Cta = (props) => {
  const { tag, title, content } = props.info;
  return (
    <>
      <section className="cta">
        <div className="wrapper">
          <Tag info={{title:tag}}/>
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
