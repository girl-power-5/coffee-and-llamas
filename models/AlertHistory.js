const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema ({
	alert_name: {
		type: String, 
		unique: false, 
		required: false 
	}
});

const alertHistorySchema = new Schema ({
	event_id: {
		type: String, 
		unique: false, 
		required: false 
	},
	alert_list: [alertSchema]
});

const AlertHistory = mongoose.model("AlertHistory", alertHistorySchema);
module.exports = AlertHistory;