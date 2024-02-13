const asyncHandler = require("express-async-handler");
const Musician = require("../models/musicianModel");
const { fileSizeFormatter } = require("../utils/fileUpload")

const createMusician = asyncHandler(async (req, res) => {
  const { name, url, description } = req.body;

  if(!name || !url){
    res.status(400)
    throw new Error("Please fill all required fields");
  }

  let fileData = {}

  if(req.file){
    fileData = {
        fileName:req.file.originalname,
        filePath:req.file.path,
        fileType:req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2),
    }
  }

  const musician = await Musician.create({
    admin: req.admin.id,
    name,
    url,
    description,
    image: fileData
  })

  res.status(201).json(musician);

});

module.exports = {
  createMusician,
};
