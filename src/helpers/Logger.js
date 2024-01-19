
const LOGGER_TYPES = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  DEBUG: 'DEBUG'
}
const LOGGER_COLORS = {
  INFO: '\x1b[32m',
  WARN: '\x1b[33m',
  ERROR: '\x1b[31m',
  DEBUG: '\x1b[34m',
  reset: '\x1b[0m'
}

const log = (type = LOGGER_TYPES.INFO, ...message) => {
  const date = new Date()
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const time = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
  const output = `${time} [${LOGGER_COLORS[type]}${type}${LOGGER_COLORS.reset}]`
  return console.log(output, ...message)
}

export const Logger = {
  log: log,
  info: (...message) => log(LOGGER_TYPES.INFO, ...message),
  warn: (...message) => log(LOGGER_TYPES.WARN, ...message),
  error: (...message) => log(LOGGER_TYPES.ERROR, ...message),
  debug: (...message) => log(LOGGER_TYPES.DEBUG, ...message),
  ...LOGGER_TYPES
}