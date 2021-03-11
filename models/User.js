const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;
const userSchema = new Schema({
  username: {
		type: String, 
		unique: false, 
		required: false 
	},
	password: {
		type: String, 
		unique: false, 
		required: false 
	},
  //   safe_circle_info: [{
  //   relationship: { type: String },
  //   conact_number: { type: String }
  // }],
  //   medical: {
  //   allergies: { type: Array },
  //   blood_type: { type: String }, 
  //   medications: {type: Array}, 
  //   provider: {type: String}, 
  //   insurance_card: {type: String}
  // },
  // person: {
  //   firstName: { type: String },
  //   lastName: { type: String }, 
  //   email: {type: String, required: true}, 
  //   phone_number: {type: String, required: true},
  //   password: {type: String, required: true}
  // }
});
userSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======');
		next();
	} else {
		console.log('models/user.js hashPassword in pre save');
		this.password = this.hashPassword(this.password)
		next();
	}
})
const userData = mongoose.model("userData", userSchema);
module.exports = userData;