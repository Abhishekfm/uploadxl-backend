const {uplaodXl} = require("../controllers/upload")

const express = require("express")

const router = express.Router()


// -----------MULTER----------------
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// ---------------------------------------------

router.post("/uploadxl",upload.single('xlFile'),uplaodXl);

module.exports = router