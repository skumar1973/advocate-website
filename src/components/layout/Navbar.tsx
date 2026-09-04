import { Scale, Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "@/components/theme/ThemeProvider"

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="Advocate home"
        >
          <Scale className="h-6 w-6" />

          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.15em]">
              ADVOCATE
            </span>

            <span className="mt-1 text-[10px] tracking-[0.2em] text-muted-foreground">
              LEGAL COUNSEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          <a
            href="/#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>

          <a
            href="/#practice"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Practice Areas
          </a>

          <a
            href="/#approach"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Approach
          </a>

          <a
            href="/#insights"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Insights
          </a>

          <a
            href="/#faq"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </a>

          <a
            href="/#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">

{/*           <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </Button> */}
          
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button>
            Consultation
          </Button>

        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-1 md:hidden">

{/*           <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </Button> */}
          
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Sheet>
{/*             <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger> radix ui*/}
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[360px]"
            >
              <div className="mt-8 flex flex-col gap-1">

                <a
                  href="/#about"
                  className="rounded-md px-4 py-3 text-sm hover:bg-muted"
                >
                  About
                </a>

                <a
                  href="/#practice"
                  className="rounded-md px-4 py-3 text-sm hover:bg-muted"
                >
                  Practice Areas
                </a>

                <a
                  href="/#approach"
                  className="rounded-md px-4 py-3 text-sm hover:bg-muted"
                >
                  Approach
                </a>

                <a
                  href="/#insights"
                  className="rounded-md px-4 py-3 text-sm hover:bg-muted"
                >
                  Insights
                </a>

                <a
                  href="/#faq"
                  className="rounded-md px-4 py-3 text-sm hover:bg-muted"
                >
                  FAQ
                </a>

                <a
                  href="/#contact"
                  className="rounded-md px-4 py-3 text-sm hover:bg-muted"
                >
                  Contact
                </a>

                <div className="mt-6 border-t pt-6">
                  <Button className="w-full">
                    Schedule Consultation
                  </Button>
                </div>

              </div>
            </SheetContent>
          </Sheet>

        </div>

      </div>
    </header>
  )
}