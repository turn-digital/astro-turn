import React from "preact";
import Tag from "../Tag/Tag.jsx";

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
    StoryButtonText,
  } = props.info;
  return (
    <section id="story" className="stories">
      <div className="wrapper">
        <Tag info={{ title: tag }} />
        <h2 className="stories__title">
          <div
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></div>
        </h2>
        <ul className="stories__list">
          <li className="stories__item stories__item--first stories__box">
            <div>
              <h3 className="stories__subtitle">{StoryTitle1}</h3>
              <p className="stories__desc">{StoryContent1}</p>
              <a
                className="stories__link stories__link--margin"
                href={"/digital-transformation"}
              >
                {StoryButtonText}
                <img
                  className="stories__svg"
                  src="/assets/images/svg/arrow-right.svg"
                  alt="arrow right"
                  height="24px"
                  width="14px"
                />
              </a>
            </div>
            <div className="stories__block-grid stories__block-grid--mob">
              <img
                className="stories__img stories__item--first"
                src="/assets/images/svg/eSaeima.svg"
                alt="e-Saeima"
                height="200px"
                width="100px"
              />
              <img
                className="stories__img stories__item--second"
                src="/assets/images/svg/tiesibsargs.svg"
                alt="tiesibsargs"
                height="200px"
                width="100px"
              />
              <img
                className="stories__img stories__item--third"
                src="/assets/images/svg/csp.svg"
                alt="csp"
                height="200px"
                width="100px"
              />
            </div>
          </li>
          <li className="stories__item stories__item--second">
            <h3 className="stories__subtitle">{StoryTitle2}</h3>
            <p className="stories__desc">{StoryContent2}</p>
            <a className="stories__link" href={"/user-centric-approach"}>
              {StoryButtonText}
              <img
                className="stories__svg"
                src="/assets/images/svg/arrow-right.svg"
                alt="arrow right"
                height="20px"
                width="14px"
              />
            </a>
            <div className="stories__block-small">
              <img
                className="stories__img"
                src="/assets/images/svg/cfla.svg"
                alt="cfla"
                height="200px"
                width="100px"
              />
              <img
                className="stories__img"
                src="/assets/images/svg/trl.svg"
                alt="trl"
                height="200px"
                width="100px"
              />
            </div>
          </li>
          <li className="stories__item stories__item--third">
            <h3 className="stories__subtitle">{StoryTitle3}</h3>
            <p className="stories__desc">{StoryContent3}</p>
            <a className="stories__link" href={"/website-redesign"}>
              {StoryButtonText}
              <img
                className="stories__svg"
                src="/assets/images/svg/arrow-right.svg"
                alt="arrow right"
                height="20px"
                width="14px"
              />
            </a>
            <div className="stories__block-grid stories__block-grid--bottom">
              <img
                className="stories__img stories__item--first"
                src="/assets/images/svg/galerijaCentrs.svg"
                alt="galerija centrs"
                height="200px"
                width="100px"
              />
              <img
                className="stories__img stories__item--second"
                src="/assets/images/svg/eParaksts.svg"
                alt="eParaksts"
                height="200px"
                width="100px"
              />

              <img
                className="stories__img stories__item--third stories__img__eSilva"
                src="/assets/images/svg/eSilva.svg"
                alt="e-Silva"
                style={{ backgroundColor: "#F0EFE9" }}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stories;
