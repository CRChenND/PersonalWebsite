import Image from 'next/image'
import React from 'react'
import { Blob } from '../components/atoms'
import { Blog24, Project24 } from '../components/icons'
import profile_photo from '../public/images/profile_photo.png'
import { GitHub24, MailAt24, Twitter24, GoogleScholar24 } from '../components/icons'
import PublicationList from '../components/publicationList';

const publicationsData = [
  {
    title: 'Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph',
    authors: ['Shang M', 'Chaoran Chen', 'Shao Yang', 'Shifu Hou', 'Toby Jia-Jun Li', 'Xusheng Xiao', 'Tao Xie', 'Yanfang Ye'],
    venue: 'Network and Distributed System Security Symposium ((NDSS 2025)',
    image: 'ndss25.png',
    paperLink: 'https://arxiv.org/pdf/2410.07588',
  },
  {
    title: 'Symbolic Prompt Tuning Completes the App Promotion Graph',
    authors: ['Zhongyu Ouyang', 'Chunhui Zhang', 'Shifu Hou', 'Shang Ma', 'Chaoran Chen', 'Chunhui Zhang', 'Toby Li', 'Xusheng Xiao', 'Chuxu Zhang', 'Yanfang Ye'],
    venue: 'Joint European Conference on Machine Learning and Knowledge Discovery in Databases (ECML PKDD 2024)',
    image: 'prompt_ad_promotion.png',
    paperLink: 'https://zyouyang.github.io/assets/publications/PromptPromotion.pdf',
  },
  {
    title: 'An Empathy-Based Sandbox Approach to Bridge Attitudes, Goals, Knowledge, and Behaviors in the Privacy Paradox',
    authors: ['Chaoran Chen', 'Weijun Li', 'Wenxin Song', 'Yaxing Yao', 'Yanfang Ye', 'Toby Jia-jun Li'],
    venue: 'In the Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI 2024)',
    image: 'empathy_privacy.png',
    paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3613904.3642363',
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
    venue: 'The Adjunct Proceedings of the 2019 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2019 ACM International Symposium on Wearable Computers (Ubicomp/ISWC 2019)',
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
              I’m a second-year PhD student in the Department of <a href='https://cse.nd.edu/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Computer Science and Engineering</a> at the <a href="https://www.nd.edu/" className="font-medium text-teal-600 dark:text-teal-600 hover:underline">University of Notre Dame</a>. 
              I am co-advised by <a href='https://toby.li/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Dr. Toby Jia-Jun Li</a> and <a href='https://yes-lab.org/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Dr. Fanny Yanfang Ye</a>. 
              Before joining ND, I received my M.S degrees in Educational Technology and 
              Applied Learning Science from Carnegie Mellon University. 
              I received B.Eng in Industrial Design from Tongji University.
              <br/><br/>
              My work falls in the intersection of <strong>Human-Computer Interaction, Cybersecurity, Graph Learning, and Usable Privacy</strong>, 
              where I use human-centered methods to design, 
              build, and evaluate human-AI collaborative systems to strengthen the 
              trustworthiness and explainability, ranging from mobile ads promotion to 
              privacy paradox. Besides, I’m also passionate about leveraging the 
              state-of-the-art AI techniques (e.g. generative models) to benefit a variety of human needs 
              and optimizing user experience accordingly.
            </h4>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-24 mb-8 space-x-3">
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent text-teal-600">
          NEWS
        </span>
      </div>

      <ul className='flex-col space-y-4'>
        <li>
          <strong>10/2024</strong>
          <br/>
          - 🇩🇪 Visited Max Planck Institute for Security and Privacy in Bochum, Germany and conducted a 3-month research internship advised by <a href='https://mhaidli.github.io/' className="font-medium text-teal-600 dark:text-teal-600 hover:underline">Abraham Mhaidli</a>.
        </li>
        <li>
          <strong>05/2024</strong>
          <br/>
          - 📃 Attended CHI 2024 in Hawaii and presented our paper: "An Empathy-Based Sandbox Approach to Bridge the Privacy Gap among Attitudes, Goals, Knowledge, and Behaviors".
        </li>
        <li>
          <strong>05/2023</strong>
          <br/>
          - 🏫 Participanted in the Post-CHI Summer School on Usable Privacy and Security at Technical University of Munich.
        </li>
        <li>
          <strong>04/2023</strong>
          <br/>
          - 📃 Attended CHI 2023 in Hamburg and presented our work about empathy privacy in one of the CHI workshops:
          "Privacy Interventions and Education (PIE): Encouraging Privacy Protective Behavioral Change Online".
        </li>
        <li>
          <strong>10/2022</strong>
          <br/>
          - 🏅 Attended MobileHCI 2022 in Vancuver as a SV and participanted in the Student 
          Design Competition. Our work <a className='text-teal-600' href='https://youtu.be/IR4Ylpa14VQ'>Taptag</a> won the Best Implementation Award!
        </li>
        <li>
          <strong>08/2022</strong>
          <br/>
          - 🎓 Graduate from METALS program at Carnegie Mellon University and moved to Notre Dame to start my Ph.D. study in HCI, Cybersecurity, and Privacy.
        </li>
      </ul>


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
