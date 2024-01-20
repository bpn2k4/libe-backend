import jwt from 'jsonwebtoken'
import {
  publicKey,
  privateKey,
  ACCESS_TOKEN_DURATION,
  REFRESH_TOKEN_DURATION
} from '../configs/index.js'

/**@type {import('.').JWTService} */
export const JWTService = {

  generateAccessToken: (payload) => {
    return jwt.sign(payload, privateKey, { expiresIn: ACCESS_TOKEN_DURATION, algorithm: 'rs256' })
  },

  generateRefreshToken: (payload) => {
    return jwt.sign(payload, privateKey, { expiresIn: REFRESH_TOKEN_DURATION, algorithm: 'rs256' })
  },

  verifyToken: (token) => {
    try {
      const data = jwt.verify(token, publicKey, { algorithms: 'rs256' })
      return { data }
    } catch (error) {
      return { error }
    }
  }
}

export { JWTService }