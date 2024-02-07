const mongoose = require("mongoose");

const musicoSchema = mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, "Please add a name"] 
  },
  url: { 
    type: String, 
    required: true 
  },
  descripcion:{
    type:String,
    required:false
  },
  imagen:{
    type:String,
    required:false
  }
});

module.exports = mongoose.model('Musicos', musicoSchema);
