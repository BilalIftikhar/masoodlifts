import { HeaderNav, type NavMenu } from "@/components/header-nav"
import { equipmentTypes } from "@/lib/equipment"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"

const menus: NavMenu[] = [
  {
    key: "equipment",
    label: "Equipment",
    href: "/equipment",
    allLabel: "Full Fleet",
    items: equipmentTypes.map((equipment) => ({ label: equipment.label, sub: equipment.tag, href: equipment.href })),
  },
  {
    key: "services",
    label: "Services",
    href: "/services",
    allLabel: "All Services by City",
    items: services.map((service) => ({ label: service.shortTitle, sub: service.tag, href: service.href })),
  },
  {
    key: "locations",
    label: "Locations",
    href: "/locations",
    allLabel: "All Oman Coverage",
    items: locations.map((location) => ({ label: location.shortTitle, sub: location.governorate, href: location.href })),
  },
]

export default function Header() {
  return <HeaderNav menus={menus} />
}
