const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique: true, require: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('user', userSchema);