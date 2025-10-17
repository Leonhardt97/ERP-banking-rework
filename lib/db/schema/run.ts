import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const run = pgTable('Run', {
  id: text('id').primaryKey(),
  booking_date: timestamp('booking_date', { mode: 'date' }).notNull(),
  status_code: text('status_code').notNull(),
  timestamp: timestamp('timestamp', { mode: 'date' }).defaultNow().notNull()
})
