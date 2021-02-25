const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
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

module.exports = mongoose.model('User', UserSchema)