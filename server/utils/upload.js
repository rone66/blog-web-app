const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "fileupload",
  allowedFormats: ["jpg", "png", "jpeg"],
  params: {
    // Custom public_id format, if needed
    public_id: (req, file) => `custom_${file.originalname}`,
  },
 
});
//console.log("i'm in upload");
const upload = multer({ storage: storage });
module.exports = upload;