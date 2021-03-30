import React from "react";
import useFormValidate from "../../core/useFormValidate";

export default React.forwardRef(function Collaborate(props, ref) {

  function btnRegister() {
    let error = check();

    if (Object.keys(error).length === 0) {
      alert("Đăng ký thành công");
    }
  }

  let { form, error, inputChange, check } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      content: "",
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
        website: {
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

  return (
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
          những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
          dụng và công ty trong và ngoài nước.
        </p>
        {/* <button onClick={_btnForcus}>Forcus</button> */}
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
            <p>Số điện thoại</p>
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
            <p>Website</p>
            <input
              value={form.website}
              onChange={inputChange}
              type="text"
              name="website"
              placeholder="Đường dẫn website http://"
            />
            {error.website && <p className="error-text">{error.website}</p>}
          </label>
          <label>
            <p>
              Tiêu đề<span>*</span>
            </p>
            <input
              value={form.title}
              onChange={inputChange}
              type="text"
              name="title"
              placeholder="Tiêu đề liên hệ"
            />
            {error.title && <p className="error-text">{error.title}</p>}
          </label>
          <label>
            <p>
              Nội dung<span>*</span>
            </p>
            <textarea
              value={form.content}
              onChange={inputChange}
              name="content"
              id
              cols={30}
              rows={10}
              defaultValue={""}
            />
            {error.content && <p className="error-text">{error.content}</p>}
          </label>
          <div className="btn main rect" onClick={btnRegister}>
            đăng ký
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
});
