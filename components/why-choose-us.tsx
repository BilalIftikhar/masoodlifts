import { FileBadge, HardHat, Layers, MapPin, CalendarRange, PhoneCall } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  {
    icon: FileBadge,
    title: "Registered Omani Company",
    description: "ABDUL MASOOD TRADING LLC, C.R. No. 1441246 — a registered company you can contract and invoice with.",
  },
  {
    icon: MapPin,
    title: "Based in Sohar",
    description:
      "Close to Sohar Port, the Freezone, and Sohar Industrial Estate, with road access to Muscat, Al Buraimi, and the interior.",
  },
  {
    icon: Layers,
    title: "Earthworks to Lifting",
    description: "Seven equipment types from one supplier, so digging, loading, haulage, and lifting run on one schedule.",
  },
  {
    icon: HardHat,
    title: "Operators Included",
    description: "Machines come with experienced operators and drivers, so your team can focus on the work.",
  },
  {
    icon: CalendarRange,
    title: "Flexible Hire Terms",
    description: "Daily, weekly, and monthly rental, extendable on site as the project changes.",
  },
  {
    icon: PhoneCall,
    title: "Direct Line to the Office",
    description: "Call or WhatsApp one number to check availability, book, and change a hire.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Why Abdul Masood Trading</p>
          <h2 className="text-foreground">One Supplier for Construction &amp; Civil Works Machinery</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} delay={(idx % 3) * 90} className="h-full">
                <div className="h-full rounded-lg border border-border border-t-4 border-t-accent bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 w-fit rounded-md bg-primary p-3">
                    <Icon size={24} className="text-safety" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{reason.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
