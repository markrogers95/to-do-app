var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const validationString = {
    type: String,
    require: true,
};

var toDoListSchema = new Schema({
    title: validationString,
    description: validationString,
    dueDate: {
        type: Date,
        required: true,
    },
    critical: {
        type: Number,
        min: 1,
        max: 5,
        default: 3,
    },
 },{
        timestamps: true
 }
);

const toDoItem = mongoose.model('toDoItem', toDoListSchema);

module.exports = toDoItem;
