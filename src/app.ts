import * as express from "express";
import "dotenv/config"

import { router } from "./router"

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/auth", router)

export { app, port }
