import {
  Route,
  Routes,
} from "react-router"

import { ScrollToTop } from "@/components/routing/ScrollToTop"

import Home from "@/pages/Home"
import PrivacyPolicy from "@/pages/PrivacyPolicy"
import Disclaimer from "@/pages/Disclaimer"
import NotFound from "@/pages/NotFound"

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App