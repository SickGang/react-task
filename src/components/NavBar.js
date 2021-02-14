import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [menu, setMenuActive] = useState(SidebarData);
  function setMenu(id) {
    setMenuActive(
      menu.map((item, index) => {
        if (index === id) {
          item.active = !item.active;
        }
        return item;
      })
    );
  }
  return (
    <>
      <div className="navbar"></div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <AiIcons.AiOutlineClose className="menu-bars" />
            {!sidebar && <FaIcons.FaBars className="menu-bars" />}
          </li>
          {menu.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setMenu(index)}
                className={
                  "nav-text" +
                  (item.children ? " have-children" : "") +
                  (item.active ? " active" : "")
                }
              >
                <a>
                  <span>
                    {item.title}
                    {item.children && <RiIcons.RiArrowDownSLine />}
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
