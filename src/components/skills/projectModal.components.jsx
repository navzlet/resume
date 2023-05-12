import React from "react";
import "./projectModal.components.css";
import GithubModalIcon from "../../assets/github_modal_icon.jsx";
import InternetModalIcon from "../../assets/internet_modal_icon.jsx";

export const ProjectModal = ({ setIsModalOpen, projectData }) => {
  return (
    <div className="modal">
      <div className="modal__name">{projectData.name}</div>
      <div className="modal__header">Стек:</div>
      <p className="modal__content">{projectData.stack}</p>
      <div className="modal__header">Описание:</div>
      <p className="modal__content">{projectData.description}</p>
      <a target="_blank" rel="noreferrer" href={projectData.codeUrl}>
        <div className="modal__codeLink link">
          Ссылка на код:
          <GithubModalIcon />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={
          projectData.previewUrl ? projectData.previewUrl : projectData.codeUrl
        }
      >
        <div className="modal__previewLink link">
          Предпросмотр:
          {projectData.previewUrl ? <InternetModalIcon /> : " Недоступен :("}
        </div>
      </a>
      <button onClick={() => setIsModalOpen(false)}>close</button>
    </div>
  );
};
