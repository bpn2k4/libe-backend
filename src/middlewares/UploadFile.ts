import { Request } from 'express'
import multer from 'multer'
import path from 'path'

import { FileFilterError } from '@errors'
import Utils from '@utils'

const storage = multer.diskStorage({
  destination(req, file, callback) {
    return callback(null, './uploads')
  },
  filename(req, file, callback) {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    const extension = file.originalname.split('.').at(-1)
    const name = file.originalname.split('.').slice(0, -1).join('.')
    const fileName = Utils.Helper.randomUUIDV4() + '-' + Utils.Helper.slugify(name) + '.' + extension
    return callback(null, fileName)
  },

})

const imageFilter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
  const allowExtension = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
  const fileExtension = path.extname(file.originalname).slice(1) // .txt -> txt
  if (!allowExtension.includes(fileExtension)) {
    return callback(new FileFilterError(''))
  }
  return callback(null, true)
}

const videoFilter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
  const allowExtension = ['mp4', 'avi', 'mov']
  const fileExtension = path.extname(file.originalname).slice(1)
  if (!allowExtension.includes(fileExtension)) {
    return callback(new FileFilterError(''))
  }
  return callback(null, true)
}

const MulterImage = multer({
  storage: storage,
  fileFilter: imageFilter
})
const MulterVideo = multer({
  storage: storage,
  fileFilter: videoFilter
})
const Multer = multer({
  storage: storage
})

const UploadFile = {
  image: () => ({
    single: (fieldName: string) => MulterImage.single(fieldName),
    multiple: (fieldName: string) => MulterImage.array(fieldName),
    any: () => MulterImage.any()
  }),
  video: () => ({
    single: (fieldName: string) => MulterVideo.single(fieldName),
    multiple: (fieldName: string) => MulterVideo.array(fieldName),
    any: () => MulterVideo.any()
  }),
  all: () => ({
    single: (fieldName: string) => Multer.single(fieldName),
    multiple: (fieldName: string) => Multer.array(fieldName),
    any: () => Multer.any()
  })
}

export default UploadFile