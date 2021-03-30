import React, { useState } from "react";
import useFormValidate from "../../../core/useFormValidate";

export default function Info() {
  
  function btnSave() {
    
    let error = check();

    if (Object.keys(error).length === 0) {
      alert("Lưu thành công");
    }
  }

  let { form, error, inputChange, check } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "pdvan999@gmail.com",
      fbURL: "",
      skype: "",
     
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
        fbURL: {
          required: true,
          pattern: "url",
        },
        skype: {
          required: true,
          pattern: "url",
        },
      },
      message: {
        name: {
          required: "Họ và tên không được bỏ trống",
        },
      },
      options : {
          localStorage : "profile-info"
      }
    }
  );

  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input value={form.name} onChange={inputChange} type="text" name = "name" placeholder="Nguyễn Văn A" />
        {error.name && <p className="error-text">{error.name}</p>}
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input value={form.phone} onChange={inputChange} type="text" name = "phone" placeholder="0949******" />
        {error.phone && <p className="error-text">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input value={form.email} disabled type="text" />
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input value={form.fbURL} onChange={inputChange} type="text" name = "fbURL" placeholder="Facebook url" />
        {error.fbURL && <p className="error-text">{error.fbURL}</p>}
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input value={form.skype} onChange={inputChange} type="text" name = "skype" placeholder="Skype url" />
        {error.skype && <p className="error-text">{error.skype}</p>}
      </label>
      <div className="btn main rect" onClick={btnSave}>LƯU LẠI</div>
    </div>
  );
}
