import React from "react";

export default function Pay() {
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
            <h2 className="main-title">thanh toán</h2>
            <div className="content">
              <div className="section">
                <h2>Hình thức thanh toán</h2>
                <h3>
                  <strong>Hình thức chuyển khoản</strong>
                </h3>
                <p>
                  - Thẻ ATM nội địa; <br />
                  - Thẻ Visa, Master, JCB...; <br />- Ví MOMO.
                </p>
                <p>
                  CFD chỉ gửi xác nhận sau khi học phí được chuyển đến tài khoản
                  của CFD và sẽ không chịu trách nhiệm hay hoàn trả học phí khi
                  có sai sót trong quá trình chuyển khoản hoặc sai thông tin
                  chuyển khoản. Nếu xảy ra sai sót, Bạn vui lòng làm việc với
                  ngân hàng để được xử lí.
                </p>
                <p>
                  <strong>THÔNG TIN TÀI KHOẢN:</strong> <br />
                  <strong>Chủ tài khoản</strong>: TRAN LE TRONG NGHIA
                  <br />
                  <strong>Số tài khoản</strong>: 004704070012672
                  <br />
                  <strong>Ngân hàng</strong>: HD Bank - chi nhánh Nguyễn Trãi
                  (hoặc chọn Tp Hồ Chí Minh)
                  <br />
                  <strong>Nội dung chuyển khoản</strong>: Họ và tên số điện
                  thoại mã khóa học (ví dụ: Nguyen Tuan Anh 0989998881 CFD2)
                </p>
                <p>
                  <i>
                    Sau khi thanh toán và CFD nhận được tiền sẽ chủ động nhắn
                    tin để xác nhận.
                  </i>
                </p>
                <h3>
                  <strong>Hình thức trực tiếp</strong>
                </h3>
                <p>
                  Hình thức thanh toán này chỉ áp dụng cho các thành viên tham
                  gia khóa CFD OFFLINE. Thanh toán ngày đầu tiên khi tham gia
                  khóa học.
                </p>
              </div>
              <div className="section">
                <h2>Hoàn trả học phí</h2>
                <p>
                  CFD không chịu trách nhiệm hoàn trả học phí trong bất kỳ
                  trường hợp nào trừ khi dịch vụ của CFD bị gián đoạn, trục trặc
                  do lỗi từ phía CFD gây ảnh hưởng nghiêm trọng đến quyền lợi
                  của học viên.
                </p>
              </div>
              <div className="section">
                <h2>Chính sách ưu đãi</h2>
                <p>
                  Sẽ được CFD thông báo công khai tại website theo từng chương
                  trình ưu đãi cụ thể.
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
