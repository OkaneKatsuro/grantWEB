'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Logo from "@/components/logo";

interface Page {
    id: number;
    title: string;
    description: string;
    image?: string;
}

const architecturePages: Page[] = [
    {
        id: 1,
        title: "System Context",
        description: "Общая архитектура платформы RentFlow с интеграциями",
        image: "/architecture/system-context.png"
    },
    {
        id: 2,
        title: "Main System",
        description: "Основная система CRM, BPM, управление арендой",
        image: "/architecture/main-system.png"
    },
    {
        id: 3,
        title: "Web Builder",
        description: "Low-code конструктор веб-страниц с AI",
        image: "/architecture/web-builder.png"
    },
    {
        id: 4,
        title: "App Builder",
        description: "Конструктор мобильных приложений на Flutter",
        image: "/architecture/app-builder.png"
    },
    {
        id: 5,
        title: "Auth System",
        description: "Единая авторизация OAuth 2.0, JWT",
        image: "/architecture/auth-system.png"
    }
];

export default function ArchitectureBook() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
    const [isMobile, setIsMobile] = useState(false);
    const autoFlipRef = useRef<NodeJS.Timeout | null>(null);

    const totalPages = architecturePages.length;

    // Определение мобильного устройства
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const flipPage = (direction: 'next' | 'prev') => {
        if (isFlipping) return;
        
        setIsFlipping(true);
        
        if (direction === 'next' && currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        } else if (direction === 'prev' && currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
        
        setTimeout(() => {
            setIsFlipping(false);
        }, 800);
    };

    // Автоматическое перелистывание каждые 5 секунд
    useEffect(() => {
        autoFlipRef.current = setInterval(() => {
            if (!isFlipping) {
                if (currentPage < totalPages - 1) {
                    flipPage('next');
                } else {
                    setCurrentPage(0);
                }
            }
        }, 5000);

        return () => {
            if (autoFlipRef.current) {
                clearInterval(autoFlipRef.current);
            }
        };
    }, [currentPage, isFlipping]);

    // Обработка свайпов
    const touchStartRef = useRef(0);
    const touchEndRef = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndRef.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const swipeDistance = touchStartRef.current - touchEndRef.current;
        const minSwipeDistance = 50;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                flipPage('next');
            } else {
                flipPage('prev');
            }
        }
    };

    return (
        <div 
            className="flex h-screen w-full justify-center items-center tech-grid-bg relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Logo и название сверху */}
            <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col md:flex-row items-center gap-2 md:gap-4 px-4">
                <Logo size={40} textSize="text-3xl md:text-6xl" bold="font-extrabold" color="text-slate-100" iconColor="#f8fafc"/>
                <div className="text-slate-100 font-ru text-center md:text-left">
                    <h2 className="text-xl md:text-3xl font-bold drop-shadow-lg font-ru">
                        {architecturePages[currentPage].title}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-300 mt-1 font-ru">
                        {architecturePages[currentPage].description}
                    </p>
                </div>
            </div>

            {/* Книга с перелистыванием */}
            <div className={`w-full max-w-6xl h-[60vh] md:h-[70vh] relative px-2 md:px-0 ${!isMobile ? 'perspective-1000' : ''}`}>
                <div className="relative w-full h-full flex justify-center items-center">
                    {/* Страницы книги */}
                    {architecturePages.map((page, index) => {
                        const isActive = index === currentPage;
                        const isNext = index === currentPage + 1;
                        const isPrev = index === currentPage - 1;
                        const offset = index - currentPage;

                        return (
                            <div
                                key={page.id}
                                className={`absolute w-full h-full transition-all duration-[800ms] ease-in-out ${
                                    isActive ? 'z-10' : isNext || isPrev ? 'z-[5]' : 'z-0'
                                }`}
                                style={{
                                    transform: isMobile
                                        ? `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.8})`
                                        : `
                                            translateX(${offset * 20}px)
                                            translateZ(${isActive ? 0 : -Math.abs(offset) * 50}px)
                                            rotateY(${offset * 15}deg)
                                            scale(${isActive ? 1 : Math.max(0.7, 0.9 - Math.abs(offset) * 0.1)})
                                        `,
                                    opacity: Math.abs(offset) > 2 ? 0 : Math.max(0, 1 - Math.abs(offset) * 0.3),
                                    pointerEvents: isActive ? 'auto' : 'none',
                                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-in-out'
                                }}
                            >
                                {/* Страница */}
                                <div className="w-full h-full bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-[2px] md:border-[3px] border-slate-700/50 p-0 flex flex-col items-center justify-center relative overflow-hidden">
                                    {/* Эффект перелистывания */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent animate-shimmer rounded-xl" />
                                    )}
                                    
                                    {/* Внутренняя тень для эффекта глубины */}
                                    <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] pointer-events-none" />
                                    
                                    {/* Содержимое страницы */}
                                    <div className="text-center z-10 w-full h-full flex flex-col">
                                        {/* Изображение схемы или плейсхолдер */}
                                        <div className="w-full h-full bg-transparent flex items-center justify-center overflow-hidden relative">
                                            {page.image && !imageErrors.has(page.id) ? (
                                                <div className="relative w-full h-full">
                                                    <Image 
                                                        src={page.image} 
                                                        alt={page.title}
                                                        fill
                                                        className="object-cover"
                                                        priority={currentPage === index}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                                        onError={() => {
                                                            // Если изображение не загрузилось, добавляем в список ошибок
                                                            setImageErrors(prev => new Set(prev).add(page.id));
                                                        }}
                                                        unoptimized
                                                    />
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <div className="text-6xl mb-4">📐</div>
                                                    <p className="text-slate-300 font-ru">Схема архитектуры</p>
                                                    <p className="text-sm text-slate-400 mt-2 font-ru">{page.title}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Номер страницы */}
                                    <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-slate-800/80 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-slate-600/50 shadow-sm text-slate-300 font-ru text-xs md:text-sm font-semibold">
                                        {page.id} / {totalPages}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Навигационные стрелки */}
            <button
                onClick={() => flipPage('prev')}
                disabled={currentPage === 0 || isFlipping}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-slate-800/90 hover:bg-slate-700 backdrop-blur-md rounded-full p-2 md:p-4 shadow-lg border-2 border-slate-600/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
                aria-label="Предыдущая страница"
            >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => flipPage('next')}
                disabled={currentPage === totalPages - 1 || isFlipping}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-slate-800/90 hover:bg-slate-700 backdrop-blur-md rounded-full p-2 md:p-4 shadow-lg border-2 border-slate-600/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
                aria-label="Следующая страница"
            >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Индикаторы страниц */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 md:gap-2 bg-slate-800/80 backdrop-blur-md px-2 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg border border-slate-600/50">
                {architecturePages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (!isFlipping) {
                                setIsFlipping(true);
                                setCurrentPage(index);
                                setTimeout(() => setIsFlipping(false), 800);
                            }
                        }}
                        className={`h-2 md:h-3 rounded-full transition-all ${
                            index === currentPage 
                                ? 'bg-slate-100 w-6 md:w-8 shadow-md' 
                                : 'bg-slate-500/60 hover:bg-slate-400/80 w-2 md:w-3'
                        }`}
                        aria-label={`Перейти на страницу ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}

