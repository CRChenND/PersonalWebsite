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
      'Advised by Dr. Toby Jia-Jun Li and Dr. Yanfang Ye.',
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
    title: 'Applied Scientist Intern',
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

const entryGridClass = 'grid gap-3 py-3 sm:grid-cols-[132px_minmax(0,1fr)]'

type CVPublication = {
  id: string
  year: string
  venue: string
  title: string
  authors: string
  link?: string
}

const journalAndConferencePapers: CVPublication[] = [
  {
    id: 'C.14',
    year: '2026',
    venue: 'ACM Transactions on AI Security and Privacy',
    title:
      'The Obvious Invisible Threat: LLM-Powered GUI Agents’ Vulnerability to Fine-Print Injections',
    authors:
      'Chaoran Chen, Zhiping Zhang, Bingcan Guo, Shang Ma, Ibrahim Khalilov, Simret Gebreegziabher, Yanfang Ye, Ziang Xiao, Yaxing Yao, Tianshi Li, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3807953',
  },
  {
    id: 'C.13',
    year: '2026',
    venue:
      'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2026)',
    title:
      'Dark Patterns Meet GUI Agents: LLM Agent Susceptibility to Manipulative Interfaces and the Role of Human Oversight',
    authors:
      'Jingyu Tang*, Chaoran Chen*, Jiawen Li, Zhiping Zhang, Bingcan Guo, Ibrahim Khalilov, Simret Araya Gebreegziabher, Bingsheng Yao, Dakuo Wang, Yanfang Ye, Tianshi Li, Ziang Xiao, Yaxing Yao, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3791568',
  },
  {
    id: 'C.12',
    year: '2026',
    venue:
      'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2026)',
    title:
      'Through the Lens of Human-Human Collaboration: A Configurable Research Platform for Exploring Human-Agent Collaboration',
    authors:
      'Bingsheng Yao, Jiaju Chen, Chaoran Chen, April Wang, Toby Jia-jun Li, and Dakuo Wang',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790879',
  },
  {
    id: 'C.11',
    year: '2026',
    venue:
      'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2026)',
    title:
      'My Favorite Streamer is an LLM: Discovering, Bonding, and Co-Creating in AI VTuber Fandom',
    authors:
      'Jiayi Ye, Chaoran Chen, Yue Huang, Yanfang Ye, Toby Jia-Jun Li, and Xiangliang Zhang',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790891',
  },
  {
    id: 'C.10',
    year: '2026',
    venue:
      'Proceedings of the 31th ACM Conference on Intelligent User Interfaces (IUI 2026)',
    title:
      'The Behavioral Fabric of LLM-Powered GUI Agents: Human Values and Interaction Outcomes',
    authors:
      'Simret Araya Gebreegziabher, Yukun Yang, Charles Chiang, Hojun Yoo, Chaoran Chen, Hyo Jin Do, Zahra Ashktorab, Werner Geyer, Diego Gómez-Zará, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3742413.3789219',
  },
  {
    id: 'C.9',
    year: '2025',
    venue:
      'Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST 2025)',
    title:
      'Why Am I Seeing This: Democratizing End User Auditing for Online Content Recommendations',
    authors:
      'Chaoran Chen, Leyang Li, Luke Cao, Yanfang Ye, Tianshi Li, Yaxing Yao, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3746059.3747798',
  },
  {
    id: 'C.8',
    year: '2025',
    venue: 'Findings of the Association for Computational Linguistics (ACL 2025 Findings)',
    title:
      'Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents',
    authors:
      'Chaoran Chen, Bingsheng Yao, Ruishi Zou, Wenyue Hua, Weimin Lyu, Toby Jia-Jun Li, and Dakuo Wang',
    link: 'https://aclanthology.org/2025.findings-acl.938/',
  },
  {
    id: 'C.7',
    year: '2025',
    venue:
      'Proceedings of the 30th ACM Conference on Intelligent User Interfaces (IUI 2025)',
    title:
      'CLEAR: Towards Contextual LLM-Empowered Privacy Policy Analysis and Risk Generation for Large Language Model Applications',
    authors:
      'Chaoran Chen, Daodao Zhou, Yanfang Ye, Toby Jia-jun Li, and Yaxing Yao',
    link: 'https://dl.acm.org/doi/10.1145/3708359.3712156',
  },
  {
    id: 'C.6',
    year: '2025',
    venue: 'The Network and Distributed System Security Symposium (NDSS 2025)',
    title:
      'Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph',
    authors:
      'Shang Ma*, Chaoran Chen*, Shao Yang, Shifu Hou, Toby Jia-Jun Li, Xusheng Xiao, Tao Xie, and Yanfang Ye',
    link: 'https://www.ndss-symposium.org/ndss-paper/careful-about-what-app-promotion-ads-recommend-detecting-and-explaining-malware-promotion-via-app-promotion-graph/',
  },
  {
    id: 'C.5',
    year: '2024',
    venue: 'Machine Learning and Knowledge Discovery in Databases (ECML PKDD 2024)',
    title: 'Symbolic Prompt Tuning Completes the App Promotion Graph',
    authors:
      'Zhongyu Ouyang, Chunhui Zhang, Shifu Hou, Shang Ma, Chaoran Chen, Toby Li, Xusheng Xiao, Chuxu Zhang, and Yanfang Ye',
    link: 'https://dl.acm.org/doi/10.1007/978-3-031-70381-2_12',
  },
  {
    id: 'C.4',
    year: '2024',
    venue:
      'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2024)',
    title:
      'An Empathy-Based Sandbox Approach to Bridge the Privacy Gap among Attitudes, Goals, Knowledge, and Behaviors',
    authors:
      'Chaoran Chen, Weijun Li, Wenxin Song, Yanfang Ye, Yaxing Yao, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3613904.3642363',
  },
  {
    id: 'C.3',
    year: '2022',
    venue:
      'Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology (UIST 2022)',
    title: 'ARDW: An augmented reality workbench for printed circuit board debugging',
    authors:
      'Ishan Chatterjee, Tadeusz Pforte, Aspen Tng, Farshid Salemi Parizi, Chaoran Chen and Shwetak Patel',
    link: 'https://dl.acm.org/doi/10.1145/3526113.3545684',
  },
  {
    id: 'C.2',
    year: '2021',
    venue:
      'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2021)',
    title:
      'Patterns for Representing Knowledge Graphs to Communicate Situational Knowledge of Service Robots',
    authors:
      'Shengchen Zhang, Zixuan Wang, Chaoran Chen, Yi Dai, Lyumanshan Ye and Xiaohua Sun',
    link: 'https://dl.acm.org/doi/10.1145/3411764.3445767',
  },
  {
    id: 'C.1',
    year: '2019',
    venue: 'Proceedings of the AAAI Conference on Artificial Intelligence (AAAI 2019)',
    title:
      'AI-Sketcher: A Deep Generative Model for Producing High-Quality Sketches',
    authors: 'Nan Cao, Xin Yan, Yang Shi, and Chaoran Chen',
    link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4103',
  },
]

