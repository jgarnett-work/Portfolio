import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section id="hero" className="bg-gradient-hero">
                    <div className="relative pt-12 md:pt-12">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Your trusted Full-Stack Web Developer
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    My mission is to exceed your expectations in delivering the details, design, and deadlines you value.
                                </TextEffect>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                            }}>
                            <div className="flex justify-center">
                                <div className="group overflow-hidden p-10">
                                    <Image
                                        // className="h-96 w-full rounded-md object-cover object-top transition-all duration-500 hover:grayscale group-hover:h-[22.5rem] group-hover:rounded-xl"
                                        className="brand-panel brand-panel-scale h-96 w-full hover:grayscale"
                                        src='/headshot.jpeg'
                                        alt="Professional Headshot - Josh Garnett"
                                        width="826"
                                        height="1239"
                                        sizes="(max-width: 768px) 100vw, 280px"
                                    />
                                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                        <div className="flex justify-between">
                                            <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">Josh Garnett</h3>
                                        </div>
                                        <div className="mt-1 flex items-center justify-between">
                                            <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Software Developer | Mentor | Leader</span>
                                            <Link
                                                href="https://www.linkedin.com/in/joshua-garnett/"
                                                className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                                {' '}
                                                LinkedIn
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
