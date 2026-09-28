import { InquiryForm } from "@/components/inquiry-form"
import { equipmentTypes } from "@/lib/equipment"
import { locations } from "@/lib/locations"

const equipmentOptions = equipmentTypes.map((equipment) => equipment.label)
const locationOptions = locations.map((location) => location.cityName)

/**
 * Server wrapper for the quote form: passes the option lists in as props so
 * the equipment and location data stay out of the client bundle.
 */
export function ContactForm() {
  return <InquiryForm equipmentOptions={equipmentOptions} locationOptions={locationOptions} />
}

/**
 * The short quote form shown in every page hero, for customers who would
 * rather email than WhatsApp. Pass the page's machine and city to pre-select
 * them; values that don't match an option are ignored.
 */
export function HeroQuoteForm({ equipment, location }: { equipment?: string; location?: string }) {
  return (
    <div className="animate-fade-in overflow-hidden rounded-lg bg-card text-foreground shadow-2xl ring-1 ring-white/10">
      <div className="hazard-stripe h-2" aria-hidden="true" />
      <div className="p-5 md:p-6">
        <InquiryForm
          variant="compact"
          equipmentOptions={equipmentOptions}
          locationOptions={locationOptions}
          defaultEquipment={equipment && equipmentOptions.includes(equipment) ? equipment : undefined}
          defaultLocation={location && locationOptions.includes(location) ? location : undefined}
        />
      </div>
    </div>
  )
}
