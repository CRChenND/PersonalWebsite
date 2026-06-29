'use client'
import { useState } from 'react'

const newsItems = [
  {
    date: '05/2026',
    content: <>Started as an Applied Scientist Intern at Amazon.</>,
  },
  {
    date: '05/2026',
    content: <>Attended the <a href="https://ai-evaluation.org/2026-cohort" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">International Programme on AI Evaluation: Capabilities &amp; Safety</a> in Valencia.</>,
  },
  {
    date: '04/2026',
    content: <>Attended CHI 2026 in Barcelona and presented <a href="https://dl.acm.org/doi/10.1145/3772318.3791568" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Dark Patterns Meet GUI Agents</a>.</>,
  },
  {
    date: '09/2025',
    content: <>Attended UIST 2025 in Busan and presented <a href="https://dl.acm.org/doi/10.1145/3746059.3747798" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Why Am I Seeing This</a>.</>
  },
  {
    date: '08/2025',
    content: <>Attended SOUPS 2025 in Seattle and presented <a href="https://dl.acm.org/doi/abs/10.1145/3807953" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">The Obvious Invisible Threat</a>.</>
  },
  {
    date: '07/2025',
    content: <>Our privacy and AI literacy education work was featured by Notre Dame Engineering for its <a href="https://engineering.nd.edu/news/notre-dame-and-johns-hopkins-team-up-to-bring-digital-privacy-and-ai-literacy-education-to-the-smithsonian/" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Smithsonian collaboration</a>.</>
  },
  {
    date: '07/2025',
    content: <>Started as a Student Researcher at Google.</>
  },
  {
    date: '07/2025',
    content: <>Our paper <a href="https://aclanthology.org/2025.findings-acl.938/" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Towards a Design Guideline for RPA Evaluation</a> was accepted to ACL 2025 Findings.</>
  },
  {
    date: '04/2025',
    content: <>Attended CHI 2025 in Yokohama and presented our position paper at the HEAL workshop.</>
  },
  {
    date: '03/2025',
    content: <>Our paper <a href="https://dl.acm.org/doi/10.1145/3708359.3712156" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">CLEAR</a> was accepted to IUI 2025.</>
  },
  {
    date: '10/2024',
    content: <>Worked as a research intern at the Max Planck Institute for Security and Privacy in Bochum, Germany, under the mentorship of <a href='https://mhaidli.github.io/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Abraham Mhaidli</a>.</>
  },
  {
    date: '08/2024',
    content: <>Our paper <a href="https://www.ndss-symposium.org/ndss-paper/careful-about-what-app-promotion-ads-recommend-detecting-and-explaining-malware-promotion-via-app-promotion-graph/" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Careful About What App Promotion Ads Recommend</a> was accepted to NDSS 2025.</>
  },
  {
    date: '05/2024',
    content: <>Attended CHI 2024 in Honolulu and presented <a href="https://dl.acm.org/doi/10.1145/3613904.3642363" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">An Empathy-Based Sandbox Approach</a>.</>
  },
  {
    date: '04/2024',
    content: <>Won the third prize of <a href='https://ethics.nd.edu/news-and-events/news/notre-dame-ibm-technology-ethics-lab-hosts-first-ever-hackathon/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Tech Ethics Hackathon</a></>
  },
  {
    date: '05/2023',
    content: <>Participated in the Post-CHI Summer School on Usable Privacy.</>
  },
  {
    date: '04/2023',
    content: <>Attended CHI 2023 in Hamburg and presented our work at the PIE workshop.</>
  },
  {
    date: '10/2022',
    content: <>Attended MobileHCI 2022 in Vancouver as a SV and presented our project <a className='text-teal-600' href='https://youtu.be/IR4Ylpa14VQ'>Taptag</a>.</>
  },
];

export default function NewsSection() {
  const [showAllNews, setShowAllNews] = useState(false)
  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, 5)

  return (
    <div>
      <ul className="space-y-1">
        {displayedNews.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-[64px_minmax(0,1fr)] gap-2 rounded-md px-2 py-2 transition-colors hover:bg-back-secondary/60 sm:grid-cols-[76px_1fr] sm:px-3"
          >
            <time className="font-mono text-[11px] leading-4 text-teal-700 dark:text-teal-400">
              {item.date}
            </time>
            <div className="min-w-0 text-xs leading-4 text-fore-subtle">
              {item.content}
            </div>
          </li>
        ))}
      </ul>

      {newsItems.length > 5 ? (
        <button
          type="button"
          onClick={() => setShowAllNews(!showAllNews)}
          className="mt-3 text-xs font-semibold text-teal-700 hover:underline focus:outline-none dark:text-teal-400"
        >
          {showAllNews ? 'Show less' : 'Show more'}
        </button>
      ) : null}
    </div>
  )
}
