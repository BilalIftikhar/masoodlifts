import { HeaderNav, type NavMenu } from "@/components/header-nav"
import { equipmentTypes } from "@/lib/equipment"
import { services } from "@/lib/services"
import { hubsByDistance } from "@/lib/locations"
import { ports } from "@/lib/ports"

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
    items: hubsByDistance.map((location) => ({ label: location.shortTitle, sub: location.governorate, href: location.href })),
  },
  {
    key: "ports",
    label: "Ports",
    href: "/ports",
    allLabel: "All Omani Ports",
    items: ports.map((port) => ({ label: port.shortName, sub: port.governorate, href: port.href })),
  },
]

export default function Header() {
  return <HeaderNav menus={menus} />
}
