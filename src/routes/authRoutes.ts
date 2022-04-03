import { Router } from "express"

import {
  createUserController,
  authUserController
} from "../controllers/userController"

const router = Router()

router.post("/register", async (req, res) => {
  const { status, data } = await createUserController(req)

  res.status(status).json(data)
})

router.post("/authenticate", async (req, res) => {
  const { status, data } = await authUserController(req)

  res.status(status).json(data)
})

export default router