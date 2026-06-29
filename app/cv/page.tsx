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
    organization: 'University of Notre Dame, Notre Dame, IN',
    detail: 'Department of Computer Science and Engineering.',
    host: 'Advisors: Toby Jia-Jun Li and Yanfang Ye',
  },
  {
    period: '2021 - 2022',
    title: 'M.S. in Educational Technology and Applied Learning Sciences',
    organization: 'Carnegie Mellon University, Pittsburgh, PA',
    detail:
      'Human-Computer Interaction Institute, School of Computer Science.',
  },
  {
    period: '2015 - 2020',
    title: 'B.Eng. in Industrial Design',
    organization: 'Tongji University, Shanghai, China',
    detail:
      'College of Design and Innovation.',
  },
]

const appointments = [
  {
    period: '09/2026 -',
    title: 'Incoming Postdoctoral Fellow',
    organization: 'Johns Hopkins University, Baltimore, MD',
    detail: 'Whiting School of Engineering.',
    host: 'Advisor: Yaxing Yao',
  },
]

const experience = [
  {
    period: '05/2026 - 07/2026',
    title: 'Applied Scientist Intern',
    organization: 'Amazon, Seattle, WA',
    detail:
      'Research focus: robustness and evaluation of tool-using conversational agents under uncertainty.',
    host: 'Hosts: Vy Nguyen and Ziji Zhang',
  },
  {
    period: '07/2025 - 04/2026',
    title: 'Student Researcher',
    organization: 'Google, Sunnyvale, CA',
    detail:
      'Research focus: privacy auditing for RL fine-tuned LLMs, including behavioral canaries for detecting unauthorized use of protected retrieved contexts in post-training.',
    host: 'Hosts: Dayu Yuan and Peter Kairouz',
  },
  {
    period: '10/2024 - 12/2024',
    title: 'Research Intern',
    organization:
      'Max Planck Institute for Security and Privacy, Bochum, Germany',
    detail:
      'Research focus: literature synthesis and research agenda development on privacy risks, human oversight, and security challenges in LLM-powered GUI agents.',
    host: 'Host: Abraham Mhaidli',
  },
]

const entryGridClass = 'grid gap-3 py-3 sm:grid-cols-[132px_minmax(0,1fr)]'

const honors = [
  {
    title: 'International Programme on AI Evaluation: Capabilities & Safety',
    detail: 'Inaugural Cohort, 2026',
  },
  {
    title: 'Advanced Researcher Award',
    detail: 'University of Notre Dame, 2026',
  },
  {
    title: 'Travel Grant',
    detail: 'Symposium on Usable Privacy and Security (SOUPS), 2025',
  },
  {
    title: 'Third prize of Tech Ethics Hackathon ($1,000)',
    detail: 'Notre Dame-IBM Technology Ethics Lab, 2024',
  },
  {
    title: 'Gary Marsden Travel Award',
    detail: 'ACM SIGCHI, 2022',
  },
  {
    title: 'Best Implementation Award ($2,000)',
    detail: 'MobileHCI 2022',
  },
  {
    title: 'Merit Scholarship ($7,000)',
    detail: 'Carnegie Mellon University',
  },
]

type CVPublication = {
  id: string
  year: string
  venue: string
  title: string
  authors: string
  link?: string
  note?: string
}

