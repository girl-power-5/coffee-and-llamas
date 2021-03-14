const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/user/newregistration"
router.route("/newregistration")
  .post(Controller.finishRegistration)

router.route("/newevent")
  .post(Controller.createNewEvent)

router.route("/:id")
  .get(Controller.getUserData)

router.route("/squad/:id")
  .get(Controller.getSquad)

router.route("/events/:id")
  .get(Controller.getEvents)

module.exports = router;