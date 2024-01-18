import fs from 'fs'
import { resolve } from 'path'
import { Logger } from '../helpers/index.js'
let privateKey, publicKey
try {
  privateKey = fs.readFileSync(resolve('./key/key.crt'))
  publicKey = fs.readFileSync(resolve('./key/pub.pem'))
} catch (error) {

}

export { privateKey, publicKey }