const preprints: CVPublication[] = [
  {
    year: '2026',
    id: 'P.5',
    venue: 'arXiv preprint arXiv:2604.22191',
    title: 'Behavioral Canaries: Auditing Private Retrieved Context Usage in RL Fine-Tuning',
    authors: 'Chaoran Chen, Dayu Yuan, and Peter Kairouz',
    link: 'https://arxiv.org/abs/2604.22191',
  },
  {
    year: '2026',
    id: 'P.4',
    venue: 'arXiv preprint arXiv:2604.04918',
    title: 'Comparing Human Oversight Strategies for Computer-Use Agents',
    authors:
      'Chaoran Chen, Zhiping Zhang, Zeya Chen, Eryue Xu, Yinuo Yang, Ibrahim Khalilov, Simret A Gebreegziabher, Yanfang Ye, Ziang Xiao, Yaxing Yao, Tianshi Li, and Toby Jia-Jun Li',
    link: 'https://arxiv.org/abs/2604.04918',
  },
  {
    year: '2026',
    id: 'P.3',
    venue: 'arXiv preprint arXiv:2605.29442',
    title:
      'How Coding Agents Fail Their Users: A Large-Scale Analysis of Developer-Agent Misalignment in 20,574 Real-World Sessions',
    authors:
      'Ningzhi Tang, Chaoran Chen, Gelei Xu, Yiyu Shi, Yu Huang, Collin McMillan, Tao Dong, and Toby Jia-Jun Li',
    link: 'https://arxiv.org/abs/2605.29442',
  },
  {
    year: '2026',
    id: 'P.2',
    venue: 'arXiv preprint arXiv:2606.06388',
    title:
      "Humans' ALMANAC: A Human Collaboration Dataset of Action-Level Mental Model Annotations for Agent Collaboration",
    authors:
      'Jiaju Chen, Yuxuan Lu, Jiayi Su, Chaoran Chen, Songlin Xiao, Zheng Zhang, Yun Wang, Yunyao Li, Jian Zhao, Tongshuang Wu, Toby Jia-Jun Li, Dakuo Wang, and Bingsheng Yao',
    link: 'https://arxiv.org/abs/2606.06388',
  },
  {
    year: '2026',
    id: 'P.1',
    venue: 'arXiv preprint arXiv:2605.08503',
    title: 'NARRA-Gym for Evaluating Interactive Narrative Agents',
    authors:
      'Yue Huang, Yuchen Ma, Jiayi Ye, Wenjie Wang, Zipeng Ling, Xingjian Hu, Yuexing Hao, Zichen Chen, Zhangchen Xu, Yunhong He, Zhengqing Yuan, Yujun Zhou, Kehan Guo, Chaoran Chen, Toby Jia-Jun Li, Stefan Feuerriegel, and Xiangliang Zhang',
    link: 'https://arxiv.org/abs/2605.08503',
  },
]

const journalPapers: CVPublication[] = [
  {
    id: 'J.1',
    year: '2026',
    venue: 'ACM Transactions on AI Security and Privacy (TAISAP), 2026',
    title:
      'The Obvious Invisible Threat: LLM-Powered GUI Agents’ Vulnerability to Fine-Print Injections',
    authors:
      'Chaoran Chen, Zhiping Zhang, Bingcan Guo, Shang Ma, Ibrahim Khalilov, Simret Gebreegziabher, Yanfang Ye, Ziang Xiao, Yaxing Yao, Tianshi Li, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3807953',
  },
]

