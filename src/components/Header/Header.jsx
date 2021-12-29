import React from "react";
import Logo from "../Logo/Logo";
import gb from "../../images/gb.svg";
import { SearchMode } from "../../App";
import { data } from "./LinkData";

const Header = () => {
  const [searchMode, setSearchMode] = React.useContext(SearchMode);

  const [selected, setSelected] = React.useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const linkLoop = (item) => {
    var listItems = [];
    for (var i = 0; i < item.links.length; i++) {
      listItems.push(
        <li>
          <a href="/">{item.links[i]}</a>
        </li>
      );
    }
    return listItems;
  };

  const secondLoop = (item) => {
    var listItems = [];
    for (var i = 0; i < item.secondary.length; i++) {
      listItems.push(
        <li>
          <a href="/">{item.secondary[i]}</a>
        </li>
      );
    }
    return listItems;
  };

  return (
    <header className="header">
      <Logo />

      <div className="header-links">
        <nav>
          <ul>
            {data.map((item, i) => (
              <li
                key={i}
                className="nav-link"
                onMouseEnter={() => {
                  for (var n = 0; n < item.links.length; n++) {
                    if (n > 0) {
                      toggle(i);
                    }
                  }
                }}
                onMouseLeave={() => {
                  setSelected(null);
                }}
              >
                <a href={item.location} className="link">
                  {item.name}
                </a>
                <ul className={selected === i ? "nav-list active" : "nav-list"}>
                  <li>
                    <a className="menu-title" href={item.location}>
                      {item.name}
                    </a>
                  </li>
                  <div className="link-contain">{linkLoop(item)}</div>
                  <div className="link-contain sale-on">{secondLoop(item)}</div>
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="header-actions">
        <button className="header-button country">
          <div className="country-flag"></div>
        </button>

        <button
          className={
            searchMode ? "header-button search active" : "header-button search"
          }
          onClick={() => {
            setSearchMode(!searchMode);
          }}
        >
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </button>

        <a
          href="https://www.carhartt-wip.com/musicplayer"
          target="_blank"
          className="header-button music"
        >
          <div className="music-icon">
            <svg width="14px" height="15px" viewBox="0 0 14 15">
              <g
                id="Carhartt-Layout"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="WIP-Full-Screen-Catagories-01"
                  transform="translate(-1891.000000, -23.000000)"
                  fill="#E6E6E6"
                  fillRule="nonzero"
                >
                  <g id="Group">
                    <g
                      id="headset_mic-24px"
                      transform="translate(1891.000000, 23.000000)"
                    >
                      <path
                        d="M6.3,0.015 C2.715,0.2475 0,3.3825 0,6.9825 L0,14.25 L4.5,14.25 L4.5,8.25 L1.5,8.25 L1.5,6.9675 C1.5,4.0875 3.72,1.5825 6.5925,1.5 C9.57,1.4175 12,3.795 12,6.75 L12,8.25 L9,8.25 L9,14.25 L12,14.25 L13.5,14.25 L13.5,6.75 C13.5,2.8725 10.23,-0.24 6.3,0.015 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </a>
        <button className="header-button account">
          <div className="account-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="3 4 18 14"
              width="18"
            >
              <path
                fill="#E6E6E6"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              ></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </div>
        </button>
        <a href="/" className="header-button cart">
          <div className="cart-icon">
            <img src={gb} alt="Cart Icon" />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
