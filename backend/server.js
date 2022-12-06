const express = require('express');
const dotenv = require('dotenv').config()
const userRoutes = require('../backend/routes/userRoutes');
const {errorhandler} = require('./middleware/errorMiddleware');

const PORT  = process.env.PORT || 8000; 
const app = express();

// allows us to send raw json 
app.use(express.json())
// allows us to send url encoded data 
app.use(express.urlencoded({extended: false}))


// get request 
app.get('/', (req, res) => {
	res.status(200).json({message: 'Welcome to the Support Desk API'})
})

// user routes 
app.use('/api/users', userRoutes)
app.use(errorhandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

