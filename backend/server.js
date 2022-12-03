const express = require('express');
const dotenv = require('dotenv').config()
const userRoutes = require('../backend/routes/userRoutes');

const PORT  = process.env.PORT || 8000; 
const app = express(); 

// get request 
app.get('/', (req, res) => {
	res.status(200).json({message: 'Welcome to the Support Desk API'})
})

// user routes 
app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

