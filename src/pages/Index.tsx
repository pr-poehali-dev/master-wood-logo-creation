import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = "https://cdn.poehali.dev/projects/9f58e207-7e86-44dc-bd06-43245e548979/files/d9ad3b30-bfb6-4b3f-830e-cd80c0f56298.jpg";
const MATERIALS_IMG = "https://cdn.poehali.dev/projects/9f58e207-7e86-44dc-bd06-43245e548979/files/4764ecfc-f3ca-4dda-9172-ef536abff2cf.jpg";
const CRAFT_IMG = "https://cdn.poehali.dev/projects/9f58e207-7e86-44dc-bd06-43245e548979/files/daafb82d-114d-4d77-805f-233783632e4e.jpg";

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'О компании', href: '#about' },
  { label: 'Производство', href: '#production' },
  { label: 'Продукция', href: '#catalog' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contacts' },
];

const materials = [
  {
    name: 'Дуб',
    latin: 'Quercus',
    density: '700–900 кг/м³',
    hardness: 'Высокая',
    uses: 'Паркет, мебель, двери, лестницы',
    desc: 'Твёрдая порода с выраженным рисунком. Устойчива к влаге и механическим воздействиям. Классика промышленного производства.',
    color: '#8B6914',
  },
  {
    name: 'Сосна',
    latin: 'Pinus',
    density: '400–600 кг/м³',
    hardness: 'Средняя',
    uses: 'Брус, доска, стропила, обшивка',
    desc: 'Наиболее распространённая хвойная порода. Легко обрабатывается, имеет приятный смолистый аромат.',
    color: '#C4922A',
  },
  {
    name: 'Берёза',
    latin: 'Betula',
    density: '600–700 кг/м³',
    hardness: 'Высокая',
    uses: 'Фанера, мебельные заготовки, детали интерьера',
    desc: 'Однородная структура, хорошо красится и лакируется. Идеальна для производства мебельных щитов и фанеры.',
    color: '#D4C090',
  },
  {
    name: 'Лиственница',
    latin: 'Larix',
    density: '500–700 кг/м³',
    hardness: 'Высокая',
    uses: 'Настилы, фасады, причалы, террасы',
    desc: 'Особая устойчивость к гниению и воде. Со временем становится только прочнее. Выбор для наружных работ.',
    color: '#A0612A',
  },
  {
    name: 'Ясень',
    latin: 'Fraxinus',
    density: '650–750 кг/м³',
    hardness: 'Очень высокая',
    uses: 'Спортинвентарь, рукоятки, элитная мебель',
    desc: 'Исключительная упругость и ударостойкость. Красивый прямой рисунок волокна. Премиальный материал.',
    color: '#B8A060',
  },
  {
    name: 'Ель',
    latin: 'Picea',
    density: '380–500 кг/м³',
    hardness: 'Низкая',
    uses: 'Вагонка, отделка, музыкальные инструменты',
    desc: 'Лёгкая хвойная порода с мелкой равномерной текстурой. Хорошие акустические свойства.',
    color: '#7A9060',
  },
];

const services = [
  { icon: 'Layers', title: 'Распиловка древесины', desc: 'Точная распиловка бревна на доску и брус любых размеров на современных ленточнопильных станках.' },
  { icon: 'Wrench', title: 'Строгание и профилирование', desc: 'Четырёхсторонняя строжка, изготовление погонажных изделий — вагонка, плинтус, наличник.' },
  { icon: 'Truck', title: 'Доставка и логистика', desc: 'Собственный парк грузовых автомобилей. Доставка по всему региону в срок.' },
];

