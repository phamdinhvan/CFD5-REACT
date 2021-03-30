import { useEffect, useState } from "react";

let emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
  phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;

export default function useFormValidate(initialForm, validate) {
  let { rule, message, options } = validate;
  if (!options) options = {};

  let v = initialForm;
  if (options.localStorage) {
    v = JSON.parse(localStorage.getItem(options.localStorage)) || initialForm;
  }

  let [form, setForm] = useState(v);

  let [error, setError] = useState({});

  useEffect(() => {
    if (options.localStorage) {
      localStorage.setItem(options.localStorage, JSON.stringify(form));
      return () => {
        localStorage.removeItem(options.localStorage);
      };
    }
  }, [form]);

  function inputChange(e) {
    let name = e.target.name,
      value = e.target.value,
      type = e.target.type;

    if (type === "checkbox") {
      value = e.target.checked;
    }

    setForm({
      ...form,
      [name]: value,
    });
  }

  function check() {
    let errorObj = {};

    for (let i in rule) {
      let r = rule[i];
      let m = message?.[i] || null;

      if (r.required && !form[i]) {
        errorObj[i] = m?.required || "Trường này không được bỏ trống";
      }

      if (r.pattern && form[i]) {
        let pattern = r.pattern;

        if (pattern === "email") pattern = emailPattern;
        if (pattern === "phone") pattern = phonePattern;
        if (pattern === "url") pattern = urlPattern;

        try {
          if (!pattern.test(form[i])) {
            errorObj[i] = m?.pattern || "Trường này không đúng định dạng";
          }
        } catch (err) {}
      }
    }
    setError(errorObj);
    return errorObj;
  }

  return {
    form,
    error,
    inputChange,
    check,
  };
}
