import React from "preact";
import Tag from "../Tag/Tag.jsx"

const CareInfo = (props) => {
  const { tag, title, Card1Content, Card2Content } = props.info;
  return (
    <section className="care-info">
      <div className="wrapper">
        <Tag info={{title:tag}}/>
        <h2 className="care-info__title">{title}</h2>
        <ul className="care-info__list">
          <li className="care-info__item">
          <a href="https://www.schooliowp.lv" target="_blank">
            <img
              className="care-info__img"
              src="/astro-turn/assets/images/logo-schoolio.png"
              alt="logo schoolio WP"
              width="235px" height="48px"
            />
            </a>
            <p className="care-info__desc">{Card1Content}</p>
            <a
              className="care-info__link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.schooliowp.lv"
            >
              www.schooliowp.lv
              <img className="care-info__svg" src="/astro-turn/assets/images/svg/blank-link.svg" alt="www.schooliowp.lv link" width="22px" height="22px"/>
            </a>
          </li>
          <li className="care-info__item">
            <a href="https://www.pieklustamiba.lv" target="_blank">
            <img
              className="care-info__img"
              src="/astro-turn/assets/images/logo-pieklustamiba.png"
              alt="logo Pieklustamiba"
              width="235px" height="48px"
            />
            </a>
            <p className="care-info__desc">{Card2Content}</p>
            <a
              className="care-info__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pieklustamiba.lv"
            >
              www.pieklustamiba.lv
              <img className="care-info__svg" src="/astro-turn/assets/images/svg/blank-link.svg" alt="https://www.pieklustamiba.lv link" width="22px" height="22px"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CareInfo;
