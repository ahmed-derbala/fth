const express = require('express')
const router = express.Router()
const config = require(`../../config`)
const { listTestimonialImages } = require('./testimonial.service')
const { mainData } = require('../index/index.service')

router.get('/', function (req, res, next) {
	res.render('testimonial/views/testimonial', { testimonialImages: listTestimonialImages, mainData: mainData() })
})

module.exports = router
