import React from "preact";
import StoryResult from "../StoryResult/StoryResult";

const MainStory = (props) => {
  const {
    storyHeader,
    mainStoryContent,
    resultTitle,
    resultContent,
    workingWithTitle,
  } = props.info;
  return (
    <>
      <section className="main-story">
      <div className="wrapper">
      <h1 className="main-story__title">{storyHeader}</h1>
      <div className="main-story__block">
        <aside className="main-story__aside">
          <img
          className="main-story__fit"
          src="./src/assets/images/svg/eSaeima--mob.svg"
            alt="e-Saeima"
          />
        </aside>
        <div className="main-story__box">
          <div className="main-story__content" dangerouslySetInnerHTML={{ __html: mainStoryContent }}></div>
          <div className="main-story__content"><StoryResult title={resultTitle} content={resultContent} /></div>
          <h3 className="main-story__subtitle">{workingWithTitle}</h3>
          <ul className="main-story__list">
            <li>
            <img
              className="main-story__img"
              src="./src/assets/images/svg/tiesibsargs.svg"
              alt="Tiesibsargs"
              />    
            </li>
            <li>
            <img
              className="main-story__img"
              src="./src/assets/images/svg/csp.svg"
              alt="CSP"
              />    
            </li>
          </ul>
        </div>
        </div>
      </div> 
      </section>
    </>
  );
};
export default MainStory;
