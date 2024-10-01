'use server'

import parseLink from '@/lib/parseLink'
import { cookies } from 'next/headers'

export async function getLastLink() {
  const nextCookies = cookies()
  const linkFromCookies = nextCookies.get('lastLink')?.value

  return linkFromCookies ? parseLink(linkFromCookies) : null
}
