import crypto from 'crypto'


/**@type {import("../types").Helper} */
export const Helper = {

  randomUUID: (length = 32) => {
    if (length != 32 && length != 64) { throw new Error('length must be 32 or 64') }
    if (length == 32) return crypto.randomUUID().replace(/-/g, '')
    else return `${crypto.randomUUID()}${crypto.randomUUID()}`.replace(/-/g, '')
  },

  wait: ms => new Promise(e => setTimeout(e, ms)),

  convertStringToSlug: (str) => {
    const map = {
      'a': 'áàảãạăắằẳẵặâấầẩẫậ',
      'd': 'đ',
      'e': 'éèẻẽẹêếềểễệ',
      'i': 'íìỉĩị',
      'o': 'óòỏõọôốồổỗộơớờởỡợ',
      'u': 'úùủũụưứừửữự',
      'y': 'ýỳỷỹỵ',
    };
    str = str.toLowerCase(); // Convert to lowercase
    // Replace Vietnamese accented characters
    for (const char in map) {
      const regex = new RegExp(`[${map[char]}]`, 'g');
      str = str.replace(regex, char);
    }
    str = str.replace(/[^a-z0-9\s-]/g, '');    // Remove invalid characters
    str = str.replace(/\s+/g, '-');    // Replace spaces with a single dash
    str = str.replace(/-{2,}/g, '-');    // Replace multiple dashes with a single dash
    str = str.replace(/^-+|-+$/g, '');    // Remove leading and trailing dashes
    return str;
  }

}