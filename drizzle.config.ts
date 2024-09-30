import { env } from '@/lib/env'
import 'dotenv/config'
import type { Config } from 'drizzle-kit'

export default {
  schema: 'src/db/schema.ts',
  out: 'src/db/migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
} satisfies Config
