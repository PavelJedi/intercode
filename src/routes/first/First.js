import { Header } from "../../components/header/Header";
import { Hero } from "../../components/hero-section/Hero";
import { Benefits } from "../../components/benefits/Benefits";
import { Footer } from "../../components/footer/Footer";
import React from "react";

export const First = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Footer />
    </div>
  );
};
