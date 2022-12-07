const errorhandler = (err, req, res,next) => {
	const statusCode = res.statusCode ? res.statusCode : 500; 
	// res.send('error handler')
	res.status(statusCode)
	res.json({
		message: err.message,
		// only show stack in development 
		stack: process.env.NODE_ENV === 'production' ? null : err.stack
	})
}

module.exports = {errorhandler}