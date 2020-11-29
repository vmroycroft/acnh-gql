const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
	name: String,
	category: String,
	location: String,
	sellPrice: Number,
	notes: String
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;
