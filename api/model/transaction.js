const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    course: { type: String, ref: 'course' },
    user: { type: String, ref: 'user' },
    status: {type: String, enum: ['success', 'fail']},
    review: {type: String},
    rating: {type: Number},
    date: {type: String}
})

module.exports = mongoose.model('transaction',transactionSchema)