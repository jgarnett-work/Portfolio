import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { Icons } from "@/components/icons"

export default function IntegrationsSection() {
    return (
        <section id="skills">
            <div className="py-10">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Technical Skills</h2>
                        <p className="text-muted-foreground mt-6">For a full list of my technical skills, please see {' '}
                                <Link
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium hover:underline">
                                    my resume.
                                </Link></p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                            title: "Microsoft .Net",
                            description:
                                "I have large company (80,000+ employed) experience as a .Net Web Developer (ASP.Net Core, MVC, and Web Forms).",
                            link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
                            icon: <Icons.dotnet className="size-10" />,
                            },
                            {
                            title: "Next.js",
                            description:
                                "I learned Next.js to build the foundation of this portfolio in less than a day.",
                            link: "https://nextjs.org/",
                            icon: <Icons.nextdotjs className="size-10" />,
                            },
                            {
                            title: "Tailwind Css",
                            description:
                                "I learned Tailwind along with Next.js to expedite styling for this portfolio.",
                            link: "https://tailwindcss.com/",
                            icon: <Icons.tailwindcss className="size-10" />,
                            },
                            {
                            title: "C Sharp",
                            description:
                                "I landed my first job by promising a recruiter I would learn C# ahead of my first day at a college career fair.",
                            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                            icon: <Icons.sharp className="size-10" />,
                            },
                            {
                            title: "JavaScript",
                            description:
                                "Javascript was the second coding language I learned at a young age, taking an interest in videogame development.",
                            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                            icon: <Icons.javascript className="size-10" />,
                            },
                            {
                            title: "PostgreSQL",
                            description:
                                "I currently use Microsoft SQL Server (MSSQL) for work, but I am learning PostgreSQL.",
                            link: "https://www.postgresql.org/",
                            icon: <Icons.postgresql className="size-10" />,
                            },
                            {
                            title: "Swagger",
                            description:
                                "Swagger is the RESTful API suite I have experience using in the industry.",
                            link: "https://swagger.io/",
                            icon: <Icons.swagger className="size-10" />,
                            },
                            {
                            title: "React",
                            description:
                                "React is a common User Interface (UI) library I use regularly for development in the industry. Next.js is a React framework.",
                            link: "https://react.dev/",
                            icon: <Icons.react className="size-10" />,
                            },
                            {
                            title: "Python",
                            description:
                                "Python is the language I was taught during my undergrad program.",
                            link: "https://www.python.org/",
                            icon: <Icons.python className="size-10" />,
                            },
                        ].map((item) => (
                            <IntegrationCard
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                                >
                                {item.icon}
                            </IntegrationCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = 'www.linkedin.com/in/joshua-garnett' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="brand-panel brand-panel-lift p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="space-y-2 py-1">
                    <h3 className="text-base font-bold">{title}</h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-2">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none">
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}
