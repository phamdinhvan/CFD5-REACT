import React from "react";

export default function CoinIntro() {
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
      <main className="paypage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">Giới thiệu Coin</h2>
            <div className="content">
              <div className="section">
                <h2>Tổng quan về COIN</h2>
                <h3>
                  <strong>Coin là gì?</strong>
                </h3>
                <p>
                  Coin là điểm thưởng tích lũy có được khi học viên giới thiệu
                  khóa học cho người mới hoặc tặng thưởng theo từng chương trình
                  khác nhau.
                </p>
                <h3>
                  <strong>Giá trị quy đổi thế nào?</strong>
                </h3>
                <p>
                  Mỗi 1 COIN trong tài khoản có giá trị tương đương 1000 VNĐ.
                </p>
                <h3>
                  <strong>Giá trị quy đổi thế nào?</strong>
                </h3>
                <p>
                  Mỗi 1 COIN trong tài khoản có giá trị tương đương 1000 VNĐ.
                </p>
                <h3>
                  <strong>Tích luỹ COIN:</strong>
                </h3>
                <p>COIN sẽ được CFD chuyển vào tài khoản khi:</p>
                <p>
                  - Có tài khoản học viên mới đăng ký khoá học thành công thông
                  qua link giới thiệu
                </p>
                <p>- Bồi hoàn COIN từ CFD cho những trường hợp đặc biệt</p>
                <h3>
                  <strong>Sử dụng COIN:</strong>
                </h3>
                <p>
                  - Giảm giá cho những khoá học mới khi đăng ký khoá học tại{" "}
                  <a href="http://cfdtraining.vn/">website CFD</a>.
                </p>
                <p>
                  - Quy đổi thành Voucher Tiki hoặc thẻ cào điện thoại (lưu ý:
                  chương trình đổi COIN sang voucher Tiki hoặc thẻ cào điện
                  thoại chỉ được áp dụng 2 lần đối với 1 tài khoản học viên).
                </p>
                <p>- Quy đổi thành những dịch vụ khác có liên kết với CFD.</p>
              </div>
              <div className="section">
                <h2>Học viên giới thiệu (học viên cũ):</h2>
                <p>
                  - Là học viên đã tham gia một hoặc nhiều khoá học tại CFD.
                </p>
                <p>
                  - Mỗi khi có học viên mới đăng ký khoá học thành công (được
                  xác nhận thành công từ đội ngũ CFD) tài khoản học viên giới
                  thiệu sẽ được cộng một số điểm COIN tương ứng tùy từng khóa
                  học (mỗi điểm có giá trị tương ứng 1000 VNĐ).
                </p>
                <p>
                  - Điểm COIN được cộng dồn khi có nhiều học viên mới đăng ký
                  thành công qua đường dẫn giới thiệu.
                </p>
                <p>
                  - Mỗi đường dẫn giới thiệu có hiệu lực mãi mãi cho đến khi tài
                  khoản giới thiệu bị khoá, xoá hoặc ngừng kích hoạt khi không
                  có nhu cầu sử dụng từ phía học viên.
                </p>
                <p>
                  - COIN có thể sử dụng để giảm giá cho những khoá học mới khi
                  đăng ký khoá học tại website
                  <a href="http://cfdtraining.vn/">cfdtraining.vn</a>.
                </p>
                <p>
                  - COIN có thể sử dụng để quy đổi thành Voucher Tiki hoặc thẻ
                  cào điện thoại (lưu ý: chương trình đổi COIN sang voucher Tiki
                  hoặc thẻ cào điện thoại chỉ được áp dụng 2 lần đối với 1 tài
                  khoản học viên).
                </p>
              </div>
              <div className="section">
                <h2>Học viên được giới thiệu (học viên mới):</h2>
                <p>
                  - Là tài khoản học viên chưa tham gia bất kỳ khoá học nào của
                  CFD.
                </p>
                <p>
                  - Học viên sẽ được giảm giá khi đăng ký thành công khoá học
                  qua đường dẫn giới thiệu.
                </p>
                <p>
                  - Số tiền được giảm giá sẽ được hiển thị và được áp dụng khi
                  đăng ký trực tuyến tại website của CFD qua link giới thiệu.
                </p>
              </div>
            </div>
          </section>
        </div>
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
    </div>
  );
}
