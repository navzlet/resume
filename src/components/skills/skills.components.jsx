import React, { useState } from "react";
import "./skills.components.css";
import PersonIkon from "../../assets/person_ikon";
import EducationIcon from "../../assets/education_ikon";
import WorkIcon from "../../assets/work_ikon";
import { ProjectButton } from "./projectButton.components";
import { ProjectModal } from "./projectModal.components";

export const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const mocProjectExample = [
    {
      name: "Хакатон от компании «Сервис Газификация» ",
      stack: "React, Mui",
      description:
        "За небольшой срок (3 дня) был написан веб-интерфейс, позволяющий оператору редактировать значения таблицы данных. Моя часть работы находится в папке 'hack1t3_front'", 
      codeUrl: "https://github.com/navzlet/Hackaton",
      previewUrl: false,
      type: "college",
    },
    {
      name: "Мобильное приложение для коммунальных служб ",
      stack: "React-native, expo",
      description:
        "Позволяет создавать новые заявки и отслеживать список актуальных заявок.",
      codeUrl: "https://github.com/navzlet/JKH",
      previewUrl: false,
      type: "college",
    },
    {
      name: "To-do list v. 1",
      stack: "React, MobX, SCSS, typescript",
      description: "Тестовое задание - туду лист. Позволяет создавать, сортировать, удалять записи.",
      codeUrl: "https://github.com/navzlet/todo-list",
      previewUrl: "https://navzlet.github.io/todo-list/",
      type: "pet",
    },
    {
      name: "To-do list v. 2",
      stack: "Typescript, webpack",
      description:
        "Вторая версия того туду-листа: функционал тот же, но приложение написанно без реакта. Позволяет создавать, сортировать, удалять записи.",
      codeUrl: "https://github.com/navzlet/todo",
      previewUrl: "https://navzlet.github.io/todo/",
      type: "pet",
    },
  ];

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

      <div className="skills__projects hide">


</div>

        {isModalOpen ? (
          <ProjectModal
            projectData={modalContent}
            setIsModalOpen={setIsModalOpen}
          />
          
        ) : 
        (
          <div className="projects">
                    <h4 className="skills__experience header">
          2022-2023, College projects:
        </h4>
        {mocProjectExample.map((project) =>
          project.type === "college" ? (
            <ProjectButton
              setIsModalOpen={setIsModalOpen}
              project={project}
              setModalContent={setModalContent}
              name={project.name}
            />
          ) : null
        )}
        <h4 className="skills__experience header">Pet Projects:</h4>
        {mocProjectExample.map((project) =>
          project.type === "pet" ? (
            <ProjectButton
              project={project}
              setModalContent={setModalContent}
              setIsModalOpen={setIsModalOpen}
              name={project.name}
            />
          ) : null
        )}

          </div>
        )
        }



      </div>
    </div>
  );
};
