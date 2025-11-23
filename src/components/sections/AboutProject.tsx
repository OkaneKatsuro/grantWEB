export default function AboutProject() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[radial-gradient(at_60%_90%,#FA9819_40%,#48749E_120%)] font-ru py-16 md:py-0 overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 md:px-8 font-ru">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-8 md:mb-12 text-center font-ru drop-shadow-lg">О проекте</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                    {/* Основной блок */}
                    <div className="md:col-span-2 bg-black/40 backdrop-blur-md border-2 border-white/50 rounded-xl p-6 md:p-8 shadow-xl">
                        <p className="text-lg md:text-2xl text-white leading-relaxed mb-6 font-ru font-medium drop-shadow-md">
                            Проект направлен на создание прототипа <span className="text-blue-300 font-bold">SaaS-платформы</span> для автоматизации бизнес-процессов, контроля и управления объектами в сфере аренды жилой и коммерческой недвижимости.
                        </p>
                        <p className="text-base md:text-lg text-white/90 leading-relaxed font-ru drop-shadow-sm">
                            Платформа включает веб- и мобильные приложения для арендодателей, арендаторов и управляющих компаний с модулями CRM для учёта и взаимодействия с клиентами, BPM для визуального моделирования и автоматизации бизнес-процессов, а также Low-code/No-code конструктор для формирования кастомных цифровых сервисов.
                        </p>
                    </div>

                    {/* Карточки с преимуществами */}
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 rounded-xl p-6 hover:bg-black/50 transition-all shadow-xl">
                        <h3 className="text-xl font-bold text-white mb-3 font-ru drop-shadow-md">Масштабируемость</h3>
                        <p className="text-white/90 text-sm md:text-base font-ru drop-shadow-sm">
                            SaaS-модель позволяет масштабировать бизнес без ограничений, привлекая клиентов по всей стране
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                        <h3 className="text-xl font-bold text-white mb-3 font-ru drop-shadow-md">Рынок</h3>
                        <p className="text-white/90 text-sm md:text-base font-ru drop-shadow-sm">
                            Рынок аренды недвижимости в России — один из крупнейших и быстрорастущих сегментов экономики
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                        <h3 className="text-xl font-bold text-white mb-3 font-ru drop-shadow-md">Технологии</h3>
                        <p className="text-white/90 text-sm md:text-base font-ru drop-shadow-sm">
                            Low-code/No-code конструктор позволяет клиентам создавать собственные решения без программирования
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                        <h3 className="text-xl font-bold text-white mb-3 font-ru drop-shadow-md">Потенциал</h3>
                        <p className="text-white/90 text-sm md:text-base font-ru drop-shadow-sm">
                            Единая платформа для всех участников рынка аренды — от частных арендодателей до крупных управляющих компаний
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
