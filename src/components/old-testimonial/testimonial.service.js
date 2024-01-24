const fs = require('fs')

/**
 * returns array of filenames
 * @returns
 */
module.exports.listTestimonialImages = () => {
	return fs.readdirSync(`${process.cwd()}/public/img/testimonial/`)
}
