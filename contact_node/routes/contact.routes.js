const router = require("express").Router();
const contactController = require("controller/contact.controller");

router.get("/", contactController.getContacts);
router.get("/:id", contactController.getContactById);
// router.post('/search', contactController.searchContacts)

router.post("/save", contactController.saveContact);
router.put("/edit/:id", contactController.updateContact);

router.delete("/delete/:id", contactController.deleteContact);

module.exports = router;
