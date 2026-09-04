import type { ReactNode } from "react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"

interface LegalPageLayoutProps {
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="border-b py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {eyebrow}
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>

              {description && (
                <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              )}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <article className="max-w-3xl">
              {children}
            </article>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}