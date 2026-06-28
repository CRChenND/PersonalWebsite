import Image from 'next/image'
import profilePhoto from '../public/images/profile_photo.png'
import {
  GitHub24,
  GoogleScholar24,
  MailAt24,
  Twitter24,
} from '../components/icons'
import NewsSection from 'components/NewsSection'
import PublicationList from '../components/publicationList'

const publicationsData = [
  {
    title:
      'The Obvious Invisible Threat: LLM-Powered GUI Agents’ Vulnerability to Fine-Print Injections',
    authors: [
      'Chaoran Chen',
      'Zhiping Zhang',
      'Bingcan Guo',
      'Shang Ma',
      'Ibrahim Khalilov',
      'Simret Gebreegziabher',
      'Yanfang Ye',
      'Ziang Xiao',
      'Yaxing Yao',
      'Tianshi Li',
      'Toby Jia-Jun Li',
    ],
    venue: 'ACM Transactions on AI Security and Privacy',
    image: 'taisap.png',
    paperLink: 'https://dl.acm.org/doi/abs/10.1145/3807953',
    officialLink: 'https://dl.acm.org/doi/abs/10.1145/3807953',
    pdfLink: 'https://arxiv.org/pdf/2504.11281',
  },
  {
    title:
      'Dark Patterns Meet GUI Agents: LLM Agent Susceptibility to Manipulative Interfaces and the Role of Human Oversight',
    authors: [
      'Jingyu Tang*',
      'Chaoran Chen*',
      'Jiawen Li',
      'Zhiping Zhang',
      'Bingcan Guo',
      'Ibrahim Khalilov',
      'Simret Araya Gebreegziabher',
      'Bingsheng Yao',
      'Dakuo Wang',
      'Yanfang Ye',
      'Tianshi Li',
      'Ziang Xiao',
      'Yaxing Yao',
      'Toby Jia-Jun Li',
    ],
    venue:
      'In the Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    image: 'dark_pattern.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3772318.3791568',
    officialLink: 'https://dl.acm.org/doi/10.1145/3772318.3791568',
    pdfLink: 'https://arxiv.org/pdf/2509.10723',
  },
  {
    title:
      'Through the Lens of Human-Human Collaboration: A Configurable Research Platform for Exploring Human-Agent Collaboration',
    authors: [
      'Bingsheng Yao',
      'Jiaju Chen',
      'Chaoran Chen',
      'April Wang',
      'Toby Jia-jun Li',
      'Dakuo Wang',
    ],
    venue:
      'In the Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    image: 'agent_collaboration.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3772318.3790879',
    officialLink: 'https://dl.acm.org/doi/10.1145/3772318.3790879',
    pdfLink: 'https://arxiv.org/pdf/2509.18008',
  },
  {
    title:
      'My Favorite Streamer is an LLM: Discovering, Bonding, and Co-Creating in AI VTuber Fandom',
    authors: [
      'Jiayi Ye',
      'Chaoran Chen',
      'Yue Huang',
      'Yanfang Ye',
      'Toby Jia-Jun Li',
      'Xiangliang Zhang',
    ],
    venue:
      'In the Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    award: '🏅 Best Paper Honorable Mention Award',
    image: 'aivtuber.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3772318.3790891',
    officialLink: 'https://dl.acm.org/doi/10.1145/3772318.3790891',
    pdfLink: 'https://arxiv.org/pdf/2509.10427',
  },
  {
    title:
      'The Behavioral Fabric of LLM-Powered GUI Agents: Human Values and Interaction Outcomes',
    authors: [
      'Simret Araya Gebreegziabher',
      'Yukun Yang',
      'Charles Chiang',
      'Hojun Yoo',
      'Chaoran Chen',
      'Hyo Jin Do',
      'Zahra Ashktorab',
      'Werner Geyer',
      'Diego Gómez-Zará',
      'Toby Jia-Jun Li',
    ],
    venue:
      'In the Proceedings of the 31th ACM Conference on Intelligent User Interfaces (IUI 2026)',
    image: 'behavioral_fabric.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3742413.3789219',
    officialLink: 'https://dl.acm.org/doi/10.1145/3742413.3789219',
    pdfLink: 'https://arxiv.org/pdf/2601.16356',
  },
  {
    title:
      'Why am I seeing this: Democratizing End User Auditing for Online Content Recommendations',
    authors: [
      'Chaoran Chen',
      'Leyang Li',
      'Luke Cao',
      'Yanfang Ye',
      'Tianshi Li',
      'Yaxing Yao',
      'Toby Jia-jun Li',
    ],
    venue:
      'In the Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST 2025)',
    image: 'adAudit.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3746059.3747798',
    officialLink: 'https://dl.acm.org/doi/10.1145/3746059.3747798',
    pdfLink: 'https://arxiv.org/pdf/2410.04917',
  },
  {
    title:
      'Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents',
    authors: [
      'Chaoran Chen',
      'Bingsheng Yao',
      'Ruishi Zou',
      'Wenyue Hua',
      'Weimin Lyu',
      'Toby Jia-Jun Li',
      'Dakuo Wang',
    ],
    venue:
      'Findings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL Findings 2025)',
    image: 'acl.png',
    paperLink: 'https://aclanthology.org/2025.findings-acl.938/',
    officialLink: 'https://aclanthology.org/2025.findings-acl.938/',
    pdfLink: 'https://aclanthology.org/2025.findings-acl.938.pdf',
  },
  {
    title:
      'CLEAR: Towards Contextual LLM-Empowered Privacy Policy Analysis and Risk Generation for Large Language Model Applications',
    authors: [
      'Chaoran Chen',
      'Daodao Zhou',
      'Yanfang Ye',
      'Toby Jia-jun Li',
      'Yaxing Yao',
    ],
    venue:
      'Proceedings of the 30th ACM Conference on Intelligent User Interfaces (IUI 2025)',
    image: 'clear.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3708359.3712156',
    officialLink: 'https://dl.acm.org/doi/10.1145/3708359.3712156',
    pdfLink: 'https://arxiv.org/pdf/2410.13387',
  },
  {
    title:
      'Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph',
    authors: [
      'Shang Ma*',
      'Chaoran Chen*',
      'Shao Yang',
      'Shifu Hou',
      'Toby Jia-Jun Li',
      'Xusheng Xiao',
      'Tao Xie',
      'Yanfang Ye',
    ],
    venue:
      'Network and Distributed System Security Symposium ((NDSS 2025)',
    image: 'ndss25.png',
    paperLink:
      'https://www.ndss-symposium.org/ndss-paper/careful-about-what-app-promotion-ads-recommend-detecting-and-explaining-malware-promotion-via-app-promotion-graph/',
    officialLink:
      'https://www.ndss-symposium.org/ndss-paper/careful-about-what-app-promotion-ads-recommend-detecting-and-explaining-malware-promotion-via-app-promotion-graph/',
    pdfLink:
      'https://www.ndss-symposium.org/wp-content/uploads/2025-51-paper.pdf',
  },
  {
    title:
      'An Empathy-Based Sandbox Approach to Bridge the Privacy Gap among Attitudes, Goals, Knowledge, and Behaviors',
    authors: [
      'Chaoran Chen',
      'Weijun Li',
      'Wenxin Song',
      'Yaxing Yao',
      'Yanfang Ye',
      'Toby Jia-jun Li',
    ],
    venue:
      'In the Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI 2024)',
    image: 'empathy_privacy.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3613904.3642363',
    officialLink: 'https://dl.acm.org/doi/10.1145/3613904.3642363',
    pdfLink: 'https://arxiv.org/pdf/2309.14510',
  },
]

