import React from "react";
import photo from "../../assets/photo.png";
import "./about.components.css";
import MailIcon from "../../assets/mail_icon.jsx";
import TelegramIcon from "../../assets/telegram_icon.jsx";
import GithubIcon from "../../assets/github_icon.jsx";

export const About = () => {
  return (
    <div className="about">
      <img className="about__myPhoto" alt="my face" src={photo} />
      <div className="about__nameMobile">
        <h1 className="">Закиров Александр</h1>
        <h2 className="">Frontend-developer</h2>
      </div>
      <h3 className="about__location about__header">Локация</h3>
      <p className="about__location about__text">
        Yekaterinburg, Russia, GMT+5
      </p>
      <h3 className="about__contacts about__header">Контакты</h3>
      <ul className="about__contacts">
        <li className="about__mail contacts_li about__text">
          <MailIcon className="contacts_icon mailIcon" />
          <a
            id="mail"
            rel="noreferrer"
            target="_blank"
            href="mailto:sasha_zakirov_2014@mail.ru"
          >
            sasha_zakirov_2014@mail.ru
          </a>
        </li>
        <li className="about__telegram contacts_li about__text">
          <TelegramIcon className="contacts_icon" />
          <a rel="noreferrer" target="_blank" href="https://t.me/navzl3t">
            Telegram
          </a>
        </li>
        <li className="about__git contacts_li about__text">
          <GithubIcon className="contacts_icon gitIcon" />
          <a rel="noreferrer" target="_blank" href="https://github.com/navzlet">
            Github
          </a>
        </li>
      </ul>
      <h3 className="about_skills about__header">Навыки</h3>
      <ul className="about_skillsList">
        <li className="about_skill about__text">HTML</li>
        <li className="about_skill about__text">Css, Scss, Figma</li>
        <li className="about_skill about__text">JavaScript, TypeScript</li>
        <li className="about_skill about__text">React</li>
        <li className="about_skill about__text">Redux, MobX</li>
        <li className="about_skill about__text">Git, Node.js</li>
      </ul>
      <h3 className="about_aboutMe about__header">Немного обо мне:</h3>
      <p className="about_aboutText about__text">
        19 лет, активно изучаю всё новое и использую в работе. Мои хобби -
        музыка, спорт. Владею английским на уровне b1.
      </p>
    </div>
  );
};
