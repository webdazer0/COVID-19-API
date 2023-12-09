import express from 'express'
import cors from 'cors'
import jhuEduRoute from './api/jhu-edu.js'
import kcdcRoute from './api/korea-kcdc.js'

// Initialize
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Settings
const DEFAULT_PORT = 80
app.set("port", DEFAULT_PORT)

// Routes
app.use('/jhu-edu', jhuEduRoute)
app.use('/kcdc', kcdcRoute)

app.get('/', (req, res) => res.send('API Service for tracking the COVID-19!'))

const PORT = app.get("port")
app.listen(PORT, () => console.log(`API Server listening on port ${PORT}!`))
