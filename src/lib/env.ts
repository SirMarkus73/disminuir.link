import { z } from 'zod'

const envSchema = z.object({
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
  CRON_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
