import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const testimonials = [
  {
    name: 'Мария Ковалёва',
    role: 'CEO, финтех-стартап',
    avatar: '/avatars/avatar-1.png',
    text: 'Алекс превратил нашу идею в полноценный продукт за рекордные сроки. Качество кода и внимание к деталям — на уровне лучших мировых команд.',
  },
  {
    name: 'Дмитрий Соколов',
    role: 'CTO, SaaS-платформа',
    avatar: '/avatars/avatar-2.png',
    text: 'Редко встретишь разработчика, который одинаково силён и во фронтенде, и в бэкенде, и в AI. Интеграция LLM в наш продукт прошла безупречно.',
  },
  {
    name: 'Иван Мельник',
    role: 'Product Manager, e-commerce',
    avatar: '/avatars/avatar-3.png',
    text: 'Скорость работы магазина выросла в три раза после оптимизации. Коммуникация чёткая, дедлайны соблюдены, результат превзошёл ожидания.',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Отзывы"
        title="Что говорят клиенты"
        description="Доверие и результат — основа долгосрочного сотрудничества."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.1}>
            <figure className="glass flex h-full flex-col gap-4 rounded-2xl p-6">
              <Quote size={20} className="text-primary" aria-hidden="true" />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <Image
                  src={item.avatar || '/placeholder.svg'}
                  alt={`Фото ${item.name}`}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
