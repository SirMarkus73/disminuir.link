'use server'

import { cookies } from 'next/headers'

export async function saveLastLink(userLink: string) {
  const nextCookies = cookies()

  nextCookies.set('lastLink', userLink)
}
