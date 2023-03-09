// importation mongoose
const mongoose= require("mongoose")
const schema= mongoose.Schema

// instance schema
const ContactSchema= new schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number
    },
    dateCreation: {
        type: Date,
        default: Date.now()
    }

})

module.exports= Contact= mongoose.model("contacts", ContactSchema)