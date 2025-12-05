'use client'

import { Download, Phone, MessageCircle } from "lucide-react";
import { FadeUp } from '@/components/animations/FadeUp'

export default function AboutUs() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center font-ru py-16 md:py-0 overflow-y-auto" style={{ background: 'radial-gradient(ellipse at bottom right, #FA9819 0%, #FA9819 70%, #FA9819 100%)' }}>
            <div className="max-w-4xl mx-auto px-4 md:px-8 font-ru w-full space-y-6 md:space-y-8">
                <FadeUp>
                    <h1 className="text-3xl md:text-6xl font-bold text-white text-center font-ru drop-shadow-lg">О нас</h1>
                </FadeUp>
                <FadeUp delay={0.1}>
                    <p className="text-base md:text-xl text-white/90 leading-relaxed text-center font-ru drop-shadow-md">
                        ООО "ТЕХНОЛОГИИ ВЛАДЕНИЯ" - проект в рамках программы «Студенческий стартап»
                        при поддержке Фонда содействия инновациям.
                    </p>
                </FadeUp>
                
                {/* Контакты */}
                <FadeUp delay={0.3}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <a
                            href="https://t.me/franzeslav"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex items-center gap-3">
                                <MessageCircle className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                                <span className="text-base md:text-lg text-black font-ru drop-shadow-md">Telegram: @franzeslav</span>
                            </div>
                        </a>
                    </div>
                </FadeUp>
                <FadeUp delay={0.4}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <a
                            href="tel:+74994901183"
                        >
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                                <span className="text-base md:text-lg text-black font-ru drop-shadow-md">+7 499 4901183</span>
                            </div>
                        </a>
                    </div>
                </FadeUp>
            </div>
        </div>
    );
}