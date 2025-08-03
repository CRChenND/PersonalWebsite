import Image from 'next/image'
import React from 'react'
import { Blob } from '../components/atoms'
import { Blog24, Project24 } from '../components/icons'
import profile_photo from '../public/images/profile_photo.png'
import { GitHub24, MailAt24, Twitter24, GoogleScholar24 } from '../components/icons'
import PublicationList from '../components/publicationList';
import NewsSection from 'components/NewsSection'

const publicationsData = [
  {
    title: 'Why am I seeing this: Democratizing End User Auditing for Online Content Recommendations',
    authors: ['Chaoran Chen', 'Leyang Li', 'Luke Cao', 'Yanfang Ye', 'Tianshi Li', 'Yaxing Yao', 'Toby Jia-jun Li'],
    venue: 'In the Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST 2025)',
    image: 'adAudit.png',
    paperLink: 'https://arxiv.org/pdf/2410.04917',
  },
  {
    title: 'Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents',
    authors: ['Chaoran Chen', 'Bingsheng Yao', 'Ruishi Zou', 'Wenyue Hua', 'Weimin Lyu', 'Toby Jia-Jun Li', 'Dakuo Wang'],
    venue: 'Findings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL Findings 2025)',
    image: 'acl.png',
    paperLink: 'https://arxiv.org/pdf/2410.04917',
  },
  {
    title: 'CLEAR: Towards Contextual LLM-Empowered Privacy Policy Analysis and Risk Generation for Large Language Model Applications',
    authors: ['Chaoran Chen', 'Daodao Zhou', 'Yanfang Ye', 'Toby Jia-jun Li', 'Yaxing Yao'],
    venue: 'Proceedings of the 30th ACM Conference on Intelligent User Interfaces (IUI 2025)',
    image: 'clear.png',
    paperLink: 'https://arxiv.org/pdf/2410.13387',
  },
  {
    title: 'Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph',
    authors: ['Shang M', 'Chaoran Chen', 'Shao Yang', 'Shifu Hou', 'Toby Jia-Jun Li', 'Xusheng Xiao', 'Tao Xie', 'Yanfang Ye'],
    venue: 'Network and Distributed System Security Symposium ((NDSS 2025)',
    image: 'ndss25.png',
    paperLink: 'https://arxiv.org/pdf/2410.07588',
  },
  {
    title: 'An Empathy-Based Sandbox Approach to Bridge Attitudes, Goals, Knowledge, and Behaviors in the Privacy Paradox',
    authors: ['Chaoran Chen', 'Weijun Li', 'Wenxin Song', 'Yaxing Yao', 'Yanfang Ye', 'Toby Jia-jun Li'],
    venue: 'In the Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI 2024)',
    image: 'empathy_privacy.png',
    paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3613904.3642363',
  },
  {
    title: 'Symbolic Prompt Tuning Completes the App Promotion Graph',
    authors: ['Zhongyu Ouyang', 'Chunhui Zhang', 'Shifu Hou', 'Shang Ma', 'Chaoran Chen', 'Chunhui Zhang', 'Toby Li', 'Xusheng Xiao', 'Chuxu Zhang', 'Yanfang Ye'],
    venue: 'Joint European Conference on Machine Learning and Knowledge Discovery in Databases (ECML PKDD 2024)',
    image: 'pkdd.png',
    paperLink: 'https://zyouyang.github.io/assets/publications/PromptPromotion.pdf',
  },
  {
    title: 'ARDW: An Augmented Reality Workbench for Printed Circuit Board Debugging',
    authors: ['Ishan Chatterjee', 'Tadeusz Pforte', 'Aspen Tng', 'Farshid Salemi Parizi', 'Chaoran Chen', 'Shwetak Patel'],
    venue: 'In the Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology (UIST 2022)',
    image: 'ardw.png',
    paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3526113.3545684',
    videoLink: 'https://www.youtube.com/watch?v=WtxfCVtfkRE'
  },
  {
    title: 'Patterns for representing knowledge graphs to communicate situational knowledge of service robots',
    authors: ['Shengchen Zhang', 'Zixuan Wang', 'Chaoran Chen', 'Yi Dai', 'Lyumanshan Ye', 'Xiaohua Sun'],
    venue: 'In the Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI 2021)',
    image: 'service_robot.png',
    paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3411764.3445767',
    videoLink: 'https://www.youtube.com/watch?v=0iErmMi7Q5M'
  },
  {
    title: 'AI-Sketcher: A Deep Generative Model for Producing High-Quality Sketches',
    authors: ['Nan Cao', 'Xin Yan', 'Yang Shi', 'Chaoran Chen'],
    venue: 'The thirty-third AAAI conference on artificial intelligence (AAAI 2019)',
    image: 'ai_sketcher.png',
    paperLink: 'https://idvxlab.com/papers/2019AAAI_Sketcher_Cao.pdf'
  },
  // Add more publications as needed
];


