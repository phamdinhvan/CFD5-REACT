import React, { useState } from "react";

export default function Register() {

  let[form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    fbURL: '',
    opinion: ''
  })

  let[error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    fbURL: '',
    opinion: ''
  }) 

  function inputChange(e) {
    // let checked = false;
    // let type = document.getElementById("type").textContent

    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  function btnRegister() {
    let errorObj = {}
    if (!form.name) {
      errorObj.name = 'Tên bạn là gì ?'
    }

    if (!form.phone) {
      errorObj.phone = 'Số điện thoại của bạn là gì ?'
    }

    if (!form.email) {
      errorObj.email = 'Email không được bỏ trống'
    } else if(!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.email)) {
      errorObj.email = 'Email sai định dạng '
    }

    if (!form.fbURL) {
      errorObj.fbURL = 'Xin hãy nhập địa chỉ Facebook'
    } else if(!/([A-z0-9\.]+)\/?$/i.test(form.fbURL)) {
      errorObj.fbURL = 'URL không đúng '
    }

    if (!form.opinion) {
      errorObj.opinion = 'Xin hãy đưa ra ý kiến của mình '
    }

    setError(errorObj)

    if(Object.keys(errorObj).length=== 0) {
      alert('Đăng ký thành công') 
    }
  }

  return (
    <div>
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
                  <input value={form.name} onChange={inputChange} type="text" name = "name" placeholder="Họ và tên bạn" />
                  {error.name && <p className="error-text">{error.name}</p>}
                </label>
                <label>
                  <p>
                    Số điện thoại<span>*</span>
                  </p>
                  <input value={form.phone} onChange={inputChange} type="text" name="phone" placeholder="Số điện thoại" />
                  {error.phone && <p className="error-text">{error.phone}</p>}  
                </label>
                <label>
                  <p>
                    Email<span>*</span>
                  </p>
                  <input value={form.email} onChange={inputChange} type="text" name = "email" placeholder="Email của bạn" />
                  {error.email && <p className="error-text">{error.email}</p>}
                </label>
                <label>
                  <p>
                    URL Facebook<span>*</span>
                  </p>
                  <input value={form.fbURL} onChange={inputChange} type="text" name="fbURL" placeholder="https://facebook.com" />
                  {error.website && <p className="error-text">{error.website}</p>}
                </label>
                <label className="disable">
                  <p>Sử dụng COIN</p>
                  <div className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                    {/* Cần ít nhất 200 COIN để giảm giá */}
                    <input  type="checkbox" defaultChecked="checked"
                     
                    />
                    <span className="checkmark" />
                  </div>
                </label>
                <label>
                  <p>Hình thức thanh toán</p>
                  <div className="select" >
                    <div className="head">Chuyển khoản</div>
                    <div className="sub">
                      <a href="#">-----/-----</a>
                      <a href="#">Chuyển khoản</a>
                      <a href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </label>
                <label>
                  <p>Ý kiến cá nhân</p>
                  <input value={form.opinion} onChange={inputChange}
                    type="text" name ="opinion"
                    placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                  />
                  {error.opinion && <p className="error-text">{error.opinion}</p>}
                </label>
                <div className="btn main rect" onClick={btnRegister} >đăng ký</div>
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
    </div>
  );
}
