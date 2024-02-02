import { ERROR_MESSAGES, JWT_MESSAGES, STATUS_CODES } from '../constants/index.js';
import { AuthenticationError } from '../errors/index.js';
import { JWTService } from '../services/index.js';

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1];
    if (!token) {
      throw new AuthenticationError()
    }
    const { data, error } = JWTService.verifyToken(token);
    if (error) {
      throw new AuthenticationError(`Token ${JWT_MESSAGES[error.message]}`, `${ERROR_MESSAGES[error.message]}`, STATUS_CODES.UNAUTHENTICATED)
    }
    req.payload = data;
    next()
  } catch (error) {
    next(error)
  }
}

export { authentication }