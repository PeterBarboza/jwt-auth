import { Router } from "express"

import {
  createUserController,
  authUserController,
} from "../controllers/userController"

const router = Router()

router.post("/register", async (req, res) => {
  try {
    const { status, data } = await createUserController(req)

    res.status(status).json(data)
  } catch (error) {
    res.status(400).json({ message: "Error on create user" })
  }
})

router.post("/authenticate", async (req, res) => {
  try {
    const { status, data } = await authUserController(req)

    res.status(status).json(data)
  } catch (error) {
    res.status(400).json({ message: "Error on auth user" })
  }
})

export default router
