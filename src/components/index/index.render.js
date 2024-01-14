const express = require('express')
const router = express.Router()
const config = require(`../../config`)
const { listCarouselImages } = require('../carousel/carousel.service')
const { listTestimonialImages } = require('../testimonial/testimonial.service')
const { mainData } = require('./index.service')

router.get('/', function (req, res, next) {
	res.render('index/views/index', { title: config.app.name, carouselImages: listCarouselImages, testimonialImages: listTestimonialImages, mainData: mainData() })
})

router.get('/home', function (req, res, next) {
	res.render('index/views/index', { title: config.app.name, carouselImages: listCarouselImages, testimonialImages: listTestimonialImages, mainData: mainData() })
})

module.exports = router
