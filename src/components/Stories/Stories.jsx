import React from "preact";
// import { Link } from "gatsby";
// import imageFirst from "../../assets/images/svg/eSaeima.svg";
// import imageSecond from "../../assets/images/svg/tiesibsargs.svg";
// import imageThird from "../../assets/images/svg/csp.svg";
// import imageFourth from "../../assets/images/svg/cfla.svg";
// import imageFiveth from "../../assets/images/svg/trl.svg";
// import imageSixth from "../../assets/images/svg/galerijaCentrs.svg";
// import imageSeventh from "../../assets/images/svg/eParaksts.svg";
// import imageEight from "../../assets/images/svg/eSilva.svg";
// import { img } from "gatsby-plugin-image";

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
          <div>
          <img  className="icon__slash" src="./src/assets/images/svg/slash-line.svg" alt="slash line" />
          <p className="stories__text">{tag}</p>
          </div>
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
                  <img className="stories__svg" src="./src/assets/images/svg/arrow-right.svg" alt="arrow right" />
                </a>
              </div>
              <div className="stories__block-grid stories__block-grid--mob">
                <img
                  className="stories__img stories__item--first"
                  src="./src/assets/images/svg/eSaeima.svg"
                  alt="e-Saeima"
                />
                <img
                  className="stories__img stories__item--second"
                  src="./src/assets/images/svg/tiesibsargs.svg"
                  alt="tiesibsargs"
                />
                <img
                  className="stories__img stories__item--third"
                  src="./src/assets/images/svg/csp.svg"
                  alt="csp"
                />
              </div>
            </li>
            <li className="stories__item stories__item--second">
              <h3 className="stories__subtitle">{StoryTitle2}</h3>
              <p className="stories__desc">{StoryContent2}</p>
              <a className="stories__link" href={"/astro-turn/user-centric-approach"}>
              {StoryButtonText}
              <img className="stories__svg" src="./src/assets/images/svg/arrow-right.svg" alt="arrow right" />
              </a>
              <div className="stories__block-small">
                <img className="stories__img" src="./src/assets/images/svg/cfla.svg" alt="cfla" />
                <img className="stories__img" src="./src/assets/images/svg/trl.svg" alt="trl" />
              </div>
            </li>
            <li className="stories__item stories__item--third">
              <h3 className="stories__subtitle">{StoryTitle3}</h3>
              <p className="stories__desc">{StoryContent3}</p>
              <a className="stories__link" href={"/astro-turn/website-redesign"}>
              {StoryButtonText}
              <img className="stories__svg" src="./src/assets/images/svg/arrow-right.svg" alt="arrow right" />
              </a>
              <div className="stories__block-grid stories__block-grid--bottom">
                <img
                  className="stories__img stories__item--first"
                  src="./src/assets/images/svg/galerijaCentrs.svg"
                  alt="galerija centrs"
                />
                <img
                  className="stories__img stories__item--second"
                  src="./src/assets/images/svg/eParaksts.svg"
                  alt="eParaksts"
                />
                <img
                  className="stories__img stories__item--third"
                  src="./src/assets/images/svg/eSilva.svg"
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
