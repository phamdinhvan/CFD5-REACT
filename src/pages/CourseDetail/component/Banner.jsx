import React from "react";
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <section className="banner style2" style={{ "--background": "#cde6fb" }}>
        <div className="container">
          <div className="info">
            <h1>Thực Chiến front-end căn bản</h1>
            <div className="row">
              <div className="date">
                <strong>Khai giảng:</strong> 12/10/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
            </div>
            <div
              className="btn white round"
              style={{ "--colorBtn": "#70b6f1" }}
            >
              <NavLink to="/register">Đăng ký</NavLink>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>{" "}
              <span>giới thiệu</span>
            </div>
            <div className="money">4.000.000 VND</div>
          </div>
        </div>
      </section>
    </div>
  );
}
