'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'code',
            question: 'What got you into coding?',
            answer: 'When I was 10 years old, I was introduced to videogame development. I started by tweaking pieces of code written by other people, reading documentation, and watching YouTube videos. Pretty soon, I\'d find myself up past 2:00AM with that itch to solve a coding project as time flew by. That\'s when I realized I was actually having fun doing something most people deemed work.',
        },
        {
            id: 'item-2',
            icon: 'star',
            question: 'What are your career aspirations?',
            answer: 'Currently, I am most interested in striving for excellence as a developer. I want to become the absolute best at my job and serve my company\'s mission. In the future, I would like to excercise my Business Management minor and lead a team once I\'m able to build the skills for it. I am open to pursuing a Master\'s level degree at the right time.',
        },
        {
            id: 'item-3',
            icon: 'party-popper',
            question: 'What are your hobbies?',
            answer: 'I enjoy a wide variety of activities! Most recently, I\'ve become very interested in traveling with friends! Japan has been the highlight of our adventures! Aside from that, I enjoy sports, lifting, coding (surprise), learning songs on the piano, and general social hangouts with old friends or new ones!',
        },
        {
            id: 'item-4',
            icon: 'notebook-pen',
            question: 'What is one piece of advice that has stuck with you?',
            answer: 'The value of a network. It\'s amazing how quickly barriers to a goal can be broken down simply by knowing the right person. I was fortunate enough to build a tremendous amount of close connections in college at a time when the world was afraid to socialize. Through this, I discovered how much I enjoy people and the different journeys and qualities that are unique to each one of us.',
        },
        {
            id: 'item-5',
            icon: 'quote',
            question: 'What is one quote that has stuck with you?',
            answer: '"If opportunity doesn\'t knock, build a door." -Milton Berle. To me, this means putting the work in to reach my goals. I\'m not the type of person to wait around until something good finds me, I will seek it out and make it happen. This pairs well with a quote one of the organizational leaders at Collins Aerospace shared with me: "Your future, you drive."',
        },
    ]

    return (
        <section id="faqs" className="bg-muted py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Want to know more?</h2>
                            <p className="text-muted-foreground mt-4">
                                Check out the dropdown menus to the right or have a look at {' '}
                                <Link
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium hover:underline">
                                    my resume.
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/2">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="brand-panel brand-panel-lift hover-text px-4">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="px-9">
                                            <p className="text-base text-secondary">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
