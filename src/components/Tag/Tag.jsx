import React from "preact";

const Services = (props) => {
  const { title,type } =
    props.info;
  return (
    <div class={`tag ${type === "light" ? 'tag--light':''}`}>
        {type === "light" ?
          <img class="icon__slash"  src="/astro-turn/assets/images/svg/slash-line--white.svg" alt="slash line" />
        :
          <img class="tag__slash" src="/astro-turn/assets/images/svg/slash-line.svg" alt="slash line" />
        }
        
        <p class="tag__text">{title}</p>
    </div>
  );
};
export default Services;