const researchOverview = [
  {
    eyebrow: 'Contextual scaffolds',
    title: 'Supporting preference-aligned decisions in LLM workflows',
    body: 'I design interaction scaffolds that surface privacy- and security-relevant signals at the right moment, in the right context, and in forms that match users’ immediate goals and mental models.',
  },
  {
    eyebrow: 'Experiential auditing',
    title: 'Turning privacy hypotheses into observable evidence',
    body: 'I build empathy-based and persona-based sandboxes that let people test how personal information changes AI-powered systems, transforming opaque inferences into concrete, inspectable outcomes.',
  },
  {
    eyebrow: 'Agency feedback loops',
    title: 'Connecting governance, oversight, and model behavior',
    body: 'My future work develops feedback loops across institutional governance, cognitively calibrated oversight interfaces, and model alignment so users can contest and correct unsafe AI behavior.',
  },
]

const links = [
  {
    href: 'mailto:cchen25@nd.edu',
    label: 'Email',
    icon: MailAt24,
  },
  {
    href: 'https://github.com/CRChenND',
    label: 'GitHub',
    icon: GitHub24,
  },
  {
    href: 'https://twitter.com/CharlieCRChen',
    label: 'Twitter',
    icon: Twitter24,
  },
  {
    href: 'https://scholar.google.com/citations?user=-SO-GtcAAAAJ&hl=en&oi=ao',
    label: 'Scholar',
    icon: GoogleScholar24,
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
        {children}
      </span>
    </div>
  )
}

