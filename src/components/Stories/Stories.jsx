import React from "preact";
import Tag from "../Tag/Tag.jsx"

const Stories = (props) => {
  const {
    tag,
    title,
    StoryTitle1,
    StoryTitle2,
    StoryTitle3,
    StoryContent1,
    StoryContent2,
    StoryContent3,
    StoryButtonText
  } = props.info;
  return (
    <>
      <section id="story" className="stories">
        <div className="wrapper">
          <Tag info={{title:tag}}/>
          <h2 className="stories__title">{title}</h2>
          <ul className="stories__list">
            <li className="stories__item stories__item--first stories__box">
              <div>
                <h3 className="stories__subtitle">{StoryTitle1}</h3>
                <p className="stories__desc">{StoryContent1}</p>
                <a
                  className="stories__link stories__link--margin"
                  href={"/astro-turn/digital-transformation"}
                >
                  {StoryButtonText}
                  <img className="stories__svg" src="/astro-turn/assets/images/svg/arrow-right.svg" alt="arrow right" />
                </a>
              </div>
              <div className="stories__block-grid stories__block-grid--mob">
                <img
                  className="stories__img stories__item--first"
                  src="/astro-turn/assets/images/svg/eSaeima.svg"
                  alt="e-Saeima"
                />
                <img
                  className="stories__img stories__item--second"
                  src="/astro-turn/assets/images/svg/tiesibsargs.svg"
                  alt="tiesibsargs"
                />
                <img
                  className="stories__img stories__item--third"
                  src="/astro-turn/assets/images/svg/csp.svg"
                  alt="csp"
                />
              </div>
            </li>
            <li className="stories__item stories__item--second">
              <h3 className="stories__subtitle">{StoryTitle2}</h3>
              <p className="stories__desc">{StoryContent2}</p>
              <a className="stories__link" href={"/astro-turn/user-centric-approach"}>
              {StoryButtonText}
              <img className="stories__svg" src="/astro-turn/assets/images/svg/arrow-right.svg" alt="arrow right" />
              </a>
              <div className="stories__block-small">
                <img className="stories__img" src="/astro-turn/assets/images/svg/cfla.svg" alt="cfla" />
                <img className="stories__img" src="/astro-turn/assets/images/svg/trl.svg" alt="trl" />
              </div>
            </li>
            <li className="stories__item stories__item--third">
              <h3 className="stories__subtitle">{StoryTitle3}</h3>
              <p className="stories__desc">{StoryContent3}</p>
              <a className="stories__link" href={"/astro-turn/website-redesign"}>
              {StoryButtonText}
              <img className="stories__svg" src="/astro-turn/assets/images/svg/arrow-right.svg" alt="arrow right" />
              </a>
              <div className="stories__block-grid stories__block-grid--bottom">
                <img
                  className="stories__img stories__item--first"
                  src="/astro-turn/assets/images/svg/galerijaCentrs.svg"
                  alt="galerija centrs"
                />
                <img
                  className="stories__img stories__item--second"
                  src="/astro-turn/assets/images/svg/eParaksts.svg"
                  alt="eParaksts"
                />
                <img
                  className="stories__img stories__item--third"
                  src="/astro-turn/assets/images/svg/eSilva.svg"
                  alt="e-Silva"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Stories;
