const express = require('express')
const router = express.Router()
const config = require(`../../config`)
const { mainData } = require('../index/index.service')

router.get('/', function (req, res, next) {
	res.render('events/views/events', { title: config.app.name, mainData: mainData() })
})

module.exports = router
