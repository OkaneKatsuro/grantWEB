'use client';

import { useState } from 'react';
import Header from "@/components/header";
import ScrollContainer from "@/components/ScrollContainer";

export default function Home() {
    const [currentSection, setCurrentSection] = useState(0);

    const handleSectionChange = (sectionIndex: number) => {
        setCurrentSection(sectionIndex);
    };

    return (
        <div className="w-screen flex flex-row justify-start h-screen bg-white overflow-hidden">
            <Header 
                currentSection={currentSection} 
                onSectionChange={handleSectionChange}
            />
            <ScrollContainer 
                onSectionChange={handleSectionChange} 
                currentSection={currentSection}
            />
        </div>
    );
}
