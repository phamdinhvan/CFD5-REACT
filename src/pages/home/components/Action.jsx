import React from "react";
import { NavLink } from "react-router-dom";

export default function Action() {
  return (
    <section className="section-action">
      <div className="container">
        <h3>
          Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?
        </h3>
        <div className="btn main round bg-white">
          <NavLink to="/register">Đăng Ký</NavLink>
        </div>
      </div>
    </section>
  );
}
