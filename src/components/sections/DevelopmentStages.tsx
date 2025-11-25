'use client'

import { FadeUp } from '@/components/animations/FadeUp'

export default function DevelopmentStages() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center font-ru py-16 md:py-0 overflow-y-auto" style={{ background: 'radial-gradient(ellipse at bottom right, #FA9819 0%, #FA9819 70%, #FA9819 100%)' }}>
            <div className="max-w-4xl mx-auto px-4 md:px-8 font-ru">
                <FadeUp>
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-8 text-center font-ru drop-shadow-lg">Этапы развития</h1>
                </FadeUp>
                <div className="space-y-4 md:space-y-6 font-ru">
                    <FadeUp delay={0.1}>
                        <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 md:p-6 rounded-lg font-ru shadow-xl">
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-3 md:mb-4 font-ru gap-2 md:gap-0">
                            <span className="text-2xl md:text-3xl font-bold text-purple-300 md:mr-4 font-ru drop-shadow-md">1</span>
                            <h2 className="text-xl md:text-2xl font-bold text-white font-ru flex-1 drop-shadow-md">Этап 1: Подготовительный</h2>
                            <span className="text-white/90 font-ru text-sm md:text-base drop-shadow-sm">1 месяц</span>
                        </div>
                        <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 md:ml-12 font-ru text-sm md:text-base drop-shadow-sm">
                            <li className="font-ru">Создание и регистрация юридического лица в соответствии с законодательством Российской Федерации"</li>
                            <li className="font-ru">Создание функциональной схемы системы автоматизации бизнес-процессов для контроля и управления объектами аренды недвижимости</li>
                        </ul>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 md:p-6 rounded-lg font-ru shadow-xl">
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-3 md:mb-4 font-ru gap-2 md:gap-0">
                            <span className="text-2xl md:text-3xl font-bold text-purple-300 md:mr-4 font-ru drop-shadow-md">2</span>
                            <h2 className="text-xl md:text-2xl font-bold text-white font-ru flex-1 drop-shadow-md">Этап 2: Разработка MVP</h2>
                            <span className="text-white/90 font-ru text-sm md:text-base drop-shadow-sm">11 месяцев</span>
                        </div>
                        <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 md:ml-12 font-ru text-sm md:text-base drop-shadow-sm">
                            <li className="font-ru">Создание сайта ООО</li>
                            <li className="font-ru">Консультации юриста и бухгалтера</li>
                            <li className="font-ru">Анализ рынка недвижимости и моделирование бизнес-процессов</li>
                            <li className="font-ru">Проектирование функционала системы (CRM, BPM, генерация сайтов и приложений)</li>
                            <li className="font-ru">Разработка MVP веб-приложения и конструктора мобильных приложений</li>
                            <li className="font-ru">Подключение подписок, хостинга, сервисов и проведение тестирования MVP</li>
                        </ul>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </div>
    );
}