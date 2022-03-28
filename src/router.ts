import { Router } from "express"

import {
  createUserController,
  authUserController
} from "./controllers/userController"

import { IUserLogin } from "./types/IUser"

const router = Router()

router.post("/register", async (req, res) => {
  const { status, data } = await createUserController(req)

  res.status(status).json(data)
})

router.post("/authenticate", async (req, res) => {
  const { status, data } = await authUserController(req)

  res.status(status).json(data)
})

router.get("/projects", async (req, res) => {
  res.status(200).json({ ok: true })
})



export { router }