import React from "react";
import { Header } from "./components/header/Header";
import HomePage from "../pages/homepage/HomePage";
import { Footer } from "./components/footer/Footer";
import FormAuth from "../pages/auth/Auth";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
