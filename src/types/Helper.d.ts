
export type Helper = {
  /** Random a uuid v4 sting with length 32 or 64 */
  randomUUID: (length: Number) => String,

  /** Force IO stop ms millisecond */
  wait: (ms: Number) => Promise<void>,

  /** 
   * Convert a string to slug
   * @example
   * >> convertStringToSlug("Chào mừng bạn đến Việt Nam!")
   * >> "chao-mung-ban-den-viet-nam"
   * */
  convertStringToSlug: (str: String) => String
}