const db = require('../models');

module.exports = {
  finishRegistration: function(req, res) {
    const safetySquadData = {
      member_first_name: req.body.safetySquad,
      member_phone_number: req.body.safetyNumber
    }
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
  addMember: function(req, res) {
    const safetySquadData = {
      member_first_name: req.body.memberName,
      member_phone_number: req.body.memberNumber
    }
    db.User
      .findOneAndUpdate({_id: req.body.id}, 
        {
          $push: {safe_circle_contacts: safetySquadData}
        })
        .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
    }, 
  createNewEvent: function(req, res) {
    const newEventData = {
      event_Date: req.body.eventDate,
      event_Time: req.body.eventTime,
      event_DateTime: req.body.datetime,
      event_Location: req.body.eventLocation, 
      person_Name: req.body.personName, 
      social_Media: req.body.socialMedia,
     }

     db.User
    .findOneAndUpdate({_id: req.body.id}, 
      {
        $push: {events: newEventData}
      })
      .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err))

  },
  getUserData: function(req, res) {
    db.User
    .findById({ _id: req.params.id })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },
  getSquad: function(req, res) {
    db.User
    .findById({ _id: req.params.id })
    .then(dbUser => res.json(dbUser.safe_circle_contacts))
    .catch(err => res.status(422).json(err));
  },
  getEvents: function(req, res) {
    db.User
    .findById({ _id: req.params.id })
    .then(dbUser => res.json(dbUser.events))
    .catch(err => res.status(422).json(err));
  },
  getEventDetails: function(req, res) {
    db.User
    .find({}, {_id: req.params.userId, events: {$elemMatch: {_id: req.params.eventId}}})
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },
  saveAlert: function(req, res) {
    console.log(req.body.alertType)
    const alertData = {
      alert_name: req.body.alertType
    }
    console.log('ALERTDATA', alertData)
    db.AlertHistory
      .findOneAndUpdate({event_id: req.params.eventId},
        {$push: {alert_list: alertData}},
        {upsert: true, new: true, useFindAndModify:false})
        .then(dbAlert => res.json(dbAlert))
      .catch(err => res.status(422).json(err))
    }, 
    getAlertHistory: function(req, res) {
      console.log('EVENTID', req.params.eventId)
      db.AlertHistory
        .find({}, {event_id: req.params.eventId})
        .populate('alert_list')
        .then(dbAlert => res.json(dbAlert))
        .catch(err => res.status(422).json(err))
    }
}