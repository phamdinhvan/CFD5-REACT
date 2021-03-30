import React, { useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";
import useFormValidate from "../core/useFormValidate";
import useAuth from "../core/useAuth";
export default React.forwardRef(function Login(prop, ref) {
  let { form, error, inputChange, check } = useFormValidate(
    {
      username: "",
      password: "",
    },
    {
      rule: {
        username: {
          required: true,
          pattern : 'email'
        },
        password: {
          required: true,
          //pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        },
      },
      message: {
        username: {
          required: "Tên đăng nhập của bạn là gì ?",
        },
        password: {
          required: "Password không được để trống",
          pattern: "Sai định dạng",
        },
      },
    }
  );
  let divRef = useRef();
  let { handleLogin } = useAuth();

  useImperativeHandle(
    ref,
    () => {
      return {
        open,
        close,
      };
    },
    []
  );

  function open() {
    divRef.current.style.display = "flex";
  }

  function close() {
    divRef.current.style.display = "none";
  }

  function _login() {
    let error = check();
    if (Object.keys(error).length === 0) {
      handleLogin(form);
      close();
    }
  }

  return ReactDOM.createPortal(
    <>
      <div
        className="popup-form popup-login"
        id="poppupLogin"
        ref={divRef}
        style={{ display: "none" }}
      >
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={inputChange}
              placeholder="Email / Số điện thoại"
            />
            {error.username && <p className="error-text">{error.username}</p>}
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={inputChange}
              placeholder="Mật khẩu"
            />
            {error.password && <p className="error-text">{error.password}</p>}
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
            <div className="btn rect main btn-login" onClick={_login}>
              đăng nhập
            </div>
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
              <img src="/img/close-icon.png" alt="" />
            </div>
          </div>
          {/* email form */}
          <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close" onClick={close}>
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
            <img src="/img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("root2")
  );
});
