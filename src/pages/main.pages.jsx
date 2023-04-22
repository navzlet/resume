import React from "react";
import { About } from "../components/about/about.components";
import { Skills } from "../components/skills/skills.components";
import "./main.pages.css";

export const MainPage = () => {
  return (
    <div className="mainPage">
      <About />
      <Skills />
    </div>
  );
};
