'use server'

import { generateLink } from '@/dataAcces/generateLink'
import getHostname from '@/lib/getHostname'
import { cookies } from 'next/headers'
import { z } from 'zod'

interface FormError {
  path: string
  message: string
}

export async function handleForm(formData: FormData) {
  const url = formData.get('url')
  const date = formData.get('date')
  const hostname = await getHostname()
  const nextCookies = cookies()

  const formSchema = z.object({
    url: z.string().url('Introduce una url válida'),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Introduce una fecha válida'),
  })

  const parsedData = await formSchema.safeParseAsync({ url, date })

  if (parsedData.error) {
    return
  }

  const generatedLink = await generateLink({
    origin: hostname,
    userLink: parsedData.data.url,
    duration: parsedData.data.date,
  })

  nextCookies.set('lastLink', generatedLink.toString())
}
