export interface Insight {
  category: string
  title: string
  summary: string
  date: string
  href: string
}

export const insights: Insight[] = [
  {
    category: "Property Law",
    title: "What to consider before entering into a property transaction",
    summary:
      "A general overview of important documents, title considerations and legal checks that may be relevant before a property transaction.",
    date: "August 2026",
    href: "#contact",
  },
  {
    category: "Civil Law",
    title: "Understanding civil disputes and the legal process",
    summary:
      "An introductory overview of how civil disputes may progress and why documents, facts and timely legal advice can be important.",
    date: "August 2026",
    href: "#contact",
  },
  {
    category: "Family Law",
    title: "Key considerations in matrimonial matters",
    summary:
      "A general overview of issues that can arise in matrimonial matters, including documentation, legal options and court proceedings.",
    date: "August 2026",
    href: "#contact",
  },
]