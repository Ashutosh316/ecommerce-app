const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps:true  // field will create automatically it will create when it created and updated when it updated
})

module.exports = mongoose.model("Category", categorySchema)