'use client'

import { useEffect, useRef } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Завершённых проектов' },
  { value: 5, suffix: '+', label: 'Лет опыта' },
  { value: 20, suffix: '+', label: 'Освоенных технологий' },
  { value: 100, suffix: '%', label: 'Удовлетворённости клиентов' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1.6, bounce: 0 })
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, motionValue, value])

  return (
    <span ref={ref} className="text-gradient text-4xl font-semibold md:text-5xl">
      <motion.span>{display}</motion.span>
    </span>
  )
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="glass grid grid-cols-2 gap-8 rounded-3xl p-8 md:grid-cols-4 md:p-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
