import React from "react";
import useFormValidate from "../../core/useFormValidate";

export default function Register() {
  let { form, error, inputChange, check } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      fbURL: "",
      title: "",
      content: "",
      coin: false,
      payment: "chuyen-khoan",
    },
    {
      rule: {
        name: {
          required: true,
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        email: {
          required: true,
          pattern: "email",
        },
        fbURL: {
          required: true,
          pattern: "url",
        },
      },
      message: {
        name: {
          required: "Họ và tên không được bỏ trống",
        },
        email: {
          required: "Địa chỉ Email không được để trống",
          pattern: "Địa chỉ Email phải thuộc định dạng example@gmail.com",
        },
      },
    }
  );

  function btnRegister() {
    let error = check();

    if (Object.keys(error).length === 0) {
      alert("Đăng ký thành công");
    }
  }

  let _selectMethod = (value) => {
    // setForm({
    //   ...form,
    //   payment: value,
    // });
  };

  return (
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
                <input
                  value={form.name}
                  onChange={inputChange}
                  type="text"
                  name="name"
                  placeholder="Họ và tên bạn"
                />
                {error.name && <p className="error-text">{error.name}</p>}
              </label>
              <label>
                <p>
                  Số điện thoại<span>*</span>
                </p>
                <input
                  value={form.phone}
                  onChange={inputChange}
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                />
                {error.phone && <p className="error-text">{error.phone}</p>}
              </label>
              <label>
                <p>
                  Email<span>*</span>
                </p>
                <input
                  value={form.email}
                  onChange={inputChange}
                  type="text"
                  name="email"
                  placeholder="Email của bạn"
                />
                {error.email && <p className="error-text">{error.email}</p>}
              </label>
              <label>
                <p>
                  URL Facebook<span>*</span>
                </p>
                <input
                  value={form.fbURL}
                  onChange={inputChange}
                  type="text"
                  name="fbURL"
                  placeholder="https://facebook.com"
                />
                {error.fbURL && <p className="error-text">{error.fbURL}</p>}
              </label>
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                  {/* Cần ít nhất 200 COIN để giảm giá */}
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    name="coin"
                    checked={form.coin}
                    onChange={inputChange}
                  />
                  <span className="checkmark" />
                </div>
              </label>
              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a
                      href="#"
                      onClick={_selectMethod.bind(null, "chuyen-khoan")}
                    >
                      Chuyển khoản
                    </a>
                    <a href="#" onClick={_selectMethod.bind(null, "tien-mat")}>
                      Thanh toán tiền mặt
                    </a>
                  </div>
                </div>
              </label>
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  value={form.opinion}
                  onChange={inputChange}
                  type="text"
                  name="opinion"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
                {error.opinion && <p className="error-text">{error.opinion}</p>}
              </label>
              <div className="btn main rect" onClick={btnRegister}>
                đăng ký
              </div>
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
  );
}
