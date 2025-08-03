'use client'
import React, { useState } from 'react'

const newsItems = [
  {
    date: '08/2025',
    content: <>- ✈️ Attending UIST 2025 in Busan, Korea, and will present our paper "Why am I seeing this: Democratizing End User Auditing for Online Content Recommendations"</>
  },
  {
    date: '08/2025',
    content: <>- ✈️ Attending SOUPS 2025 in Seattle and will present our poster "The Obvious Invisible Threat: LLM-Powered GUI Agents' Vulnerability to Fine-Print Injections"</>
  },
  {
    date: '07/2025',
    content: <>- 📃 Our paper “Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents” has been accepted in ACL 2025 Findings.</>
  },
  {
    date: '04/2025',
    content: <>- ✈️ Attending CHI 2025 in Yokohama and will present our position paper at HEAL workshop</>
  },
  {
    date: '03/2025',
    content: <>- 📃 Our paper “CLEAR: Towards Contextual LLM-Empowered Privacy Policy Analysis and Risk Generation for Large Language Model Applications” has been accepted in IUI 2025.</>
  },
  {
    date: '10/2024',
    content: <>- 🇩🇪 Worked as a research intern at the Max Planck Institute for Security and Privacy in Bochum, Germany, under the mentorship of <a href='https://mhaidli.github.io/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Abraham Mhaidli</a>.</>
  },
  {
    date: '08/2024',
    content: <>- 📃 Our paper “Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph” has been accepted in NDSS 2025.</>
  },
  {
    date: '05/2024',
    content: <>- ✈️ Attended CHI 2024 in Hawaii and presented our paper "An Empathy-Based Sandbox Approach to Bridge Attitudes, Goals, Knowledge, and Behaviors in the Privacy Paradox".</>
  },
  {
    date: '04/2024',
    content: <>- 🏅 Won the third prize of <a href='https://ethics.nd.edu/news-and-events/news/notre-dame-ibm-technology-ethics-lab-hosts-first-ever-hackathon/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Tech Ethics Hackathon</a></>
  },
  {
    date: '05/2023',
    content: <>- ✈️ Participated in the Post-CHI Summer School on Usable Privacy.</>
  },
  {
    date: '04/2023',
    content: <>- ✈️ Attended CHI 2023 in Hamburg and presented our work at the PIE workshop.</>
  },
  {
    date: '10/2022',
    content: <>- 🏅 Attended MobileHCI 2022 in Vancouver as a SV and presented our project <a className='text-teal-600' href='https://youtu.be/IR4Ylpa14VQ'>Taptag</a></>
  },
  {
    date: '08/2022',
    content: <>- 🎓 Graduated from METALS program at Carnegie Mellon University.</>
  },
];

export default function NewsSection() {
  const [showAllNews, setShowAllNews] = useState(false);
  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, 5);

  return (
    <div>
      <div className="flex items-center mt-24 mb-8 space-x-3">
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent text-teal-600">
          NEWS
        </span>
      </div>

      <ul className='flex-col space-y-4'>
        {displayedNews.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong>
            <br />
            {item.content}
          </li>
        ))}
      </ul>

      {newsItems.length > 5 && (
        <button
          onClick={() => setShowAllNews(!showAllNews)}
          className="mt-4 text-teal-600 hover:underline focus:outline-none"
        >
          {showAllNews ? 'Show less ▲' : 'Show more ▼'}
        </button>
      )}
    </div>
  )
}
