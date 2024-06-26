import { getProjects } from '../lib/notion'
import { Project } from '../types/project'
import { Props } from 'next/script'

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="py-5">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex justify-between px-8 py-5 -my-5 transition-colors ease-in-out -mx-7 sm:items-end hover:bg-back-secondary group-focus:bg-back-secondary">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-accent">
              {project.title}
            </h3>
            <h4 className="font-medium text-fore-subtle">
              {project.description}
            </h4>
          </div>
          <span className="text-sm sm:text-base text-accent sm:text-fore-subtle">
            {project.year}
          </span>
        </div>
      </a>
    </li>
  )
}

export async function ProjectList({ bOpenSourceOnly }) {
  const projects = (await getProjects()) || []
  return (
    <section>
      <ul className="mt-3 divide-y divide-back-subtle">
        {projects
          .filter(p => !bOpenSourceOnly || p.type === 'Open Source')
          .map(project => {
            return <ProjectCard key={project.title} project={project} />
          })}
      </ul>
    </section>
  )
}

// TODO: This is just a workaround. See https://github.com/vercel/next.js/issues/42292
// interface Props {
//   bOpenSourceOnly: Boolean
// }
export default (ProjectList as unknown) as (props: Props) => JSX.Element