const workshopAndDemoPapers: CVPublication[] = [
  {
    id: 'W.5',
    year: '2026',
    venue:
      'Proceedings of the 48th International Conference on Software Engineering (ICSE 2026), Demonstrations Track',
    title: 'PriviSense: A Frida-Based Framework for Multi-Sensor Spoofing on Android',
    authors:
      'Ibrahim Khalilov, Chaoran Chen, Ziang Xiao, Tianshi Li, Toby Jia-Jun Li, and Yaxing Yao',
    link: 'https://conf.researchr.org/details/icse-2026/icse-2026-demonstrations/4/PriviSense-A-Frida-Based-Framework-for-Multi-Sensor-Spoofing-on-Android',
  },
  {
    id: 'W.4',
    year: '2026',
    venue:
      'Proceedings of the Extended Abstracts of the Conference on Human Factors in Computing Systems (CHI 2026)',
    title:
      'From Human-Human Collaboration to Human-Agent Collaboration: A Vision, Design Philosophy, and an Empirical Framework for Achieving Successful Partnerships Between Humans and LLM Agents',
    authors:
      'Bingsheng Yao, Chaoran Chen, April Yi Wang, Tongshuang Wu, Toby Jia-Jun Li, and Dakuo Wang',
    link: 'https://dl.acm.org/doi/10.1145/3772363.3778744',
  },
  {
    id: 'W.3',
    year: '2025',
    venue: 'CCS 2025 Workshop on Human-Centered AI Privacy and Security',
    title: 'Iterative Contextual Consent: AI-enabled Data Privacy Contracts',
    authors: 'Daniel D Slate, Chaoran Chen, Yaxing Yao, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3733816.3760757',
  },
  {
    id: 'W.2',
    year: '2025',
    venue: 'CCS 2025 Workshop on Human-Centered AI Privacy and Security',
    title: 'Beyond Permissions: Investigating Mobile Personalization with Simulated Personas',
    authors:
      'Ibrahim Khalilov, Chaoran Chen, Ziang Xiao, Tianshi Li, Toby Jia-Jun Li, Yaxing Yao',
    link: 'https://dl.acm.org/doi/10.1145/3733816.3760758',
  },
  {
    id: 'W.1',
    year: '2023',
    venue: 'NeurIPS 2023 Workshop on New Frontiers in Graph Learning (GLFrontiers)',
    title: 'Prompt Learning Unlocked for App Promotion in the Wild',
    authors:
      'Zhongyu Ouyang, Shifu Hou, Shang Ma, Chaoran Chen, Chunhui Zhang, Toby Jia-Jun Li, Xusheng Xiao, Chuxu Zhang, and Yanfang Ye',
    link: 'https://neurips.cc/virtual/2023/82385',
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
    <article className={entryGridClass}>
      <div className="font-mono text-xs text-fore-subtle">{period}</div>
      <div className="min-w-0">
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
      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
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
              ['publications', 'Publications'],
              ['teaching', 'Teaching'],
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

        <main className="min-w-0 space-y-12">
          <section className="py-2">
            <p className="w-full text-base leading-8 text-fore-subtle">
              My research lies at the intersection of <b>human-computer interaction, usable privacy and security, and LLM agents</b>. I design systems that restore user agency in AI-mediated privacy and security by helping people recognize risks, understand system behavior, and act on their preferences. Across contextual scaffolding, experiential auditing, and human-centered AI agency, my work develops mechanisms that make AI systems more transparent, contestable, and aligned with human expectations.
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

          <Section id="publications" title="Publications">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fore-subtle">
                  Journal and Conference Papers
                  <span className="ml-2 normal-case tracking-normal">
                    (* indicate equal contribution)
                  </span>
                </h3>
                <div className="mt-3 space-y-3">
                  {journalAndConferencePapers.map(publication => (
                    <article
                      key={publication.id}
                      className={entryGridClass}
                    >
                      <div className="min-w-0">
                        <div className="font-mono text-xs text-fore-subtle">
                          [{publication.id}]
                        </div>
                        <div className="mt-1 font-mono text-xs text-fore-subtle">
                          {publication.year}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold leading-snug text-fore-primary">
                          {publication.link ? (
                            <a
                              href={publication.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-teal-700 hover:underline dark:hover:text-teal-400"
                            >
                              {publication.title}
                            </a>
                          ) : (
                            publication.title
                          )}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-fore-subtle">
                          {publication.authors}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-teal-700 dark:text-teal-400">
                          {publication.venue}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fore-subtle">
                  Workshop and Demo Papers
                </h3>
                <div className="mt-3 space-y-3">
                  {workshopAndDemoPapers.map(publication => (
                    <article
                      key={publication.id}
                      className={entryGridClass}
                    >
                      <div className="min-w-0">
                        <div className="font-mono text-xs text-fore-subtle">
                          [{publication.id}]
                        </div>
                        <div className="mt-1 font-mono text-xs text-fore-subtle">
                          {publication.year}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold leading-snug text-fore-primary">
                          {publication.link ? (
                            <a
                              href={publication.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-teal-700 hover:underline dark:hover:text-teal-400"
                            >
                              {publication.title}
                            </a>
                          ) : (
                            publication.title
                          )}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-fore-subtle">
                          {publication.authors}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-teal-700 dark:text-teal-400">
                          {publication.venue}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section id="teaching" title="Teaching Experience">
            <div>
              {teaching.map(item => (
                <TimelineItem key={`${item.period}-${item.title}`} {...item} />
              ))}
            </div>
          </Section>

        </main>
      </div>
    </div>
  )
}
