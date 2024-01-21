import jwt from 'jsonwebtoken'
import {
  publicKey,
  privateKey,
  ACCESS_TOKEN_DURATION,
  REFRESH_TOKEN_DURATION
} from '../configs/index.js'
import { ERROR_NAMES, JWT_ERROR } from '../constants/index.js'

/**@type {import('../types').JWTService} */
export const JWTService = {

  generateAccessToken: (payload) => {
    return jwt.sign(payload, privateKey, { expiresIn: ACCESS_TOKEN_DURATION, algorithm: 'RS256' })
  },

  generateRefreshToken: (payload) => {
    return jwt.sign(payload, privateKey, { expiresIn: REFRESH_TOKEN_DURATION, algorithm: 'RS256' })
  },

  verifyToken: (token) => {
    console.log(publicKey);
    try {
      const data = jwt.verify(token, publicKey, { algorithms: 'RS256' })
      return { data }
    } catch (error) {
      const message = error.message == 'jwt expired' ? JWT_ERROR.TOKEN_EXPIRED : JWT_ERROR.INVALID_TOKEN
      const name = ERROR_NAMES.JSON_WEB_TOKEN_ERROR
      return { error: { message, name } }
    }
  }
}