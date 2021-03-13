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
      .then(dbUser => res.json({
        ...dbUser, 
        first_name: req.body.firstName, 
        id: req.body.id
      }))
    .catch(err => res.status(422).json(err))
  }, 
  createNewEvent: function(req, res) {
    console.log('req', req.body)
    const newEventData = {
      event_Date: req.body.eventDate,
      event_Time: req.body.eventTime,
      event_Location: req.body.eventLocation, 
      person_Name: req.body.personName, 
      social_Media: req.body.socialMedia,
     }

     db.User
    .findOneAndUpdate({_id: req.body.id}, 
      {
        $push: {events: newEventData}
      })
      .then(dbUser => res.json({
        dbUser, 
        // first_name: req.body.firstName, 
        // id: req.body.id
      }))
    .catch(err => res.status(422).json(err))

  }
}