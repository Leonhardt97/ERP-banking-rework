import { pgTable, serial, integer } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { rule } from './rule'
import { ruleTag } from './ruleTag'

export const rule_ruleTag = pgTable('rule_ruleTag', {
  id: serial('id').primaryKey(),
  rule_id: integer('rule_id').notNull(),
  tag_id: integer('tag_id').notNull()
})

export const ruleRuleTagRelations = relations(rule_ruleTag, ({ one }) => ({
  rule: one(rule, { fields: [rule_ruleTag.rule_id], references: [rule.id] }),
  tag: one(ruleTag, { fields: [rule_ruleTag.tag_id], references: [ruleTag.id] })
}))
