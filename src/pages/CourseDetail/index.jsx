import React from "react";
import MainLayout from "../../layout/MainLayout";
import AnotherCourse from "./component/AnotherCourse";
import Banner from "./component/Banner";
import Detail from "./component/Detail";
import MemberCourses from "./component/MemberCourses";

export default function CourseDetail() {
  return (
    <MainLayout>
      <main className="course-detail" id="main">
        <Banner/>
        <Detail/>
        <MemberCourses/>
        <AnotherCourse/>
      </main>
    </MainLayout>
  );
}
