import { Request, Response } from "express"

import { createUserService } from "../services/createUserService"
import { authUserService } from "../services/authUserService"

export async function createUserController(req: Request) {
  const result = await createUserService(req)

  return result
}

export async function authUserController(req: Request) {
  const result = await authUserService(req)

  return result
}