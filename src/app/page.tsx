'use client';

import { useState, useRef } from 'react';
import Header from "@/components/header";
import ScrollContainer from "@/components/ScrollContainer";

export default function Home() {
    const [currentSection, setCurrentSection] = useState(0);
    const scrollContainerRef = useRef<{ scrollToSection: (index: number) => void }>(null);

    const handleSectionChange = (sectionIndex: number) => {
        setCurrentSection(sectionIndex);
        // Прокручиваем к секции на мобильных устройствах
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollToSection(sectionIndex);
        }
    };

    return (
        <div className="w-screen h-screen bg-white">
            {/* Desktop Layout */}
            <div className="hidden lg:flex lg:flex-row lg:justify-start lg:h-full lg:overflow-hidden">
                <Header 
                    currentSection={currentSection} 
                    onSectionChange={handleSectionChange}
                />
                <ScrollContainer 
                    ref={scrollContainerRef}
                    onSectionChange={handleSectionChange} 
                    currentSection={currentSection}
                />
            </div>
            
            {/* Mobile Layout */}
            <div className="lg:hidden">
                <Header 
                    currentSection={currentSection} 
                    onSectionChange={handleSectionChange}
                />
                <ScrollContainer 
                    ref={scrollContainerRef}
                    onSectionChange={handleSectionChange} 
                    currentSection={currentSection}
                />
            </div>
        </div>
    );
}
