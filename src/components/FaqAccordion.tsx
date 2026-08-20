import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: Array<FaqItem> = [
  {
    question: 'What is Notion?',
    answer: 'A free workspace tool. You’ll need a free Notion account.',
  },
  {
    question: 'Do I need to know AI?',
    answer: 'No. The template includes ready-to-use prompts.',
  },
  {
    question: 'Is this for beginners?',
    answer: 'Yes. The onboarding guide walks you through everything.',
  },
  {
    question: 'What if I need help?',
    answer: 'Email support within 24 hours.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, 30-day money-back guarantee.',
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-[#1a1a2e]">
                {faq.question}
              </span>
              <span
                className={`shrink-0 text-2xl leading-none text-[#e94560] transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
              style={{ display: 'grid' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-[#16213e]/80">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
