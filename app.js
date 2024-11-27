// Initialize server
const express = require('express')
const app = express()

// ???
const path = require('path')

// Set up app to get URL encoded data from our form
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Import routers
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')

// Set up route handlers
app.use('/', indexRouter)
app.use('/new', newRouter)

// Set up server to listen at a port
const PORT = 3000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})