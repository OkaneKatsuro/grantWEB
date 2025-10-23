'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Hero from './hero';
import AboutProject from './sections/AboutProject';
import SystemArchitecture from './sections/SystemArchitecture';
import DevelopmentStages from './sections/DevelopmentStages';
import OurTeam from './sections/OurTeam';
import AboutUs from './sections/AboutUs';

interface ScrollContainerProps {
    onSectionChange: (sectionIndex: number) => void;
    currentSection: number;
}

const ScrollContainer = forwardRef<{ scrollToSection: (index: number) => void }, ScrollContainerProps>(
    ({ onSectionChange, currentSection }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);
    const lastScrollTime = useRef(0);

    const sections = [
        { component: Hero, id: 'hero' },
        { component: AboutProject, id: 'about' },
        { component: SystemArchitecture, id: 'architecture' },
        { component: DevelopmentStages, id: 'stages' },
        { component: OurTeam, id: 'team' },
        { component: AboutUs, id: 'about-us' },
    ];

    // Функция для прокрутки к секции на мобильных устройствах
    const scrollToSection = (index: number) => {
        if (window.innerWidth < 1024) {
            const mobileContainer = containerRef.current?.querySelector('.lg\\:hidden');
            if (mobileContainer) {
                const sectionElements = mobileContainer.querySelectorAll('[data-section]');
                const targetSection = sectionElements[index] as HTMLElement;
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }
    };

    useImperativeHandle(ref, () => ({
        scrollToSection
    }));

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // На мобильных устройствах отключаем слайд-скролл
            if (window.innerWidth < 1024) {
                return;
            }
            
            e.preventDefault();
            
            const now = Date.now();
            const timeSinceLastScroll = now - lastScrollTime.current;
            
            // Блокируем скролл если уже идет анимация или прошло мало времени
            if (isScrolling.current || timeSinceLastScroll < 1000) return;
            
            // Увеличиваем порог чувствительности скролла
            const scrollThreshold = 50;
            
            if (Math.abs(e.deltaY) < scrollThreshold) return;
            
            isScrolling.current = true;
            lastScrollTime.current = now;
            
            if (e.deltaY > 0 && currentSection < sections.length - 1) {
                // Скролл вниз
                onSectionChange(currentSection + 1);
            } else if (e.deltaY < 0 && currentSection > 0) {
                // Скролл вверх
                onSectionChange(currentSection - 1);
            }
            
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, [currentSection, onSectionChange, sections.length]);

    return (
        <div 
            ref={containerRef}
            className="h-screen w-full relative"
        >
            {/* Desktop: Slide-based navigation */}
            <div className="hidden lg:block lg:overflow-hidden lg:h-full">
                {sections.map((section, index) => {
                    const Component = section.component;
                    return (
                        <div 
                            key={section.id}
                            className="absolute h-screen w-full"
                            style={{
                                transform: `translateY(${(index - currentSection) * 100}vh)`,
                                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <Component />
                        </div>
                    );
                })}
            </div>
            
            {/* Mobile: Normal scroll */}
            <div className="lg:hidden pt-16 overflow-y-auto h-full">
                {sections.map((section, index) => {
                    const Component = section.component;
                    return (
                        <div 
                            key={section.id}
                            data-section={index}
                            className="w-full"
                            style={{
                                minHeight: '100vh'
                            }}
                        >
                            <Component />
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default ScrollContainer;
