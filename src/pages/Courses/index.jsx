import React from 'react'

export default function Courses() {
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
                <div className="hamberger">
                </div>
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
        <main className="homepage" id="main">
          <section className="section-1">
            <div className="container">
              <h2 className="main-title">KHÓA HỌC CFD</h2>
              <p className="top-des">
                The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has
                a more-or-less normal
              </p>
              <div className="textbox">
                <h3 className="sub-title">KHÓA HỌC</h3>
                <h2 className="main-title">ONLINE</h2>
              </div>
              <div className="list row">
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="img/img1.png" alt="" />
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Front-end căn bản
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img.png" alt="" />
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        React JS
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Vương Đặng</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img2.png" alt="" />
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Animation
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img3.png" alt="" />
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Scss, Grunt JS và Boostrap 4
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img4.png" alt="" />
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        UX/UI Design
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img5.png" alt="" />
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Web Responsive
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <a href="#" className="register-btn">Đăng Ký</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-2 section-blue">
            <div className="container">
              <div className="textbox white">
                <h3 className="sub-title">KHÓA HỌC</h3>
                <h2 className="main-title">OFFLINE</h2>
              </div>
              <div className="list row">
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img6.png" alt="" />
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        Front-end căn bản
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img7.png" alt="" />
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        Front-end nâng cao
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a href="#" className="cover">
                      <img src="img/img8.png" alt="" />
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        Laravel framework
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-deco">C</div>
            </div>
          </section>
        </main>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5 left">
                <p className="des">
                  Sáng tạo, tinh tế và phù hợp sẽ khiến
                  sản phẩm của bạn trở nên khác biệt.
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
        <div className="popup-video" style={{display: 'none'}}>
          <div className="wrap">
            <div className="video-src" />
          </div>
          <div className="close" />
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            {/* login-form */}
            <div className="ct_login" style={{display: 'block'}}>
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
                <a href="#" className="forget">Quên mật khẩu?</a>
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
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>
            <div className="btn btn-icon rect white btn-google">
              <img src="img/google.svg" alt="" />
              Google
            </div>
            <p className="policy">
              Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
}
