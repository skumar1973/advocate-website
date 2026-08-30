import { ArrowRight, CalendarCheck, Scale } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">

        {/* Left Content */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-foreground" />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Experienced Legal Counsel
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Clarity in Law.
            <span className="block text-muted-foreground">
              Confidence in Action.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Professional legal representation and advisory services
            for individuals, families and businesses, with a focus on
            clear advice, integrity and effective representation.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

{/*             <Button
              size="lg"
              className="group"
              asChild
            >
              <a href="#contact">
                Schedule a Consultation

                <CalendarCheck className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button> radix UI*/}
            <Button
                nativeButton={false}
                size="lg"
                className="group"
                render={<a href="#contact" />}
                >
                Schedule a Consultation
                <CalendarCheck className="ml-2 h-4 w-4" />
            </Button>
{/*             <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#practice">
                Explore Practice Areas

                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button> radix UI*/}
            <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                render={<a href="#practice" />}
                >
                Explore Practice Areas
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-3">

            <div>
              <p className="text-2xl font-semibold">
                15+
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Years of Experience
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">
                6+
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Practice Areas
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">
                India
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Legal Practice
              </p>
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border bg-muted">

            {/* Temporary placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border bg-background">
                <Scale className="h-9 w-9" />
              </div>

              <p className="text-sm font-medium">
                Advocate Portrait
              </p>

              <p className="mt-2 max-w-xs text-xs leading-5 text-muted-foreground">
                {/* Replace this area with a professional advocate photograph. */}
                <img
                    src="/images/advocate.jpg"
                    alt="Adv. [Full Name]"
                    className="h-full w-full object-cover"
                  />
              </p>

            </div>

          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-5 left-4 right-4 rounded-xl border bg-background/95 p-5 shadow-lg backdrop-blur sm:left-auto sm:w-72">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
                <Scale className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Professional Representation
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Focused legal advice and representation tailored
                  to your circumstances.
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}