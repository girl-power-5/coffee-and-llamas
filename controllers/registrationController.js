const db = require('../models');

module.exports = {
  finishRegistration: function(req, res) {
    const safetySquadData = {
      member_first_name: req.body.safetySquad,
      member_phone_number: req.body.safetyNumber
    }
    console.log('BACKEND REG REQ', req.body)
    db.User
    .findOneAndUpdate({_id: req.body.id}, 
      {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        phone_number: req.body.phoneNumber,
        $push: {safe_circle_contacts: safetySquadData}
      })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err))
  }
}