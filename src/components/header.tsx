'use client';
import Image from 'next/image'
import Logo from "@/components/logo";
import {Menu, X} from 'lucide-react';
import {useState, useEffect, useMemo} from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const sections = useMemo(() => [
        {title: 'Главная', number: '00', id: 'hero'},
        {title: 'О проекте', number: '01', id: 'about'},
        {title: 'Архитектура системы', number: '02', id: 'architecture'},
        {title: 'Этапы развития', number: '03', id: 'stages'},
        {title: 'Наша команда', number: '04', id: 'team'},
        {title: 'О нас', number: '05', id: 'about-us'},
    ], []);

    // Отслеживание активной секции при скролле
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + (window.innerWidth >= 1024 ? 300 : 100);
            
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        // Throttle для производительности
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        handleScroll(); // Проверяем при загрузке

        return () => window.removeEventListener('scroll', throttledScroll);
    }, [sections]);

    const handleSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden lg:block fixed left-0 top-0 h-screen w-64 z-50">
                <div className="flex flex-col justify-start items-start h-screen w-full bg-white border-r-2 border-gray-200">
                    <div
                        className="h-1/5 w-full flex flex-row justify-center items-center border-b-2 border-gray-200 space-x-1.5 ">
                        <Logo size={32} textSize="text-3xl" iconColor='black'/>
                    </div>
                    <div
                        className="h-2/5 w-full py-5 flex flex-col justify-start items-start p-5 border-b-2 border-gray-200 space-y-1.5">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className={`flex flex-row cursor-pointer transition-all duration-300 hover:bg-gray-50 p-2 rounded w-full`}
                                onClick={() => handleSectionClick(section.id)}
                            >
                                <div className={`font-ru text-2x font-bold ${
                                    activeSection === section.id ? 'text-gray-500' : 'text-gray-800'
                                }`}>
                                    {section.title}
                                </div>
                                <div className={`font-ru text-[10px] uppercase font-semibold ml-2 ${
                                    activeSection === section.id ? '' : 'text-gray-500'
                                }`}
                                style={activeSection === section.id ? { color: '#FA9819' } : {}}
                                >
                                    {section.number}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-1/5 w-64 py-5 flex flex-col justify-start items-start p-5 pr-6 space-y-3 font-ru">
                        <div className='text-xs text-gray-500 font-ru'>Проект реализован при поддержке Фонда содействия
                            инновациям в
                            рамках программы
                            «Студенческий стартап» мероприятия «Платформа университетского технологического
                            предпринимательства» федерального проекта «Технологии».
                        </div>
                        <div className='text-sm text-gray-500 font-ru'>ООО "ТЕХНОЛОГИИ ВЛАДЕНИЯ"</div>
                        <div className='text-xs text-gray-500 font-ru'>
                            Дизайн и разработка{' '}
                            <a 
                                href="https://fluttrium.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="underline hover:text-gray-700 font-ru"
                            >
                                Fluttrium
                            </a>
                        </div>
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
                <div className="lg:hidden fixed inset-0 z-40 bg-black/50"
                     onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="pt-16 pb-4">
                            {/* Navigation Items */}
                            <nav className="px-4">
                                {sections.map((section) => (
                                    <div
                                        key={section.id}
                                        className={`flex flex-row cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 rounded-lg mb-2`}
                                        onClick={() => handleSectionClick(section.id)}
                                    >
                                        <div className={`font-ru text-lg font-bold ${
                                            activeSection === section.id ? 'text-gray-500' : 'text-gray-800'
                                        }`}>
                                            {section.title}
                                        </div>
                                        <div className={`font-ru text-xs uppercase font-semibold ml-2 mt-1 ${
                                            activeSection === section.id ? '' : 'text-gray-500'
                                        }`}
                                        style={activeSection === section.id ? { color: '#FA9819' } : {}}
                                        >
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
