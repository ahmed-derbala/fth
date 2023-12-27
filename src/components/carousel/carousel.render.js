const express = require('express')
const router = express.Router()
const config = require(`../../config`)
const { listCarouselImages } = require('./carousel.service')
const { mainData } = require('../index/index.service')

router.get('/', function (req, res, next) {
	res.render('carousel/views/carousel', { carouselImages: listCarouselImages, mainData: mainData() })
})

module.exports = router
