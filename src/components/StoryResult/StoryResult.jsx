import React from "preact";

const StoryResult = (props) => {
  return (
    <>
      <div className="main-story__result">
        <h3>{props.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </div>
    </>
  );
};
export default StoryResult;
