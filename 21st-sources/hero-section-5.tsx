// Source: 21st.dev — "Hero Section 5" with floating sticky nav + InfiniteSlider customer logos
// Query used: "hero video editorial"
// Cached: 2026-04-26 for Harkinson Investment Corporation
// What we borrowed: the floating-pill nav that gains a backdrop-blur background past 5% scroll
// (we used vanilla scroll listener instead of framer-motion useScroll). Skipped the InfiniteSlider
// customer-logos pattern in favor of an editorial location marquee.

'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Build 10x Faster with NS</h1>
                <p className="mt-8 max-w-2xl text-balance text-lg">Highly customizable components for building modern websites and applications you mean it.</p>
                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base">
                    <Link href="#link"><span className="text-nowrap">Start Building</span><ChevronRight className="ml-1" /></Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video autoPlay loop className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75" src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const HeroHeader = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => { setScrolled(latest > 0.05) })
    return () => unsubscribe()
  }, [scrollYProgress])
  return (
    <header>
      <nav className="group fixed z-20 w-full pt-2">
        <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
          {/* nav contents */}
        </div>
      </nav>
    </header>
  )
}
