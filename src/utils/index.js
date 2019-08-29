import cloudinary from 'cloudinary'

const storeUpload = stream => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  })
  return new Promise((resolve, reject) => {
    const buffer = cloudinary.v2.uploader.upload_stream((err, result) => {
      if (err) { reject(err) }
      resolve(result)
    })
    stream.pipe(buffer)
  })
}

module.exports = {
  storeUpload
}
