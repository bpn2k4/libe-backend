import fs from 'fs'
import { resolve } from 'path'
import { Logger } from '../helpers/index.js'
let privateKey, publicKey
try {
  privateKey = fs.readFileSync(resolve('./src/certs/private_key.crt'))
  publicKey = fs.readFileSync(resolve('./src/certs/public_key.crt'))
} catch (error) {

}

export { privateKey, publicKey }


