import {
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Link } from "react-router"

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Practice Areas", href: "/#practice" },
  { label: "Insights", href: "/#insights" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
]

const practiceAreas = [
  { label: "Civil", href: "/#practice" },
  { label: "Criminal", href: "/#practice" },
  { label: "Property", href: "/#practice" },
  { label: "Family", href: "/#practice" },
  { label: "Corporate", href: "/#practice" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container>

        {/* Main Footer */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">

          {/* Brand */}
          <div className="lg:col-span-1">

            <a
              href="/#"
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background">
                <Scale className="h-4 w-4" />
              </span>

              <div>
                <p className="text-sm font-semibold">
                  Advocate Name
                </p>

                <p className="text-xs text-muted-foreground">
                  Professional Legal Services
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              Professional legal assistance focused on clear
              advice, careful preparation and responsible
              representation.
            </p>

          </div>

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            links={quickLinks}
          />

          {/* Practice */}
          <FooterColumn
            title="Practice"
            links={practiceAreas}
          />

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <ContactLink
                icon={Phone}
                label="+91 XXXXX XXXXX"
                href="tel:+91XXXXXXXXXX"
              />

              <ContactLink
                icon={Mail}
                label="office@example.com"
                href="mailto:office@example.com"
              />

              <ContactLink
                icon={MapPin}
                label="New Delhi, India"
              />

            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="border-t py-6">
          <p className="text-xs leading-5 text-muted-foreground">
            <span className="font-medium text-foreground">
              Legal Disclaimer:
            </span>{" "}
            The information provided on this website is for
            general informational purposes only and should not
            be treated as legal advice. Viewing this website,
            submitting an enquiry or communicating through this
            website does not by itself create an
            advocate-client relationship. Please do not submit
            confidential or sensitive information through this
            website.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Advocate Name. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              to="/disclaimer"
              className="transition-colors hover:text-foreground"
            >
              Disclaimer
            </Link>
          </div>

        </div>

      </Container>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: {
    label: string
    href: string
  }[]
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold">
        {title}
      </h3>

      <nav className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

interface ContactLinkProps {
  icon: React.ElementType
  label: string
  href?: string
}

function ContactLink({
  icon: Icon,
  label,
  href,
}: ContactLinkProps) {
  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-background">
        <Icon className="h-3.5 w-3.5" />
      </span>

      <span className="text-sm">
        {label}
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      {content}
    </div>
  )
}