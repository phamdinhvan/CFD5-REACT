import React from "react";

export default function Register() {
  return (
    <div>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger">
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <a href="#" className="logo">
            <img src="img/logo.svg" alt="" />
            <h1>CFD</h1>
          </a>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">Trần Lê Trọng Nghĩa</div>
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#">Đăng xuất</a>
              </div>
            </div>
            {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng ký / Đăng nhập</a>
          </li>
          <li className="active">
            <a href="#">Trang chủ</a>
          </li>
          <li>
            <a href="#">CFD Team</a>
          </li>
          <li>
            <a href="#">Khóa Học</a>
          </li>
          <li>
            <a href="#">Dự Án</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" />
      <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến front-end căn bản </h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> 15/11/2020
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong> 6.000.000 VND
                </div>
              </div>
              <div className="form">
                <label>
                  <p>
                    Họ và tên<span>*</span>
                  </p>
                  <input type="text" placeholder="Họ và tên bạn" />
                </label>
                <label>
                  <p>
                    Số điện thoại<span>*</span>
                  </p>
                  <input type="text" placeholder="Số điện thoại" />
                </label>
                <label>
                  <p>
                    Email<span>*</span>
                  </p>
                  <input type="text" placeholder="Email của bạn" />
                </label>
                <label>
                  <p>
                    URL Facebook<span>*</span>
                  </p>
                  <input type="text" placeholder="https://facebook.com" />
                </label>
                <label className="disable">
                  <p>Sử dụng COIN</p>
                  <div className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                    {/* Cần ít nhất 200 COIN để giảm giá */}
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </div>
                </label>
                <label>
                  <p>Hình thức thanh toán</p>
                  <div className="select">
                    <div className="head">Chuyển khoản</div>
                    <div className="sub">
                      <a href="#">Chuyển khoản</a>
                      <a href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </label>
                <label>
                  <p>Ý kiến cá nhân</p>
                  <input
                    type="text"
                    placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                  />
                </label>
                <div className="btn main rect">đăng ký</div>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 left">
              <p className="des">
                Sáng tạo, tinh tế và phù hợp sẽ khiến sản phẩm của bạn trở nên
                khác biệt.
              </p>
              <p className="address">
                Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
              </p>
              <p className="phone">(+84) 98 9596 913</p>
              <div className="social">
                <a href="#">
                  <img src="img/fb-icon.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/email-icon.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/skype-icon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="right">
              <nav>
                <ul>
                  <li>
                    <a href="#">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#">Khóa học</a>
                  </li>
                  <li>
                    <a href="#">Thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <a href="#" className="back-to-top">
            <div className="line" />
            CUỘN LÊN
          </a>
        </div>
        <div className="copy-right">
          <div className="container">
            <p>2020 Creative Front-End Dev</p>
            <p>Được thiết kế và lập trình bởi CFD Team</p>
          </div>
        </div>
      </footer>
      {/* popup video homepage */}
      <div className="popup-video" style={{ display: "none" }}>
        <div className="wrap">
          <div className="video-src" />
        </div>
        <div className="close" />
      </div>
      <div className="popup-form popup-login" style={{ display: "none" }}>
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            <input type="text" placeholder="Email / Số điện thoại" />
            <input type="password" placeholder="Mật khẩu" />
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <div className="btn rect main btn-login">đăng nhập</div>
            <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
              </div>
            </div>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
          {/* email form */}
          <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="popup-form popup-login" style={{ display: "none" }}>
        <div className="wrap">
          <h2 className="title">Đăng ký</h2>
          <div className="btn btn-icon rect white btn-google">
            <img src="img/google.svg" alt="" />
            Google
          </div>
          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a>{" "}
            của CFD
          </p>
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="popup-video popup-loading" style={{ display: "none" }}>
        <div className="loader">
          <h2 className="title">Tiến trình đăng ký đang diễn ra</h2>
          <div className="icon_loader">
            <img src="img/loader.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
