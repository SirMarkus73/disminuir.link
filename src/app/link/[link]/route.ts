import { db } from '@/db/client'
import { links } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { link: string } },
) {
  const [link] = await db
    .select({ redirectTo: links.redirectTo })
    .from(links)
    .where(eq(links.link, params.link))

  if (link) {
    return redirect(link.redirectTo)
  }

  return new Response('Not found', { status: 404 })
}
