import crypto from 'crypto'

export const slugify = (str: string) => str.toLocaleLowerCase()
  .replace(/đ/g, 'd')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9 -]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')

export const getCurrentTime = () => {
  const date = new Date()
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const milliseconds = String(date.getMilliseconds()).padEnd(3, '0')
  const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`
  return time
}

export const randomUUIDV4 = crypto.randomUUID
