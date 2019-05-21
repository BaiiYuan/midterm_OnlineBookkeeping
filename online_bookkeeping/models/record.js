const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const RecordSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required.']
	},
	money: {
		type: Number,
		required: [true, 'Money field is required.']
	},
    cat: {
        type: String,
        required: [true, 'Cat field is required.']
    },
    year: {
        type: Number,
        required: [true, 'year field is required.']
    },
    month: {
        type: Number,
        required: [true, 'month field is required.']
    },
    date: {
        type: Number,
        required: [true, 'date field is required.']
    }
})

// Creating a table within database with the defined schema
const Record = mongoose.model('record', RecordSchema)

// Exporting table for querying and mutating
module.exports = Record
