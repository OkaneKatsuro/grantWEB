'use client';
import Image from 'next/image'
import Logo from "@/components/logo";
import {Menu, X} from 'lucide-react';
import {useState} from 'react';
import { useScrollLock } from './ScrollLockContext';

interface HeaderProps {
    currentSection: number;
    onSectionChange: (sectionIndex: number) => void;
}

export default function Header({currentSection, onSectionChange}: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { lockScroll, unlockScroll } = useScrollLock();

    const sections = [
        {title: 'Главная', number: '00'},
        {title: 'О проекте', number: '01'},
        {title: 'Архитектура системы', number: '02'},
        {title: 'Этапы развития', number: '03'},
        {title: 'Наша команда', number: '04'},
        {title: 'О нас', number: '05'},
    ];

    const handleSectionClick = (index: number) => {
        onSectionChange(index);
        setIsMobileMenuOpen(false);
        unlockScroll();
    };

    const handleMenuToggle = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
            unlockScroll();
        } else {
            setIsMobileMenuOpen(true);
            lockScroll();
        }
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden lg:block">
                <div className="flex flex-col justify-start items-start h-screen w-full">
                    <div
                        className="h-1/5 w-64 flex flex-row justify-center items-center border-b-2 border-gray-200 space-x-1.5 ">
                        <Logo size={32} textSize="text-3xl" iconColor='black'/>
                    </div>
                    <div
                        className="h-2/5 w-64 py-5 flex flex-col justify-start items-start p-5 border-b-2 border-gray-200 space-y-1.5">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className={`flex flex-row cursor-pointer transition-all duration-300 hover:bg-gray-50 p-2 rounded`}
                                onClick={() => onSectionChange(index)}
                            >
                                <div className={`font-ru text-2x font-bold ${
                                    currentSection === index ? 'text-gray-500' : 'text-gray-800'
                                }`}>
                                    {section.title}
                                </div>
                                <div className={`font-ru text-[10px] uppercase font-semibold ml-2 ${
                                    currentSection === index ? 'text-hero-1' : 'text-gray-500'
                                }`}>
                                    {section.number}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-1/5 w-64 py-5 flex flex-col justify-start items-start p-5 pr-6 space-y-3">
                        <div className='text-xs text-gray-500'>Проект реализован при поддержке Фонда содействия
                            инновациям в
                            рамках программы
                            «Студенческий стартап» мероприятия «Платформа университетского технологического
                            предпринимательства» федерального проекта «Технологии».
                        </div>
                        <div className='text-sm text-gray-500'>ООО"ZALUPA"</div>
                        <Image
                            src="/FASIE.SVG"
                            width={128}
                            height={64}
                            alt="Фонд содействия инновациям"
                        />
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Logo size={24} textSize="text-xl" iconColor='black'/>
                    </div>

                    {/* Burger Menu Button */}
                    <button
                        onClick={handleMenuToggle}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Открыть меню"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} className="text-gray-700"/>
                        ) : (
                            <Menu size={24} className="text-gray-700"/>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 "
                     onClick={() => {
                         setIsMobileMenuOpen(false);
                         unlockScroll();
                     }}>
                    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="pt-16 pb-4">
                            {/* Navigation Items */}
                            <nav className="px-4">
                                {sections.map((section, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-row cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 rounded-lg mb-2`}
                                        onClick={() => handleSectionClick(index)}
                                    >
                                        <div className={`font-ru text-lg font-bold ${
                                            currentSection === index ? 'text-gray-500' : 'text-gray-800'
                                        }`}>
                                            {section.title}
                                        </div>
                                        <div className={`font-ru text-xs uppercase font-semibold ml-2 mt-1 ${
                                            currentSection === index ? 'text-hero-1' : 'text-gray-500'
                                        }`}>
                                            {section.number}
                                        </div>
                                    </div>
                                ))}
                            </nav>

                            {/* Footer Info */}
                            <div className="px-4 mt-6 pt-4 border-t border-gray-200">
                                <div className='text-xs text-gray-500 mb-3'>Проект реализован при поддержке Фонда
                                    содействия инновациям в
                                    рамках программы
                                    «Студенческий стартап» мероприятия «Платформа университетского технологического
                                    предпринимательства» федерального проекта «Технологии».
                                </div>
                                <div className='text-sm text-gray-500 mb-3'>ООО"ZALUPA"</div>
                                <Image
                                    src="/FASIE.SVG"
                                    width={96}
                                    height={48}
                                    alt="Фонд содействия инновациям"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}