import React from "preact";
import { useState } from "preact/hooks";
import ReactModal from "react-modal";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <a className="header__logo"  href="/"><img className="header__img" src="./src/assets/images/logo-header.png" alt="logo" /></a>
          <div className="header__menu">
            <div>
            <ReactModal
              className="header__menu--mob wrapper"
             isOpen={toggleMenu}
             contentLabel={"Navigation modal"}
             shouldFocusAfterRender={true}
             shouldCloseOnEsc={true}
             preventScroll={true}>
             <div className="header__box">
             <a className="header__logo" href="/" onClick={() => setToggleMenu(!toggleMenu)}><img className="header__img" src="./src/assets/images/logo-header.png" alt="logo" /></a>
               <button
                  className="header__button header__button--close"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <img  src="./src/assets/images/svg/menu-close.svg" alt="menu close" />
                </button>
             </div>
              <nav className="header__nav header__nav--mob">
              <a className="header__link" href="/" onClick={() => setToggleMenu(!toggleMenu)}>Home</a>
              <a className={((url.match('website-redesign') || url.match('user-centric-approach') || url.match('digital-transformation')) ? (`header__link active`) : (`header__link`) )} href="/#story" onClick={() => setToggleMenu(!toggleMenu)}>Story</a>
              <a className="header__link" href="/#services" onClick={() => setToggleMenu(!toggleMenu)}>Services</a>
              <a className="header__link" href="/#contacts" onClick={() => setToggleMenu(!toggleMenu)}>Contacts</a>
              </nav>
            </ReactModal>
            </div>
            <nav className="header__nav header__nav--desc">
              <a className="header__link" href="/">Home</a>
              <a className={((url.match('website-redesign') || url.match('user-centric-approach') || url.match('digital-transformation')) ? (`header__link active`) : (`header__link`) )} href="/#story" onClick={() => setToggleMenu(!toggleMenu)}>Story</a>
              <a className="header__link" href="/#services">Services</a>
              <a className="header__link" href="/#contacts">Contacts</a>
            </nav>
            
          </div>
          <button
            className="header__button header__button--mob"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img  src="./src/assets/images/svg/menu.svg" alt="menu open" />
          </button>
        </header>
      </div>
    </>
  );
};
export default Header;
