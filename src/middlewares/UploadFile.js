import path from 'path'
import multer from 'multer'

import { Helper } from '../helpers/index.js'
import { FileFilterError } from '../errors/index.js'

const getFileType = (mimetype) => {
  if (mimetype.startsWith('image')) return 'images'
  if (mimetype.startsWith('video')) return 'videos'
  return 'others'
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const fileType = getFileType(file.mimetype)
    file.fileType = fileType
    file.extension = path.extname(file.originalname)
    return callback(null, `uploads/${fileType}`)
  },
  filename: (req, file, callback) => {
    const fileName = Helper.randomUUID(32) + '_' + file.originalname
    return callback(null, fileName)
  }
})

const imageFilter = (req, file, callback) => {
  const allowImageExtensions = ['.png', '.jpg', '.jpeg', '.webp']
  const fileExtension = path.extname(file.originalname)
  if (!allowImageExtensions.includes(fileExtension)) {
    return callback(new FileFilterError('Image required', file.fieldname, allowImageExtensions))
  }
  return callback(null, true)
}

const videoFilter = (req, file, callback) => {

}

const uploadFile = {
  image: () => ({
    single: (field) => multer({ storage: storage, fileFilter: imageFilter }).array(field, 1),
    array: (field, number = 10) => multer({ storage: storage, fileFilter: imageFilter }).array(field, number),
    test: () => multer({ storage: storage, fileFilter: imageFilter })
  }),
  video: () => multer({ storage: storage }),
  media: () => multer({ storage: storage }),
  any: () => multer({ storage: storage }),
}

export { uploadFile }