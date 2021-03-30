import React, { useEffect, useState } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
//import { createBrowserHistory } from "history";
//let browserHistory = createBrowserHistory();

export let AContext = React.createContext();

function Provider({ children }) {

  let [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || {
      login: false,
      user: null,
    }
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  function handleLogin(form) {
    setAuth({
      login: true,
      user: {
        name: "Phạm Đình Văn",
      },
    });
  }

  function poppupLogin(flag = true) {
    document.getElementById("poppupLogin").style.display = flag
      ? "flex"
      : "none";
  }

  function logout() {
    setAuth({
      login: false,
      user: null,
    });
  }
  let history = useHistory();

  function delayLink(e) {
    document.body.classList.remove("menu-is-show");
    document.querySelector(".loading-page").style.transform = "scale(25)";
    e.preventDefault();
    setTimeout(() => {
      history.push(e.target.href.replace(window.location.origin, ""));
      document.querySelector(".loading-page").style.transform = "scale(0)";
    }, 1000);
  }
  return (
    <AContext.Provider
      value={{ ...auth, handleLogin, delayLink, poppupLogin, logout }}
    >
      {children}
    </AContext.Provider>
  );
}

export default function AppProvider({ children }) {
  return (
    <BrowserRouter>
      <Provider>{children}</Provider>
    </BrowserRouter>
  );
}
