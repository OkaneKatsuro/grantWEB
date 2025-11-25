'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  fullWidth?: boolean
}

export default function Reveal({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  fullWidth = false 
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,      // анимация только 1 раз
    amount: 0.3      // 30% элемента видно = триггер
  })

  // Направления анимации
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{ 
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]  // cubic-bezier для плавности
      }}
      className={fullWidth ? 'w-full' : className}
    >
      {children}
    </motion.div>
  )
}