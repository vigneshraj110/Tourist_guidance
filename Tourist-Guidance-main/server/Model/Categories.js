const mongoose = require('mongoose')
const {Schema}=mongoose

const categorySchema =  new Schema({
    name:String,
    image:String,
})

module.exports = new mongoose.model('Category',categorySchema)