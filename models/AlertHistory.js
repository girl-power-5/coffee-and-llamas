const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema ({
	alert_name: {
		type: String, 
		unique: false, 
		required: false 
	}
    
})

module.exports = alertSchema;