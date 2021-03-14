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



// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;