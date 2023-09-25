import { Metadata } from 'next'
import { Fragment } from 'react'
import { getProjects } from '../../lib/notion'
import PublicationList from '../../components/publicationList';


const publicationsData = [
  {
    title: 'An Empathy-Based Sandbox Approach to Bridge Attitudes, Goals, Knowledge, and Behaviors in the Privacy Paradox',
    authors: ['Chaoran Chen', 'Weijun Li', 'Wenxin Song', 'Yaxing Yao', 'Yanfang Ye', 'Toby Jia-jun Li'],
    venue: 'Submitted to CHI conference on Human Factors in Computing Systems (CHI 2024)',
    image: 'empathy_privacy.png',
    paperLink: '',
    videoLink: 'https://www.youtube.com/watch?v=GDO5anAjTG8&feature=youtu.be'
  },
  {
    title: 'Prompt Learning Unlocked for App Promotion',
    authors: ['Zhongyu Ouyang', 'Shifu Hou', 'Shang Ma', 'Chaoran Chen', 'Chunhui Zhang', 'Toby Li', 'Xusheng Xiao', 'Chuxu Zhang', 'Yanfang Ye'],
    venue: 'International Workshop on Resource-Efficient Learning for Knowledge Discovery (RelKD 2023)',
    image: 'prompt_ad_promotion.png',
    paperLink: '',
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
    title: 'Measuring street enclosure and its influence to human physiology through wearable sensors',
    authors: ['Ercument Gorgul', 'Chaoran Chen', 'Katrina Karyee Wu', 'Yifan Guo'],
    venue: 'In the Adjunct Proceedings of the 2019 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2019 ACM International Symposium on Wearable Computers (Ubicomp/ISWC 2019)',
    image: 'street_enclosure.png',
    paperLink: 'https://dl.acm.org/doi/abs/10.1145/3341162.3343794'
  },
  {
    title: 'Mapping human response to street experience: a study on comparing walking with cycling on streets through wearable sensors',
    authors: ['Ercument Gorgul', 'Liuyi Zhang', 'Franziska Günther', 'Chaoran Chen'],
    venue: 'In the Adjunct Proceedings of the 2019 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2019 ACM International Symposium on Wearable Computers (Ubicomp/ISWC 2019)',
    image: 'heartrate_gsr_gps.png',
    paperLink: 'https://dl.acm.org/doi/abs/10.1145/3341162.3343793'
  },
  {
    title: 'A Visualization Based Analysis to Assist Rebalancing Issues Related to Last Mile Problem for Bike Sharing Programs in China: A Big-Data Case Study on Mobike',
    authors: ['Ercument Gorgul', 'Chaoran Chen'],
    venue: 'The 1st International Conference on Computational Design and Robotic Fabrication (CDRF 2019)',
    image: 'mobike_viz.png',
    paperLink: 'https://link.springer.com/chapter/10.1007/978-981-13-8153-9_13'
  },
  {
    title: 'AI-Sketcher: A Deep Generative Model for Producing High-Quality Sketches',
    authors: ['Nan Cao', 'Xin Yan', 'Yang Shi', 'Chaoran Chen'],
    venue: 'The thirty-third AAAI conference on artificial intelligence (AAAI 2019)',
    image: 'ai_sketcher.png',
    paperLink: 'https://idvxlab.com/papers/2019AAAI_Sketcher_Cao.pdf'
  },
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