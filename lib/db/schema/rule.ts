import { pgTable, serial, text, boolean, timestamp, pgEnum, numeric } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { bankAccount } from './bankAccount'
import { typeDescription } from './typeDescription'
import { rule_ruleTag } from './rule_ruleTag'

export const ruleTypeEnum = pgEnum('RuleType', ['default', 'exception', 'temporary'])

export const rule = pgTable('Rule', {
  id: serial('id').primaryKey(),
  rule_type: ruleTypeEnum('rule_type').default('default').notNull(),
  active: boolean('active').default(true).notNull(),
  notification_to: text('notification_to'),
  last_used: timestamp('last_used', { mode: 'date' }),
  created_at: timestamp('created_at', { mode: 'date' }).defaultNow(),

  // Normaliserede felter
  description: text('description'),
  amount: numeric('amount'),
  account: text('account'),
  other_field: text('other_field'),

  related_account_name: text('related_account_name'),
  type_description_name: text('type_description_name')
})

export const ruleRelations = relations(rule, ({ one, many }) => ({
  related_account: one(bankAccount, {
    fields: [rule.related_account_name],
    references: [bankAccount.name]
  }),
  type_description: one(typeDescription, {
    fields: [rule.type_description_name],
    references: [typeDescription.name]
  }),
  tags: many(rule_ruleTag)
}))
