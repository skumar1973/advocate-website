import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { AdvocateProfile } from "@/components/sections/AdvocateProfile"
import { PracticeAreas } from "@/components/sections/PracticeAreas"
import { TrustProcess } from "@/components/sections/TrustProcess"
import { Insights } from "@/components/sections/Insights"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/layout/Footer"

function App() {
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
        {/* Temporary sections */}

{/*         <section
          id="approach"
          className="min-h-[50vh] border-b py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold">
              Approach
            </h2>
          </div>
        </section> */}

{/*         <section
          id="insights"
          className="min-h-[50vh] border-b py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold">
              Insights
            </h2>
          </div>
        </section> */}

{/*         <section
          id="faq"
          className="min-h-[50vh] border-b py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold">
              FAQ
            </h2>
          </div>
        </section> */}

{/*         <section
          id="contact"
          className="min-h-[50vh] py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold">
              Contact
            </h2>
          </div>
        </section> */}

      </main>
      <Footer />
    </div>
  )
}

export default App