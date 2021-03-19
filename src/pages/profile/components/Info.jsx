import React, { useState } from "react";

export default function Info() {

  let [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    fbURL: '',
    skypeURL: ''
  })

  let[error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    fbURL: '',
    skypeURL: ''
  })

  function inputChange(e) {

    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  function btnSave() {
    let errorObj = {}
    if (!form.name) {
      errorObj.name = 'Tên bạn là gì ?'
    }

    if (!form.phone) {
      errorObj.phone = 'Số điện thoại của bạn là gì ?'
    }

    if (!form.fbURL) {
      errorObj.fbURL = 'Xin hãy nhập địa chỉ Facebook'
    } else if(!/([A-z0-9\.]+)\/?$/i.test(form.fbURL)) {
      errorObj.fbURL = 'URL không đúng '
    }

    if (form.skypeURL) {
      errorObj.skypeURL = '!!!'
    }

    setError(errorObj)

    if(Object.keys(errorObj).length=== 0) {
      alert('Lưu thành công') 
    }
  }
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
        <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
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
        <input value={form.skypeURL} onChange={inputChange} type="text" name = "skypeURL" placeholder="Skype url" />
        {error.skypeURL && <p className="error-text">{error.skypeURL}</p>}
      </label>
      <div className="btn main rect" onClick={btnSave}>LƯU LẠI</div>
    </div>
  );
}
