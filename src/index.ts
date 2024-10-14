import fs from 'fs/promises'

import app from './app'
import { ENVIRONMENT } from '@configs'
import { sql } from '@databases'

const main = async () => {
  console.clear()

  for (const key in ENVIRONMENT) {
    console.log(`Using config ${key} = ${ENVIRONMENT[key as keyof typeof ENVIRONMENT]}`)
  }

  console.log('Creating uploads folder...')
  await fs.mkdir(ENVIRONMENT.UPLOAD_FOLDER, { recursive: true })
  console.log('Create uploads folder successfully!')

  if (ENVIRONMENT) {
    console.log('Creating database folder...')
    await fs.mkdir(ENVIRONMENT.SQLITE_DATA_DIR, { recursive: true })
    console.log('Create database folder successfully!')
  }

  console.log('Connecting to database...')
  await sql.authenticate()
  console.log('Connect to database successfully!')

  app.listen(ENVIRONMENT.PORT, () => {
    console.log(`App is running at http://localhost:${ENVIRONMENT.PORT}`)
  })
}

main()