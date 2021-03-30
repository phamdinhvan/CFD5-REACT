import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AContext } from "../core/AppProvider";
import useAuth from "../core/useAuth";
import useDelayLink from "../core/useDelayLink";

export default function Header() {
  //let { login, user, handleLogin, poppupLogin, logout} = useContext(AContext);

  let {login, user, handleLogin, poppupLogin, logout} = useAuth()

  let delayLink = useDelayLink()

  function menuOpen() {
    document.body.classList.toggle("menu-is-show");
  }

  function menuClose() {
    document.body.classList.remove("menu-is-show");
  }
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={menuOpen}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <NavLink to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </NavLink>
          <div className="right">
            {" "}
            {login ? (
              <div className="have-login">
                <div className="account">
                  <a href="#" className="info">
                    <div className="name">{user.name}</div>
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <NavLink to="/profile/course">Khóa học của tôi</NavLink>
                  <NavLink to="/profile">Thông tin tài khoản</NavLink>
                  <a href="#" onClick={(e) => { e.preventDefault(); logout() }}>Đăng xuất</a>
                </div>
              </div>
            ) : (
              <div class="not-login bg-none">
                <a href="#" class="btn-register" onClick={poppupLogin}>
                  Đăng nhập
                </a>
                <a href="login.html" class="btn main btn-open-login">
                  Đăng ký
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng nhập</a>
            <a href="#">Đăng ký</a>
          </li>
          <li className="active">
            <NavLink exact onClick={menuClose} to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={menuClose} to="/team">
              CFD Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={menuClose} to="/course">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={menuClose} to="/project">
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={menuClose} to="/contact">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={menuOpen} />
    </>
  );
}
