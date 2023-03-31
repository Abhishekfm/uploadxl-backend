const Xl = require("../models/xldata")


exports.uplaodXl = async (req, res) =>{
    try {
        // console.log(req);
        res.status(201).json({
            success:true,
            file:req.file
        })
        console.log(req.file);
        // removeFile(req.file)
    } catch (error) {
        console.log(error);
        return
    }
}

function removeFile(path){
    const fs = require('fs');
    // receive and manipulate file here

    // delete file
    fs.unlink("uploads", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File has been deleted');
    });

}