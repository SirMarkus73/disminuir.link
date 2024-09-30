import parseLink from '@/lib/parseLink'
import { Link, Skeleton, Snippet } from '@nextui-org/react'
import { cookies } from 'next/headers'

export function LastLinkGeneratedSkeleton() {
  return <Skeleton className="h-12" as={Snippet} hideCopyButton />
}

export default async function lastLinkGenerated() {
  const linkFromCookies = cookies().get('lastLink')?.value
  const lastLink = linkFromCookies ? parseLink(linkFromCookies) : null

  return lastLink ? (
    <Snippet variant="shadow" color="primary" size="md" className="h-12">
      <Link href={lastLink.path} color="foreground" target="_blank">
        {lastLink.shortedLink}
      </Link>
    </Snippet>
  ) : (
    <Snippet
      variant="shadow"
      color="warning"
      size="md"
      hideCopyButton
      className="h-12"
    >
      <Link color="foreground" as="span">
        Todavía no has acortado ningún enlace, ¿a que esperas?
      </Link>
    </Snippet>
  )
}
