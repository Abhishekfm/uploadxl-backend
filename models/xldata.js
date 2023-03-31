const mongoose = require("mongoose")

const xlSchema = mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        number:{
            type:String
        },
        dob:{
            type:String
        },
        workExp:{
            type:String
        },
        resumeTitle:{
            type:String
        },
        currentLocation:{
            type:String
        },
        postalAddress:{
            type:String
        },
        currentEmployer:{
            type:String
        },
        currentDesignation:{
            type:String
        }
    }
)

module.exports = mongoose.model("Xl", xlSchema)