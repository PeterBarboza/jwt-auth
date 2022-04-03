import * as express from "express";
import "dotenv/config"

import authRouter from "./routes/authRoutes"
import projectsRouter from "./routes/projectsRoutes"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/auth", authRouter)
app.use(ensureAuthenticated, projectsRouter)

export { app, port }
