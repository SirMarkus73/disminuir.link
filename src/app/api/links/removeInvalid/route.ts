import { db } from '@/db/client'
import { links } from '@/db/schema'
import { env } from '@/lib/env'
import { validateDate } from '@/lib/validateDate'
import { inArray } from 'drizzle-orm'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  if (request.headers.get('Authorization') !== `Bearer ${env.CRON_SECRET}`) {
    console.error('Unauthorized to remove invalid links')
    return new Response('Unauthorized', { status: 401 })
  }

  // Remove invalid links
  const dbLinks = await db
    .select({
      id: links.id,
      expirationDate: links.expirationDate,
    })
    .from(links)

  const invalidLinks = dbLinks
    .map((link) => {
      if (!validateDate(link.expirationDate)) {
        return link.id
      }
      return null
    })
    .filter((link) => link !== null)

  const result = await db
    .delete(links)
    .where(inArray(links.id, invalidLinks))
    .returning({ deletedId: links.id })

  console.info('Enlaces eliminados: ', result)

  return new Response(
    JSON.stringify({ message: `Deleted ${invalidLinks.length} links` }),
    {
      headers: { 'content-type': 'application/json' },
    },
  )
}
