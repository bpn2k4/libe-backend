import crypto from 'crypto'


/**@type {import("../types").Helper} */
export const Helper = {

  randomUUID: (length = 32) => {
    if (length != 32 || length != 64) throw new Error('length must be 32 or 64')
    if (length == 32) return crypto.randomUUID().replace(/-/g, '')
    else return `${crypto.randomUUID()}${crypto.randomUUID()}`.replace(/-/g, '')
  },

  wait: ms => new Promise(e => setTimeout(e, ms))

}