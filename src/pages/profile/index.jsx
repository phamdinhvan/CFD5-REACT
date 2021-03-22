import React from "react";
import {
  Route,
  Switch
} from 'react-router-dom'
import { NavLink, useRouteMatch } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Info from "./components/Info";
import MyCoin from "./components/MyCoin";
import MyCourse from "./components/MyCourse";
import Payment from "./components/Payment";
import Project from "./components/Project";

export default function Profile() {
  let { url } = useRouteMatch()
  return (
      <main className="profile" id="main">
        <section>
          <div className="top-info">
            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="/img/avatar-lg.png" alt="" />
              <div className="camera" />
            </div>
            <div className="name">trần nghĩa</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="container">
            <div className="tab">
              <div className="tab-title">
                <NavLink exact to={url}>
                  Thông tin tài khoản
                </NavLink>
                <NavLink to={`${url}/course`}>Khóa học của bạn</NavLink>
                <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                <NavLink to={`${url}/hisotry-payment`}>
                  Lịch sử thanh toán
                </NavLink>
                <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
              </div>
              <div className="tab-content">
                <Switch>
                  <Route path={`${url}/course`} component={MyCourse} />
                  <Route path={`${url}/project`} component={Project} />
                  <Route
                    path={`${url}/hisotry-payment`}
                    component={Payment}/>
                  <Route path={`${url}/coin`} component={MyCoin} />
                  <Route exact path={url} component={Info} />
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
