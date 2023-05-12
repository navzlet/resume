import React from "react";
import "./projectButton.components.css";

export const ProjectButton = ({
  setIsModalOpen,
  name,
  project,
  setModalContent,
}) => {
  return (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setModalContent(project);
      }}
      className="button"
    >
      <div className="button__text">{name}</div>
    </div>
  );
};
