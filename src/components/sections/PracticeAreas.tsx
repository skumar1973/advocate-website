import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/sections/SectionHeading"

import { practiceAreas } from "@/data/practiceAreas"

export function PracticeAreas() {
  return (
    <section
      id="practice"
      className="border-b py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <SectionHeading
          eyebrow="Practice Areas"
          title="Focused legal assistance for important matters."
          description="Every legal matter is different. Our practice is focused on understanding the circumstances, assessing the available legal options and providing clear, professional representation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.title}
              {...area}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
{/*           <Button
            variant="outline"
            size="lg"
            render={<a href="#contact" />}
          >
            Discuss Your Legal Matter
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button> */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Discuss Your Legal Matter
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </Container>
    </section>
  )
}

interface PracticeAreaCardProps {
  title: string
  description: string
  icon: React.ElementType
  href: string
}

function PracticeAreaCard({
  title,
  description,
  icon: Icon,
  href,
}: PracticeAreaCardProps) {
  return (
    <Card className="group h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

      <CardContent className="flex h-full flex-col p-6 sm:p-7">

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border bg-muted">
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="mt-6">

          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>

        </div>

        {/* Link */}
        <div className="mt-auto pt-7">

{/*           <Button
            variant="ghost"
            className="group/link -ml-3 px-3"
            render={<a href={href} />}
          >
            Learn more

            <ArrowUpRight
              className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Button> */}
          <a
            href={href}
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Learn more
            <ArrowUpRight
              className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        </div>

      </CardContent>

    </Card>
  )
}