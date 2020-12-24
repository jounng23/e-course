const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: {type:String},
    schedule: {
        dayInWeek : [{type: String, enum: ['monday','tuesday','wednesday'
                                         ,'thursday','friday','saturday','sunday']}],
        shift: [{type: Number, enum: [1,2,3]}],
        startDate: {type: String},
        endDate: {type: String}
    },
    link: {type: String},
    rating: {type: Number},
    description: {type: String},
    category: [{type:String, default:'Im category'}],
    price: {type:Number},
    pictures: [{type:String}],
    teacher: {
        type: String, ref:'user'
    },
    maxStudent: {type: Number},
    quantity: {type: Number},
    isActive: {type: Boolean}
})

module.exports = mongoose.model('course',courseSchema)