'use client';

import Logo from "@/components/logo";

interface HeaderProps {
    currentSection: number;
    onSectionChange: (sectionIndex: number) => void;
}

export default function Header({ currentSection, onSectionChange }: HeaderProps) {
    const sections = [
        { title: 'Главная', number: '00' },
        { title: 'О проекте', number: '01' },
        { title: 'Архитектура системы', number: '02' },
        { title: 'Этапы развития', number: '03' },
        { title: 'Наша команда', number: '04' },
        { title: 'О нас', number: '05' },
    ];

    return (
        <header>
            <div className="flex flex-col justify-start items-start h-screen w-full">
                <div className="h-1/5 w-64 flex flex-row justify-center items-center border-b-2 border-gray-200 space-x-1.5 ">
                    <Logo size={32} textSize="text-3xl" iconColor='black'/>
                </div>
                <div className="h-2/5 w-64 py-5 flex flex-col justify-start items-start p-5 border-b-2 border-gray-200 space-y-1.5">
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
                <div className="h-1/5 w-64 py-5 flex flex-col justify-start items-start p-5">
                    <div className='text-sm text-gray-500'>Всякая залупа от ФСИ</div>
                    <div className='text-sm text-gray-500'>ООО"ZALUPA"</div>
                </div>
            </div>
        </header>
    )
}