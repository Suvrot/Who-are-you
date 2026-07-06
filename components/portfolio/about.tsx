import {
  Brain,
  Gauge,
  Heart,
  Puzzle,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const traits = [
  {
    icon: Puzzle,
    title: 'Решение сложных задач',
    text: 'Декомпозирую комплексные проблемы и нахожу элегантные решения.',
  },
  {
    icon: Zap,
    title: 'Быстрое обучение',
    text: 'Осваиваю новые технологии и подходы в кратчайшие сроки.',
  },
  {
    icon: Sparkles,
    title: 'Чистый и качественный код',
    text: 'Пишу поддерживаемый код с продуманной архитектурой.',
  },
  {
    icon: Heart,
    title: 'Любовь к UI/UX',
    text: 'Внимание к деталям и пользовательскому опыту в каждом пикселе.',
  },
  {
    icon: Gauge,
    title: 'Ориентация на производительность',
    text: 'Оптимизирую каждое приложение для максимальной скорости.',
  },
  {
    icon: Brain,
    title: 'Постоянное развитие',
    text: 'Слежу за трендами AI и веб-разработки, всегда на шаг впереди.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Обо мне"
        title="Инженер, который превращает идеи в продукты"
        description="Создаю высокопроизводительные веб-приложения, AI-решения, SaaS-платформы и инструменты автоматизации — от прототипа до продакшена."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {traits.map((trait, i) => (
          <Reveal key={trait.title} delay={i * 0.08}>
            <div className="glass group h-full rounded-2xl p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_40px_-16px_var(--primary)]">
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <trait.icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-medium">{trait.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {trait.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
