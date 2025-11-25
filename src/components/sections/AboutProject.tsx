'use client'

import { FadeUp } from '@/components/animations/FadeUp'

export default function AboutProject() {
  const problems = [
    { 
      title: 'Разрозненные инструменты', 
      desc: 'Excel, WhatsApp, Avito — всё отдельно. Информация теряется, задачи забываются.',
    },
    { 
      title: 'Потеря денег из-за простоя', 
      desc: 'Забыли обновить объявление — потеряли 2 недели. Не увидели сообщение — минус клиент.',
    },
    { 
      title: 'Нет приложения для арендаторов', 
      desc: 'Арендаторы звонят 10+ раз в день с простыми вопросами о платежах и заявках.',
    },
    { 
      title: 'Бумажная волокита', 
      desc: 'Печать договоров, подписи, сканирование. Потом невозможно найти нужный документ.',
    },
    { 
      title: 'Нет понимания бизнеса', 
      desc: 'Сколько свободных объектов? Кто должен оплату? Нужно часы, чтобы собрать данные.',
    },
  ]

  const features = [
    { 
      title: 'База клиентов и объектов', 
      desc: 'Храните всю информацию о клиентах: контакты, историю общения, предпочтения. Полные карточки объектов с фото, характеристиками и документами. Быстрый поиск — найдёте нужное за секунды.'
    },
    { 
      title: 'Автоматизация рутины', 
      desc: 'Автоматическая публикация объявлений на Avito и ЦИАН. Напоминания о платежах, окончании договоров и важных датах. Автоматическое формирование документов и отчётов.'
    },
    { 
      title: 'Приём платежей онлайн', 
      desc: 'Арендаторы платят картой прямо в вашем приложении. Автоматическая проверка оплаты и отправка чеков. История всех транзакций в одном месте.'
    },
    { 
      title: 'Мобильное приложение', 
      desc: 'Создайте приложение с вашим логотипом за 10 минут. Арендаторы оплачивают, подают заявки, смотрят договоры. Меньше звонков вам — больше удовлетворённость клиентов.'
    },
    { 
      title: 'Работа с заявками', 
      desc: 'Арендаторы подают заявки на ремонт через приложение. Вы назначаете ответственных и отслеживаете выполнение. Автоматические уведомления на всех этапах.'
    },
    { 
      title: 'Отчёты и аналитика', 
      desc: 'Финансовые отчёты: доходы, расходы, долги. Заполняемость объектов по периодам. Анализ эффективности: что приносит больше прибыли.'
    },
  ]

  const audience = [
    { 
      title: 'Частный владелец', 
      range: '2-10 объектов', 
      desc: 'Вам нужен простой учёт без сложностей. RentFlow даёт готовые шаблоны — просто добавьте свои объекты и клиентов. Начните работать за 15 минут.'
    },
    { 
      title: 'Агентство недвижимости', 
      range: '10-100 объектов', 
      desc: 'Вам нужна CRM для работы с большим потоком клиентов. RentFlow автоматизирует рутину: обработку заявок, публикацию объявлений, отправку документов.'
    },
    { 
      title: 'Управляющая компания', 
      range: '100-1000 объектов', 
      desc: 'Вам нужна полная автоматизация процессов. RentFlow даёт workflow для типовых операций, интеграцию с бухгалтерией, white-label приложения для резидентов.'
    },
    { 
      title: 'Торговый центр / БЦ', 
      range: '1000+ арендаторов', 
      desc: 'Вам нужно управлять сотнями арендаторов. RentFlow масштабируется: массовая рассылка, автоматизация коммуналки, портал для арендаторов с новостями и услугами.'
    },
  ]

  return (
    <div className="min-h-screen w-full overflow-x-hidden">

      {/* Hero секция - Gradient 2: Orange с Blue Tint (радиальный) */}
      <section className="min-h-screen flex items-center justify-center px-6  md:px-12 overflow-x-hidden" style={{ background: 'radial-gradient(ellipse at bottom right, #B6C9CF 0%, #FA9819 70%, #FA9819 100%)' }}>
        <div className="max-w-7xl w-full">
          
          <FadeUp delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
              О проекте
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-2xl md:text-3xl text-white/90 max-w-3xl leading-relaxed">
              Платформа для автоматизации управления арендой коммерческой и жилой недвижимости
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 01 - Brand Strategy / Проблемы */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Left - Number and Title */}
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <div className="text-[160px] font-bold leading-none mb-4" style={{ color: '#FA9819' }}>01</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Проблемы
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Текущие боли рынка аренды недвижимости
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-8 space-y-12">
              {problems.map((problem, index) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className="border-l-4 pl-8 py-4" style={{ borderColor: '#FA9819' }}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {problem.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Personality / Что получаете */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Left - Number and Title */}
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <div className="text-[160px] font-bold leading-none mb-4" style={{ color: '#FA9819' }}>02</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Возможности
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Что вы получаете с RentFlow
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right - Features Grid */}
            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <FadeUp key={index} delay={index * 0.1}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tone Box - Цитата - Gradient 2: Orange с Blue Tint */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden" style={{ background: 'radial-gradient(ellipse at bottom right, #B6C9CF 0%, #FA9819 70%, #FA9819 100%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Точность<br />
            Надёжность<br />
            Открытость<br />
            Стабильность
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* 03 - Voice Principles / Для кого */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Left - Number and Title */}
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <div className="text-[160px] font-bold leading-none mb-4" style={{ color: '#FA9819' }}>03</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Для кого
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Целевые сегменты пользователей
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right - Audience */}
            <div className="md:col-span-8 space-y-16">
              {audience.map((item, index) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-lg font-medium" style={{ color: '#FA9819' }}>
                        {item.range}
                      </span>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Comparison / Сравнение */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Left */}
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <div className="text-[160px] font-bold leading-none mb-4" style={{ color: '#FA9819' }}>04</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Преимущества
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Почему RentFlow лучше
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right */}
            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-12">
                <FadeUp delay={0}>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">VS Excel и WhatsApp</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">✕</span>
                        <p className="text-gray-600">Информация разбросана, легко потерять</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <p className="text-gray-900 font-medium">Всё в одном месте, история действий</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">VS Битрикс24 / amoCRM</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">✕</span>
                        <p className="text-gray-600">Месяцы настройки, нет спецфункций</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <p className="text-gray-900 font-medium">Готовые шаблоны для недвижимости</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">VS западные решения</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">✕</span>
                        <p className="text-gray-600">Не работает в РФ, дорого</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <p className="text-gray-900 font-medium">РФ-интеграции, ФЗ-152, адекватная цена</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">VS своя разработка</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">✕</span>
                        <p className="text-gray-600">3 млн ₽, год работы, команда</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <p className="text-gray-900 font-medium">5000₽/мес, запуск за день</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Gradient 4: от Navy к Sky Blue (радиальный) - заканчивается Navy для плавного перехода */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden" style={{ background: 'radial-gradient(ellipse at top left, #48749E 0%, #1E3D59 50%, #1E3D59 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Готовы начать?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Станьте одним из первых пользователей RentFlow
            </p>
            <button className="px-12 py-5 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl" style={{ background: 'linear-gradient(135deg, #FA9819 0%, #CD4900 100%)' }}>
              Оставить заявку
            </button>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}