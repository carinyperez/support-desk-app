const express = require('express'); 
const router = express.Router();
const {registerUser, loginUser, getCurrentUser} = require('../controllers/userController')
const {protectedRoute} = require('../middleware/authMiddleware');


router.post('/', registerUser)
// router.post('/', (req, res) => {
// 	res.send('Register Route')
// })

router.post('/login', loginUser)
// router.post('/login', (req, res) => {
// 	res.send('Login route')
// })
router.get('/me', protectedRoute, getCurrentUser)
module.exports = router; 