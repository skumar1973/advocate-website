import { Scale, ShieldCheck, BriefcaseBusiness } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/sections/SectionHeading"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Temporary header */}
      <header className="border-b">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6" />

            <span className="font-semibold tracking-tight">
              ADVOCATE
            </span>
          </div>

          <Button>
            Schedule Consultation
          </Button>
        </Container>
      </header>

      {/* Design system preview */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Professional Legal Services"
            title="Clarity in Law. Confidence in Action."
            description="A modern digital presence designed for professional advocates and law practices."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Scale className="mb-4 h-8 w-8" />

                <h3 className="text-xl font-semibold">
                  Legal Expertise
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Professional guidance tailored to the circumstances of each legal matter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <ShieldCheck className="mb-4 h-8 w-8" />

                <h3 className="text-xl font-semibold">
                  Integrity
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A transparent, ethical and client-focused approach to legal representation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <BriefcaseBusiness className="mb-4 h-8 w-8" />

                <h3 className="text-xl font-semibold">
                  Professional Approach
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Structured legal advice, clear communication and professional representation.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default App