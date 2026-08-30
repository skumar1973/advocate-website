import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { insights } from "@/data/insights"

export function Insights() {
  return (
    <section
      id="insights"
      className="border-b py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Legal Insights"
          title="Practical perspectives on law and legal processes."
          description="General legal information designed to help individuals and businesses better understand common legal issues and processes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard
              key={insight.title}
              {...insight}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            render={<a href="#insights" />}
          >
            View All Insights
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

interface InsightCardProps {
  category: string
  title: string
  summary: string
  date: string
  href: string
}

function InsightCard({
  category,
  title,
  summary,
  date,
  href,
}: InsightCardProps) {
  return (
    <Card className="group h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="flex h-full flex-col p-6 sm:p-7">

        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {category}
          </span>

          <span className="text-xs text-muted-foreground">
            {date}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {summary}
        </p>

        <div className="mt-auto pt-7">
          <Button
            variant="ghost"
            className="group/link -ml-3 px-3"
            render={<a href={href} />}
          >
            Read Article

            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}