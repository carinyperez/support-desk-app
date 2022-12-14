const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel'); 


const protectedRoute = asyncHandler(async (req, res, next) => {
	// check for token in headers 
	let token;

	if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			// get token from header
			token = req.headers.authorization.split(' ')[1]
			// verify token 
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			// Get user from token 
			req.user = await User.findById(decoded.id).select('-password');
			// next calls next piece of middleware 
			next()
		} catch (error) {
			console.log(error)
			res.status(401)
			throw new Error('Not authorized')
		}
	}
	 if(!token) {
		res.status(401)
		throw new Error('Not authorized')
	 }
})


module.exports = {
	protectedRoute
}