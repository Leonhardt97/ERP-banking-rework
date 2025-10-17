import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { rule } from './rule'

export const typeDescription = pgTable('TypeDescription', {
  name: text('name').primaryKey(),
  created_at: timestamp('created_at', { mode: 'date' }).defaultNow().notNull()
})

export const typeDescriptionRelations = relations(typeDescription, ({ many }) => ({
  rules: many(rule)
}))
