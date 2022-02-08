const express = require("express");
const { getTestimonial, createTestimonial, editTestimonial, deleteTestimonial } = require("../controllers/testimonialController");
const router = express.Router();


router.route('/getTestimonial').get(getTestimonial);
router.route('/newTestimonial').post(createTestimonial);
router.route('/update::id').put(editTestimonial);
router.route('/delete/:id').delete(deleteTestimonial);

module.exports = router;