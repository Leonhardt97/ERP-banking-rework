import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import env from '~/lib/env'

const db = drizzle({
	connection: {
		url: env.DATABASE_URL!
	}
})

export default db