const production = [
  { label: '01', title: 'Приёмка сырья', desc: 'Входной контроль каждой партии. Сортировка по породе, влажности и сортности. Только кондиционная древесина.' },
  { label: '02', title: 'Первичная распиловка', desc: 'Бревно поступает на горизонтальную ленточную пилу. Получаем необрезной пиломатериал по заданным параметрам.' },
  { label: '03', title: 'Сушка', desc: 'Камеры вместимостью до 200 м³. Цикл от 15 до 45 дней. Финальная влажность 8–12%.' },
  { label: '04', title: 'Механообработка', desc: 'Строгание, профилирование, торцевание. Точность ±0.2 мм. Готово к монтажу или финишной обработке.' },
  { label: '05', title: 'Контроль качества', desc: 'Каждая партия проходит техническую приёмку. Соответствие ГОСТ и требованиям заказчика.' },
  { label: '06', title: 'Отгрузка', desc: 'Упаковка, маркировка, погрузка. Документация и сертификаты качества.' },
];

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-coal text-parchment">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(14,11,9,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #2A2520' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div style={{ width: 3, height: 28, background: 'var(--amber)' }} />
            <span className="font-display text-xl font-bold tracking-widest text-parchment">МАСТЕР<span className="text-amber"> ВУД</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
          <a href="#contacts" className="hidden md:block btn-primary text-sm">Связаться</a>
          <button className="md:hidden text-dust" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-iron border-t border-stone px-6 py-4 flex flex-col gap-4">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="nav-link py-1" onClick={() => setMobileOpen(false)}>{item.label}</a>
            ))}
            <a href="#contacts" className="btn-primary text-center mt-2">Связаться</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,11,9,0.97) 0%, rgba(14,11,9,0.6) 50%, rgba(14,11,9,0.3) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl animate-slide-up">
            <span className="section-label">Промышленная деревообработка</span>
            <div className="amber-line" />
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ letterSpacing: '0.02em' }}>
              МАСТЕР<br />
              <span className="text-amber">ВУД</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-dust max-w-xl mb-10 leading-relaxed" style={{ fontWeight: 300 }}>
              Распиловка и строгание древесины.<br />Качественные пиломатериалы для строительства и производства.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="btn-primary">Смотреть продукцию</a>
              <a href="#contacts" className="btn-outline">Запросить расчёт</a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'var(--stone)' }}>
            {[
              { n: '15+', label: 'Лет на рынке' },
              { n: '8000', label: 'м³ в месяц' },
              { n: '150+', label: 'Партнёров' },
              { n: '100%', label: 'Контроль качества' },
            ].map(s => (
              <div key={s.label} className="bg-iron px-6 py-5">
                <div className="stat-number">{s.n}</div>
                <div className="text-dust text-xs font-body mt-1" style={{ letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">О компании</span>
            <div className="amber-line" />
            <h2 className="font-display text-4xl md:text-5xl mb-6">Мы знаем дерево<br /><span className="text-amber">изнутри</span></h2>
            <p className="font-body text-dust leading-relaxed mb-6" style={{ fontWeight: 300, fontSize: '1.05rem' }}>
              С 1999 года Мастер Вуд специализируется на промышленной деревообработке. Мы начинали с небольшой пилорамы — сегодня это современное производство полного цикла с собственным парком оборудования и командой профессионалов.
            </p>
            <p className="font-body text-dust leading-relaxed mb-8" style={{ fontWeight: 300, fontSize: '1.05rem' }}>
              Наши клиенты — строительные компании, мебельные производства, архитектурные студии. Работаем с оптовыми поставками и индивидуальными проектами.
            </p>
            <div className="flex flex-col gap-3">
              {['Собственные лесозаготовительные бригады', 'Сертифицированное европейское оборудование', 'Производственный контроль на каждом этапе', 'Работа по ГОСТ и техническому заданию'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div style={{ width: 6, height: 6, background: 'var(--amber)', flexShrink: 0 }} />
                  <span className="font-body text-sm text-parchment">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={CRAFT_IMG} alt="Мастерство деревообработки" className="w-full object-cover" style={{ height: 480, filter: 'contrast(1.05) brightness(0.9)' }} />
            <div style={{ position: 'absolute', bottom: -16, left: -16, padding: '1.5rem', background: 'var(--amber)', color: 'var(--coal)' }}>
              <div className="font-display text-3xl font-bold">25+</div>
              <div className="font-body text-xs mt-0.5" style={{ letterSpacing: '0.05em' }}>ЛЕТ ОПЫТА</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION */}
      <section id="production" className="py-24" style={{ background: 'var(--iron)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label">Производство</span>
              <div className="amber-line" />
              <h2 className="font-display text-4xl md:text-5xl">Полный<br /><span className="text-amber">производственный цикл</span></h2>
            </div>
            <p className="font-body text-dust max-w-sm text-sm leading-relaxed">
              От приёмки бревна до готовой продукции — каждый этап под контролем инженеров-технологов.
            </p>
          </div>
          <div className="mb-16 relative">
            <img src={HERO_IMG} alt="Производство Мастер Вуд" className="w-full object-cover" style={{ height: 360 }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(14,11,9,0.8) 0%, rgba(14,11,9,0.2) 100%)' }} />
            <div className="absolute top-8 left-8">
              <span className="font-display text-2xl text-amber-light" style={{ letterSpacing: '0.1em' }}>ПРОИЗВОДСТВЕННЫЙ ЦЕХ</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--stone)' }}>
            {production.map((step) => (
              <div key={step.label} className="bg-iron p-8 group hover:bg-steel transition-colors duration-300">
                <div className="font-display text-5xl font-bold mb-4" style={{ color: 'var(--stone)' }}>{step.label}</div>
                <h3 className="font-display text-lg mb-3 text-amber">{step.title}</h3>
                <p className="font-body text-dust text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-label">Каталог материалов</span>
          <div className="amber-line" />
          <h2 className="font-display text-4xl md:text-5xl mb-4">Виды древесины<br /><span className="text-amber">и характеристики</span></h2>
          <p className="font-body text-dust max-w-xl text-sm leading-relaxed">
            Работаем с основными породами средней полосы России. Нажмите на карточку для подробных характеристик.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {materials.map((mat, idx) => (
            <div key={mat.name} className="card-industrial cursor-pointer" onClick={() => setActiveMaterial(activeMaterial === idx ? null : idx)}>
              <div className="h-2" style={{ background: mat.color }} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl text-parchment">{mat.name}</h3>
                    <span className="font-body text-xs text-dust italic">{mat.latin}</span>
                  </div>
                  <Icon name={activeMaterial === idx ? 'ChevronUp' : 'ChevronDown'} size={16} className="text-dust mt-1" />
                </div>
                <p className="font-body text-sm text-dust leading-relaxed mb-4">{mat.desc}</p>
                {activeMaterial === idx && (
                  <div className="border-t border-stone pt-4 mt-4 animate-fade-in">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-dust mb-1" style={{ letterSpacing: '0.08em', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>Плотность</div>
                        <div className="font-body text-sm text-parchment">{mat.density}</div>
                      </div>
                      <div>
                        <div className="text-xs text-dust mb-1" style={{ letterSpacing: '0.08em', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>Твёрдость</div>
                        <div className="font-body text-sm text-parchment">{mat.hardness}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-xs text-dust mb-1" style={{ letterSpacing: '0.08em', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>Применение</div>
                        <div className="font-body text-sm text-parchment">{mat.uses}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 relative overflow-hidden" style={{ background: 'var(--iron)', border: '1px solid var(--stone)' }}>
          <img src={MATERIALS_IMG} alt="Материалы" className="w-full object-cover opacity-30" style={{ height: 200 }} />
          <div className="absolute inset-0 flex items-center justify-between px-10">
            <div>
              <h3 className="font-display text-2xl text-parchment mb-1">Нужна помощь с выбором материала?</h3>
              <p className="font-body text-dust text-sm">Наши технологи подберут оптимальную породу под ваш проект</p>
            </div>
            <a href="#contacts" className="btn-primary hidden md:block">Получить консультацию</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: 'var(--iron)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-label">Услуги</span>
            <div className="amber-line" />
            <h2 className="font-display text-4xl md:text-5xl">Что мы<br /><span className="text-amber">производим</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <div key={svc.title} className="card-industrial p-8">
                <div className="mb-4 w-12 h-12 flex items-center justify-center" style={{ border: '1px solid var(--stone)' }}>
                  <Icon name={svc.icon} size={20} className="text-amber" />
                </div>
                <h3 className="font-display text-xl mb-3 text-parchment">{svc.title}</h3>
                <p className="font-body text-sm text-dust leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="section-label">Контакты</span>
            <div className="amber-line" />
            <h2 className="font-display text-4xl md:text-5xl mb-8">Свяжитесь<br /><span className="text-amber">с нами</span></h2>
            <div className="flex flex-col gap-6">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (495) 000-00-00' },
                { icon: 'Mail', label: 'Email', value: 'info@mastervood.ru' },
                { icon: 'MapPin', label: 'Адрес на карте', value: 'Вологодская обл., Грязовецкий р-н, д. Хорошево, ул. Новая, д. 21' },
                { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 8:00–18:00, Сб: 9:00–14:00' },
              ].map(c => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid var(--stone)' }}>
                    <Icon name={c.icon} size={16} className="text-amber" />
                  </div>
                  <div>
                    <div className="text-xs text-dust mb-0.5" style={{ letterSpacing: '0.1em', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>{c.label}</div>
                    <div className="font-body text-parchment text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--iron)', border: '1px solid var(--stone)', padding: '2rem' }}>
            <h3 className="font-display text-xl text-parchment mb-6">Отправить запрос</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs text-dust mb-2" style={{ letterSpacing: '0.1em', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>Имя</label>
                <input type="text" placeholder="Иван Петров" className="w-full font-body text-sm px-4 py-3 outline-none" style={{ background: 'var(--steel)', border: '1px solid var(--stone)', color: 'var(--parchment)' }} />
              </div>
              <div>
                <label className="block text-xs text-dust mb-2" style={{ letterSpacing: '0.1em', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full font-body text-sm px-4 py-3 outline-none" style={{ background: 'var(--steel)', border: '1px solid var(--stone)', color: 'var(--parchment)' }} />
              </div>
              <div>
                <label className="block text-xs text-dust mb-2" style={{ letterSpacing: '0.1em', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>Сообщение</label>
                <textarea rows={4} placeholder="Опишите ваш запрос..." className="w-full font-body text-sm px-4 py-3 outline-none resize-none" style={{ background: 'var(--steel)', border: '1px solid var(--stone)', color: 'var(--parchment)' }} />
              </div>
              <button className="btn-primary w-full mt-2">Отправить запрос</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0A0806', borderTop: '1px solid var(--stone)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div style={{ width: 2, height: 20, background: 'var(--amber)' }} />
            <span className="font-display text-base tracking-widest text-dust">МАСТЕР<span className="text-amber"> ВУД</span></span>
          </div>
          <nav className="flex flex-wrap gap-6 justify-center">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="nav-link text-xs">{item.label}</a>
            ))}
          </nav>
          <span className="font-body text-xs" style={{ color: 'var(--dust)', opacity: 0.5 }}>© 2024 Мастер Вуд</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;