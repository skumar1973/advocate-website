import { LegalPageLayout } from "@/components/layout/LegalPageLayout"

export default function Disclaimer() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Disclaimer"
      description="Important information regarding the use of this website and the legal information provided on it."
    >
      <div className="space-y-10 text-sm leading-7 text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            General Information
          </h2>

          <p className="mt-3">
            The information available on this website is provided for
            general informational purposes only and is not intended to
            constitute legal advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            No Advocate-Client Relationship
          </h2>

          <p className="mt-3">
            Viewing this website, submitting an enquiry, sending an email,
            or otherwise communicating through this website does not by
            itself establish an advocate-client relationship.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Legal Advice
          </h2>

          <p className="mt-3">
            Legal issues depend on their individual facts and circumstances.
            You should obtain appropriate professional advice before acting
            or refraining from acting on the basis of information available
            on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Accuracy of Information
          </h2>

          <p className="mt-3">
            Reasonable efforts may be made to keep website information
            current, but no representation is made that all information
            will always be complete, accurate, or up to date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            External Links
          </h2>

          <p className="mt-3">
            This website may contain links to third-party websites.
            Responsibility is not accepted for the content, availability,
            or privacy practices of external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            No Guarantee of Outcome
          </h2>

          <p className="mt-3">
            Nothing on this website should be interpreted as a guarantee
            or assurance regarding the outcome of any legal matter.
          </p>
        </section>

      </div>
    </LegalPageLayout>
  )
}