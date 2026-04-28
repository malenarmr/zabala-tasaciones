"use client"

import { useEffect, useRef, useState, useCallback } from "react"

// Hook para detectar cuando un elemento entra en viewport
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element) // Solo animar una vez
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

// Hook para contador animado
export function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const { ref, isInView } = useInView()

  const startCounting = useCallback(() => {
    if (hasStarted) return
    setHasStarted(true)

    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function: easeOutExpo para desaceleración natural
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutExpo)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  useEffect(() => {
    if (startOnView && isInView) {
      startCounting()
    }
  }, [isInView, startOnView, startCounting])

  return { count, ref, isInView, startCounting }
}
