const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim:true
    },
    email: {
      type: String,
      require: [true, "Please add an email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid Email",
      ],
    },
    password: {
      type: String,
      require: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
    },
    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default:"https://webdevelopment.alejoforero.com/imgs/avatar.png"
    },
    phone:{
      type:String,
      default:'+57'
    },
    bio:{
      type:String,
      maxLength: [250, "Bio must not be more than 250 characters"],
      default:'bio'
    }
  },
  {
    timestamps: true,
  }
);

adminSchema.pre("save", async function(next){

  if(!this.isModified("password")){
    return next()
  } 

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
})

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
