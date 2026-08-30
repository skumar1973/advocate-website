import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { faqs } from "@/data/faqs"

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Heading */}
          <div>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Common questions about consultations and legal assistance."
              description="These answers provide general information. Specific legal advice will depend on the facts and circumstances of each matter."
            />
          </div>

          {/* FAQ */}
          <div>
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index + 1}`}
                >
                  <AccordionTrigger>
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

      </Container>
    </section>
  )
}
