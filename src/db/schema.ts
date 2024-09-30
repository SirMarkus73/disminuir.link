import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const links = sqliteTable('links', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  link: text('url'),
  redirectTo: text('redirectTo').notNull(),
  expirationDate: text('date').notNull(),
})
