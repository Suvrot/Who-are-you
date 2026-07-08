'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from './reveal'

const projects = [
  {
    title: 'AI SaaS Platform',
    description:
      'AI-помощник с системой авторизации, подписками, анализом документов и интеллектуальным чатом.',
    image: '/projects/ai-saas.png',
    tech: ['Next.js', 'OpenAI', 'Stripe', 'PostgreSQL'],
    url: 'https://saas-portfolio-ai.vercel.app',
  },
  {
    title: 'Smart CRM',
    description:
      'Современная CRM-система с аналитикой, автоматизацией процессов и управлением клиентами.',
    image: '/projects/smart-crm.png',
    tech: ['React', 'NestJS', 'Prisma', 'Redis'],
    url: 'https://saas-portfolio-crm.vercel.app',
  },
  {
    title: 'Finance Dashboard',
    description:
      'Платформа финансовой аналитики в реальном времени с интерактивными графиками.',
    image: '/projects/finance-dashboard.png',
    tech: ['Next.js', 'TypeScript', 'WebSocket', 'Recharts'],
    url: 'https://saas-portfolio-finance.vercel.app',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Интернет-магазин на Next.js с интеграцией Stripe и административной панелью.',
    image: '/projects/ecommerce.png',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    url: 'https://saas-portfolio-ecommerce.vercel.app',
  },
  {
    title: 'AI Chat Application',
    description:
      'Современное AI-чат-приложение с потоковой генерацией ответов, памятью диалогов и загрузкой файлов.',
    image: '/projects/ai-chat.png',
    tech: ['AI SDK', 'Claude API', 'RAG', 'Vercel'],
    url: 'https://saas-portfolio-chat.vercel.app',
  },
  {
    title: 'Task Management Platform',
    description:
      'Платформа управления задачами и проектами, вдохновлённая Linear.',
    image: '/projects/task-platform.png',
    tech: ['React', 'GraphQL', 'MongoDB', 'Framer Motion'],
    url: 'https://saas-portfolio-tasks.vercel.app',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="Портфолио"
        title="Избранные проекты"
        description="Полный стек: от идеи до деплоя — от AI-инструментов до e-commerce решений."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="glass group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_48px_-16px_var(--primary)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`Скриншот проекта ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-medium">{project.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}