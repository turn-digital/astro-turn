import React from "preact";
import Tag from "../Tag/Tag.jsx";

const Services = (props) => {
  const { tag, subtitle, title, content } = props.info;
  return (
    <section id="services" className="services">
      <div className="services__bg-top">
        <div className="wrapper">
          <Tag info={{ title: tag, type: "light" }} />
          <h2 className="services__title services__title--white">
            {}
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></div>
          </h2>
        </div>
      </div>
      <div className="services__bg-bottom">
        <div className="wrapper">
          <div className="services__box">
            <ul className="services__list">
              {props.cards.map((card) => (
                <li className="services__item" key={card.key}>
                  <h3 className="services__subtitle">{card.title}</h3>
                  <p className="services__desc">{card.content}</p>
                  <ul className="services__tags">
                    {card.tags.split(",").map((tag) => (
                      <li
                        className="services__desc services__desc--margin"
                        key={tag}
                      >
                        <img
                          className="services__svg"
                          src="/assets/images/svg/romb.svg"
                          alt="romb"
                          height="16px"
                          width="16px"
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="services__bottom">
              <h2 className="services__title services__title--desk">
                {subtitle}
              </h2>
              <p className="services__text">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
