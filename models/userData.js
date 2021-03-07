const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    safe_circle_info: [{
    relationship: { type: String },
    conact_number: { type: String }
  }],
    medical: {
    allergies: { type: Array },
    blood_type: { type: String }, 
    medications: {type: Array}, 
    provider: {type: String}, 
    insurance_card: {type: String}
  },
  person: {
    firstName: { type: String },
    lastName: { type: String }, 
    email: {type: String, required: true}, 
    phone_number: {type: String, required: true},
    password: {type: String, required: true}
  }
});

const userData = mongoose.model("userData", userDataSchema);

module.exports = userData;