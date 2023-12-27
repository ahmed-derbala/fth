const express = require('express')
const router = express.Router()
const config = require(`../../config`)
const { listCarouselImages } = require('../carousel/carousel.service')

router.get('/', function (req, res, next) {
	const { NODE_ENV, app } = config
	res.render('index/views/index', { title: config.app.name, carouselImages: listCarouselImages })
})

router.get('/home', function (req, res, next) {
	const { NODE_ENV, app } = config
	res.render('index/views/index', { title: config.app.name, carouselImages: listCarouselImages })
})

module.exports = router
