import React, { useState } from "react";
import "./skills.components.css";
import PersonIkon from "../../assets/person_ikon";
import EducationIcon from "../../assets/education_ikon";
import WorkIcon from "../../assets/work_ikon";
import { ProjectButton } from "./projectButton.components";
import { ProjectModal } from "./projectModal.components";

export const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mocProjectExample = {
    name: "Хакатон от компании «Сервис Газификация» ",
    stack: "React, Mui",
    description: "dsadkfas",
    codeUrl: "https://yandex.com",
    previewUrl: false,
  };
  const [projectExample, setProjectExample] = useState(mocProjectExample);

  return (
    <div className="skills">
      <h1>Закиров Александр</h1>
      <h2>Frontend-developer</h2>
      <div className="skills__aboutMe skills__block">
        <PersonIkon />
        <h3 className="header">Обо мне</h3>
      </div>
      <hr />
      <p>
        Занимаюсь разработкой с 2022, в основном - фриланс и пет-проекты. В
        настоящий момент ищу компанию которая поможет мне применить знания на
        практике.
      </p>

      <div className="skills__education skills__block">
        <EducationIcon />
        <h3 className="header">Образование</h3>
      </div>
      <hr />
      <h4 className="skills__education header">IT-hub Ekat, 2021-2023 </h4>
      <p>
        Колледж информационных технологий. В рамках обучения получил получил
        опыт в создании мобильных приложений и веб-страниц. Был небольшой опыт
        создания бэкенда.
      </p>

      <div className="skills__experience skills__block">
        <WorkIcon />
        <h3 className="header">Опыт</h3>
      </div>
      <hr />
      <div className="skills__experienceContent">
        <h4 className="skills__experience header">
          2022-2023, College projects:
        </h4>

        <ProjectButton
          setIsModalOpen={setIsModalOpen}
          name="Хакатон от компании «Сервис Газификация» "
        />
        <ProjectButton
          setIsModalOpen={setIsModalOpen}
          name="Мобильное приложение для коммунальных служб"
        />
        <h4 className="skills__experience header">Pet Projects:</h4>
        <ProjectButton setIsModalOpen={setIsModalOpen} name="To-do list v. 1" />
        <ProjectButton setIsModalOpen={setIsModalOpen} name="To-do list v. 2" />
        {isModalOpen ? (
          <ProjectModal
            projectData={projectExample}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}
      </div>
    </div>
  );
};
