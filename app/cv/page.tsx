import type { Metadata } from 'next'
import {
  GitHub24,
  GoogleScholar24,
  MailAt24,
  Twitter24,
} from '../../components/icons'

export const metadata: Metadata = {
  title: 'CV',
}

const contactLinks = [
  {
    href: 'mailto:cchen25@nd.edu',
    label: 'Email',
    icon: MailAt24,
  },
  {
    href: 'https://scholar.google.com/citations?user=-SO-GtcAAAAJ&hl=en&oi=ao',
    label: 'Google Scholar',
    icon: GoogleScholar24,
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
]

const education = [
  {
    period: '2022 - 2026',
    title: 'Ph.D. in Computer Science and Engineering',
    organization: 'University of Notre Dame',
    detail:
      'Advised by Dr. Toby Jia-Jun Li and Dr. Fanny Yanfang Ye.',
  },
  {
    period: '2021 - 2022',
    title: 'M.S. in Educational Technology and Applied Learning Sciences',
    organization: 'Carnegie Mellon University',
    detail:
      'Human-Computer Interaction Institute, School of Computer Science.',
  },
  {
    period: '2015 - 2020',
    title: 'B.Eng. in Industrial Design',
    organization: 'Tongji University',
    detail:
      'College of Design and Innovation.',
  },
]

const experience = [
  {
    period: '05/2026 - 07/2026',
    title: 'Applied Science Intern',
    organization: 'Amazon',
    detail: 'Seattle, WA.',
    host: 'Hosts: Vy Nguyen and Dr. Ziji Zhang',
  },
  {
    period: '07/2025 - 04/2026',
    title: 'Student Researcher',
    organization: 'Google',
    detail: 'Sunnyvale, CA.',
    host: 'Hosts: Dr. Dayu Yuan and Dr. Peter Kairouz',
  },
  {
    period: '10/2024 - 12/2024',
    title: 'Research Intern',
    organization:
      'Max Planck Institute for Security and Privacy',
    detail: 'Bochum, Germany.',
    host: 'Host: Dr. Abraham Mhaidli',
  },
]

const publications = [
  {
    year: '2026',
    venue: 'ACM TAISAP',
    title:
      'The Obvious Invisible Threat: LLM-Powered GUI Agents’ Vulnerability to Fine-Print Injections',
    authors:
      'Chaoran Chen, Zhiping Zhang, Bingcan Guo, Shang Ma, Ibrahim Khalilov, Simret Gebreegziabher, Yanfang Ye, Ziang Xiao, Yaxing Yao, Tianshi Li, Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/abs/10.1145/3807953',
  },
  {
    year: '2026',
    venue: 'CHI',
    title:
      'Dark Patterns Meet GUI Agents: LLM Agent Susceptibility to Manipulative Interfaces and the Role of Human Oversight',
    authors:
      'Jingyu Tang*, Chaoran Chen*, Jiawen Li, Zhiping Zhang, Bingcan Guo, Ibrahim Khalilov, Simret Araya Gebreegziabher, Bingsheng Yao, Dakuo Wang, Yanfang Ye, Tianshi Li, Ziang Xiao, Yaxing Yao, Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3791568',
  },
  {
    year: '2026',
    venue: 'CHI',
    title:
      'Through the Lens of Human-Human Collaboration: A Configurable Research Platform for Exploring Human-Agent Collaboration',
    authors:
      'Bingsheng Yao, Jiaju Chen, Chaoran Chen, April Wang, Toby Jia-jun Li, Dakuo Wang',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790879',
  },
  {
    year: '2026',
    venue: 'CHI 2026 HM',
    title:
      'My Favorite Streamer is an LLM: Discovering, Bonding, and Co-Creating in AI VTuber Fandom',
    authors:
      'Jiayi Ye, Chaoran Chen, Yue Huang, Yanfang Ye, Yaxing Yao, Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790891',
  },
  {
    year: '2026',
    venue: 'IUI',
    title:
      'The Behavioral Fabric of LLM-Powered GUI Agents: Human Values and Interaction Outcomes',
    authors:
      'Simret Araya Gebreegziabher, Yukun Yang, Charles Chiang, Hojun Yoo, Chaoran Chen, Hyo Jin Do, Zahra Ashktorab, Werner Geyer, Diego Gómez-Zará, Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3742413.3789219',
  },
  {
    year: '2025',
    venue: 'UIST',
    title:
      'Why am I seeing this: Democratizing End User Auditing for Online Content Recommendations',
    authors:
      'Chaoran Chen, Leyang Li, Luke Cao, Yanfang Ye, Tianshi Li, Yaxing Yao, Toby Jia-jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3746059.3747798',
  },
  {
    year: '2025',
    venue: 'ACL Findings',
    title:
      'Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents',
    authors:
      'Chaoran Chen, Bingsheng Yao, Ruishi Zou, Wenyue Hua, Weimin Lyu, Toby Jia-Jun Li, Dakuo Wang',
    link: 'https://aclanthology.org/2025.findings-acl.938/',
  },
  {
    year: '2025',
    venue: 'IUI',
    title:
      'CLEAR: Towards Contextual LLM-Empowered Privacy Policy Analysis and Risk Generation for Large Language Model Applications',
    authors:
      'Chaoran Chen, Daodao Zhou, Yanfang Ye, Toby Jia-jun Li, Yaxing Yao',
    link: 'https://dl.acm.org/doi/10.1145/3708359.3712156',
  },
  {
    year: '2025',
    venue: 'NDSS',
    title:
      'Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph',
    authors:
      'Shang Ma*, Chaoran Chen*, Shao Yang, Shifu Hou, Toby Jia-Jun Li, Xusheng Xiao, Tao Xie, Yanfang Ye',
    link: 'https://www.ndss-symposium.org/ndss-paper/careful-about-what-app-promotion-ads-recommend-detecting-and-explaining-malware-promotion-via-app-promotion-graph/',
  },
  {
    year: '2024',
    venue: 'CHI',
    title:
      'An Empathy-Based Sandbox Approach to Bridge the Privacy Gap among Attitudes, Goals, Knowledge, and Behaviors',
    authors:
      'Chaoran Chen, Weijun Li, Wenxin Song, Yaxing Yao, Yanfang Ye, Toby Jia-jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3613904.3642363',
  },
  {
    year: '2024',
    venue: 'ECML PKDD',
    title: 'Symbolic Prompt Tuning Completes the App Promotion Graph',
    authors:
      'Zhongyu Ouyang, Chunhui Zhang, Shifu Hou, Shang Ma, Chaoran Chen, Toby Li, Xusheng Xiao, Chuxu Zhang, Yanfang Ye',
    link: 'https://dl.acm.org/doi/10.1007/978-3-031-70381-2_12',
  },
  {
    year: '2022',
    venue: 'UIST',
    title:
      'ARDW: An Augmented Reality Workbench for Printed Circuit Board Debugging',
    authors:
      'Ishan Chatterjee, Tadeusz Pforte, Aspen Tng, Farshid Salemi Parizi, Chaoran Chen, Shwetak Patel',
    link: 'https://dl.acm.org/doi/10.1145/3526113.3545684',
  },
  {
    year: '2021',
    venue: 'CHI',
    title:
      'Patterns for representing knowledge graphs to communicate situational knowledge of service robots',
    authors:
      'Shengchen Zhang, Zixuan Wang, Chaoran Chen, Yi Dai, Lyumanshan Ye, Xiaohua Sun',
    link: 'https://dl.acm.org/doi/10.1145/3411764.3445767',
  },
  {
    year: '2019',
    venue: 'AAAI',
    title:
      'AI-Sketcher: A Deep Generative Model for Producing High-Quality Sketches',
    authors: 'Nan Cao, Xin Yan, Yang Shi, Chaoran Chen',
    link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4103',
  },
]

const teaching = [
  {
    period: 'Spring 2025',
    title: 'Teaching Assistant, CSE 40567: Computer Security',
    organization: 'University of Notre Dame',
  },
  {
    period: 'Fall 2023',
    title: 'Teaching Assistant, CSE 40625: Machine Learning',
    organization: 'University of Notre Dame',
  },
  {
    period: 'Fall 2022',
    title: 'Teaching Assistant, 05-738: Evidence-Based Educational Design',
    organization: 'Carnegie Mellon University',
  },
  {
    period: 'Spring 2022',
    title: 'Teaching Assistant, 05-440/05-640: Interaction Techniques',
    organization: 'Carnegie Mellon University',
  },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function TimelineItem({
  period,
  title,
  organization,
  detail,
  host,
}: {
  period: string
  title: string
  organization: string
  detail?: string
  host?: string
}) {
  return (
    <article className="grid gap-2 py-3 sm:grid-cols-[132px_1fr]">
      <div className="font-mono text-xs text-fore-subtle">{period}</div>
      <div>
        <h3 className="text-base font-semibold leading-snug text-fore-primary">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-400">
          {organization}
        </p>
        {detail ? (
          <p className="mt-2 text-sm leading-6 text-fore-subtle">{detail}</p>
        ) : null}
        {host ? (
          <p className="mt-1 text-sm leading-6 text-fore-subtle">{host}</p>
        ) : null}
      </div>
    </article>
  )
}

export default async function CV() {
  return (
    <div className="pointer-events-auto pb-16">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
        <aside className="lg:sticky lg:top-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
            Curriculum Vitae
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal">
            Chaoran Chen
          </h1>
          <p className="mt-3 text-sm leading-6 text-fore-subtle">
            Ph.D. in Computer Science and Engineering from the University of
            Notre Dame.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {contactLinks.map(({ href, label, icon: Icon }) => (
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

          <div className="mt-6 space-y-2 text-sm">
            <a
              href="/static/cv.pdf"
              className="block font-semibold text-teal-700 hover:underline dark:text-teal-400"
            >
              Download PDF
            </a>
            <a
              href="/"
              className="block font-semibold text-fore-subtle hover:text-teal-700 hover:underline dark:hover:text-teal-400"
            >
              Back to home
            </a>
          </div>

          <nav className="mt-8 hidden space-y-2 border-t border-back-subtle pt-5 text-sm lg:block">
            {[
              ['education', 'Education'],
              ['experience', 'Experience'],
              ['teaching', 'Teaching'],
              ['publications', 'Publications'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={`#${href}`}
                className="block text-fore-subtle hover:text-teal-700 dark:hover:text-teal-400"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="space-y-12">
          <section className="py-2">
            <p className="max-w-3xl text-base leading-8 text-fore-subtle">
              My research lies at the intersection of human-computer
              interaction, usable privacy and security, and large language
              models. I study how interface and interaction design can help end
              users understand AI systems, audit algorithmic recommendations,
              and navigate privacy and security risks introduced by generative
              AI.
            </p>
          </section>

          <Section id="education" title="Education">
            <div>
              {education.map(item => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <div>
              {experience.map(item => (
                <TimelineItem key={`${item.period}-${item.title}`} {...item} />
              ))}
            </div>
          </Section>

          <Section id="teaching" title="Teaching Experience">
            <div>
              {teaching.map(item => (
                <TimelineItem key={`${item.period}-${item.title}`} {...item} />
              ))}
            </div>
          </Section>

          <Section id="publications" title="Publications">
            <div className="space-y-3">
              {publications.map(publication => (
                <article
                  key={publication.title}
                  className="grid gap-3 py-2 sm:grid-cols-[72px_1fr]"
                >
                  <div>
                    <div className="font-mono text-xs text-fore-subtle">
                      {publication.year}
                    </div>
                    <div className="mt-1 inline-flex rounded-md border border-back-subtle px-2 py-1 text-xs font-semibold text-teal-700 dark:text-teal-400">
                      {publication.venue}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-fore-primary">
                      {publication.link === '#' ? (
                        publication.title
                      ) : (
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-700 hover:underline dark:hover:text-teal-400"
                        >
                          {publication.title}
                        </a>
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-fore-subtle">
                      {publication.authors}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Section>

        </main>
      </div>
    </div>
  )
}
