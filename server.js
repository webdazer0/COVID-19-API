import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 80

import jhuEdu from './api/jhu-edu.js'
import kcdc from './api/korea-kcdc.js'

app.use('/jhu-edu', jhuEdu)
app.use('/kcdc', kcdc)

app.get('/', (req, res) => res.send('API Service for tracking the COVID-19!'))

app.listen(port, () => console.log(`API Server listening on port ${port}!`))
