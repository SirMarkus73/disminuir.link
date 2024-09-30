import { headers } from 'next/headers'
import { z } from 'zod'

export default async function getHostname() {
  const headersList = headers()

  return z.string().parse(headersList.get('x-forwarded-host'))
}
