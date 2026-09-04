import { Link } from "react-router"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <div className="mx-auto max-w-xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Page not found
          </h1>

          <p className="mt-4 text-muted-foreground">
            The page you requested could not be found.
          </p>

          <Link
            to="/"
            className={cn(
              buttonVariants(),
              "mt-8 inline-flex"
            )}
          >
            Return Home
          </Link>

        </div>
      </Container>
    </main>
  )
}