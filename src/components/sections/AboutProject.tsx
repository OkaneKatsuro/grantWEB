export default function AboutProject() {
    return (
        <div className="h-screen w-full flex items-center justify-center tech-grid-bg font-ru py-16 md:py-0 overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 md:px-8 font-ru">
                <h1 className="text-3xl md:text-6xl font-bold text-slate-100 mb-8 md:mb-12 text-center font-ru">О проекте</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                    {/* Основной блок */}
                    <div className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
                        <p className="text-lg md:text-2xl text-slate-100 leading-relaxed mb-6 font-ru font-medium">
                            Проект направлен на создание прототипа <span className="text-blue-400">SaaS-платформы</span> для автоматизации бизнес-процессов, контроля и управления объектами в сфере аренды жилой и коммерческой недвижимости.
                        </p>
                        <p className="text-base md:text-lg text-slate-300 leading-relaxed font-ru">
                            Платформа включает веб- и мобильные приложения для арендодателей, арендаторов и управляющих компаний с модулями CRM для учёта и взаимодействия с клиентами, BPM для визуального моделирования и автоматизации бизнес-процессов, а также Low-code/No-code конструктор для формирования кастомных цифровых сервисов.
                        </p>
                    </div>

                    {/* Карточки с преимуществами */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold text-slate-100 mb-3 font-ru">Масштабируемость</h3>
                        <p className="text-slate-300 text-sm md:text-base font-ru">
                            SaaS-модель позволяет масштабировать бизнес без ограничений, привлекая клиентов по всей стране
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold text-slate-100 mb-3 font-ru">Рынок</h3>
                        <p className="text-slate-300 text-sm md:text-base font-ru">
                            Рынок аренды недвижимости в России — один из крупнейших и быстрорастущих сегментов экономики
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold text-slate-100 mb-3 font-ru">Технологии</h3>
                        <p className="text-slate-300 text-sm md:text-base font-ru">
                            Low-code/No-code конструктор позволяет клиентам создавать собственные решения без программирования
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold text-slate-100 mb-3 font-ru">Потенциал</h3>
                        <p className="text-slate-300 text-sm md:text-base font-ru">
                            Единая платформа для всех участников рынка аренды — от частных арендодателей до крупных управляющих компаний
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
