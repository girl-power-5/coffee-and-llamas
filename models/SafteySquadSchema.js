const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const safetySquadSchema = new Schema ({
	member_first_name: {
		type: String, 
		unique: false, 
		required: false 
	},
	member_phone_number: {
		type: String, 
		unique: false, 
		required: false 
	},
	member_relationship: {
		type: String, 
		unique: false, 
		required: false 
	},
})

module.exports = safetySquadSchema;