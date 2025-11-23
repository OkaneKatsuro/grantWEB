export default function DevelopmentStages() {
    return (
        <div className="h-screen w-full flex items-center justify-center tech-grid-bg font-ru py-16 md:py-0 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 md:px-8 font-ru">
                <h1 className="text-3xl md:text-6xl font-bold text-slate-100 mb-4 md:mb-8 text-center font-ru">Этапы развития</h1>
                <div className="space-y-4 md:space-y-6 font-ru">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg font-ru">
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-3 md:mb-4 font-ru gap-2 md:gap-0">
                            <span className="text-2xl md:text-3xl font-bold text-purple-400 md:mr-4 font-ru">1</span>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-100 font-ru flex-1">Этап 1: Подготовительный</h2>
                            <span className="text-slate-300 font-ru text-sm md:text-base">1 месяц</span>
                        </div>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 md:ml-12 font-ru text-sm md:text-base">
                            <li className="font-ru">Создание и регистрация юридического лица в соответствии с законодательством Российской Федерации"</li>
                            <li className="font-ru">Создание функциональной схемы системы автоматизации бизнес-процессов для контроля и управления объектами аренды недвижимости</li>
                        </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg font-ru">
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-3 md:mb-4 font-ru gap-2 md:gap-0">
                            <span className="text-2xl md:text-3xl font-bold text-purple-400 md:mr-4 font-ru">2</span>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-100 font-ru flex-1">Этап 2: Разработка MVP</h2>
                            <span className="text-slate-300 font-ru text-sm md:text-base">11 месяцев</span>
                        </div>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 md:ml-12 font-ru text-sm md:text-base">
                            <li className="font-ru">Создание сайта ООО</li>
                            <li className="font-ru">Консультации юриста и бухгалтера</li>
                            <li className="font-ru">Анализ рынка недвижимости и моделирование бизнес-процессов</li>
                            <li className="font-ru">Проектирование функционала системы (CRM, BPM, генерация сайтов и приложений)</li>
                            <li className="font-ru">Разработка MVP веб-приложения и конструктора мобильных приложений</li>
                            <li className="font-ru">Подключение подписок, хостинга, сервисов и проведение тестирования MVP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
