import { useState } from "react";
import "../common.scss";
import "./Header.scss";
import { ChangeMobileVer } from "../ChangeMoblieVer";
export default function Header() {
  const [logo, setLogo] = useState("logo");
  const [mobile_menu, setMobileMenu] = useState("mobile_menu");
  const [menu_list, setMenuList] = useState("menu-list");
  const [sns, setSNS] = useState("sns");
  const [search, setSearch] = useState("search");
  const [nav, setNav] = useState("nav");

  const onClick = () => {
    setMobileMenu((props) => props = ChangeMobileVer(props));
    setLogo((props) => props = ChangeMobileVer(props));
    setMenuList((props) => props = ChangeMobileVer(props));
    setSNS((props) => props = ChangeMobileVer(props));
    setSearch((props) => props = ChangeMobileVer(props));
    setNav((props) => props = ChangeMobileVer(props));
  }

  return (
    <div className="header">
      <div className="inner">
        <div className={logo}>
          <a href="/">
            <img src="./images/logo.jpg" alt="" />
          </a>
        </div>
        <div className={nav}>
          <div className={sns}>
            <img src="./images/facebook-app-symbol.png" alt="" />
            <img src="./images/instagram.png" alt="" />
            <img src="./images/b.png" alt="" />
          </div>
          <div className={menu_list}>
            <ul className="menu">
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">MEET US</a></li>
              <li><a href="#">PERFUME</a></li>
              <li><a href="#">ROOM RABRIC SPRAY</a></li>
              <li><a href="#">REVIEW</a></li>
              <li><a href="#">Q&amp;A</a></li>
            </ul>
          </div>
          <div className="util_nav">
            <div className={search}>
              <span className="material-symbols-outlined">search</span>
            </div>
            <div className="member">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="shopping">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
          </div>
        </div>
      </div>
      <div className={mobile_menu} onClick={onClick}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </div>
  );
}