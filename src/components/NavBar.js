import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import SubMenu from "./components/SubMenu";
import { SidebarData } from "./SidebarData";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [activeUl, setActiveUl] = useState(false);
  const showUl = () => setActiveUl(!activeUl);
  return (
    <>
      <div className="navbar"></div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <AiIcons.AiOutlineClose className="menu-bars" />
            {!sidebar && <FaIcons.FaBars className="menu-bars" />}
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={showUl}
                className={
                  // item.children ? item.cName + " have-children" : item.cName
                  "nav-text" +
                  (item.children ? " have-children" : "") +
                  (item.active ? " active" : "")
                }
                // onClick={item.children && showUl}
              >
                <a>
                  <span>
                    {item.title}
                    {item.arrow}
                  </span>
                  {item.icon}
                </a>
                {item.children && (
                  <ul>
                    {item.children.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href="#!">{item.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
