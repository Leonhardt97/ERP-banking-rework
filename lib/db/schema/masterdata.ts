import { pgTable, serial, text, boolean } from 'drizzle-orm/pg-core'

export const masterData = pgTable('MasterData', {
  id: serial('id').primaryKey(),
  access_token: text('access_token'),
  refresh_token: text('refresh_token'),
  admin_name: text('admin_name'),
  admin_email: text('admin_email'),
  admin_id: text('admin_id'),
  erp: text('erp').notNull(),
  ftp_bool: boolean('ftp_bool').notNull().default(false),
  auth_status: text('auth_status')
})
