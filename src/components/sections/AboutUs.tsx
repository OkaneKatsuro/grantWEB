export default function AboutUs() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
            <div className="max-w-4xl mx-auto px-8 text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">О нас</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Компания с многолетним опытом в области веб-разработки, 
                    специализирующаяся на создании инновационных решений для бизнеса.
                </p>
            </div>
        </div>
    );
}
