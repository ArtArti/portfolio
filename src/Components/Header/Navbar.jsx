import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import logo from "./../../assets/logo/logo.svg";
import SidebarMenu from "./SidebarMenu";
import ThemeChanger from "./ThemeChanger";
import resume from './../../assets/resume.pdf'
export default function Navbar() {
  const { t, i18n } = useTranslation("");
  const switchLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "kn", label: "ಕನ್ನಡ" },
  ];

  // pdf dowload
const handleDownloadPDF = () => {
    const anchor = document.createElement('a');
    anchor.href = resume; 
    anchor.download = 'resume.pdf'; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  
  return (
    <header className=" sticky z-50 top-0">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="#" className="flex items-center">
            <img src={logo} className="homelogo mr-3 h-12 " alt="Logo" />
          </Link>
          <label
            htmlFor="my-drawer-2"
            className=" bg-gradient-to-br from-purple-500 to-pink-600 drawer-button lg:hidden text-gray-800 hover:bg-gray-50 focus:ring-5 focus:ring-gray-400 font-extrabold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            <AiOutlineBars />
          </label>
          <div className="drawer lg:hidden items-center">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay float-right"
              ></label>
              <SidebarMenu />
            </div>
          </div>
          <div className="hidden lg:flex items-center lg:order-2">
            <ThemeChanger />
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" border-2 m-3">
                <IoLanguageSharp />
              </div>
              <ul
                tabIndex={0}
                className="cursor-pointer text-black font-bold dropdown-content z-[1] menu p-2 shadow-lg bg-slate-200 rounded-box w-24"
              >
                {languages.map((lng) => {
                  return (
                    <li key={lng.code}>
                      <a
                        className={lng.code === i18n.language ? "selected" : ""}
                        onClick={() => switchLanguage(lng.code)}
                      >
                        {lng.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Download
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-extrabold text-lg lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#home"
                  className=" block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  {t("header.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  {t("header.about")}
                </a>
              </li>
              <a
                href="#projects"
                className="  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
              >
                {t("header.project")}
              </a>
              <li>
                <a
                  href="#experience"
                  className="block py-2 pr-4 pl-3 border-white hover:bg-gray-50 lg:hover:bg-transparent  hover:text-orange-700 lg:p-0"
                >
                  {t("header.experience")}
                </a>
              </li>
              <li>
                <a
                  href="#certification"
                  className="block py-2 pr-4 pl-3 border-white hover:bg-gray-50 lg:hover:bg-transparent  hover:text-orange-700 lg:p-0"
                >
                  {t("header.certification")}
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  {t("header.education")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  {t("header.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
