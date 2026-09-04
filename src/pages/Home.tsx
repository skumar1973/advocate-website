import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

import { Hero } from "@/components/sections/Hero"
import { AdvocateProfile } from "@/components/sections/AdvocateProfile"
import { PracticeAreas } from "@/components/sections/PracticeAreas"
import { TrustProcess } from "@/components/sections/TrustProcess"
import { Insights } from "@/components/sections/Insights"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <AdvocateProfile />
        <PracticeAreas />
        <TrustProcess />
        <Insights />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}