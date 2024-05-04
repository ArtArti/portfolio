import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../assets/logo/logo.svg'
import { useTranslation } from 'react-i18next';
export default function Footer() {
const currentYear = new Date().getFullYear();
const {t} = useTranslation();
    return (
        <footer className=" bg-slate-200 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li>
                                 <a href="#home" className="hover:underline">{t('header.home')}</a>
                                </li>
                                <li><a href="#about" className="hover:underline">
                                {t('header.about')}</a>
                                </li>
                                <li><a href="#experience" className="hover:underline">
                                {t('header.experience')}</a>
                                </li>
                                <li><a href="#project" className="hover:underline">
                                {t('header.education')}</a>
                                </li>
                                <li><a href="#education" className="hover:underline">
                                {t('header.project')}</a>
                                </li>
                                <li><a href="#contact" className="hover:underline">
                                {t('header.contact')}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                       {t('header.git')}
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                    {t('header.linkedin')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © {currentYear}
                        <a href="#" className="hover:underline">
                            Arti_Rai
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}