export default async function Page() {
  return (
    <div className='pointer-events-auto'>
      <div className="flex flex-col items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6 pointer-events-auto">

       <div className="relative flex-row pointer-events-auto">
          <Blob />
          <div className="absolute top-10 flex items-center justify-center w-full">
            <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src={profile_photo}
                alt="My profile photo"
                width={256}
                height={256}
                quality={100}
                priority={true}
                placeholder="blur"
              />
            </div>
          </div>

          <br/>

          <div className="flex flex-row items-center justify-center space-x-6 pointer-events-auto">
              <span>
                <a
                  href="mailto:cchen25@nd.edu"
                  aria-label="Email cchen25@nd.edu"
                  title="Email"
                  className="focus:text-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/CRChenND"
                  aria-label="Visit GitHub profile"
                  title="Visit GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/CharlieCRChen"
                  aria-label="Visit Twitter profile"
                  title="Visit Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <Twitter24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://scholar.google.com/citations?user=-SO-GtcAAAAJ&hl=en&oi=ao"
                  aria-label="Visit Google Scholar profile"
                  title="Visit Google Scholar profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GoogleScholar24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
            </div>

        </div>

        <div className="flex flex-col px-8 py-5 -my-5 transition-colors ease-in-out -mx-7 group sm:flex-row sm:justify-between sm:items-end focus:bg-back-secondary focus:text-accent">
          <div>
            <h1 className="text-4xl font-semibold">
              <br/>
              Hi, I'm Chaoran Chen
            </h1>
            <br/>
            <h4 className="font-medium text-fore-subtle">
              I’m a fourth-year PhD student in the Department of <a href='https://cse.nd.edu/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Computer Science and Engineering</a> at the <a href="https://www.nd.edu/" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">University of Notre Dame</a>. 
              I am co-advised by <a href='https://toby.li/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Dr. Toby Jia-Jun Li</a> and <a href='http://yes-lab.org/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Dr. Fanny Yanfang Ye</a>. 
              Before joining ND, I received my M.S. degrees in Educational Technology and 
              Applied Learning Science from Carnegie Mellon University. 
              I received my Bachelor's degree in Industrial Design from Tongji University.
              <br/><br/>
              My research lies at the intersection of <strong>Human-Computer Interaction, Cybersecurity, Usable Privacy, and Large Language Models (LLMs)</strong>. I use human-centered design methods to investigate the dual relationship between LLMs and privacy: how LLMs can help users better understand and manage their privacy (LLM for Privacy), and how privacy concerns should shape the design of LLMs themselves (Privacy for LLM). From building empathy-based sandbox environments that enable experiential privacy learning to developing contextual privacy risk assessments and real-time intervention tools, my work aims to transform LLMs from potential privacy threats into active privacy-enhancing agents. I also explore how emerging AI technologies, including generative models, can be responsibly designed to meet diverse human needs while safeguarding autonomy, transparency, and data security.
            </h4>
          </div>
        </div>
      </div>

      <NewsSection />

      <div className="flex items-center mt-16 mb-8 space-x-3">
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent text-teal-600">
          PUBLICATION
        </span>
      </div>
      
      <PublicationList publications={publicationsData} />

      <br/><br/><br/><br/>
      
    </div>
  )
}
