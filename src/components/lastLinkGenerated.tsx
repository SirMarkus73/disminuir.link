import parseLink from '@/lib/parseLink'
import { Link, Skeleton, Snippet } from '@nextui-org/react'
import { cookies } from 'next/headers'

export default async function lastLinkGenerated() {
  const linkFromCookies = cookies().get('lastLink')?.value
  const lastLink = linkFromCookies ? parseLink(linkFromCookies) : null

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
