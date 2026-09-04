import { LegalPageLayout } from "@/components/layout/LegalPageLayout"

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      description="This Privacy Policy explains how information submitted through this website may be collected and used."
    >
      <div className="space-y-10 text-sm leading-7 text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Information We Collect
          </h2>

          <p className="mt-3">
            When you contact the office through this website, you may
            voluntarily provide information such as your name, telephone
            number, email address, and a brief description of your enquiry.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. How Information Is Used
          </h2>

          <p className="mt-3">
            Information submitted through the website may be used to
            respond to enquiries, arrange consultations, communicate with
            prospective clients, and administer the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Sensitive Information
          </h2>

          <p className="mt-3">
            Please do not submit confidential documents, passwords,
            financial credentials, or other highly sensitive information
            through the website enquiry form unless specifically requested
            through an appropriate communication channel.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Third-Party Services
          </h2>

          <p className="mt-3">
            The website may use third-party services for hosting,
            analytics, communication, or form processing. Those services
            may process limited information in accordance with their own
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Data Security
          </h2>

          <p className="mt-3">
            Reasonable measures may be used to protect information submitted
            through the website. However, no internet-based transmission
            or storage method can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. Changes to This Policy
          </h2>

          <p className="mt-3">
            This Privacy Policy may be updated periodically. Any revised
            version will be published on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Contact
          </h2>

          <p className="mt-3">
            For questions regarding this Privacy Policy, please contact
            the office using the contact information provided on the website.
          </p>
        </section>

      </div>
    </LegalPageLayout>
  )
}
