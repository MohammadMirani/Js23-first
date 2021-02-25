const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim : true
    },
    employees: {
        type: Number,
        default: 1
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        required: true,
        type: String,
        enum: ['female', 'male'],
        default:"male"
    },
    active: {
        type: Boolean,
        required:true,
        default :true
    }
});

module.exports = mongoose.model('User', CompanySchema)