export default async function Page() {
  return (
    <div className="pointer-events-auto pb-16">
      <section className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
        <aside className="lg:sticky lg:top-8">
          <div className="flex gap-5 lg:block">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-back-subtle bg-back-secondary lg:h-36 lg:w-36">
              <Image
                src={profilePhoto}
                alt="Chaoran Chen"
                fill
                sizes="(max-width: 1024px) 112px, 144px"
                className="object-cover"
                quality={100}
                priority
                placeholder="blur"
              />
            </div>

            <div className="min-w-0 lg:mt-5">
              <h1 className="text-2xl font-semibold leading-tight tracking-normal">
                Chaoran Chen
              </h1>
              <p className="mt-2 text-sm leading-5 text-fore-primary">
                Ph.D. in Computer Science and Engineering
              </p>
              <div className="mt-3 space-y-1 text-sm leading-5 text-fore-subtle">
                <a
                  href="https://cse.nd.edu/"
                  className="block font-medium text-teal-700 hover:underline dark:text-teal-400"
                >
                  Department of Computer Science and Engineering
                </a>
                <a
                  href="https://engineering.nd.edu/"
                  className="block font-medium text-teal-700 hover:underline dark:text-teal-400"
                >
                  College of Engineering
                </a>
                <a
                  href="https://www.nd.edu/"
                  className="block font-medium text-teal-700 hover:underline dark:text-teal-400"
                >
                  University of Notre Dame
                </a>
              </div>

              <ul className="mt-4 space-y-1 border-t border-back-subtle pt-3 text-sm leading-5 text-fore-subtle">
                <li>Notre Dame, IN 46556 USA</li>
                <li>
                  <a
                    href="mailto:cchen25@nd.edu"
                    className="font-medium text-teal-700 hover:underline dark:text-teal-400"
                  >
                    cchen25@nd.edu
                  </a>
                </li>
                <li>
                  <a
                    href="/cv"
                    className="font-medium text-teal-700 hover:underline dark:text-teal-400"
                  >
                    Curriculum Vitae
                  </a>
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {links
                  .filter(({ label }) => label !== 'Email')
                  .map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-back-subtle bg-back-primary text-fore-subtle transition hover:-translate-y-0.5 hover:text-teal-700 focus:text-teal-700 dark:hover:text-teal-400 dark:focus:text-teal-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-9">
          <section>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
              Human-centered AI agency
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              I help people see, understand, and correct misalignments in AI
              privacy and security.
            </h2>
            <p className="mt-4 text-base leading-7 text-fore-subtle">
              I received my Ph.D. in Computer Science and Engineering from the{' '}
              <a
                href="https://www.nd.edu/"
                className="font-medium text-teal-700 hover:underline dark:text-teal-400"
              >
                University of Notre Dame
              </a>{' '}
              in 2026, advised by{' '}
              <a
                href="https://toby.li/"
                className="font-medium text-teal-700 hover:underline dark:text-teal-400"
              >
                Dr. Toby Jia-Jun Li
              </a>{' '}
              and{' '}
              <a
                href="http://yes-lab.org/"
                className="font-medium text-teal-700 hover:underline dark:text-teal-400"
              >
                Dr. Yanfang Ye
              </a>
              . My research lies at the intersection of human-computer interaction, 
              usable privacy and security, and LLM agents. I design systems that 
              make AI behavior more transparent, contestable, and aligned with 
              human expectations, from contextual privacy scaffolds to experiential 
              auditing tools and oversight mechanisms for AI agents.
            </p>
          </section>

          <section>
            <SectionLabel>Research Overview</SectionLabel>
            <div className="space-y-4">
              {researchOverview.map((area, index) => (
                <article
                  key={area.title}
                  className="grid gap-3 pb-2 sm:grid-cols-[56px_1fr]"
                >
                  <div className="font-mono text-sm text-teal-700 dark:text-teal-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fore-subtle">
                      {area.eyebrow}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug text-fore-primary">
                      {area.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-fore-subtle">
                      {area.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>News</SectionLabel>
            <NewsSection />
          </section>

          <section id="publications">
            <SectionLabel>Publications</SectionLabel>
            <p className="mb-3 text-xs text-fore-subtle">
              * indicates equal contribution.
            </p>
            <PublicationList publications={publicationsData} />
          </section>
        </div>
      </section>
    </div>
  )
}
