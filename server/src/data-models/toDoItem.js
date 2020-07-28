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
    },
    priority: {
        type: Number,
        min: 1,
        max: 5,
    },
 },{
        timestamps: true
 }
);

const toDoItem = mongoose.model('toDoItem', toDoListSchema);

module.exports = toDoItem;
