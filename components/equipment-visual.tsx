import Image from "next/image"
import { Construction, Forklift, Shovel, Tractor, Truck, Container, type LucideIcon } from "lucide-react"
import type { EquipmentIcon, EquipmentType } from "@/lib/equipment"

const icons: Record<EquipmentIcon, LucideIcon> = {
  crane: Construction,
  truck: Truck,
  boom: Container,
  forklift: Forklift,
  excavator: Shovel,
  tractor: Tractor,
  loader: Shovel,
}

type EquipmentVisualProps = {
  equipment: EquipmentType
  sizes: string
  priority?: boolean
  className?: string
}

/**
 * Photo of the machine when we have an honest one, otherwise a branded panel
 * with the category icon — better than a stock photo of the wrong machine.
 * The parent must be `relative` with a fixed height.
 */
export function EquipmentVisual({ equipment, sizes, priority = false, className = "" }: EquipmentVisualProps) {
  if (equipment.image) {
    return (
      <Image
        src={equipment.image}
        alt={equipment.imageAlt ?? equipment.label}
        fill
        priority={priority}
        className={`object-cover ${className}`}
        sizes={sizes}
      />
    )
  }

  const Icon = icons[equipment.icon]
  return (
    <div className="bg-blueprint absolute inset-0 flex flex-col items-center justify-center gap-3 bg-primary text-white">
      <Icon size={64} strokeWidth={1.4} className="text-safety" aria-hidden="true" />
      <span className="text-lg font-extrabold uppercase tracking-widest">{equipment.label}</span>
      <span lang="ar" dir="rtl" className="font-arabic text-sm text-white/70">
        {equipment.labelAr}
      </span>
      <span className="hazard-stripe absolute inset-x-0 bottom-0 h-3" aria-hidden="true" />
    </div>
  )
}
