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
