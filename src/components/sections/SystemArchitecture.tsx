export default function SystemArchitecture() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[radial-gradient(at_60%_90%,#FA9819_40%,#48749E_120%)] font-ru py-16 md:py-0">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center font-ru">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-8 font-ru drop-shadow-lg">Архитектура системы</h1>
                <p className="text-base md:text-xl text-white/90 leading-relaxed mb-4 md:mb-6 font-ru drop-shadow-md">
                    Ключевое технологическое решение - визуальный low-code конструктор с CI/CD пайплайном, 
                    обеспечивающим безопасную автоматическую генерацию и публикацию мобильных и веб-приложений.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-8 font-ru">
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 rounded-lg font-ru shadow-xl">
                        <h3 className="font-bold text-lg mb-2 text-white font-ru drop-shadow-md">Frontend</h3>
                        <p className="text-white/90 font-ru drop-shadow-sm">Next.js</p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 rounded-lg font-ru shadow-xl">
                        <h3 className="font-bold text-lg mb-2 text-white font-ru drop-shadow-md">Backend</h3>
                        <p className="text-white/90 font-ru drop-shadow-sm">NestJS</p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 rounded-lg font-ru shadow-xl">
                        <h3 className="font-bold text-lg mb-2 text-white font-ru drop-shadow-md">База данных</h3>
                        <p className="text-white/90 font-ru drop-shadow-sm">PostgreSQL</p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md border-2 border-white/50 p-4 rounded-lg font-ru shadow-xl">
                        <h3 className="font-bold text-lg mb-2 text-white font-ru drop-shadow-md">Мобильные приложения</h3>
                        <p className="text-white/90 font-ru drop-shadow-sm">Flutter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
