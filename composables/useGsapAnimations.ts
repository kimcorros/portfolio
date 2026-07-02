import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  const fadeUp = (elements: string | Element | Element[], trigger?: string | Element, options?: Record<string, any>) => {
    return gsap.from(elements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
            ...options,
          }
        : undefined,
    })
  }

  const fadeIn = (elements: string | Element | Element[], trigger?: string | Element, options?: Record<string, any>) => {
    return gsap.from(elements, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
            ...options,
          }
        : undefined,
    })
  }

  const slideInLeft = (elements: string | Element | Element[], trigger?: string | Element) => {
    return gsap.from(elements, {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
          }
        : undefined,
    })
  }

  const slideInRight = (elements: string | Element | Element[], trigger?: string | Element) => {
    return gsap.from(elements, {
      x: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
          }
        : undefined,
    })
  }

  const staggerReveal = (elements: string | Element | Element[], trigger?: string | Element, staggerDelay = 0.08) => {
    return gsap.from(elements, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: staggerDelay,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
          }
        : undefined,
    })
  }

  const scaleIn = (elements: string | Element | Element[], trigger?: string | Element) => {
    return gsap.from(elements, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
          }
        : undefined,
    })
  }

  const heroTextReveal = (element: string | Element) => {
    return gsap.from(element, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
  }

  const killScrollTriggers = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }

  return {
    gsap,
    ScrollTrigger,
    fadeUp,
    fadeIn,
    slideInLeft,
    slideInRight,
    staggerReveal,
    scaleIn,
    heroTextReveal,
    killScrollTriggers,
  }
}
