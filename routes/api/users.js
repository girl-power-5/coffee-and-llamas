const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/users/newregistration"
router.route("/newregistration")
  .post(Controller.finishRegistration)

router.route("/newevent")
  .post(Controller.createNewEvent)

router.route("/squad")
  .post(Controller.addMember)

router.route("/alerts/:eventId")
  .post(Controller.saveAlert)

router.route("/:id")
  .get(Controller.getUserData)

router.route("/squad/:id")
  .get(Controller.getSquad)

router.route("/events/:id")
  .get(Controller.getEvents)

router.route("/eventDetails/:userId/:eventId")
  .get(Controller.getEventDetails)

router.route("/eventDetails/:eventId")
  .get(Controller.getAlertHistory)

module.exports = router;