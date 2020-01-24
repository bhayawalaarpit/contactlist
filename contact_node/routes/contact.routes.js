const express = require('express')
const contactController = require('controller/contact.controller')
const router = express.Router()

router.post('/save', contactController.saveContact)
router.get('/', contactController.getContacts)
router.get('/:id', contactController.getContactById)
router.put('/edit/:id', contactController.updateContact)
router.delete('/delete/:id', contactController.deleteContact)
router.post('/search', contactController.searchContacts)
// router.post('/search', contactController.searchContact)

module.exports = router
