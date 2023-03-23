import React from "preact";

const Hero = (props) => {
  const {
    title,
    buttonText
  } = props.info
  return (
    <>
      <section className="hero">
        <div className="wrapper">
          <h1 className="hero__title">
            {title}
          </h1>
          <div>
            <a
              className="hero__link"
              href="/"
            >
              {buttonText}
              <img className="hero__svg" src="./src/assets/images/svg/arrow-right.svg" alt="arrow right" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
