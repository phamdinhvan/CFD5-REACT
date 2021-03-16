import React from "react";
import Course from "./Course";

export default function ListCourse() {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <Course
              name="React JS"
              des="Khoá học ReactJS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="PHP"
              des="Khoá học PHP"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="Python"
              des="Khoá học Python"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="C#"
              des="Khoá học C#"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="C++"
              des="Khoá học C++"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="ASP.Net"
              des="Khoá học ASP.Net"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="NodeJS"
              des="Khoá học NodeJS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="AngularJS"
              des="Khoá học AngularJS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="VueJS"
              des="Khoá học VueJSS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <Course
              name="React JS"
              des="Khoá học ReactJS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="PHP"
              des="Khoá học PHP"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="Python"
              des="Khoá học Python"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="C#"
              des="Khoá học C#"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="C++"
              des="Khoá học C++"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="ASP.Net"
              des="Khoá học ASP.Net"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="NodeJS"
              des="Khoá học NodeJS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="AngularJS"
              des="Khoá học AngularJS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
            <Course
              name="VueJS"
              des="Khoá học VueJSS"
              status=""
              image=""
              teacher_img=""
              teacher_name=""
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}
