import "../common.scss";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="inner">
        <div className="logo">
          <a href="/">
            <img src="./images/logo.jpg" alt="" />
          </a>
        </div>
        <div className="nav">
          <div className="sns">
            <img src="./images/facebook-app-symbol.png" alt="" />
            <img src="./images/instagram.png" alt="" />
            <img src="./images/b.png" alt="" />
          </div>
          <div className="menu-list">
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
            <div className="search">
              <span class="material-symbols-outlined">search</span>
            </div>
            <div className="member">
              <span class="material-symbols-outlined">person</span>
            </div>
            <div className="shopping">
              <span class="material-symbols-outlined">shopping_bag</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}