'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
      <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium tracking-wide text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
