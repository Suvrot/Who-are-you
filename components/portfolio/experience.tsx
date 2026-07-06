import { Reveal, SectionHeading } from './reveal'

const timeline = [
  {
    period: '2024 — настоящее время',
    role: 'AI Developer',
    place: 'AI-стартапы и продуктовые команды',
    text: 'Разработка AI-агентов, RAG-систем и интеллектуальных чат-приложений. Интеграция LLM в продакшен-продукты, оптимизация промптов и векторного поиска.',
  },
  {
    period: '2022 — 2024',
    role: 'Full Stack Engineer',
    place: 'Продуктовые SaaS-компании',
    text: 'Проектирование и разработка масштабируемых веб-приложений на Next.js, Node.js и PostgreSQL. Построение CI/CD, повышение производительности и качества кода.',
  },
  {
    period: '2021 — настоящее время',
    role: 'Open Source Contributor',
    place: 'GitHub-сообщество',
    text: 'Вклад в открытые проекты экосистемы React и AI-инструментов. Собственные библиотеки и утилиты с сотнями звёзд.',
  },
  {
    period: '2020 — 2022',
    role: 'Freelance Developer',
    place: 'Клиенты по всему миру',
    text: 'Более 30 успешных проектов: лендинги, интернет-магазины, дашборды и автоматизация бизнес-процессов для клиентов из США, Европы и СНГ.',
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="Опыт"
        title="Профессиональный путь"
        description="От фриланса до AI-разработки — постоянный рост и новые вызовы."
      />
      <div className="relative flex flex-col gap-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-accent/40 before:to-transparent md:before:left-1/2">
        {timeline.map((item, i) => (
          <Reveal
            key={item.role}
            delay={i * 0.1}
            className={`relative pl-8 md:w-1/2 md:pl-0 ${
              i % 2 === 0
                ? 'md:pr-12 md:text-right'
                : 'md:ml-auto md:pl-12'
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-primary bg-background shadow-[0_0_12px_var(--primary)] md:left-auto ${
                i % 2 === 0
                  ? 'md:-right-[7.5px]'
                  : 'md:-left-[7.5px]'
              }`}
            />
            <div className="glass rounded-2xl p-6">
              <span className="font-mono text-xs text-primary">
                {item.period}
              </span>
              <h3 className="mt-1 font-medium">{item.role}</h3>
              <p className="text-sm text-accent">{item.place}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
