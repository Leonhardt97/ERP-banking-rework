import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { rule_ruleTag } from './rule_ruleTag'

export const ruleTag = pgTable('RuleTag', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
  color: text('color').notNull()
})

export const ruleTagRelations = relations(ruleTag, ({ many }) => ({
  rules: many(rule_ruleTag)
}))
