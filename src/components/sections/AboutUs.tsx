import { Download, Phone, MessageCircle } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[radial-gradient(at_60%_90%,#FA9819_40%,#48749E_120%)] font-ru py-16 md:py-0 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 md:px-8 font-ru w-full">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-8 text-center font-ru drop-shadow-lg">О нас</h1>
                <p className="text-base md:text-xl text-white/90 leading-relaxed mb-8 md:mb-12 text-center font-ru drop-shadow-md">
                    ООО "ТЕХНОЛОГИИ ВЛАДЕНИЯ" - проект в рамках программы «Студенческий стартап»
                    при поддержке Фонда содействия инновациям.
                </p>
                
                {/* Список документов */}
                <div className="space-y-3 max-w-2xl mx-auto mb-8">
                    <a
                        href="/Приложение_М_Техническая_документация_проекта.docx"
                        download
                        className="flex items-center justify-between bg-black/40 hover:bg-black/50 border-2 border-white/50 hover:border-white/60 rounded-lg p-4 md:p-6 transition-all group font-ru shadow-xl"
                    >
                        <span className="text-base md:text-lg text-white font-ru drop-shadow-md">Техническая документация проекта</span>
                        <Download className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                    </a>
                    
                    <a
                        href="/Промежуточный_отчет.docx"
                        download
                        className="flex items-center justify-between bg-black/40 hover:bg-black/50 border-2 border-white/50 hover:border-white/60 rounded-lg p-4 md:p-6 transition-all group font-ru shadow-xl"
                    >
                        <span className="text-base md:text-lg text-white font-ru drop-shadow-md">Промежуточный отчет</span>
                        <Download className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                    </a>
                </div>
                
                {/* Контакты */}
                <div className="space-y-3 max-w-2xl mx-auto">
                    <a
                        href="https://t.me/franzeslav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-black/40 hover:bg-black/50 border-2 border-white/50 hover:border-white/60 rounded-lg p-4 md:p-6 transition-all group font-ru shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                            <span className="text-base md:text-lg text-white font-ru drop-shadow-md">Telegram: @franzeslav</span>
                        </div>
                    </a>
                    
                    <a
                        href="tel:+79214570057"
                        className="flex items-center justify-between bg-black/40 hover:bg-black/50 border-2 border-white/50 hover:border-white/60 rounded-lg p-4 md:p-6 transition-all group font-ru shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                            <span className="text-base md:text-lg text-white font-ru drop-shadow-md">+7 921 457 00 57</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
