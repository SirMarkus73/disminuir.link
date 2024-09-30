import { and, eq } from 'drizzle-orm'
import { db } from '../db/client'
import { links } from '../db/schema'

import Sqids from 'sqids'

const sqids = new Sqids()

interface GenerateLinkArgs {
  origin: string
  userLink: string
  duration: string
}

export async function generateLink({
  origin,
  userLink,
  duration,
}: GenerateLinkArgs): Promise<URL> {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

  const [existingLink] = await db
    .select()
    .from(links)
    .where(
      and(eq(links.redirectTo, userLink), eq(links.expirationDate, duration)),
    )

  if (existingLink) {
    return new URL(`${protocol}://${origin}/link/${existingLink.link}`)
  }

  const [dbQuery] = await db
    .insert(links)
    .values({
      redirectTo: userLink,
      expirationDate: duration,
    })
    .returning({ dbId: links.id })

  const shortLink = sqids.encode([dbQuery.dbId])

  await db
    .update(links)
    .set({ link: shortLink })
    .where(eq(links.id, dbQuery.dbId))

  return new URL(`${protocol}://${origin}/link/${shortLink}`)
}
