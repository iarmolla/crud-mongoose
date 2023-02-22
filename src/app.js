import express, { json } from 'express'
import main from './database.js'
import guitarRoutes from './routes/guitars.routes.js'
const app = express()
main()

app.use(json())

app.use(guitarRoutes)

export default app