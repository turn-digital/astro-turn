import React from "preact";

const Services = (props) => {
  const { tag, subtitle, title, content } =
    props.info;
  return (
    <>
      <section id="services" className="services">
        <div className="services__bg-top">
          <div className="wrapper">
            <div>
              <img className="icon__slash"  src="/assets/images/svg/slash-line--white.svg" alt="slash line" />
              <p className="services__text services__text--white">{tag}</p>
            </div>
            <h2 className="services__title services__title--white">{title}</h2>
          </div>
        </div>
          <div className="services__bg-bottom">
            <div className="wrapper">
              <ul className="services__list">
              {props.cards.map((card) => (
                <li className="services__item" key={card.key}>
                  <h3 className="services__subtitle">{card.title}</h3>
                  <p className="services__desc">{card.content}</p>
                  <ul className="services__tags">
                    {card.tags.split(",").map((tag) => (
                      <li className="services__desc services__desc--margin" key={tag}>
                        <img className="services__svg" src="/assets/images/svg/romb.svg" alt="romb" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              </ul>
              <h2 className="services__title services__title--margin services__title--desk">{subtitle}</h2>
              <p className="services__text">{content}</p>
            </div>
          </div>
      </section>
    </>
  );
};
export default Services;
