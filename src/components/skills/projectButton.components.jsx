import React from "react";
import "./projectButton.components.css";

export const ProjectButton = ({ setIsModalOpen, name }) => {
  return (
    <div onClick={() => setIsModalOpen(true)} className="button">
      <div className="button__text">{name}</div>
    </div>
  );
};
