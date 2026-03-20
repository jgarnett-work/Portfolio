export default function StatsSection() {
    return (
        <section id="experience" className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Experience</h2>
                    <p>For many people, experience is confined to their work day alone. For me, coding isn't just a job; it's what I do for fun. It's not just a hobby, it's a lifestyle.</p>
                </div>

                <div className="grid gap-4 *:text-center md:grid-cols-3">
                    {[
                        { value: "14+", label: "Years developing" },
                        { value: "4+", label: "Years in the industry" },
                        { value: "4", label: "Interns mentored" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="brand-panel brand-panel-scale space-y-4 py-12 group"
                            // className="border-gradient-brand glow-brand-heavy rounded-2xl bg-card/80 backdrop-blur-sm p-6 rounded-(--radius) space-y-4 py-12 transition duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl group"
                        >
                            <div className="text-5xl font-bold transition group-hover:scale-130 duration-300 ease-out">
                                {item.value}
                            </div>
                            <p className="transition group-hover:text-primary">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
