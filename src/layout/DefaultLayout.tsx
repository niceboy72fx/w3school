import React from "react";
import { Header } from "./components/header/Header";

import { Footer } from "./components/footer/Footer";

import { Outlet } from "react-router";

export const CourseLayout: React.FC<> = () => {
  return (
    <section className="course">
      <Header />
      <Outlet/>
    </section>
  );
};



export default function DefaultLayout() {
  return (
    <div className="m-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
