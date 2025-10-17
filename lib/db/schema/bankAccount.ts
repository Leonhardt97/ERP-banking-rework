import { pgTable, text } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { rule } from './rule'
import { openPosting } from './openPosting'

export const bankAccount = pgTable('BankAccount', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
  status_account: text('status_account').notNull()
})

export const bankAccountRelations = relations(bankAccount, ({ many }) => ({
  rules: many(rule),
  open_postings: many(openPosting)
}))
