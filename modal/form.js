const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
},
{timestamps:true});
module.exports = mongoose.model("Books", formSchema)
