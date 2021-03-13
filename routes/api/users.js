const router = require("express").Router();
const registrationController = require("../../controllers/registrationController");

// Matches with "/api/user/newregistration"
router.route("/newregistration")
  .post(registrationController.finishRegistration)

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;