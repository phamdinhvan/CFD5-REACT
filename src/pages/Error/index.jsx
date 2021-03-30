import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Error() {

  useEffect(() => {
      document.getElementById('header').style.display = 'none'
      document.getElementById('footer').style.display = 'none'

      return () => {
          document.getElementById('header').style.display = 'block'
          document.getElementById('footer').style.display = 'block'
      }
  }, [])

  return (
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
  );
}
