import React from "react";
import "./projectButton.components.css";

export const ProjectButton = ({ name }) => {
  return (
    <div className="button">
      <div className="button__text">{name}</div>
    </div>
  );
};
