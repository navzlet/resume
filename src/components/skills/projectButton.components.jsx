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
        let projects = document.querySelector('.skills__projects')
        projects.classList.add('hide')
      }}
      className="button"
    >
      <div className="button__text">{name}</div>
    </div>
  );
};
