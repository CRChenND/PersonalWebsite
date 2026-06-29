import Image from 'next/image'

interface Publication {
  title: string
  authors: string[]
  venue: string
  image: string
  paperLink: string
  officialLink?: string
  pdfLink?: string
  award?: string
  videoLink?: string
  demoLink?: string
}

interface PublicationListProps {
  publications: Publication[]
}

function getVenueBadge(venue: string) {
  const patterns = [
    'ACM Transactions on AI Security and Privacy',
    'CHI 2026',
    'IUI 2026',
    'UIST 2025',
    'ACL Findings 2025',
    'IUI 2025',
    'NDSS 2025',
    'CHI 2024',
  ]

  return patterns.find(pattern => venue.includes(pattern)) || venue
}

function getOfficialLabel(link: string) {
  if (link.includes('dl.acm.org')) return 'ACM DL'
  if (link.includes('aclanthology.org')) return 'ACL Anthology'
  if (link.includes('ndss-symposium.org')) return 'NDSS'
  if (link.includes('arxiv.org')) return 'arXiv'
  return 'Official'
}

function PublicationList({ publications }: PublicationListProps) {
  return (
    <div className="space-y-5">
      {publications.map((publication, index) => (
        <article
          key={index}
          className="grid grid-cols-[86px_minmax(0,1fr)] gap-3 rounded-md py-3 transition-colors hover:bg-back-secondary/50 sm:grid-cols-[152px_1fr] sm:gap-4 sm:py-2"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-back-secondary sm:aspect-[16/10] sm:w-[152px]">
            <Image
              src={`/images/publication/${publication.image}`}
              alt={`Image for ${publication.title}`}
              fill
              sizes="(max-width: 640px) 86px, 152px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-fore-subtle">
              {getVenueBadge(publication.venue)}
            </div>
            <h2 className="text-sm font-semibold leading-tight text-teal-700 dark:text-teal-400 sm:text-[15px]">
              {(publication.officialLink || publication.paperLink) === '#' ? (
                publication.title
              ) : (
                <a
                  href={publication.officialLink || publication.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {publication.title}
                </a>
              )}
            </h2>
            <p className="mt-1.5 text-xs leading-5 text-fore-subtle sm:text-sm">
              {publication.authors.map((author, authorIndex) => (
                <span
                  key={authorIndex}
                  className={
                    author.includes('Chaoran Chen')
                      ? 'font-semibold text-fore-primary'
                      : ''
                  }
                >
                  {author}
                  {authorIndex < publication.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <p className="mt-1 hidden text-sm leading-5 text-fore-subtle sm:block">
              {publication.venue}
            </p>
            {publication.award ? (
              <p className="mt-1 text-xs font-medium leading-5 text-fore-primary sm:text-sm">
                {publication.award}
              </p>
            ) : null}
            <p className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-5 sm:text-sm">
              {publication.officialLink ? (
                <a
                  className="font-medium text-teal-700 hover:underline dark:text-teal-400"
                  href={publication.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{getOfficialLabel(publication.officialLink)}]
                </a>
              ) : null}
              {publication.pdfLink ? (
                <a
                  className="font-medium text-teal-700 hover:underline dark:text-teal-400"
                  href={publication.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Paper PDF]
                </a>
              ) : null}
              {publication.videoLink ? (
                <a
                  className="font-medium text-teal-700 hover:underline dark:text-teal-400"
                  href={publication.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Talk Video]
                </a>
              ) : null}
              {publication.demoLink ? (
                <a
                  className="font-medium text-teal-700 hover:underline dark:text-teal-400"
                  href={publication.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Demo]
                </a>
              ) : null}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default PublicationList as unknown as (
  props: PublicationListProps
) => JSX.Element
