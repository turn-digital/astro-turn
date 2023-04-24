import React from "preact";
import StoryResult from "../StoryResult/StoryResult";

const MainStory = (props) => {
  const {
    storyHeader,
    mainStoryContent,
    resultTitle,
    resultContent,
    workingWithTitle,
    logo1,
    logo2,
    logo3,
    logo1AltText,
    logo2AltText,
    logo3AltText,
  } = props.info;

  return (
    <section className="main-story">
      <div className="wrapper">
        <h1 className="main-story__title">{storyHeader}</h1>
        <div className="main-story__block">
          <aside className="main-story__aside">
            {logo1 && (
              <img
                style={{
                  backgroundColor: "#F0EFE9",
                }}
                className="main-story__fit"
                src={logo1}
                alt={logo1AltText}
                width="200px"
                height="100px"
              />
            )}
          </aside>
          <div className="main-story__box">
            <div
              className="main-story__content"
              dangerouslySetInnerHTML={{ __html: mainStoryContent }}
            ></div>
            <StoryResult title={resultTitle} content={resultContent} />
            <h3 className="main-story__subtitle">{workingWithTitle}</h3>
            <ul className="main-story__list">
              {logo2 && (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F0EFE9",
                  }}
                >
                  <img
                    className="main-story__img"
                    src={logo2}
                    alt={logo2AltText}
                    width="200px"
                    height="100px"
                  />
                </li>
              )}

              {logo3 && (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F0EFE9",
                  }}
                >
                  <img
                    className="main-story__img"
                    src={logo3}
                    alt={logo3AltText}
                    width="200px"
                    height="100px"
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainStory;
