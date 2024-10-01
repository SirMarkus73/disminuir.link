'use server'

import { generateLink } from '@/dataAcces/generateLink'
import getHostname from '@/lib/getHostname'
import { saveLastLink } from '@/serverActions/saveLastLink'
import { z } from 'zod'

const formSchema = z.object({
  url: z.string().url('Introduce una url válida'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Introduce una fecha válida'),
})

export async function handleForm(formData: FormData) {
  const url = formData.get('url')
  const date = formData.get('date')
  const hostname = await getHostname()

  const parsedData = await formSchema.safeParseAsync({ url, date })

  if (parsedData.error) {
    return
  }

  const generatedLink = await generateLink({
    origin: hostname,
    userLink: parsedData.data.url,
    duration: parsedData.data.date,
  })

  await saveLastLink(generatedLink.toString())
}
