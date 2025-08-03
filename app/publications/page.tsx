import { Metadata } from 'next'
import { Fragment } from 'react'
import { getProjects } from '../../lib/notion'
import PublicationList from '../../components/publicationList';


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
  }
];


export const metadata: Metadata = {
  title: 'Publications',
}

export default async function Projects() {
  const projects = (await getProjects()) || []
  return (
    <Fragment>
      <h1 className="mt-3 mb-2 text-2xl font-bold text-accent">Publications</h1>
      <br/>
      <PublicationList publications={publicationsData} />
      <br/><br/><br/><br/>
    </Fragment>
  )
}