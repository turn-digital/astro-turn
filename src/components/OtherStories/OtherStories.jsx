import React from "preact";
import Tag from "../Tag/Tag.jsx"

const OtherStories = (props) => {
  const {
    tag,
    title,
    story1Header,
    story2Header,
    story1Content,
    story2Content,
    viewStory,
  } = props.info;

  return (
    <section id="stories" className="other-stories">
      <div className="wrapper">
        <Tag info={{title:tag}}/>
        <h2 className="other-stories__title">{title}</h2>
        <ul className="other-stories__list">
            <li className="other-stories__item">
              <h3 className="other-stories__subtitle">{story1Header}</h3>
              <p className="other-stories__desc">{story1Content}</p>
              <a
                  className="other-stories__link"
                  href={"/astro-turn/user-centric-approach"}
                >
                  {viewStory}
                  <img className="other-stories__svg" src="/astro-turn/assets/images/svg/arrow-right.svg" alt="arrow right" height="20px" width="14px"/>
                </a>
            </li>
            <li className="other-stories__item">
              <h3 className="other-stories__subtitle">{story2Header}</h3>
              <p className="other-stories__desc">{story2Content}</p>
              <a
                  className="other-stories__link"
                  href={"/astro-turn/website-redesign"}
                >
                  {viewStory}
                  <img className="other-stories__svg" src="/astro-turn/assets/images/svg/arrow-right.svg" alt="arrow right" height="20px" width="14px"/>
                </a>
            </li>
        </ul>
      </div>
    </section>
  );
};
export default OtherStories;
