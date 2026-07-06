import { Bot, Cloud, Database, Layout, Server } from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const groups = [
  {
    icon: Layout,
    title: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Redux',
      'Framer Motion',
      'Three.js',
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Python',
      'FastAPI',
      'REST API',
      'GraphQL',
    ],
  },
  {
    icon: Database,
    title: 'Базы данных',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Redis', 'Firebase'],
  },
  {
    icon: Bot,
    title: 'AI и Machine Learning',
    skills: [
      'OpenAI API',
      'Anthropic Claude API',
      'Google Gemini API',
      'LangChain',
      'Векторные БД',
      'RAG',
      'AI Agents',
      'Prompt Engineering',
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps и Cloud',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'CI/CD',
      'Vercel',
      'AWS',
      'Linux',
      'Nginx',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Навыки"
        title="Технологический стек"
        description="Инструменты и технологии, которые я использую для создания продуктов мирового уровня."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.08}
            className={i === groups.length - 1 ? 'md:col-span-2' : undefined}
          >
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <group.icon size={18} aria-hidden="true" />
                </div>
                <h3 className="font-medium">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
