const fs = require('fs')

/**
 * returns array of filenames
 * @returns
 */
module.exports.listCarouselImages = () => {
	return fs.readdirSync(`${process.cwd()}/public/images/carousel/`)
}
