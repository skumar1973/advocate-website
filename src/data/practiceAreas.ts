import type { LucideIcon } from "lucide-react"
import {
  BriefcaseBusiness,
  FileText,
  Gavel,
  Home,
  Scale,
  Users,
} from "lucide-react"

export interface PracticeArea {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Civil Litigation",
    description:
      "Legal representation in civil disputes, suits, proceedings and related matters before appropriate courts and authorities.",
    icon: Scale,
    href: "#contact",
  },
  {
    title: "Property & Real Estate",
    description:
      "Legal assistance relating to property disputes, documentation, transactions, possession and related real-estate matters.",
    icon: Home,
    href: "#contact",
  },
  {
    title: "Family & Matrimonial",
    description:
      "Legal advice and representation concerning matrimonial disputes, divorce, maintenance, custody and related family matters.",
    icon: Users,
    href: "#contact",
  },
  {
    title: "Criminal Law",
    description:
      "Representation and legal assistance in criminal proceedings, bail matters, complaints, defence and related proceedings.",
    icon: Gavel,
    href: "#contact",
  },
  {
    title: "Corporate & Commercial",
    description:
      "Legal support for businesses involving contracts, agreements, commercial disputes and general legal advisory matters.",
    icon: BriefcaseBusiness,
    href: "#contact",
  },
  {
    title: "Consumer Matters",
    description:
      "Assistance with consumer disputes, claims, complaints and proceedings before appropriate consumer forums.",
    icon: FileText,
    href: "#contact",
  },
]