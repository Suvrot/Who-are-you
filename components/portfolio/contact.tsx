'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { Reveal, SectionHeading } from './reveal'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@alexvolkov.dev',
    href: 'mailto:hello@alexvolkov.dev',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: '/in/alexvolkov',
    href: '#',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@alexvolkov',
    href: '#',
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@alexvolkov_dev',
    href: '#',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Контакты"
        title="Давайте создадим что-то великое"
        description="Открыт для интересных проектов, консультаций и долгосрочного сотрудничества."
      />
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="flex h-full flex-col gap-3">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all hover:border-primary/30"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <channel.icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    {channel.label}
                  </div>
                  <div className="text-sm font-medium">{channel.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-3">
          <form
            className="glass flex h-full flex-col gap-4 rounded-2xl p-6"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            {sent ? (
              <div
                className="flex flex-1 flex-col items-center justify-center gap-2 py-12 text-center"
                role="status"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send size={20} aria-hidden="true" />
                </div>
                <p className="font-medium">Сообщение отправлено!</p>
                <p className="text-sm text-muted-foreground">
                  Отвечу в течение 24 часов.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs text-muted-foreground">
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Ваше имя"
                      className="rounded-xl border border-input bg-secondary/40 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="rounded-xl border border-input bg-secondary/40 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs text-muted-foreground">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Расскажите о вашем проекте..."
                    className="flex-1 resize-none rounded-xl border border-input bg-secondary/40 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_32px_-8px_var(--primary)]"
                >
                  Отправить сообщение
                  <Send size={15} aria-hidden="true" />
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
