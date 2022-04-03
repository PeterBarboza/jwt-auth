import { Router } from "express"

const router = Router()

router.get("/projects", async (req, res) => {
  res.json({ ok: req.headers._id })
})

export default router