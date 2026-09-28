import { Reveal } from "@/components/reveal"

const steps = [
  {
    title: "Tell Us the Job",
    description: "Call, WhatsApp, or send the form with the machine, site location, dates, and the work to be done.",
  },
  {
    title: "Get the Right Machine",
    description: "We confirm the equipment that suits the load, depth, or volume, and send you availability and price.",
  },
  {
    title: "Delivered With Operator",
    description: "The machine arrives at your site with its operator or driver, ready to start work.",
  },
  {
    title: "Extend or Off-Hire",
    description: "Extend on site if the job runs long, or call to off-hire when you're done. No lock-in.",
  },
]

/** Four-step rental process — answers "how does this work?" before the FAQ. */
export default function ProcessSection() {
  return (
    <section className="w-full bg-industrial py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-safety">How It Works</p>
          <h2 className="text-white">Renting Equipment in Four Steps</h2>
        </Reveal>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 90} className="h-full">
              <li className="h-full rounded-lg border border-white/10 bg-white/5 p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-safety text-lg font-extrabold text-safety-foreground">
                  {idx + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-white/70">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
