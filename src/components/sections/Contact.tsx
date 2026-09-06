import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { ConsultationForm } from "@/components/contact/ConsultationForm"

export function Contact() {
  return (
    <section
      id="contact"
      className="border-b py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <SectionHeading
          eyebrow="Contact"
          title="Let's discuss your legal matter."
          description="Contact the office to enquire about a consultation. Please provide only the basic information necessary for an initial enquiry."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Contact Information */}
          <div>

            <div className="rounded-2xl border bg-muted/30 p-6 sm:p-8">

              <h3 className="text-xl font-semibold">
                Contact Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                You can contact the office directly or use the
                consultation form.
              </p>

              <div className="mt-8 space-y-6">

                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+91 75329 31242"
                  href="tel:+917532931242"
                />

                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="ranjeetranjan02@gmail.com"
                  href="mailto:ranjeetranjan02@gmail.com"
                />

                <ContactItem
                  icon={MapPin}
                  label="Office"
                  value="New Delhi, India"
                />

                <ContactItem
                  icon={Clock3}
                  label="Office Hours"
                  value="Monday – Saturday · 10:00 AM – 6:00 PM"
                />

              </div>

            </div>

            {/* Additional note */}
            <div className="mt-5 rounded-xl border p-5">
              <p className="text-sm font-medium">
                Important
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Contacting the office or submitting an enquiry
                does not constitute legal advice and does not
                by itself establish an advocate-client relationship.
              </p>
            </div>

          </div>

          {/* Form */}
          <ConsultationForm />

        </div>

      </Container>
    </section>
  )
}

interface ContactItemProps {
  icon: React.ElementType
  label: string
  value: string
  href?: string
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: ContactItemProps) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-background">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-medium">
          {value}
        </p>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-3 rounded-lg transition-opacity hover:opacity-70"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-start gap-3">
      {content}
    </div>
  )
}