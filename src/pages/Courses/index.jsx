import React from "react";
import MainLayout from "../../layout/MainLayout";
import { NavLink } from "react-router-dom";
import CoursesCFD from "./components/CoursesCFD";

export default function Courses() {
  return (
      <main className="homepage" id="main">
        <CoursesCFD/>
      </main>
  );
}