const conferencePapers: CVPublication[] = [
  {
    id: 'C.11',
    year: '2026',
    venue:
      'Accepted to the 41st IEEE/ACM International Conference on Automated Software Engineering (ASE 2026)',
    title:
      'Programming by Chat: A Large-Scale Behavioral Analysis of 11,579 Real-World AI-Assisted IDE Sessions',
    authors:
      'Ningzhi Tang*, Chaoran Chen*, Zian Fang, Gelei Xu, Maria Dhakal, Yiyu Shi, Collin McMillan, Yu Huang, and Toby Jia-Jun Li',
    link: 'https://arxiv.org/abs/2604.00436',
  },
  {
    id: 'C.10',
    year: '2026',
    venue:
      'Conditionally accepted to the 39th Annual ACM Symposium on User Interface Software and Technology (UIST 2026)',
    title:
      "Stayin' Aligned Over Time: Towards Longitudinal Human-LLM Alignment via Contextual Reflection and Privacy-Preserving Behavioral Data",
    authors:
      'Simret Araya Gebreegziabher, Allison E Sproul, Yinuo Yang, Chaoran Chen, Diego Gómez-Zará, and Toby Jia-Jun Li',
    link: 'https://arxiv.org/abs/2605.04029',
  },
  {
    id: 'C.9',
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
    id: 'C.8',
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
    id: 'C.7',
    year: '2026',
    venue:
      'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2026)',
    title:
      'My Favorite Streamer is an LLM: Discovering, Bonding, and Co-Creating in AI VTuber Fandom',
    authors:
      'Jiayi Ye, Chaoran Chen, Yue Huang, Yanfang Ye, Toby Jia-Jun Li, and Xiangliang Zhang',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790891',
    note: 'Best Paper Honorable Mention Award',
  },
  {
    id: 'C.6',
    year: '2026',
    venue:
      'Proceedings of the 31st ACM Conference on Intelligent User Interfaces (IUI 2026)',
    title:
      'The Behavioral Fabric of LLM-Powered GUI Agents: Human Values and Interaction Outcomes',
    authors:
      'Simret Araya Gebreegziabher, Yukun Yang, Charles Chiang, Hojun Yoo, Chaoran Chen, Hyo Jin Do, Zahra Ashktorab, Werner Geyer, Diego Gómez-Zará, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3742413.3789219',
  },
  {
    id: 'C.5',
    year: '2025',
    venue: 'Findings of the Association for Computational Linguistics (ACL 2025 Findings)',
    title:
      'Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents',
    authors:
      'Chaoran Chen, Bingsheng Yao, Ruishi Zou, Wenyue Hua, Weimin Lyu, Toby Jia-Jun Li, and Dakuo Wang',
    link: 'https://aclanthology.org/2025.findings-acl.938/',
  },
  {
    id: 'C.4',
    year: '2025',
    venue: 'The Network and Distributed System Security Symposium (NDSS 2025)',
    title:
      'Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph',
    authors:
      'Shang Ma*, Chaoran Chen*, Shao Yang, Shifu Hou, Toby Jia-Jun Li, Xusheng Xiao, Tao Xie, and Yanfang Ye',
    link: 'https://www.ndss-symposium.org/ndss-paper/careful-about-what-app-promotion-ads-recommend-detecting-and-explaining-malware-promotion-via-app-promotion-graph/',
  },
  {
    id: 'C.3',
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
    id: 'C.2',
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
    id: 'C.1',
    year: '2024',
    venue:
      'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2024)',
    title:
      'An Empathy-Based Sandbox Approach to Bridge the Privacy Gap among Attitudes, Goals, Knowledge, and Behaviors',
    authors:
      'Chaoran Chen, Weijun Li, Wenxin Song, Yanfang Ye, Yaxing Yao, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3613904.3642363',
  },
]

