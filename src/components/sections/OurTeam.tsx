import Image from "next/image";

export default function OurTeam() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[radial-gradient(at_60%_90%,#FA9819_40%,#48749E_120%)] font-ru py-16 md:py-0">
            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center font-ru">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-8 font-ru drop-shadow-lg">Наша команда</h1>
                <p className="text-base md:text-xl text-white/90 leading-relaxed mb-4 md:mb-6 font-ru drop-shadow-md">
                    Команда проекта обладает подтверждённым опытом в коммерческой разработке 
                    и объединена общей целью создания качественного продукта.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-8 font-ru">
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 md:p-6 rounded-lg font-ru hover:bg-black/50 transition-all flex flex-col items-center shadow-xl">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/30 border-2 border-white/50 mb-4 overflow-hidden flex items-center justify-center relative">
                            <Image 
                                src="/Timur.jpg" 
                                alt="Продукт менеджер"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white font-ru text-center drop-shadow-md">Продукт менеджер</h3>
                        <p className="text-base md:text-lg mb-2 md:mb-3 text-white font-ru text-center font-semibold drop-shadow-md">Тимур Садриев</p>
                        <p className="text-sm md:text-base text-white/90 font-ru text-center drop-shadow-sm">
                            Стратегическое планирование и управление проектом, координация команды разработки и развитие бизнеса.
                        </p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 md:p-6 rounded-lg font-ru hover:bg-black/50 transition-all flex flex-col items-center shadow-xl">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/30 border-2 border-white/50 mb-4 overflow-hidden flex items-center justify-center relative">
                            <Image 
                                src="/Franz.jpeg" 
                                alt="Frontend разработчик"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white font-ru text-center drop-shadow-md">Frontend разработчик</h3>
                        <p className="text-base md:text-lg mb-2 md:mb-3 text-white font-ru text-center font-semibold drop-shadow-md">Франц Ларионов</p>
                        <p className="text-sm md:text-base text-white/90 font-ru text-center drop-shadow-sm">
                            Разработка пользовательских интерфейсов на Next.js для веб-приложений и мобильных приложений на Flutter.
                        </p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 md:p-6 rounded-lg font-ru hover:bg-black/50 transition-all flex flex-col items-center shadow-xl">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/30 border-2 border-white/50 mb-4 overflow-hidden flex items-center justify-center relative">
                            <Image 
                                src="/ramzes.jpeg" 
                                alt="Backend разработчик"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white font-ru text-center drop-shadow-md">Backend разработчик</h3>
                        <p className="text-base md:text-lg mb-2 md:mb-3 text-white font-ru text-center font-semibold drop-shadow-md">Роман Максимов</p>
                        <p className="text-sm md:text-base text-white/90 font-ru text-center drop-shadow-sm">
                            Разработка серверной части на NestJS, проектирование архитектуры и интеграция с базами данных PostgreSQL.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
