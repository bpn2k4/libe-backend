

export type Helper = {
  /** Random a uuid v4 sting with length 32 or 64 */
  randomUUID: (length: Number) => String,

  /** Force IO stop ms millisecond */
  wait: (ms: Number) => Promise<void>
}