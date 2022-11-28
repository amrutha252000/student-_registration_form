const mongoose = require('mongoose'); 

const StudentSchema = mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    email : {
        type : String, 
        required : true
    },
    techid : {
        type : String, 
        required : true
    },
    phno : {
        type : String, 
        required : true
    },
    gender : {
        type : String, 
        required : true
    },
    password :  {
        type : String, 
        required : true
    }
});


const Student = module.exports = mongoose.model('Student', StudentSchema); 