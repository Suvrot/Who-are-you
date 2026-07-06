'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let raf = 0
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      hue: number
    }[] = []

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const count = Math.min(70, Math.floor(width / 18))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        hue: Math.random() > 0.5 ? 225 : 270,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const len = particles.length
      for (let i = 0; i < len; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 85%, 70%, 0.55)`
        ctx.fill()

        for (let j = i + 1; j < len; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = dx * dx + dy * dy
          if (dist < 120 * 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `hsla(240, 80%, 70%, ${
              0.12 * (1 - dist / (120 * 120))
            })`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    if (reduced) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 size-full"
    />
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Gradient grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 size-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-1/4 bottom-1/4 size-96 translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <Particles />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span
            className="size-2 rounded-full bg-primary motion-safe:animate-pulse"
            aria-hidden="true"
          />
          Открыт для новых проектов
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl"
        >
          Создаю <span className="text-gradient">AI-продукты</span>,
          современные веб-приложения и масштабируемые цифровые решения.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl leading-relaxed text-pretty text-muted-foreground md:text-lg"
        >
          Full Stack-разработчик, специализирующийся на AI, React, Next.js,
          TypeScript, Python и облачных технологиях.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_32px_-8px_var(--primary)]"
          >
            Посмотреть проекты
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="glass flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Связаться со мной
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Прокрутить к разделу Обо мне"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground motion-safe:animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
