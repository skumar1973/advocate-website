import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Scale,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

// import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/sections/SectionHeading"

export function AdvocateProfile() {
  return (
    <section
      id="about"
      className="border-b py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <SectionHeading
          eyebrow="About the Advocate"
          title="Experienced counsel with a professional, client-focused approach."
          description="Legal matters often require clarity, careful assessment and thoughtful representation. Our approach is built around understanding each client's circumstances and providing practical legal guidance."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">

          {/* Advocate Image */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border bg-muted">

              <Avatar className="h-full w-full rounded-none">
                <AvatarImage
                  src="/images/advocate.jpg"
                  alt="Advocate portrait"
                  className="h-full w-full object-cover"
                />

                <AvatarFallback className="h-full w-full rounded-none bg-muted text-4xl font-semibold">
                  AK
                </AvatarFallback>
              </Avatar>

              {/* Bottom information */}
              <div className="absolute inset-x-4 bottom-4 rounded-xl border bg-background/95 p-4 shadow-lg backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-muted">
                    <Scale className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Advocate
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Legal Counsel & Representation
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Profile Content */}
          <div>

            <div className="max-w-2xl">

              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Adv. [Full Name]
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Dedicated to clear advice, careful preparation and effective representation.
              </h3>

              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Adv. [Full Name] provides legal advice and representation
                to individuals, families and businesses across a range of
                legal matters. Each matter is approached with attention
                to the client's circumstances, applicable law and available
                legal options.
              </p>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                The practice emphasizes professional communication,
                confidentiality, integrity and a practical understanding
                of the legal process.
              </p>

            </div>

            {/* Profile Details */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <ProfileDetail
                icon={GraduationCap}
                title="Education"
                value="LL.B. / LL.M."
              />

              <ProfileDetail
                icon={Award}
                title="Professional"
                value="Bar Council Enrolled"
              />

              <ProfileDetail
                icon={BriefcaseBusiness}
                title="Practice"
                value="Litigation & Advisory"
              />

              <ProfileDetail
                icon={MapPin}
                title="Practice Location"
                value="[City], [State]"
              />

            </div>

            {/* CTA */}
            <div className="mt-10">

{/*               <Button
                size="lg"
                variant="outline"
                render={<a href="#contact" />}
              >
                View Full Profile

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
              <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                View Full Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}

interface ProfileDetailProps {
  icon: React.ElementType
  title: string
  value: string
}

function ProfileDetail({
  icon: Icon,
  title,
  value,
}: ProfileDetailProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </p>

        <p className="mt-1 text-sm font-medium">
          {value}
        </p>
      </div>

    </div>
  )
}