const workshopPapers: CVPublication[] = [
  {
    id: 'W.6',
    year: '2026',
    venue:
      'IUI 2026 Workshop on Trustworthy Computer-Using Generalist Agents for Intelligent User Interfaces',
    title:
      'Beyond Task Completion: A Process-Oriented Framework for Evaluating Preference and Value Alignments in Computer-Using Agents',
    authors:
      'Yukun Yang, Simret Araya Gebreegziabher, Hojun Yoo, Charles Chiang, Chaoran Chen, Annalisa Szymanski, Hyo Jin Do, Zahra Ashktorab, Werner Geyer, Diego Gómez-Zará, and Toby Jia-Jun Li',
  },
  {
    id: 'W.5',
    year: '2025',
    venue: 'CCS 2025 Workshop on Human-Centered AI Privacy and Security',
    title: 'Iterative Contextual Consent: AI-enabled Data Privacy Contracts',
    authors: 'Daniel D Slate, Chaoran Chen, Yaxing Yao, and Toby Jia-Jun Li',
    link: 'https://dl.acm.org/doi/10.1145/3733816.3760757',
  },
  {
    id: 'W.4',
    year: '2025',
    venue: 'CCS 2025 Workshop on Human-Centered AI Privacy and Security',
    title: 'Beyond Permissions: Investigating Mobile Personalization with Simulated Personas',
    authors:
      'Ibrahim Khalilov, Chaoran Chen, Ziang Xiao, Tianshi Li, Toby Jia-Jun Li, and Yaxing Yao',
    link: 'https://dl.acm.org/doi/10.1145/3733816.3760758',
  },
  {
    id: 'W.3',
    year: '2025',
    venue:
      'CHI 2025 Workshop on Human-Centered Evaluation and Auditing of Language Models (HEAL)',
    title:
      'Toward a Human-centered Evaluation Framework for Trustworthy LLM-powered GUI Agents',
    authors:
      'Chaoran Chen, Zhiping Zhang, Ibrahim Khalilov, Bingcan Guo, Simret A. Gebreegziabher, Yanfang Ye, Ziang Xiao, Yaxing Yao, Tianshi Li, and Toby Jia-Jun Li',
  },
  {
    id: 'W.2',
    year: '2024',
    venue:
      'CHI 2024 Workshop on Human-Centered Evaluation and Auditing of Language Models (HEAL)',
    title: 'Evaluating the LLM Agents for Simulating Humanoid Behavior',
    authors:
      'Chaoran Chen, Bingsheng Yao, Yanfang Ye, Dakuo Wang, and Toby Jia-Jun Li',
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

const lightlyReviewedPublications: CVPublication[] = [
  {
    id: 'L.2',
    year: '2026',
    venue: 'ACM Conference on Intelligent User Interfaces (IUI 2026), Demos Track',
    title: 'EvalAgent: Interactive Comparative Evaluation of Computer-Using GUI Agents',
    authors:
      'Yukun Yang, Simret Araya Gebreegziabher, Hojun Yoo, Charles Chiang, Chaoran Chen, Annalisa Szymanski, Hyo Jin Do, Zahra Ashktorab, Werner Geyer, Diego Gómez-Zará, and Toby Jia-Jun Li',
  },
  {
    id: 'L.1',
    year: '2026',
    venue:
      '2026 IEEE/ACM 48th International Conference on Software Engineering (ICSE 2026), Demo Track',
    title: 'PriviSense: A Frida-Based Framework for Multi-Sensor Spoofing on Android',
    authors:
      'Ibrahim Khalilov, Chaoran Chen, Ziang Xiao, Tianshi Li, Toby Jia-Jun Li, and Yaxing Yao',
    link: 'https://conf.researchr.org/details/icse-2026/icse-2026-demonstrations/4/PriviSense-A-Frida-Based-Framework-for-Multi-Sensor-Spoofing-on-Android',
  },
]

const teaching = [
  {
    period: 'Spring 2025',
    title: 'Teaching Assistant, CSE 40567: Computer Security',
    organization:
      'Department of Computer Science and Engineering, University of Notre Dame',
  },
  {
    period: 'Fall 2023',
    title: 'Teaching Assistant, CSE 40625: Machine Learning',
    organization:
      'Department of Computer Science and Engineering, University of Notre Dame',
  },
  {
    period: 'Fall 2022',
    title: 'Teaching Assistant, 05-738: Evidence-Based Educational Design',
    organization:
      'Human-Computer Interaction Institute, Carnegie Mellon University',
  },
  {
    period: 'Spring 2022',
    title: 'Teaching Assistant, 05-440/05-640: Interaction Techniques',
    organization:
      'Human-Computer Interaction Institute, Carnegie Mellon University',
  },
]

const academicService = [
  {
    title: 'Organizer / Program Committee Member',
    items: [
      'Human-Agent Collaboration Workshop at CHI 2026',
      'HAIPS Workshop at CCS 2025',
    ],
  },
  {
    title: 'Conference Reviewer',
    items: [
      'CHI 2023-2026',
      'CSCW 2025',
      'IUI 2025-2026',
      'UIST 2026',
      'ICLR Trustworthy AI Workshop 2026',
    ],
    featuredItems: [
      'Special recognitions for outstanding reviews at CHI 2024 LBW, CSCW 2025, IUI 2025-2026, CHI 2026, and UIST 2026',
    ],
  },
  {
    title: 'Journal Reviewer',
    items: ['ACM TOPS', 'ACM TAISAP', 'ACM AI Letters', 'IJHCS', 'PACM EICS'],
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

function HighlightedAuthors({ authors }: { authors: string }) {
  return (
    <>
      {authors.split(/(Chaoran Chen\*?)/).map((part, index) =>
        part.startsWith('Chaoran Chen') ? (
          <strong key={`${part}-${index}`} className="font-semibold text-fore-primary">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}

function PublicationItem({ publication }: { publication: CVPublication }) {
  return (
    <article className={entryGridClass}>
      <div className="min-w-0">
        <div className="font-mono text-xs text-fore-subtle">
          [{publication.id}]
        </div>
        <div className="mt-1 font-mono text-xs text-fore-subtle">
          {publication.year}
        </div>
      </div>
      <div className="min-w-0">
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
          <HighlightedAuthors authors={publication.authors} />
        </p>
        <p className="mt-1 text-sm leading-6 text-teal-700 dark:text-teal-400">
          {publication.venue}
        </p>
        {publication.note ? (
          <p className="mt-2 inline-flex max-w-full items-center rounded-md border border-amber-300/70 bg-amber-50 px-2 py-1 text-sm font-semibold leading-5 text-amber-900 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200">
            🎖️ {publication.note}
          </p>
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
            Department of Computer Science and Engineering, University of Notre
            Dame.
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
              ['profile', 'Profile'],
              ['appointments', 'Appointments'],
              ['education', 'Education'],
              ['experience', 'Experience'],
              ['honors', 'Honors'],
              ['publications', 'Publications'],
              ['teaching', 'Teaching'],
              ['service', 'Service'],
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
          <Section id="profile" title="Research Profile">
            <div className="space-y-4">
              <p className="text-base leading-8 text-fore-subtle">
                <b>Research interests:</b> Human-centered AI governance; AI
                agents and human oversight; privacy auditing; usable privacy and
                security; human-AI interaction.
              </p>
              <p className="text-base leading-8 text-fore-subtle">
                My research studies how AI systems reshape user agency, privacy,
                and oversight across AI-mediated interactions, agentic
                workflows, and model training pipelines. I design and evaluate
                sociotechnical mechanisms for contextual privacy scaffolding,
                behavioral auditing, and human oversight of LLM-powered agents.
                My recent work focuses on detecting unauthorized use of
                protected data in RL fine-tuning, supporting privacy decisions
                in LLM applications, and evaluating oversight failures in GUI
                agents.
              </p>
            </div>
          </Section>

          <Section id="appointments" title="Academic Appointments">
            <div>
              {appointments.map(item => (
                <TimelineItem key={`${item.period}-${item.title}`} {...item} />
              ))}
            </div>
          </Section>

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

          <Section id="honors" title="Selected Fellowships, Programs, Honors, and Awards">
            <ul className="space-y-2 text-sm leading-6 text-fore-subtle">
              {honors.map(item => (
                <li key={item.title} className="border-l border-back-subtle pl-4">
                  <strong className="font-semibold text-fore-primary">
                    {item.title}
                  </strong>
                  , {item.detail}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="publications" title="Publications">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fore-subtle">
                  Preprints
                </h3>
                <div className="mt-3 space-y-3">
                  {preprints.map(publication => (
                    <PublicationItem
                      key={publication.id}
                      publication={publication}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fore-subtle">
                  Journal Papers
                </h3>
                <div className="mt-3 space-y-3">
                  {journalPapers.map(publication => (
                    <PublicationItem
                      key={publication.id}
                      publication={publication}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fore-subtle">
                  Conference Papers
                  <span className="ml-2 normal-case tracking-normal">
                    (* indicate equal contribution)
                  </span>
                </h3>
                <div className="mt-3 space-y-3">
                  {conferencePapers.map(publication => (
                    <PublicationItem
                      key={publication.id}
                      publication={publication}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fore-subtle">
                  Workshop Papers
                </h3>
                <div className="mt-3 space-y-3">
                  {workshopPapers.map(publication => (
                    <PublicationItem
                      key={publication.id}
                      publication={publication}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fore-subtle">
                  Lightly-Reviewed Publications and Extended Abstracts
                </h3>
                <div className="mt-3 space-y-3">
                  {lightlyReviewedPublications.map(publication => (
                    <PublicationItem
                      key={publication.id}
                      publication={publication}
                    />
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

          <Section id="service" title="Academic Service">
            <div className="space-y-5">
              {academicService.map(group => (
                <article key={group.title}>
                  <h3 className="text-base font-semibold leading-snug text-fore-primary">
                    {group.title}
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-fore-subtle">
                    {group.items.map(item => (
                      <li key={item} className="border-l border-back-subtle pl-4">
                        {item}
                      </li>
                    ))}
                    {group.featuredItems?.map(item => (
                      <li
                        key={item}
                        className="border-l-2 border-amber-400 bg-amber-50 px-3 py-2 font-semibold text-amber-900 dark:bg-amber-400/10 dark:text-amber-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

        </main>
      </div>
    </div>
  )
}
