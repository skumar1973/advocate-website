import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileSearch,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react"

// import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/sections/SectionHeading"

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    description:
      "Client information and discussions are handled with appropriate professional confidentiality.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "Legal issues and available options are explained in a clear and understandable manner.",
  },
  {
    icon: ClipboardCheck,
    title: "Thorough Preparation",
    description:
      "Each matter is approached with careful attention to documents, facts and applicable law.",
  },
  {
    icon: Eye,
    title: "Client Focus",
    description:
      "Advice is tailored to the circumstances, objectives and legal requirements of each matter.",
  },
]

const processSteps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Understand",
    description:
      "We begin by understanding your situation, concerns, documents and objectives.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Assess",
    description:
      "The relevant facts, documents and legal considerations are reviewed to identify available options.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Advise",
    description:
      "You receive clear information about the applicable legal position and possible courses of action.",
  },
  {
    number: "04",
    icon: ArrowRight,
    title: "Represent",
    description:
      "Where representation is required, the matter is handled with appropriate preparation and professional care.",
  },
]

export function TrustProcess() {
  return (
    <section
      id="approach"
      className="border-b py-20 sm:py-24 lg:py-32"
    >
      <Container>

        {/* Trust */}
        <SectionHeading
          eyebrow="Why Work With Us"
          title="Professional legal service built around trust and clarity."
          description="Legal matters can be complex and consequential. Our approach emphasizes careful preparation, clear communication and a practical understanding of each client's circumstances."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <TrustCard
              key={point.title}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        {/* Process */}
        <div className="mt-24 border-t pt-20 lg:mt-32 lg:pt-28">

          <SectionHeading
            eyebrow="Our Process"
            title="A clear path from consultation to representation."
            description="Every matter is different, but our general process is designed to make the next steps easier to understand."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
{/*             <Button
              size="lg"
              render={<a href="#contact" />}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                 Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

        </div>

      </Container>
    </section>
  )
}

interface TrustCardProps {
  icon: React.ElementType
  title: string
  description: string
}

function TrustCard({
  icon: Icon,
  title,
  description,
}: TrustCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-sm">

      <div className="flex h-11 w-11 items-center justify-center rounded-lg border bg-muted">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-base font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>

    </div>
  )
}

interface ProcessStepProps {
  number: string
  icon: React.ElementType
  title: string
  description: string
  isLast: boolean
}

function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  isLast,
}: ProcessStepProps) {
  return (
    <div className="relative">

      {/* Connector */}
      {!isLast && (
        <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-3rem)] bg-border lg:block" />
      )}

      {/* Number / Icon */}
      <div className="relative z-10 flex items-center gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background">
          <Icon className="h-5 w-5" />
        </div>

        <span className="text-xs font-medium tracking-widest text-muted-foreground">
          {number}
        </span>

      </div>

      <div className="mt-5">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

      </div>

    </div>
  )
}