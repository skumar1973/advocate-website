import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser';

const matterTypes = [
  "Civil Litigation",
  "Property & Real Estate",
  "Family & Matrimonial",
  "Criminal Law",
  "Corporate & Commercial",
  "Consumer Matter",
  "Other",
]

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Part 7 currently handles the frontend only.
    // We will connect this form to a secure form endpoint later.
    setStatus('Sending...');

    try {
      await emailjs.send(
        'service_o4dqipg',
        'template_obc3c6f',
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message
        },
        'Y15nFlrr6TFzQ90te'
      );
      setStatus('Email sent successfully!');
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send email. Try again.');
    }
    setSubmitted(true);

    if (submitted) {
      return (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-muted">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <h3 className="mt-6 text-2xl font-semibold">
            Enquiry received
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Thank you for contacting our office. We will review
            your enquiry and respond through the contact details
            provided.
          </p>

          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setSubmitted(false)}
          >
            Submit another enquiry
          </Button>

        </div>
      )
    }
  };
  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-card p-6 sm:p-8"
    >
      <div>
        <h3 className="text-xl font-semibold">
          Request a Consultation
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Please provide a few basic details about your enquiry.
          Avoid submitting confidential or highly sensitive
          information through this form.
        </p>
      </div>

      <div className="mt-8 space-y-6">

        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name
          </Label>

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required
            autoComplete="name"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number
          </Label>

          <Input
            id="phone"
            name="phone"
            type="text"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone} 
            onChange={(e) => setForm({ ...form, phone: e.target.value })} 
            required
            autoComplete="phone"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email} 
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
            autoComplete="email"
          />
        </div>

        {/* Matter */}
        <div className="space-y-2">
          <Label htmlFor="matter">
            Nature of Matter
          </Label>

          <select
            id="matter"
            name="matter"
            defaultValue=""
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="" disabled>
              Select a practice area
            </option>

            {matterTypes.map((matter) => (
              <option key={matter} value={matter}>
                {matter}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="message">
            Brief Description
          </Label>

          <Textarea
            id="message"
            name="message"
            placeholder="Briefly describe the nature of your enquiry."
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            rows={5}
          />

          <p className="text-xs leading-5 text-muted-foreground">
            Please do not include confidential documents,
            passwords, financial information or other sensitive
            information at this stage.
          </p>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded border-input"
          />

          <Label
            htmlFor="consent"
            className="text-xs font-normal leading-5 text-muted-foreground"
          >
            I understand that submitting this enquiry does not
            by itself create an advocate-client relationship.
          </Label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
        >
          Submit Enquiry
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

      </div>

      <p>{status}</p>
    </form>
          <div className="mt-4 text-sm text-muted-foreground">
        Alternatively, you can reach us directly on WhatsApp
        <a
        href="https://wa.me/917532931242"
        target="_blank"
        rel="noreferrer"
        className="ml-1 font-medium text-primary underline transition-colors hover:text-primary/80">
        Click here

      </a>
      </div>
    </>
  )
}