import React from "react";
import { useTranslation } from "react-i18next";
import ThemeChanger from "./ThemeChanger";
function SidebarMenu() {
  const { t, i18n } = useTranslation("");
  return (
    <>
      <ul className="rounded-box menu menu-lg p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li>
          <h2 className="menu-title">Menu</h2>
          <ul>
            <li><a href="#home">{t("header.home")}</a></li>
            <li><a href="#about"> {t("header.about")}</a></li>
            <li><a href="#projects">{t("header.project")}</a></li>
            <li><a href="#experience">{t("header.experience")}</a></li>
            <li><a href="#education"> {t("header.education")}</a></li>
            <li><a href="#contact"> {t("header.contact")}</a></li>
            <li>
            <ThemeChanger/>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default SidebarMenu;
