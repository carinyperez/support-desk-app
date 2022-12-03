const express = require('express'); 
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/userController')


router.post('/', registerUser)
// router.post('/', (req, res) => {
// 	res.send('Register Route')
// })

router.post('/login', loginUser)
// router.post('/login', (req, res) => {
// 	res.send('Login route')
// })
module.exports = router; 