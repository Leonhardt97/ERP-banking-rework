import { pgTable, text, timestamp, jsonb } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { bankAccount } from './bankAccount'

export const openPosting = pgTable('OpenPosting', {
  id: text('id').primaryKey(),
  related_account_id: text('related_account_id').notNull(),
  booking_date: timestamp('booking_date', { mode: 'date' }).notNull(),
  data: jsonb('data').notNull() // Du kan evt. også normalisere som med Rule, hvis ønsket
})

export const openPostingRelations = relations(openPosting, ({ one }) => ({
  related_account: one(bankAccount, {
    fields: [openPosting.related_account_id],
    references: [bankAccount.id]
  })
}))
