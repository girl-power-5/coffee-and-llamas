const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alertSchema = require ('./AlertHistory');

const eventSchema = new Schema ({
	event_Date: {
		type: String, 
		unique: false, 
		required: false 
	},
	event_Time: {
		type: String, 
		unique: false, 
		required: false 
	},
	event_DateTime: {
		type: Object, 
		unique: false, 
		required: false 
	},
	event_Location: {
		type: String, 
		unique: false, 
		required: false 
	},
    person_Name: {
		type: String, 
		unique: false, 
		required: false 
	},
    social_Media: {
		type: String, 
		unique: false, 
		required: false 
	},
	alert_history: [alertSchema]
})

module.exports = eventSchema;