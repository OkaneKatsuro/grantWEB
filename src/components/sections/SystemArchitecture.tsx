export default function SystemArchitecture() {
    return (
        <div className="h-screen w-full flex items-center justify-center tech-grid-bg font-ru py-16 md:py-0">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center font-ru">
                <h1 className="text-3xl md:text-6xl font-bold text-slate-100 mb-4 md:mb-8 font-ru">Архитектура системы</h1>
                <p className="text-base md:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6 font-ru">
                    Ключевое технологическое решение - визуальный low-code конструктор с CI/CD пайплайном, 
                    обеспечивающим безопасную автоматическую генерацию и публикацию мобильных и веб-приложений.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-8 font-ru">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg font-ru">
                        <h3 className="font-bold text-lg mb-2 text-slate-100 font-ru">Frontend</h3>
                        <p className="text-slate-300 font-ru">Next.js</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg font-ru">
                        <h3 className="font-bold text-lg mb-2 text-slate-100 font-ru">Backend</h3>
                        <p className="text-slate-300 font-ru">NestJS</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg font-ru">
                        <h3 className="font-bold text-lg mb-2 text-slate-100 font-ru">База данных</h3>
                        <p className="text-slate-300 font-ru">PostgreSQL</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg font-ru">
                        <h3 className="font-bold text-lg mb-2 text-slate-100 font-ru">Мобильные приложения</h3>
                        <p className="text-slate-300 font-ru">Flutter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
