import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <main className="notfound" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">404</h2>
            <p>Không tìm thấy trang</p>
            <NavLink to="/" className="btn main round">
              Trang chủ
            </NavLink>
          </section>
        </div>
      </main>
    </>
  );
}
