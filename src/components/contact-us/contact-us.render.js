const express = require('express')
const router = express.Router()
const config = require(`../../config`)
const { mainData } = require('../index/index.service')

router.get('/', function (req, res, next) {
	const { NODE_ENV, app } = config
	//return res.status(200).json({ NODE_ENV, app })
	res.render('contact-us/views/contact-us', { title: config.app.name, mainData: mainData() })
})

module.exports = router
