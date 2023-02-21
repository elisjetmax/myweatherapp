import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { capitalize } from "../../utils";
import TempLetter from "../TempLetter/TempLetter";
const Header = ({ showBackButton, title, subTitle }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const redirect = (path) => {
    setShowMenu(false);
    navigate(path);
  };
  return (
    <>
      <Helmet>
        <title>{`MyWeatherApp: ${
          capitalize(title) || "La app del clima"
        }`}</title>
      </Helmet>
      <header data-testid="main-item-container">
        <div className="flex items-center justify-between w-full h-12 gap-2 p-2 text-white ">
          {showBackButton && (
            <img
              src="https://api.iconify.design/carbon:chevron-left.svg?color=white&height=2rem"
              alt="close"
              className="btn-header"
              onClick={() => window.history.back()}
            />
          )}
          <div className="flex flex-col flex-1 gap-0 text-white">
            <span className="text-lg capitalize font-russo-one">{title}</span>
            {subTitle && (
              <span className="text-xs first-letter:capitalize">
                {subTitle}
              </span>
            )}
          </div>
          <img
            src="https://api.iconify.design/carbon:overflow-menu-vertical.svg?color=white"
            alt="close"
            className="btn-header md:hidden"
            onClick={() => setShowMenu(true)}
          />
          <aside className={`main-menu ${showMenu ? "flex" : "hidden"}`}>
            <div className="w-1/4 h-full opacity-80 bg-slate-500 md:hidden"></div>
            <div className="menu-container">
              <div className="flex justify-end pr-2 ">
                <span>
                  <img
                    src="https://api.iconify.design/carbon:close-outline.svg?color=white"
                    alt="close"
                    className="btn-header"
                    onClick={() => setShowMenu(false)}
                  />
                </span>
              </div>
              <ol className="menu-nav-bar ">
                <li
                  className="inline-block px-2 text-white cursor-pointer"
                  onClick={() => (window.location = "/")}
                >
                  Inicio
                </li>
                <li
                  className="inline-block px-2 text-white cursor-pointer"
                  onClick={() => redirect("/main")}
                >
                  Ciudades
                </li>
                <li className="flex items-center justify-between gap-2 px-2 text-sm text-white">
                  <TempLetter />
                </li>
              </ol>
              <div className="py-2 text-xs border-t border-slate-500 text-slate-600 md:hidden">
                <div>Mi App del Clima</div>
                <div>Elis Arcia</div>
                <div>elis.arcia@gmail.com</div>
              </div>
            </div>
          </aside>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {};

export default Header;
