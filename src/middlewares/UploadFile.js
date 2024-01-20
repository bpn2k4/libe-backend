import multer from 'multer'
import { Helper } from '../helpers/index.js'

const getFileType = (mimetype) => {
  if (mimetype.startsWith('image')) return 'images'
  if (mimetype.startsWith('video')) return 'videos'
  return 'others'
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const fileType = getFileType(file.mimetype)
    file.fileType = fileType
    callback(null, `uploads/${fileType}`)
  },
  filename: (req, file, callback) => {
    const fileName = Helper.randomUUID(64) + '_' + file.originalname
    return callback(null, fileName)
  }
})

const uploadFile = multer({
  storage: storage
})

export { uploadFile }