import React from "react";

export default function Error() {
  return (
    <div>
      <main className="notfound" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">404</h2>
            <p>Không tìm thấy trang</p>
            <a href="#" className="btn main round">
              Trang chủ
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
