import React from "react";
import { Header } from "./components/header/Header";

import { Footer } from "./components/footer/Footer";

import { Outlet } from "react-router";

export const CourseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="course">
      <Header />
      {children}
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
