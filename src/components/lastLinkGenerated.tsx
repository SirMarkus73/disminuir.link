import { getLastLink } from '@/serverActions/getLastLink'
import { Link, Skeleton, Snippet } from '@nextui-org/react'

export function LastLinkGeneratedSkeleton() {
  return <Snippet as={Skeleton} variant="shadow" />
}

export default async function LastLinkGenerated() {
  const lastLink = await getLastLink()

  return lastLink ? (
    <Snippet variant="shadow" color="primary" size="md" className="min-h-12">
      <Link
        href={lastLink.path}
        color="foreground"
        target="_blank"
        className="text-wrap"
      >
        {lastLink.shortedLink}
      </Link>
    </Snippet>
  ) : (
    <Snippet
      variant="shadow"
      color="secondary"
      size="md"
      hideCopyButton
      className="min-h-12"
    >
      <Link color="foreground" className="text-wrap">
        Todavía no has acortado ningún enlace, ¿a que esperas?
      </Link>
    </Snippet>
  )
}
