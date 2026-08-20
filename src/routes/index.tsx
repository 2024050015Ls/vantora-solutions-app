import { createFileRoute } from '@tanstack/react-router'
import { FaqAccordion } from '@/components/FaqAccordion'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const GUMROAD_URL = 'https://buy.stripe.com/test_4gM4gyfAh4tYeHt0Pa4Ja00'

const PAIN_POINTS = [
  {
    icon: '🗂️',
    title: 'Spreadsheet Chaos',
    description:
      'Track ideas, scripts, and sponsorships in 5 different places.',
  },
  {
    icon: '⏰',
    title: 'Missed Deadlines',
    description: 'No central calendar for uploads and client deliverables.',
  },
  {
    icon: '🤖',
    title: 'AI Friction',
    description:
      "You know AI can help, but you don't have a system for prompts.",
  },
]

const FEATURES = [
  {
    icon: '📊',
    title: 'Content Pipeline',
    description: 'Track ideas → scripts → filming → publishing.',
  },
  {
    icon: '🤝',
    title: 'Sponsorship CRM',
    description: 'Manage brand deals, contracts, and payments.',
  },
  {
    icon: '⚡',
    title: 'AI Prompt Library',
    description: '50+ vetted prompts for titles, hooks, and scripts.',
  },
  {
    icon: '📅',
    title: 'Editorial Calendar',
    description: 'Visual timeline for all your content.',
  },
  {
    icon: '💰',
    title: 'Revenue Dashboard',
    description: 'Track income from ads, sponsorships, and products.',
  },
  {
    icon: '📎',
    title: 'Asset Manager',
    description: 'Store thumbnails, b-roll, and branding assets.',
  },
]

const INCLUDED = [
  'Full Notion template with 6 integrated databases',
  '50+ AI prompts for content creation',
  '10-page onboarding PDF guide',
  '5-minute setup video walkthrough',
  'Lifetime updates',
]

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a2e]">
      {/* Header */}
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <span className="text-xl font-extrabold tracking-tight text-[#1a1a2e]">
            VANTORA
          </span>
          <span className="hidden text-sm font-medium text-[#16213e]/70 sm:block">
            AI-Powered Systems for Creators
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1a1a2e]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Stop Juggling Spreadsheets. Run Your Creator Business on
              Autopilot.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              The AI-enhanced Notion OS that manages your content pipeline,
              tracks sponsorships, and automates your workflows—so you can
              focus on creating.
            </p>
            <a
              href={GUMROAD_URL}
              className="mt-8 inline-block rounded-lg bg-[#e94560] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#c73652]"
            >
              Get the Template →
            </a>
            <p className="mt-4 text-sm font-medium text-white/50">
              Used by 50+ creators
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#16213e] p-4 shadow-2xl">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#16213e] to-[#0f1626] text-white/40">
              <span className="text-sm font-medium">
                Notion dashboard mockup
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Your Current System Is Holding You Back
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm"
            >
              <div className="text-4xl">{point.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{point.title}</h3>
              <p className="mt-2 leading-relaxed text-[#1a1a2e]/70">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#16213e] py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            One System. AI-Powered. Everything in Notion.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Everything You Need to Get Started
        </h2>
        <ul className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
          {INCLUDED.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-black/5 bg-white px-6 py-4 shadow-sm"
            >
              <span className="mt-0.5 text-[#e94560]">✓</span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Invest in Your Creative Business
          </h2>
          <div className="mx-auto mt-12 max-w-md rounded-2xl bg-white p-10 shadow-2xl">
            <div className="text-5xl font-extrabold text-[#1a1a2e]">$39</div>
            <p className="mt-1 text-sm font-medium text-[#1a1a2e]/50">
              one-time payment
            </p>
            <p className="mt-6 font-medium text-[#1a1a2e]/70">
              Includes everything above
            </p>
            <a
              href={GUMROAD_URL}
              className="mt-8 block w-full rounded-lg bg-[#e94560] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#c73652]"
            >
              Buy Now →
            </a>
            <p className="mt-6 text-sm text-[#1a1a2e]/50">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-[#1a1a2e]/60">
            © 2026 Vantora. Built for creators.
          </p>
          <div className="flex gap-6 text-sm font-medium text-[#1a1a2e]/60">
            <a href="#" className="hover:text-[#e94560]">
              Twitter/X
            </a>
            <a href="#" className="hover:text-[#e94560]">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
