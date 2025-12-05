'use client'

import { FadeUp } from '@/components/animations/FadeUp'

export default function SystemArchitecture() {
  const userJourney = [
    {
      title: 'Добавляете объекты',
      desc: 'Загружаете фото, заполняете характеристики, прикрепляете документы. Система автоматически создаёт карточки для каждого объекта.'
    },
    {
      title: 'Публикуете объявления',
      desc: 'Одна кнопка — объявление на Avito и ЦИАН. Система сама обновляет статусы и снимает с публикации после сдачи.'
    },
    {
      title: 'Принимаете заявки',
      desc: 'Все обращения из разных источников собираются в одном месте. Отвечаете, назначаете просмотры, отслеживаете статус.'
    },
    {
      title: 'Оформляете договор',
      desc: 'Выбираете шаблон, система подставляет данные. Арендатор подписывает онлайн. Договор автоматически сохраняется.'
    },
    {
      title: 'Получаете оплату',
      desc: 'Арендатор платит через приложение или получает счёт на почту. Деньги приходят на ваш счёт, чеки формируются автоматически.'
    },
    {
      title: 'Контролируете процесс',
      desc: 'Видите все объекты, арендаторов, платежи на одном экране. Система напоминает о важных событиях и формирует отчёты.'
    }
  ]

  const benefits = [
    {
      title: 'Экономия времени',
      metric: '10+ часов в неделю',
      desc: 'Автоматизация публикаций, напоминаний, формирования документов освобождает время для развития бизнеса.'
    },
    {
      title: 'Больше клиентов',
      metric: '+30% конверсия',
      desc: 'Ни одна заявка не теряется. Быстрые ответы и удобство для арендаторов увеличивают количество сделок.'
    },
    {
      title: 'Меньше ошибок',
      metric: '0 забытых платежей',
      desc: 'Система сама напоминает об оплате, окончании договоров и важных событиях. Ничего не упустите.'
    }
  ]

  const forTenant = [
    {
      step: '1',
      title: 'Находят объект',
      desc: 'Видят объявление на Avito с актуальными фото и описанием'
    },
    {
      step: '2',
      title: 'Записываются на просмотр',
      desc: 'Оставляют заявку онлайн, получают подтверждение и напоминание'
    },
    {
      step: '3',
      title: 'Подписывают договор',
      desc: 'Читают условия, ставят электронную подпись, получают копию на почту'
    },
    {
      step: '4',
      title: 'Заселяются и пользуются',
      desc: 'Скачивают приложение с вашим логотипом, платят, подают заявки, получают новости'
    }
  ]

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">

      {/* Hero секция */}
      <section 
        className="min-h-screen flex items-center justify-center px-6 md:px-12 overflow-x-hidden" 
        style={{ background: 'radial-gradient(ellipse at bottom right, #48749E 0%, #1E3D59 70%, #1E3D59 100%)' }}
      >
        <div className="max-w-7xl w-full">
          
          <FadeUp delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
              Как это<br />работает
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-2xl md:text-3xl text-white/90 max-w-3xl leading-relaxed">
              От добавления объекта до получения оплаты — всё в одной системе
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 01 - Ваш путь */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <div className="text-[160px] font-bold leading-none mb-4" style={{ color: '#48749E' }}>01</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Ваш путь
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Что вы делаете в системе
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="md:col-span-8 space-y-12">
              {userJourney.map((step, index) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className="border-l-4 pl-8 py-4" style={{ borderColor: '#48749E' }}>
                    <div className="flex items-center gap-4 mb-3">
                      
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Что это даёт */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <div className="text-[160px] font-bold leading-none mb-4" style={{ color: '#48749E' }}>02</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Результат
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Конкретные улучшения вашего бизнеса
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="md:col-span-8">
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <FadeUp key={index} delay={index * 0.1}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 " >
                      <div className="flex items-baseline gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {benefit.title}
                        </h3>
                        <span className="text-xl font-bold" style={{ color: '#48749E' }}>
                          {benefit.metric}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - Для арендатора */}
      <section className="py-32 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <div className="text-[160px] font-bold leading-none mb-4" style={{ color: '#48749E' }}>03</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Для арендатора
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Путь вашего клиента
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {forTenant.map((item, index) => (
                  <FadeUp key={index} delay={index * 0.1}>
                    <div className="relative">
                     
                      <div className="bg-gray-50 p-8 pt-12 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Визуализация - простая схема */}
      <section 
        className="py-32 px-6 md:px-12 overflow-x-hidden" 
        style={{ background: 'radial-gradient(ellipse at bottom right, #FA9819 0%, #FA9819 70%, #FA9819 100%)' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-20">
              Всё в одном месте
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-3">Вы</h3>
                <p className="text-white/80 text-lg">Управляете через веб-платформу</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-3">RentFlow</h3>
                <p className="text-white/80 text-lg">Автоматизирует процессы</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-3">Арендаторы</h3>
                <p className="text-white/80 text-lg">Пользуются приложением</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-12 inline-block">
              <p className="text-2xl text-white font-medium">
                Публикации • Заявки • Договоры • Платежи • Аналитика
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}