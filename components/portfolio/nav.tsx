'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'Обо мне' },
  { href: '#skills', label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#experience', label: 'Опыт' },
  { href: '#contact', label: 'Контакты' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="glass mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3 md:px-6">
        <a href="#" className="text-sm font-semibold tracking-tight">
          <span className="text-gradient">AV</span>
          <span className="ml-2 hidden text-muted-foreground sm:inline">
            Alex Volkov
          </span>
        </a>
        <nav
          aria-label="Основная навигация"
          className="hidden items-center gap-6 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Написать
          </a>
        </nav>
        <button
          type="button"
          className="text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden">
          <nav aria-label="Мобильная навигация" className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  )
}
